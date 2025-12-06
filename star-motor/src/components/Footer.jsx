import React from "react";
import { Link, useNavigate } from "react-router-dom";
import cclogo from "../assets/cc-logo.png";
import AnimatedButton from "./AnimatedButton";
import logo from "../assets/Logo.jpeg";

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
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-14 lg:gap-20">
          {/* BRAND INFO */}
          <div className="space-y-6">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src={logo}
                alt="Star Motors Logo"
                className="w-52 h-20 object-contain"
              />
            </div>

            <p className="text-sm lg:text-base leading-6 text-neutral-300 max-w-sm">
              Every service is rigorously screened and constantly rated to
              ensure you get the best experience.
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
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 tracking-wide">
              POPULAR SERVICES
            </h4>

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

  {/* ADDRESS */}
  <div>
    <p className="text-sm font-semibold text-orange-500">ADDRESS</p>

    <a
      href="https://www.google.com/maps/search/?api=1&query=23/A,+New+Market+Road,+Mumbai,+Maharashtra+400001"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm mt-1 leading-6 block hover:text-orange-400 transition cursor-pointer"
    >
      23/A, New Market Road,<br />
      Mumbai, Maharashtra 400001,<br />
      India
    </a>
  </div>

  <div className="flex gap-10">

    {/* PHONE */}
    <div>
      <p className="text-sm font-semibold text-orange-500">PHONE</p>

      <a
        href="tel:9956877786"
        className="text-sm mt-1 block hover:text-orange-400 transition cursor-pointer"
      >
        9956877786
      </a>
    </div>

    {/* EMAIL */}
    <div>
      <p className="text-sm font-semibold text-orange-500">EMAIL</p>

      <a
        href="mailto:support@domain.com"
        className="text-sm mt-1 block hover:text-orange-400 transition cursor-pointer"
      >
        support@domain.com
      </a>
    </div>

  </div>
</div>


          {/* Map SECTION */}
          <div className="">
            <iframe
              src="https://maps.google.com/maps?q=Digital%20Signage%20Solutions%20Lucknow&output=embed"
              className="w-full h-full rounded-md"
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
