import React from "react";
import car from "../assets/car.png";
import enginewheel from "../assets/engine-wheel.png";
import rightlight from "../assets/right-light.png";
import leftlight from "../assets/left-light.png";
import AnimatedButton from "./AnimatedButton";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#111111] text-white overflow-hidden py-20 min-h-[80vh] px-6 lg:px-20">
      {/* BACKGROUND OUTLINE TEXT */}
      <h1
        className="
    absolute
    top-8
    md:-top-5
    lg:top-3
    left-1/2
    -translate-x-1/2
    whitespace-nowrap
    text-[35px]
    md:text-[80px]
    lg:text-[120px]
    font-extrabold
    text-white/5
    tracking-[0.2em]
    select-none
    pointer-events-none
  "
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
        <div className="w-full lg:w-[40%] space-y-6 z-20 mt-10 lg:mt-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight font-chakra">
            MAINTENANCE &<br />
            <span className="text-white">REPAIR SERVICE</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed font-chakra">
            StarMotors is a trusted automotive service hub dedicated to
            delivering professional car care with precision and reliability.
            From routine maintenance to premium detailing, we ensure every
            vehicle receives the highest level of attention and expertise.
          </p>

          <AnimatedButton
            text="Contact Us"
            width="160px"
            height="40px"
            bgColor="#ff6b35"
            borderColor="#ff6b35"
            textColor="#ffffff"
            className="transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
            onClick={() => console.log("Button Clicked!")}
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
                w-[100%]
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
                w-[100%]
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
