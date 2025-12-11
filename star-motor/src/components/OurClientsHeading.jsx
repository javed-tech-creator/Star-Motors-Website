import React from "react";

export default function OurClientsHeading() {
  return (
    <div className="relative w-full py-2 md:py-4 overflow-hidden font-chakra mt-5">
 
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          {/* Main heading with gradient */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-orange-500 to-white tracking-wider mb-4 animate-fade-in">
            <span className="text-white">WE SERVICE</span>  ALL BRANDS
          </h2>
           <p className="text-white text-sm md:text-base font-medium tracking-widest mb-4 uppercase lg:px-40">
           No matter the brand— from luxury to everyday models — we provide complete servicing for all vehicles with precision, quality, and trusted workmanship.
          </p>
          {/* Top decorative line */}
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-linear-to-r from-transparent via-orange-500 to-transparent"></div>
            <div className="mx-3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="h-px w-12 bg-linear-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>

          {/* Small label */}
          {/* <p className="text-white text-sm md:text-base font-medium tracking-widest mb-4 uppercase">
           Trusted By Leading Brands
          </p> */}
        </div>
      </div>

      {/* Bottom shadow effect */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-orange-500 to-transparent"></div> */}

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
