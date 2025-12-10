import React from "react";
import car from "../assets/car.png";
import enginewheel from "../assets/engine-wheel.png";
import rightlight from "../assets/right-light.png";
import leftlight from "../assets/left-light.png";
import AnimatedButton from "./AnimatedButton";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

  const navigate = useNavigate();
  return (
    <section className="relative w-full bg-[#111111] text-white overflow-hidden py-20 min-h-[80vh] px-6 lg:px-20">
      {/* BACKGROUND OUTLINE TEXT */}
    <h1
  className={`
    absolute
    top-10
    md:top-5
    lg:top-18
    ${/* MOBILE & TABLET CENTER */""}
    left-1/2 md:left-1/2
    -translate-x-1/2
    text-center
    ${/* DESKTOP PAR ORIGINAL RIGHT SIDE */""}
    lg:left-auto lg:-right-65 lg:text-right

    whitespace-nowrap
    text-[35px]
    md:text-[70px]
    lg:text-[80px]
    font-extrabold
    text-white/5
    tracking-[0.2em]
    select-none
    pointer-events-none
  `}
  style={{
    WebkitTextStroke: "2px rgba(255,255,255,0.07)",
    color: "transparent",
  }}
>
  STAR MOTORS
</h1>


      <div className=" flex flex-col-reverse lg:flex-row items-center justify-between ">
        {/* =========================
            LEFT SIDE TEXT CONTENT
        ============================ */}
        <div className="w-full lg:w-[40%] space-y-4 z-20 mt-10 lg:mt-0">
          <h1 className="text-2xl md:text-2xl lg:text-[34px] font-extrabold leading-tight font-chakra">
           Premium Car Maintenance & 
            <span className="text-white"> Repair Service</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed font-chakra">
            Keep your car running like new with expert care, precision, and reliability.
From routine checkups to advanced repairs — Star Motors has you covered.
          </p>

          <AnimatedButton
            text="Book Your Service Today !"
            width="242px"
            height="40px"
            bgColor="#ff6b35"
            borderColor="#ff6b35"
            textColor="#ffffff"
            className="transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
            onClick={() => navigate("contact")}
          />
        </div>

        {/* =========================
            RIGHT SIDE CAR + ENGINE
        ============================ */}
        <div className="  w-full lg:w-[55%] flex justify-center lg:mt-20">
          <div className="relative group animate-floating">
            {/* CAR IMAGE */}
            <img
              src={car}
              alt="car"
              className="w-full max-w-5xl pointer-events-none select-none"
            />

            {/* LEFT HEADLIGHT */}
            <img
              src={leftlight}
              alt="left light"
              className="
                absolute 
                -left-[11%]
                top-[0%]
                w-full
                opacity-0 
                group-hover:opacity-100 
                transition-opacity duration-300
              "
            />

            {/* RIGHT HEADLIGHT */}
            <img
              src={rightlight}
              alt="right light"
              className="
                absolute 
                -right-[12%]
                top-[0%]
                w-full
                opacity-0 
                group-hover:opacity-100 
                transition-opacity duration-300
              "
            />

            {/* ENGINE ROTATING WHEEL */}
            <img
              src={enginewheel}
              alt="engine wheel"
              className="
                absolute 
                left-1/2
                top-[13%]
                -translate-x-1/2
                w-[120%]
                animate-rotate
                group-hover:animate-rotate-fast
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
