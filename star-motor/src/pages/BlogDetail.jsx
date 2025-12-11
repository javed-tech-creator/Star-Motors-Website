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

         <div className="container mx-auto px-4 py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Blog Details */}
                <div className="lg:col-span-3">
                  <div className="relative">
                    <img
                      src={blog?.image?.public_url || `${backendUrl}/${blog?.image?.url}`}
                      alt={blog.title}
                      className="w-full h-[400px] rounded-2xl object-cover shadow-md"
                    />
                    <div className="flex absolute gap-4 top-5 left-3 justify-between">
                      <p className="text-gray-900 text-sm bg-white px-2 py-2 rounded-full">
                        <Calendar className="inline-flex mr-1 h-4 w-4" />
                        {formatDate(blog.updatedAt)}
                      </p>
                      <div className="flex justify-center items-center bg-green-500 px-2 py-1 rounded-full text-xs font-medium text-white">
                        <Tag className="h-4 w-4 mr-1 inline-flex" />
                        {blog.category || "Uncategorized"}
                      </div>
                    </div>
                  </div>
        
                  <h1 className="lg:text-2xl lg:mt-6 mt-4 text-xl font-semibold">
                    {blog.title}
                  </h1>
                  <div
                    className="mt-4 lg:text-lg text-gray-950 blog"
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                  />
        
                  {/* Back to Blogs Button */}
                  <Link
                    to="/blog"
                    className="mt-4 inline-block bg-green-600 text-white px-6 py-3 hover:bg-green-600 rounded-xl transition-all duration-300"
                  >
                    Back to Blogs
                  </Link>
                </div>
        
                {/* Related Blogs */}
                <div className="lg:col-span-1 border p-2 border-gray-100">
                  <h2 className="text-2xl font-semibold mb-4 messiri">Other Blogs</h2>
                  <div className="space-y-4 overflow-y-auto">
                    {blog?.map((relatedBlog) => (
                      <Link
                        to={`/blog-detail/${relatedBlog.slug}`}
                        key={relatedBlog._id}
                        className="block p-4 bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <img
                          src={
                            relatedBlog?.image?.public_url ||
                            `${backendUrl}/${relatedBlog?.image?.url}`
                          }
                          alt={relatedBlog.title}
                          className="w-full h-28 rounded-xl object-cover"
                        />
                        <p className="text-gray-500 text-sm mt-2">
                          {formatDate(relatedBlog.updatedAt)}
                        </p>
                        <h3 className="text-lg font-semibold mt-1 line-clamp-1">
                          {relatedBlog.title}
                        </h3>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
