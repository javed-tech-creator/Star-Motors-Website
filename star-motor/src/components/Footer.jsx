import React from "react";
import { Link, useNavigate } from "react-router-dom";
import cclogo from "../assets/cc-logo.png";
import AnimatedButton from "./AnimatedButton";

const Footer = () => {
  const menuAbout = ["ABOUT US", "OUR TEAM", "OUR WORKS", "FAQ"];
  const menuServices = [
    "CAR SERVICE/REPARING",
    "CAR, BIKE FOAM WASH",
    "INTERIOR CLEANING",
    "DENTING PAINTING",
    "CAR MODIFICATION",
    "WHEEL ALIGNMENT",
    "WHEEL BALANCING",
    "TYRE WITH TYRE CHANGING",
  ];
  const menuLink = [
    "service1",
    "service2",
    "single1",
    "single2",
    "single3",
    "single4",
    "single5",
    "single6",
  ];

  const navigate = useNavigate();

  return (
    <>
   <footer className="bg-black text-white py-10 md:py-12 px-6 md:px-12 lg:px-20 font-chakra">
  <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-14 lg:gap-20">

    {/* BRAND INFO */}
   <div className="space-y-6">
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full border-2 border-[#ff6b35] flex items-center justify-center text-[#ff6b35] text-lg font-bold">
      ⚙
    </div>
    <h2 className="text-2xl font-bold tracking-wide">
      STAR<span className="text-orange-600">MOTORS</span>
    </h2>
  </div>

  <p className="text-sm lg:text-base leading-6 text-neutral-300 max-w-sm">
    Every service is rigorously screened and constantly rated to ensure you get the best experience.
  </p>

  {/* Admin Login Button */}
  <div>
    <button
      className="
        px-5 py-2 
       cursor-pointer
        text-white 
        font-semibold 
        rounded-lg 
        bg-orange-500 
        hover:bg-orange-600 
        transition 
        duration-300
      "
    >
      Admin Login
    </button>
  </div>
</div>


    {/* POPULAR SERVICES */}
    <div className="col-span-2">
      <h4 className="font-bold text-lg mb-6 tracking-wide">POPULAR SERVICES</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
        {menuServices.map((item, index) => (
          <div
            onClick={() => navigate(`/service/${menuLink[index]}`)}
            key={item}
            className="relative text-sm cursor-pointer group pl-4"
          >
            <span className="absolute left-0 top-[7px] w-1.5 h-1.5 bg-orange-600"></span>

            <span className="relative inline-block">
              {item}
              <span className="absolute left-0 -bottom-0.5 w-0 border-b-2 border-dashed border-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* ADDRESS SECTION */}
    <div className="space-y-5 text-neutral-300">
      <h4 className="font-bold text-lg tracking-wide mb-4 text-white">
        CONTACT DETAILS
      </h4>

      <div>
        <p className="text-sm font-semibold text-orange-500">ADDRESS</p>
        <p className="text-sm mt-1 leading-6">
          23/A, New Market Road,<br />
          Mumbai, Maharashtra 400001,<br />
          India
        </p>
      </div>

<div className="flex gap-5">
      <div>
        <p className="text-sm font-semibold text-orange-500">PHONE</p>
        <p className="text-sm mt-1">9956877786 </p>
      </div>

      <div>
        <p className="text-sm font-semibold text-orange-500">EMAIL</p>
        <p className="text-sm mt-1">support@domain.com</p>
      </div>
      </div>
    </div>

    {/* Map SECTION */}
      <div className="">
          <iframe
            src="https://maps.google.com/maps?q=Digital%20Signage%20Solutions%20Lucknow&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "5px" }}
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

  </div>
</footer>

{/* BOTTOM BAR */}
<div className="border-t border-neutral-800 bg-neutral-950 font-chakra">
  <div className="max-w-7xl mx-auto px-4 py-4">
    <div className="flex flex-col md:flex-row justify-center items-center gap-3 text-center">
      <p className="text-xs lg:text-sm text-neutral-300 flex items-center gap-2">
        © 2025 Star Motors Authorised Service Center. Designed By
        <Link
          className="inline-flex"
          to="https://www.codecrafter.co.in/"
          target="_blank"
        >
          <img
            src={cclogo}
            className="lg:w-28 md:w-20 w-20 mt-1 md:mt-0 transition transform hover:scale-105"
            alt="CodeCrafter Logo"
          />
        </Link>
      </p>
    </div>
  </div>
</div>

    </>
  );
};

export default Footer;
