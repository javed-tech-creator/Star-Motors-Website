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
      {/* MAIN FOOTER */}
      <footer className="bg-black text-white py-10 md:py-12 px-6 md:px-12 lg:px-24 font-chakra">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-14 lg:gap-20">
          {/* LEFT SECTION */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#ff6b35] flex items-center justify-center text-[#ff6b35] text-lg font-bold">
                ⚙
              </div>
              <h2 className="text-2xl font-bold tracking-wide">
                STAR<span className="text-orange-600">MOTORS</span>
              </h2>
            </div>

            <p className="text-sm lg:text-base leading-6 text-neutral-200 max-w-sm">
              Every service is rigorously screened and constantly rated to
              ensure you get the best service.
            </p>

            <div className="pt-2">
              <p className="text-xs lg:text-sm text-neutral-300">
                Support center 24/7
              </p>
              <h3 className="text-xl font-bold mt-1">+91 752 607-4042</h3>
            </div>
          </div>

          {/* ABOUT US */}
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">ABOUT US</h4>

            <ul className="space-y-4">
              {menuAbout.map((item) => (
                <li
                  key={item}
                  className="relative text-sm cursor-pointer group pl-4"
                >
                  <span className="absolute left-0 top-[7px] w-1.5 h-1.5 bg-orange-600"></span>

                  <span className="relative inline-block">
                    {item}
                    <span className="absolute left-0 -bottom-0.5 w-0 border-b-2 border-dashed border-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* POPULAR SERVICES */}
          <div className="col-span-2">
            <h4 className="font-bold text-lg mb-6 tracking-wide">
              POPULAR SERVICES
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-15">
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

          {/* SUBSCRIBE */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg tracking-wide mb-4">SUBSCRIBE</h4>

            <p className="text-sm tracking-wide text-neutral-300">YOUR EMAIL</p>

            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full bg-transparent text-white border-b border-neutral-500 focus:outline-none py-2 text-sm"
            />

            <div className="pt-4">
              <AnimatedButton
                text="SUBSCRIBE"
                width="170px"
                height="40px"
                bgColor="#ff6b35"
                borderColor="#ff6b35"
                cornerColor="#000000"
                textColor="#ffffff"
                onClick={() => console.log("Subscribe Click")}
              />
            </div>
          </div>
        </div>
      </footer>

      {/* BOTTOM BAR */}
      <div className="border-t border-neutral-800 bg-neutral-950 font-chakra">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 text-center">
            <div className="text-xs lg:text-sm text-neutral-300 flex items-center gap-2">
              © 2025 Star Motors Authorised : Service Center. Designed By
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
