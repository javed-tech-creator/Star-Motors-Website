import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Calendar,
  Tag,
  Clock,
  ArrowLeft,
  Home,
  ChevronRight,
  User,
  Share2,
} from "lucide-react";
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

  // if (isError) {
  //   return (
  //     <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-white">
  //       <div className="text-xl font-bold text-red-400 mb-4">
  //         Failed to load blog.
  //       </div>
  //       <button
  //         onClick={() => navigate("/blog")}
  //         className="px-6 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"
  //       >
  //         Return to Blog
  //       </button>
  //     </div>
  //   );
  // }

  const blog = blogData?.data?.find((item) => item.slug === slug);
  const relatedBlogs = blogData?.data?.filter(
    (item) => item.slug !== blog?.slug
  );

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-white">
        <div className="text-xl font-bold text-red-400 mb-4">
          Blog Not Found!
        </div>
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
    <div className="relative min-h-screen bg-gray-950 overflow-hidden text-white selection:bg-green-500/30">
      {/* --- Global Background Effects --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[50px_50px] opacity-30" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div
            className="absolute w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px]"
            style={{
              top: "-10%",
              left: "20%",
              transform: `translate(${mousePosition.x * 0.02}px, ${
                mousePosition.y * 0.02
              }px)`,
            }}
          />
          <div
            className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"
            style={{
              bottom: "-10%",
              right: "10%",
              transform: `translate(${-mousePosition.x * 0.02}px, ${
                -mousePosition.y * 0.02
              }px)`,
            }}
          />
        </div>
      </div>

      <div className="relative z-10 pt-28 pb-12 lg:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="animate-up inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-400 hover:border-white/20 transition-all">
            <Link
              to="/"
              className="hover:text-green-400 flex items-center gap-1 transition-colors"
            >
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <Link to="/blog" className="hover:text-green-400 transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <span className="text-white font-medium truncate max-w-[200px]">
              {blog.title}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* --- Main Content (Left) --- */}
            <div className="lg:col-span-8 animate-up space-y-8">
              {/* Featured Image */}
              <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 shadow-2xl group">
                <img
                  src={
                    blog?.image?.public_url ||
                    `${backendUrl}/${blog?.image?.url}`
                  }
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating Badges */}
                <div className="absolute top-4 left-4 flex gap-3">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-medium border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-green-400" />
                    {formatDate(blog.updatedAt)}
                  </div>
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-medium border border-white/10">
                    <Tag className="w-3.5 h-3.5 text-blue-400" />
                    {blog.category || "Uncategorized"}
                  </div>
                </div>
              </div>

              {/* Title & Metadata */}
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {blog.title}
                </h1>

                <div className="flex items-center gap-6 text-sm text-gray-400 border-b border-white/10 pb-6 mb-6">
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

                {/* Main Content Body */}
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
              </div>

              {/* Navigation Footer */}
              <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  Back to Articles
                </Link>
                <div className="flex gap-4">
                  <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* --- Sidebar (Right) --- */}
            <div className="lg:col-span-4 animate-up">
              <div className="sticky top-32 space-y-8">
                {/* Related Blogs Widget */}
                <div className="bg-white/2 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-green-400" />
                    Read Next
                  </h3>

                  <div className="space-y-4">
                    {relatedBlogs?.slice(0, 4).map((relatedBlog) => (
                      <Link
                        to={`/blog-detail/${relatedBlog.slug}`}
                        key={relatedBlog._id}
                        className="group flex gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5"
                      >
                        <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                          <img
                            src={
                              relatedBlog?.image?.public_url ||
                              `${backendUrl}/${relatedBlog?.image?.url}`
                            }
                            alt={relatedBlog.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <div className="text-xs text-green-400 mb-1">
                            {formatDate(relatedBlog.updatedAt)}
                          </div>
                          <h4 className="text-sm font-semibold text-gray-200 group-hover:text-white line-clamp-2 leading-snug transition-colors">
                            {relatedBlog.title}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter CTA */}
                <div className="bg-linear-to-br from-green-600/20 to-blue-600/20 border border-green-500/20 rounded-3xl p-6 text-center">
                  <h3 className="text-lg font-bold text-white mb-2">
                    Subscribe
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Get the latest digital signage trends delivered to your
                    inbox.
                  </p>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2 text-sm text-white mb-3 focus:outline-none focus:border-green-500/50"
                  />
                  <button className="w-full bg-white text-black font-bold py-2 rounded-lg hover:bg-green-400 transition-colors text-sm">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
