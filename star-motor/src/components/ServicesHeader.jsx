import React from "react";

export default function ServicesHeader() {
  return (
    <div className="relative w-full py-1 md:py-2 overflow-hidden font-chakra">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          {/* Main heading with gradient */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-400 to-white tracking-wider mb-4 animate-fade-in">
            OUR SERVICES
          </h2>
          {/* Top decorative line */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <div className="mx-3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>

          {/* Small label */}
          <p className="text-orange-500 text-sm md:text-base font-medium tracking-widest mb-4 uppercase">
            What We Offer
          </p>
        </div>
      </div>

      {/* Bottom shadow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </div>
  );
}
