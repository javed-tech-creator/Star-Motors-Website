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

// ---- IMAGES LIST ACCORDING TO SERVICES ----
const images = [ser1, ser2, ser3, ser4, ser5, ser6, ser7, ser8];

export default function OurServices() {
  return (
    <section className="w-full bg-[#111111] py-10">
      
     
      {/* SERVICES GRID */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">

        {menuServices.map((service, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-700 hover:border-[#ff6b35] transition-all"
          >
            {/* IMAGE */}
            <div className="w-full h-40 overflow-hidden">
              <img
                src={images[index]}
                alt={service}
                className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500"
              />
            </div>

            {/* TEXT BELOW IMAGE */}
            <div className="p-5 text-center">
              <h3 className="text-white text-lg font-chakra font-semibold">
                {service}
              </h3>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
