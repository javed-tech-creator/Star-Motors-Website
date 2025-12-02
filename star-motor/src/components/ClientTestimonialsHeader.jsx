import React from "react";

export default function ClientTestimonialsHeader() {
  return (
    <div className="relative w-full py-2 md:py-4 overflow-hidden font-chakra">

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          {/* Main heading with gradient */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-orange-500">Clients Say</span>
          </h2>
          {/* Top decorative line */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            <div className="mx-3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>

          {/* Small label */}
         <p className="text-white text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our service
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
