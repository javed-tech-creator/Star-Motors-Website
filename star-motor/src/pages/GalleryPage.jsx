import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  Search,
  Eye,
  Monitor,
  Home,
  ChevronRight,
  Sparkles,
  Filter,
  Zap, // Added Zap here
  Star,
  TrendingUp,
  ArrowUpRight,
  MessageCircleMore,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../api/product.api";
import Loader from "../utils/Loader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP
gsap.registerPlugin(ScrollTrigger);

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // PERFORMANCE FIX: Use Refs instead of State for animation elements
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);

  // --- API CALL ---
  const { data: productData, isLoading } = useGetAllProductsQuery();

  const products = productData?.data || [];

  // --- OPTIMIZED Background Mouse Effect ---
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

  // --- Animations ---
  useEffect(() => {
    gsap.fromTo(
      ".hero-animate",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  // --- Categories Calculation ---
  const categories = useMemo(() => {
    if (!products.length)
      return [{ id: "all", name: "All Products", count: 0 }];
    const categoryCount = products.reduce((acc, product) => {
      const category = product.category || "Uncategorized";
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});
    const dynamicCategories = [
      { id: "all", name: "All Products", count: products.length },
    ];
    Object.entries(categoryCount).forEach(([categoryName, count]) => {
      dynamicCategories.push({
        id: categoryName.toLowerCase().replace(/\s+/g, "-"),
        name: categoryName,
        count: count,
      });
    });
    return dynamicCategories;
  }, [products]);

  // --- Filtering Logic ---
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" ||
        (product.category &&
          product.category.toLowerCase().replace(/\s+/g, "-") ===
            selectedCategory);
      const matchesSearch =
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.description &&
          product.description.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchTerm]);

  // --- Grid Animation ---
  useEffect(() => {
    if (filteredProducts.length > 0) {
      gsap.killTweensOf(".product-card");

      gsap.fromTo(
        ".product-card",
        { opacity: 0, scale: 0.95, y: 20 },
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

  // --- Components ---

  const ProductCard = ({ product }) => (
    <div className="product-card group relative bg-[#111111] border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(34,197,94,0.3)] flex flex-col h-full transform-gpu will-change-transform font-chakra">
      {/* Image Container */}
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={product.images[0].public_url}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-20 font-chakra">
            <span
              className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full text-white shadow-lg ${
                product.badge === "Best Seller"
                  ? "bg-linear-to-r from-yellow-500 to-orange-500"
                  : product.badge === "New Arrival"
                  ? "bg-linear-to-r from-blue-500 to-cyan-500"
                  : "bg-linear-to-r from-purple-500 to-pink-500"
              }`}
            >
              {product.badge === "Best Seller" && (
                <Star className="w-3 h-3 fill-white" />
              )}
              {product.badge === "New Arrival" && (
                <Sparkles className="w-3 h-3" />
              )}
              {product.badge}
            </span>
          </div>
        )}

        {/* Action Button (Hidden until hover) */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 font-chakra">
          <Link
            to={`/products/${product.slug}`}
            className="flex items-center justify-center w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-orange-400 transition-colors shadow-xl"
          >
            View Details <ArrowUpRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col grow">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-medium text-orange-400 uppercase tracking-widest">
            {product.category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 leading-tight group-hover:text-orange-300 transition-colors">
          {product.title}
        </h3>

        {/* Specs Tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
          {product.specs?.slice(0, 2).map((spec, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-gray-400"
            >
              {spec}
            </span>
          ))}
          {product.specs?.length > 2 && (
            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-gray-400">
              +{product.specs.length - 2} more
            </span>
          )}
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  // if (isError) {
  //   return (
  //     <div className="min-h-screen bg-[#111111] flex flex-col items-center justify-center text-white font-chakra">
  //       <div className="text-xl font-bold text-red-500 mb-4">
  //         Failed to load products
  //       </div>
  //       <button
  //         onClick={() => window.location.reload()}
  //         className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all"
  //       >
  //         Retry
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <div className="relative min-h-screen bg-[#111111] overflow-hidden text-white font-chakra">
      {/* --- Optimized Global Background Effects --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[50px_50px] opacity-30" />
      </div>

      <div className="relative z-10 pt-12 pb-12 lg:pt-12 lg:pb-12">
        <div className="px-6 lg:px-20">
          {/* Breadcrumb & Hero */}
          <div className="text-center mb-6">
            <h1 className="hero-animate text-4xl md:text-6xl font-black mb-3 leading-tight">
              <span className="text-transparent bg-clip-text bg-white via-blue-400 to-purple-500">
                Premium <span className="text-orange-500"> Motors </span>{" "}
                Catalog
              </span>
            </h1>
            <p className="hero-animate text-gray-400 max-w-2xl mx-auto mb-5 text-lg">
              Explore our premium range of motors crafted for superior
              performance, durability, and efficiency—engineered to elevate your
              machinery to the next level.
            </p>
            <nav className="hero-animate inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-400 hover:border-white/20 transition-all">
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

          {/* Featured Spotlight */}
          <div className="hero-animate mb-16 relative rounded-3xl overflow-hidden bg-linear-to-r from-gray-900 to-black border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2000')] bg-cover bg-center opacity-40"></div>
            <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent"></div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col items-start max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500 text-black font-bold text-xs rounded-full mb-4 animate-pulse">
                <TrendingUp className="w-3 h-3" /> PREMIUM SERVICE
              </span>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Star Motors Services
              </h2>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Reliable, high-quality motor repair and maintenance solutions
                designed to keep your vehicle running smoothly. From engine
                diagnostics to complete servicing, we deliver precision, trust,
                and expert care.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                {/* Call Button */}
                <a
                  href="tel:7526074042"
                  className="
    group
    relative
    overflow-hidden
    flex
    gap-2
    text-white
    text-[14px]
    font-semibold
    px-7
    py-1.5
    uppercase
    tracking-tight
    items-center
    border-2 border-[#ff6b35]
    transition-all duration-300
    hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]
  "
                >
                  {/* Background hover fill animation */}
                  <span
                    className="
      absolute inset-0 bg-[#ff6b35]
      scale-x-0 origin-center
      transition-transform duration-300 ease-out
      group-hover:scale-x-100
      z-0
    "
                  ></span>

                  {/* Icon + text (stay on top of background) */}
                  <span className="relative z-10 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 group-hover:rotate-12 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h2l2 5-1.5 1.5a11.1 11.1 0 005 5L14 14l5 2v2a2 2 0 01-2 2h-1C9.82 20 4 14.18 4 7V6a2 2 0 012-2z"
                      />
                    </svg>
                    Call Now
                  </span>
                </a>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/7526074042"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
    group
    relative
    overflow-hidden
    flex
    gap-2
    text-white
    text-[14px]
    font-semibold
    px-7
    py-1.5
    uppercase
    tracking-tight
    items-center
    border-2 border-[#ff6b35]
    transition-all duration-300
    hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]
  "
                >
                  {/* Background Fill Animation */}
                  <span
                    className="
      absolute inset-0 bg-[#ff6b35]
      scale-x-0 origin-center
      transition-transform duration-300 ease-out
      group-hover:scale-x-100
      z-0
    "
                  ></span>

                  {/* Text + Icon should stay above background */}
                  <span className="relative z-10 flex items-center gap-2">
                    <MessageCircleMore className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    WhatsApp
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="product-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          {/* No Results State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-24 bg-white/2 border border-white/5 rounded-3xl">
              <div className="w-20 h-20 bg-[#111111] rounded-full flex items-center justify-center mx-auto mb-6">
                <Filter className="w-10 h-10 text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No matching products
              </h3>
              <p className="text-gray-400 mb-8">
                Adjust your filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-orange-400 transition-all"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Custom Request Banner */}
          {/* <div className="mt-24 p-1 rounded-3xl bg-linear-to-r from-gray-800 via-gray-700 to-gray-800">
            <div className="bg-[#111111] rounded-[22px] px-8 py-12 md:px-16 md:flex items-center justify-between gap-8 text-center md:text-left">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Can't find what you need?
                </h3>
                <p className="text-gray-400">
                  We specialize in custom manufacturing. Tell us your
                  requirements.
                </p>
              </div>
              <Link
                to="/contact"
                className="mt-6 md:mt-0 inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
              >
                Request Custom Quote <Zap className="w-4 h-4 fill-black" />
              </Link>
            </div>
          </div> */}
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

export default GalleryPage;
