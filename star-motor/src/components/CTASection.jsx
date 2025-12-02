import React from "react";
import AnimatedButton from "./AnimatedButton";
import ctaimage from "../assets/cta-image.jpg";

export default function CTASection() {
  return (
    <section className=" bg-[#111111] py-10 font-chakra ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-0 px-6 lg:px-20">
        {/* Content Side */}
        <div className=" order-2 lg:order-1">
          {/* Logo */}
          <div className="flex items-center gap-4 mb-6 animate-fadeIn">
            <div className="w-14 h-14 bg-gradient-to-br from-[#ff6b35] to-[#f7931e] rounded-xl flex items-center justify-center text-3xl shadow-lg">
              ⭐
            </div>
            <h3 className="text-3xl font-bold text-white uppercase tracking-wider">
              Star Motors
            </h3>
          </div>

          {/* Tagline */}
          <p className="text-[#ff6b35] uppercase tracking-widest text-sm font-bold mb-6 animate-fadeIn">
            Premium Auto Care
          </p>

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight animate-fadeIn">
            Your Car Deserves the{" "}
            <span className="bg-gradient-to-r from-[#ff6b35] to-[#f7931e] bg-clip-text text-transparent">
              Best Service
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg mb-8 leading-relaxed animate-fadeIn">
            Experience professional car repair and maintenance with our team of
            expert mechanics. Quality parts, advanced diagnostics, and
            unbeatable service - all at competitive prices.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-5 mb-10 animate-fadeIn ">
            <AnimatedButton
              text="CONTACT US"
              width="170px"
              height="40px"
              bgColor="#ff6b35"
              borderColor="#ff6b35"
              cornerColor="#111111"
              textColor="#ffffff"
              onClick={() => console.log("Subscribe Click")}
            />

            <AnimatedButton
              text="SERVICES"
              width="170px"
              height="40px"
              bgColor="#ff6b35"
              borderColor="#ff6b35"
              cornerColor="#111111"
              textColor="#ffffff"
              onClick={() => console.log("Subscribe Click")}
            />
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-6 animate-fadeIn">
            <div className="text-center lg:text-left">
              <div className="w-12 h-12 bg-[#ff6b35]/10 rounded-xl flex items-center justify-center mb-3 mx-auto lg:mx-0">
                <svg
                  className="w-6 h-6 text-[#ff6b35]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-white font-bold text-sm mb-1">Certified</h4>
              <p className="text-gray-300 text-xs">Expert Mechanics</p>
            </div>

            <div className="text-center lg:text-left">
              <div className="w-12 h-12 bg-[#ff6b35]/10 rounded-xl flex items-center justify-center mb-3 mx-auto lg:mx-0">
                <svg
                  className="w-6 h-6 text-[#ff6b35]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="text-white font-bold text-sm mb-1">Fast</h4>
              <p className="text-gray-300 text-xs">Quick Service</p>
            </div>

            <div className="text-center lg:text-left">
              <div className="w-12 h-12 bg-[#ff6b35]/10 rounded-xl flex items-center justify-center mb-3 mx-auto lg:mx-0">
                <svg
                  className="w-6 h-6 text-[#ff6b35]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-white font-bold text-sm mb-1">Affordable</h4>
              <p className="text-gray-300 text-xs">Best Pricing</p>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative h-[200px] lg:h-[600px] overflow-hidden order-1 lg:order-2">
          <img
            src={ctaimage}
            alt="Luxury Sports Car"
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] via-transparent to-transparent lg:from-[#1a1a2e]/80 lg:via-transparent"></div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-fadeIn:nth-child(1) { animation-delay: 0.1s; }
        .animate-fadeIn:nth-child(2) { animation-delay: 0.2s; }
        .animate-fadeIn:nth-child(3) { animation-delay: 0.3s; }
        .animate-fadeIn:nth-child(4) { animation-delay: 0.4s; }
        .animate-fadeIn:nth-child(5) { animation-delay: 0.5s; }
        .animate-fadeIn:nth-child(6) { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
}
