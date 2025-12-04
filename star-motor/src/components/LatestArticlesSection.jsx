import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import { useGetAllBlogsQuery } from "../api/blog.api";
import ArticleCard from "./ArticleCard";
import { useNavigate } from "react-router-dom";

export default function LatestArticlesSection() {
  const navigate = useNavigate();
  const { data: blogData } = useGetAllBlogsQuery();
  const articles = blogData?.data || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // RESPONSIVE SLIDES
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth >= 1024) setSlidesPerView(3);
      else if (window.innerWidth >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= articles.length - slidesPerView ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? articles.length - slidesPerView : prev - 1
    );
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  });

  return (
    <section className="w-full bg-[#111] py-10 font-chakra overflow-hidden">
      <div className="px-4.5 md:px-6 lg:px-20">

        {/* SLIDER MAIN WRAPPER */}
        <div className="relative w-full ">

          {/* TRACK */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / slidesPerView
              }%)`,
            }}
          >
            {articles.map((article) => (
              <div
                key={article.id}
                className="shrink-0 px-2 sm:px-3"
                style={{ width: `${100 / slidesPerView}%` }}
              >
                <ArticleCard article={article} />
              </div>
            ))}
          </div>

          {/* LEFT BTN */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-10"
          >
            <ChevronLeft size={22} />
          </button>

          {/* RIGHT BTN */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3  rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-10"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-8">
          {articles.slice(0, articles.length - (slidesPerView - 1)).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? "bg-orange-500 w-8 h-3"
                  : "bg-gray-600 w-3 h-3 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-12">
          <AnimatedButton
            text="View Articles"
            width="170px"
            height="40px"
            bgColor="#ff6b35"
            borderColor="#ff6b35"
            cornerColor="#111111"
            textColor="#ffffff"
            onClick={() => navigate("/blog")}
          />
        </div>

      </div>
    </section>
  );
}
