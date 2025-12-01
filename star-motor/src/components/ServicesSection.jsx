import React from "react";

// ---- REAL IMAGES IMPORT ----
import ser1 from "../assets/services/service1.jpg";
import ser2 from "../assets/services/service2.jpg";
import ser3 from "../assets/services/service3.jpg";
import ser4 from "../assets/services/service4.jpg";
import ser5 from "../assets/services/service5.jpg";
import ser6 from "../assets/services/service6.jpg";
import ser7 from "../assets/services/service7.jpg";
import ser8 from "../assets/services/service8.jpg";
import AnimatedButton from "./AnimatedButton";

const menuServices = [
  "CAR SERVICE / REPAIRING",
  "CAR & BIKE FOAM WASH",
  "INTERIOR CLEANING",
  "DENTING & PAINTING",
  "CAR MODIFICATION",
  "WHEEL ALIGNMENT",
  "WHEEL BALANCING",
  "TYRE CHANGE SERVICE",
];

// ---- DESCRIPTIONS FOR EACH SERVICE ----
const descriptions = [
  "You get used to your brakes. Brake pads and rotors wear out from the immense friction and heat they encounter. Air gets into brake lines....",
  "Premium foam wash service for your car and bike. Deep cleaning with high-quality products for a spotless shine.",
  "Complete interior detailing including vacuuming, dashboard cleaning, and upholstery treatment for a fresh cabin experience.",
  "Expert denting and painting services using advanced technology and premium quality paints for a factory-finish look.",
  "Transform your vehicle with custom modifications. From performance upgrades to aesthetic enhancements.",
  "Precise wheel alignment ensures proper tire contact, better handling, and improved fuel efficiency for your vehicle.",
  "Professional wheel balancing service to eliminate vibrations and ensure smooth, safe driving at all speeds.",
  "Quick and efficient tyre replacement service with a wide range of premium brands to choose from.",
];

// ---- IMAGES LIST ACCORDING TO SERVICES ----
const images = [ser1, ser2, ser3, ser4, ser5, ser6, ser7, ser8];

export default function OurServices() {
  return (
    <section className="w-full bg-[#111111] py-10">
      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 lg:px-20">
        {menuServices.map((service, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-700 hover:border-[#ff6b35] transition-all group/service"
          >
            {/* IMAGE */}
            <div className="w-full h-40 overflow-hidden">
              <img
                src={images[index]}
                alt={service}
                className="w-full h-full object-cover transform group-hover/service:scale-110 transition-all duration-500"
              />
            </div>

            {/* TEXT BELOW IMAGE */}
            <div className="p-5">
              {/* SERVICE NAME */}
              <h3 className="text-white text-lg font-chakra font-semibold mb-3">
                {service}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4 font-chakra">
                {descriptions[index]}
              </p>

              <AnimatedButton
                text="DETAILS"
                width="120px"
                height="30px"
                bgColor="#ff6b35"
                borderColor="#ff6b35"
                textColor="#ffffff"
                cornerColor="#1a1a1a"
                onClick={() => console.log("Button Clicked!")}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
