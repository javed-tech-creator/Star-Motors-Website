import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  Tag,
  Home,
  ChevronRight,
  BookOpen,
  CalendarDays,
  Search,
} from "lucide-react";
import formatDate from "../utils/FormateDate";
import Loader from "../utils/Loader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGetAllBlogsQuery } from "../api/blog.api";

// Register GSAP
gsap.registerPlugin(ScrollTrigger);

function BlogPage() {
  const backendUrl = import.meta.env.VITE_BACKEND;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);

  // --- API CALL ---
  const { data: blogData, isLoading } = useGetAllBlogsQuery();

  // --- Optimized Background Mouse Effect ---
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
    // Header Animation
    gsap.fromTo(
      ".hero-animate",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
    );

    // Blog Grid Animation
    if (blogData?.data) {
      gsap.fromTo(
        ".blog-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".blog-grid",
            start: "top 90%",
          },
        }
      );
    }
  }, []); // Removed blogData dependency to run once with dummy data

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  // if (isError) {
  //   return (
  //     <div className="min-h-screen bg-[#111111] flex flex-col items-center justify-center font-chakra text-white">
  //       <div className="text-xl font-bold text-red-500 mb-4 font-chakra">
  //         Failed to load blogs
  //       </div>
  //       <button
  //         onClick={() => window.location.reload()}
  //         className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all font-chakra"
  //       >
  //         Retry
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <div className="relative min-h-screen bg-[#111111] overflow-hidden text-white ">
   
      <div className="relative z-10 pt-8 pb-12 lg:pt-10 lg:pb-12">
        <div className=" px-6 lg:px-20">
          {/* Breadcrumb & Header */}
          <div className="text-center mb-10">
            

            <h1 className="hero-animate text-4xl md:text-6xl font-black mb-3 leading-tight">
              <span className="bg-clip-text text-white font-chakra">
                Latest <span className="text-orange-500"> News</span> & <span className="text-orange-500">Updates</span> 
              </span>
            </h1>
            <p className="hero-animate text-gray-400 max-w-2xl mx-auto text-lg mb-3  font-chakra">
              Stay updated with the latest trends in digital signage, technology
              innovations, and company announcements.
            </p>

            <nav className="hero-animate inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-400 hover:border-white/20 transition-all">
              <Link
                to="/"
                className="hover:text-orange-400 flex items-center gap-1 transition-colors"
              >
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
              <ChevronRight className="w-3 h-3 text-gray-600" />
              <span className="text-white font-medium font-chakra">Blog & Insights</span>
            </nav>
            
          </div>

          {/* Blog Grid */}
          <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData?.data?.map((post) => (
              <div
                key={post._id}
                className="blog-card group flex flex-col h-full bg-white/3 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.15)]"
              >
                {/* Image Section */}
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0  bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-60 z-10" />

                  {/* Floating Date Badge */}
                  <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg px-3 py-1 flex items-center gap-2 text-xs font-medium text-white">
                    <CalendarDays className="w-3 h-3 text-orange-400" />
                    {formatDate(post?.updatedAt)}
                  </div>

                  <img
                    src={post?.image?.public_url}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col grow p-6 font-chakra">
                  {/* Category */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111111] border border-orange-500/20 text-xs font-medium text-orange-400">
                      <Tag className="w-3 h-3" />
                      {post?.category || "Technology"}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 leading-snug group-hover:text-orange-400 transition-colors">
                    {post.title}
                  </h3>

                  {/* Description (Stripped/Clamped) */}
                  <div className="text-gray-400 text-sm line-clamp-3 mb-6 grow prose prose-invert prose-sm max-w-none">
                    <div
                      dangerouslySetInnerHTML={{ __html: post.description }}
                    />
                  </div>

                  {/* Footer / Read More */}
                  <div className="pt-4 border-t border-white/10 mt-auto">
                    <Link
                      to={`/blog-detail/${post.slug}`}
                      className="inline-flex items-center text-sm font-bold text-white group-hover:text-orange-400 transition-colors"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {(!blogData?.data || blogData.data.length === 0) && (
            <div className="text-center py-20 bg-white/2 border border-white/5 rounded-3xl">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                No articles found
              </h3>
              <p className="text-gray-400">Check back later for new updates.</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-move 5s ease infinite; }
        @keyframes gradient-move { 0% { background-position: 0% 50% } 50% { background-position: 100% 50% } 100% { background-position: 0% 50% } }
      `}</style>
    </div>
  );
}

export default BlogPage;
