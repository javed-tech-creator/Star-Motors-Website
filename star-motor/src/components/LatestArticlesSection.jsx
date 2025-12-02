import React from 'react';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

export default function LatestArticlesSection() {
  const articles = [
    {
      id: 1,
      title: "Top 10 Car Maintenance Tips for 2026",
      excerpt: "Keep your vehicle running smoothly with these essential maintenance tips that every car owner should know.",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      category: "Maintenance",
      author: "Rahul Sharma",
      date: "Dec 15, 2025",
      readTime: "5 min read",
      tags: ["Tips", "Maintenance"]
    },
    {
      id: 2,
      title: "Electric vs Hybrid: Which is Right for You?",
      excerpt: "Compare the benefits and drawbacks of electric and hybrid vehicles to make an informed decision.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
      category: "Guide",
      author: "Priya Patel",
      date: "Dec 12, 2025",
      readTime: "7 min read",
      tags: ["Electric", "Hybrid"]
    },
    {
      id: 3,
      title: "Understanding Your Car's Dashboard Warning Lights",
      excerpt: "Learn what different warning lights mean and when you should take immediate action.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
      category: "Safety",
      author: "Amit Kumar",
      date: "Dec 10, 2025",
      readTime: "6 min read",
      tags: ["Safety", "Tips"]
    },
    {
      id: 4,
      title: "The Ultimate Guide to Tire Care",
      excerpt: "Everything you need to know about tire maintenance, rotation, and when to replace them.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      category: "Maintenance",
      author: "Vikram Singh",
      date: "Dec 8, 2025",
      readTime: "5 min read",
      tags: ["Tires", "Maintenance"]
    },
    {
      id: 5,
      title: "How to Prepare Your Car for Winter",
      excerpt: "Essential winter car care tips to keep you safe on the road during cold weather.",
      image: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=800&q=80",
      category: "Seasonal",
      author: "Sneha Reddy",
      date: "Dec 5, 2025",
      readTime: "6 min read",
      tags: ["Winter", "Tips"]
    },
    {
      id: 6,
      title: "5 Signs Your Brakes Need Immediate Attention",
      excerpt: "Don't ignore these warning signs. Learn when your brakes need professional inspection.",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
      category: "Safety",
      author: "Rajesh Verma",
      date: "Dec 2, 2025",
      readTime: "4 min read",
      tags: ["Brakes", "Safety"]
    }
  ];

  const featuredArticle = articles[0];
  const regularArticles = articles.slice(1);

  return (
    <section className="w-full bg-[#111111] py-20 overflow-hidden font-chakra">
      <div className=" px-6 lg:px-20">
      
        {/* Featured Article */}
        <div className="mb-12">
          <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/60 rounded-md overflow-hidden border border-gray-800/50 hover:border-orange-500/50 transition-all duration-500 cursor-pointer">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-full overflow-hidden">
                <img 
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white text-xs font-semibold px-4 py-2 rounded-full">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-orange-500 text-sm font-semibold">
                    {featuredArticle.category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <Clock size={14} />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                  {featuredArticle.title}
                </h3>

                <p className="text-gray-400 text-base mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <User size={20} className="text-orange-500" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{featuredArticle.author}</p>
                      <p className="text-gray-500 text-xs flex items-center gap-1">
                        <Calendar size={12} />
                        {featuredArticle.date}
                      </p>
                    </div>
                  </div>

                  {/* <button className="flex items-center gap-2 text-orange-500 font-semibold group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={20} />
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article) => (
            <div 
              key={article.id}
              className="group bg-gradient-to-br from-gray-900/50 to-black/30 rounded-2xl overflow-hidden border border-gray-800/50 hover:border-orange-500/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-black/70 backdrop-blur-sm text-orange-500 text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs text-gray-500 flex items-center gap-1"
                    >
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author & Date */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <User size={14} className="text-orange-500" />
                    </div>
                    <div>
                      <p className="text-white text-xs font-medium">{article.author}</p>
                      <p className="text-gray-500 text-xs">{article.date}</p>
                    </div>
                  </div>

                  <span className="text-gray-500 text-xs flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>

                {/* Read More Link */}
                {/* <button className="mt-4 flex items-center gap-2 text-orange-500 text-sm font-semibold group-hover:gap-3 transition-all">
                  Read Article
                  <ArrowRight size={16} />
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          {/* <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] flex items-center gap-2 mx-auto">
            View All Articles
            <ArrowRight size={20} />
          </button> */}
            <AnimatedButton
          text=" View All Articles"
          // width="170px"
          // height="40px"
          bgColor="#ff6b35"
          borderColor="#ff6b35"
          cornerColor="#111111"
          textColor="#ffffff"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 flex items-center gap-2 mx-auto"
          onClick={() => console.log('Subscribe Click')}
        />
        </div>
      </div>
    </section>
  );
}