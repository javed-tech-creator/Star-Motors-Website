import { CalendarDays, Tag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <div className="
      blog-card group flex flex-col h-full 
      bg-white/5 backdrop-blur-sm 
      border border-white/10 rounded-2xl 
      overflow-hidden transition-all duration-300 
      hover:border-orange-500/30 hover:-translate-y-2
      w-full
    ">
      
      {/* IMAGE */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent z-10" />

        {/* DATE */}
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 text-xs rounded-lg flex items-center gap-1.5 text-white border border-white/10 z-20">
          <CalendarDays className="w-3 h-3 text-orange-400" />
          {article?.updatedAt?.split("T")[0]}
        </div>

        <img
          src={article?.image?.public_url}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col p-4 sm:p-6 grow font-chakra">

        {/* Category */}
        <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1 rounded-full bg-[#111] border border-orange-500/20 text-xs text-orange-400 mb-3">
          <Tag className="w-3 h-3" />
          {article?.category || "Technology"}
        </span>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 line-clamp-2 leading-snug group-hover:text-orange-400">
          {article.title}
        </h3>

        {/* Description */}
        <div className="text-gray-400 text-sm line-clamp-3 grow">
          <div dangerouslySetInnerHTML={{ __html: article.description }} />
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 mt-4">
          <Link
            to={`/blog-detail/${article.slug}`}
            className="inline-flex items-center text-sm font-bold text-white group-hover:text-orange-400"
          >
            Read Full Article
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
