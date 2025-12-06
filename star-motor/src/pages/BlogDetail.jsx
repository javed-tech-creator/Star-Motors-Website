import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Calendar, Tag, Clock, ArrowLeft, Home, User } from "lucide-react";
import formatDate from "../utils/FormateDate";
import Loader from "../utils/Loader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGetAllBlogsQuery } from "../api/blog.api";

// Register GSAP
gsap.registerPlugin(ScrollTrigger);

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Fetch all blogs
  const { data: blogData, isLoading } = useGetAllBlogsQuery();

  // --- Background Mouse Effect ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // --- Animations ---
  useEffect(() => {
    if (blogData) {
      gsap.fromTo(
        ".animate-up",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );
    }
  }, [blogData, slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  const blog = blogData?.data?.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-white">
        <div className="text-xl font-bold text-red-400 mb-4">Blog Not Found!</div>
        <button
          onClick={() => navigate("/blog")}
          className="px-6 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"
        >
          Return to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#111111] overflow-hidden text-white selection:bg-green-500/30">
      <div className="relative z-10 pt-20  lg:pt-20">
        <div className="px-6 lg:px-20">
          {/* Breadcrumb */}
          <nav className="animate-up inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-400 hover:border-white/20 transition-all">
            <Link
              to="/"
              className="hover:text-green-400 flex items-center gap-1 transition-colors"
            >
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <span className="text-gray-500">/</span>
            <Link to="/blog" className="hover:text-green-400 transition-colors">
              Blog
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-white font-medium truncate max-w-[200px]">
              {blog.title}
            </span>
          </nav>

          {/* --- Main 2-column Layout --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Side: Image */}
            <div className="lg:col-span-6 animate-up">
              <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 shadow-2xl group">
                <img
                  src={blog?.image?.public_url || `${backendUrl}/${blog?.image?.url}`}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="lg:col-span-6 animate-up flex flex-col justify-start space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                {blog.title}
              </h1>

              {/* Metadata */}
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-green-500 to-blue-500 flex items-center justify-center text-white font-bold">
                    <User className="w-4 h-4" />
                  </div>
                  <span>
                    By <span className="text-white">Admin</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-400" />
                  <span>5 min read</span>
                </div>
              </div>

              {/* Description */}
              <div
                className="prose prose-invert prose-lg max-w-none
                  prose-headings:text-white prose-headings:font-bold
                  prose-p:text-gray-300 prose-p:leading-relaxed
                  prose-a:text-green-400 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-white prose-strong:font-semibold
                  prose-ul:text-gray-300 prose-li:marker:text-green-500
                  prose-img:rounded-2xl prose-img:border prose-img:border-white/10
                  prose-blockquote:border-l-green-500 prose-blockquote:bg-white/5 prose-blockquote:p-4 prose-blockquote:rounded-r-xl"
                dangerouslySetInnerHTML={{ __html: blog.description }}
              />

              {/* Back Button */}
              <div className="pt-8 border-t border-white/10">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back to Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
