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
import { useNavigate } from "react-router-dom";

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
  "Keep your car running smooth and safe. Expert repair and regular service to restore performance and reliability. ",
  "Premium foam wash that deeply cleans your vehicle, removes dirt and grease, and brings back a bright, spotless, showroom-like shine.",
  "Complete interior detailing including vacuuming, dashboard polish, and upholstery cleaning to give your cabin a fresh, hygienic, and luxurious feel.",
  "Advanced denting and painting services using quality materials to restore your vehicle’s look with a smooth, flawless, factory-finish appearance.",
  "Custom car modification services using premium upgrades to enhance performance, style, and overall driving experience with a refined, standout look.",
  "Precision wheel alignment using advanced equipment to improve tyre contact, handling stability, and fuel efficiency for a smoother, safer drive.",
  "Professional wheel balancing solutions designed to eliminate vibrations and ensure steady, comfortable, and reliable driving performance at all speeds.",
  "Quick and efficient tyre replacement using trusted premium brands to deliver superior grip, enhanced safety, and long-lasting on-road performance.",
];
const link = [
  "service1",
  "service2",
  "single1",
  "single2",
  "single3",
  "single4",
  "single5",
  "single6",
];

// ---- IMAGES LIST ACCORDING TO SERVICES ----
const images = [ser1, ser2, ser3, ser4, ser5, ser6, ser7, ser8];

export default function OurServices() {
  const navigate = useNavigate();
  return (
    <section className="w-full  bg-[#111111] ">
      {/* SERVICES GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 lg:px-20">
  {menuServices.map((service, index) => (
    <div
      key={index}
      className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-700 hover:border-[#ff6b35] transition-all group/service flex flex-col justify-between"
    >
      {/* IMAGE */}
      <div>
        <div className="w-full h-40 overflow-hidden">
          <img
            src={images[index]}
            alt={service}
            className="w-full h-full object-cover transform group-hover/service:scale-110 transition-all duration-500"
          />
        </div>

        {/* TEXT BELOW IMAGE */}
        <div className="p-5">
          <h3 className="text-white text-lg font-chakra font-semibold mb-3">
            {service}
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed mb-4 font-chakra">
            {descriptions[index]}
          </p>
        </div>
      </div>

      {/* BUTTON FIXED AT BOTTOM */}
      <div className="mb-4 pl-5">
        <AnimatedButton
          text="DETAILS"
          width="120px"
          height="30px"
          bgColor="#ff6b35"
          borderColor="#ff6b35"
          textColor="#ffffff"
          cornerColor="#1a1a1a"
          onClick={() => navigate(`/service/${link[index]}`)}
        />
      </div>
    </div>
  ))}
</div>

    </section>
  );
}
