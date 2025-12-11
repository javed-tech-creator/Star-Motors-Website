import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  Home,
  Grid,
  FolderOpen,
  Filter,
  Layers,
  Maximize2,
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useGetAllGalleryQuery } from "../api/gallery.api";
import Loader from "../utils/Loader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP
gsap.registerPlugin(ScrollTrigger);

const ProjectPageGallery = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Performance Refs
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const galleryContainerRef = useRef(null);

  // --- API CALL ---
  const { data: galleryData, isLoading, isError } = useGetAllGalleryQuery();

  const dummyData = galleryData?.data || [];
  const data = dummyData;

  // --- 2. OPTIMIZED MOUSE EFFECT (NO JITTER) ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      if (blob1Ref.current) {
        gsap.to(blob1Ref.current, {
          x: clientX * 0.05,
          y: clientY * 0.05,
          duration: 2,
          ease: "power2.out",
        });
      }
      if (blob2Ref.current) {
        gsap.to(blob2Ref.current, {
          x: -clientX * 0.05,
          y: -clientY * 0.05,
          duration: 3,
          ease: "power2.out",
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // --- 3. PAGE ANIMATIONS ---
  useEffect(() => {
    gsap.fromTo(
      ".hero-animate",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  // --- 4. FILTER LOGIC ---
  const categories = useMemo(() => {
    if (!data) return [];
    return [
      { id: "all", name: "All Projects" },
      ...Array.from(new Set(data.map((item) => item.category))).map((cat) => ({
        id: cat,
        name: cat,
      })),
    ];
  }, [data]);

  const filteredProducts = useMemo(() => {
    if (!data) return [];
    return data.filter((product) =>
      selectedCategory === "all" ? true : product.category === selectedCategory
    );
  }, [selectedCategory, data]);

  // Animate Grid on Filter Change
  useEffect(() => {
    if (galleryContainerRef.current) {
      gsap.fromTo(
        ".gallery-item",
        { opacity: 0, scale: 0.9, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
          overwrite: true,
        }
      );
    }
  }, [filteredProducts]);

  // Handle URL Params
  useEffect(() => {
    const category = searchParams.get("category");
    if (category) setSelectedCategory(category);
  }, [searchParams]);

  // --- 5. MODAL LOGIC ---
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const goToPrevious = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredProducts.length - 1 : prev - 1
    );
  };

  const goToNext = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === filteredProducts.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-[#111111] flex flex-col items-center justify-center text-white">
        <div className="text-xl font-bold text-red-500 mb-4">
          Failed to load projects
        </div>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#111111] overflow-hidden text-white selection:bg-orange-500/30">
      {/* --- Optimized Background --- */}
      {/* <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[50px_50px] opacity-30" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div
            ref={blob1Ref}
            className="absolute w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]"
            style={{ top: "-10%", left: "20%" }}
          />
          <div
            ref={blob2Ref}
            className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"
            style={{ bottom: "-10%", right: "10%" }}
          />
        </div>
      </div> */}

      <div className="relative z-10 pt-12 pb-12 lg:pt-12 lg:pb-12">
        <div className="px-6 lg:px-20">
         

          {/* Hero Section */}
          <div className="text-center mb-6">
            <h1 className="hero-animate text-2xl md:text-3xl lg:text-4xl font-black mb-3 leading-tight">
              <span className="text-white">
                 Gallery <span className="text-orange-500"> Images </span>
              </span>
            </h1>
           <div className="h-1 w-32 bg-[#ff6b35] mx-auto"></div>
          </div>
           {/* Breadcrumb */}
          <div className="flex justify-center mb-15">
            <nav className="hero-animate inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-400 hover:border-white/20 transition-all">
              <Link
                to="/"
                className="hover:text-orange-400 flex items-center gap-1 transition-colors"
              >
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
              <ChevronRight className="w-3 h-3 text-gray-600" />
              <span className="text-white font-medium">Gallery</span>
            </nav>
          </div>

          {/* Sticky Filter Bar */}
          {/* <div className="hero-animate sticky top-24 z-30 mb-12">
            <div className="bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl flex justify-center">
              <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide max-w-full px-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border whitespace-nowrap ${
                      selectedCategory === category.id
                        ? "bg-linear-to-r from-orange-500 to-blue-600 text-white border-transparent shadow-[0_0_20px_rgba(34,197,94,0.4)] transform scale-105"
                        : "bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div> */}

          {/* Loading/Error States */}
          {isLoading && (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mx-auto mb-4"></div>
              <p className="text-gray-400">Loading masterpiece...</p>
            </div>
          )}

          {isError && (
            <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10 border-dashed">
              <p className="text-red-400 mb-2">Failed to load projects</p>
              <button
                onClick={() => window.location.reload()}
                className="text-sm text-gray-400 underline hover:text-white"
              >
                Retry
              </button>
            </div>
          )}

          {/* Gallery Grid */}
          {!isLoading && !isError && (
            <div
              ref={galleryContainerRef}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {filteredProducts.map((product, index) => (
                <div
                  key={product._id}
                  className="gallery-item group relative overflow-hidden rounded-2xl bg-gray-900 border border-white/10 cursor-pointer shadow-lg hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-2"
                  onClick={() => openModal(index)}
                >
                  <div className="aspect-4/3 overflow-hidden">
                    <img
                      src={product.image?.public_url}
                      alt={product.category || "Gallery"}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Dark Gradient Overlay (Always there slightly, stronger on hover) */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75 text-white">
                      <Maximize2 size={28} />
                    </div>
                  </div>

                  {/* Content (Bottom) */}
                  {/* <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1 block">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-tight group-hover:text-orange-100 transition-colors">
                      {product.title || "Project Title"}
                    </h3>
                  </div> */}
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {!isLoading && filteredProducts.length === 0 && (
            <div className="text-center py-24 bg-white/2 border border-white/5 rounded-3xl">
              <div className="w-20 h-20 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <FolderOpen className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-400 mb-6">
                Try selecting a different category.
              </p>
              <button
                onClick={() => setSelectedCategory("all")}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all text-white"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Modal (Lightbox) */}
          {isModalOpen && (
            <div className="mt-20 fixed inset-0 z-9999 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-in fade-in duration-300">
              {/* Top Bar Controls */}
              <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
                <div className="text-white/70 text-sm font-medium">
                  {currentImageIndex + 1} / {filteredProducts.length}
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Buttons (Desktop) */}
              <button
                onClick={goToPrevious}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all hover:scale-110 z-50 hidden md:block"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all hover:scale-110 z-50 hidden md:block"
              >
                <ChevronRight size={32} />
              </button>

              {/* Main Image */}
              <div
                className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative max-h-[80vh] w-auto overflow-hidden rounded-lg shadow-2xl border border-white/10">
                  <img
                    src={filteredProducts[currentImageIndex]?.image?.public_url}
                    alt={filteredProducts[currentImageIndex]?.category}
                    className="max-h-[80vh] w-auto object-contain"
                  />
                </div>

                {/* Caption */}
                {/* <div className="mt-6 text-center max-w-lg">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {filteredProducts[currentImageIndex]?.title ||
                      "Project Detail"}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full">
                    <Layers className="w-3 h-3 text-orange-400" />
                    <span className="text-xs font-bold text-orange-400 uppercase">
                      {filteredProducts[currentImageIndex]?.category}
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-move 5s ease infinite; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes gradient-move { 0% { background-position: 0% 50% } 50% { background-position: 100% 50% } 100% { background-position: 0% 50% } }
      `}</style>
    </div>
  );
};

export default ProjectPageGallery;
