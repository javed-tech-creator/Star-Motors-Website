import React from "react";

import audiLogo from "../assets/brandlogo/audi-logo-2.png";
import bmwLogo from "../assets/brandlogo/BMW.svg";
import chevroletLogo from "../assets/brandlogo/chevrolet-logo.png";
import fordLogo from "../assets/brandlogo/Ford_logo_flat.svg";
import hondaLogo from "../assets/brandlogo/Honda.svg";
import hyundaiLogo from "../assets/brandlogo/hyundai-logo.png";
import mazdaLogo from "../assets/brandlogo/mazda-logo.png";
import mercedesLogo from "../assets/brandlogo/Mercedes-Logo.svg";
import nissanLogo from "../assets/brandlogo/nissan-6.svg";
import teslaLogo from "../assets/brandlogo/Tesla_Motors.svg";
import toyotaLogo from "../assets/brandlogo/toyta_car_logo.png";
import volkswagenLogo from "../assets/brandlogo/Volkswagen_-_Logo.svg.png";

export default function ClientBrands() {
  const carBrands = [
    {
      name: "Mercedes",
      logo: mercedesLogo,
    },
    {
      name: "BMW",
      logo: bmwLogo,
    },
    {
      name: "Audi",
      logo: audiLogo,
    },
    {
      name: "Toyota",
      logo: toyotaLogo,
    },
    {
      name: "Honda",
      logo: hondaLogo,
    },
    {
      name: "Hyundai",
      logo: hyundaiLogo,
    },
    {
      name: "Ford",
      logo: fordLogo,
    },
    {
      name: "Volkswagen",
      logo: volkswagenLogo,
    },
    {
      name: "Nissan",
      logo: nissanLogo,
    },
    {
      name: "Tesla",
      logo: teslaLogo,
    },
    {
      name: "Chevrolet",
      logo: chevroletLogo,
    },
    {
      name: "Mazda",
      logo: mazdaLogo,
    },
  ];

  // Double the brands array for seamless infinite loop
  const duplicatedBrands = [...carBrands, ...carBrands];

  return (
    <section className="w-full bg-[#0a0a0a] py-15 overflow-hidden relative">
      <div className="relative z-10 px-6 lg:px-20">
      

        {/* Brands Slider Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

          {/* Sliding Track */}
          <div className="flex overflow-hidden py-5">
            <div className="flex animate-scroll">
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={index}
                  className="shrink-0 mx-6 w-44 h-44 flex items-center justify-center bg-white/10 rounded-2xl border border-gray-700/50 hover:border-orange-500 transition-all duration-300 hover:bg-white/15 group backdrop-blur-sm hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:scale-105 cursor-pointer"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-28 h-28 object-contain brightness-110 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 group-hover:brightness-125"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-12">
          <p className="text-gray-300 text-sm md:text-base font-medium">
            And Many More! We service all car brands with expert care
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}