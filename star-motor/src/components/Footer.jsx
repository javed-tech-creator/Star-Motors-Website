import React from "react";
import { Link, useNavigate } from "react-router-dom";
import cclogo from "../assets/cc-logo.png";
import AnimatedButton from "./AnimatedButton";
import logo from "../assets/Logo.jpeg";
import { Mail, MapPin, Phone } from "lucide-react";

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
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-20">
          {/* BRAND INFO */}
          {/* <div>
              <a
              href="https://starmotor-admin.netlify.app"
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
              </a>
            </div> */}

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
          <div className="space-y-2 text-neutral-300">
            <h4 className="font-bold text-lg tracking-wide mb-4 text-white">
              GET IN TOUCH
            </h4>

            {/* ADDRESS */}
            <div className="flex gap-2 justify-center">
              <MapPin size={30} className="text-orange-500" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=23/A,+New+Market+Road,+Mumbai,+Maharashtra+400001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm mt-1 leading-6 block hover:text-orange-400 transition cursor-pointer"
              >
                Bharat Gas Plant, Opp. HP Petrol Pump Misripur, Kursi Rd.
                Lucknow 226026
              </a>
            </div>
            <div>
              {/* PHONE */}
              <div className="flex gap-2 items-center">
                <Phone size={25} className="text-orange-500" />

                <div className="text-sm mt-1 flex flex-wrap gap-1">
                  <a
                    href="tel:+919956877786"
                    className="hover:text-orange-400 transition cursor-pointer"
                  >
                    +91 99568 77786
                  </a>
                  <span>,</span>
                  <a
                    href="tel:+919026119669"
                    className="hover:text-orange-400 transition cursor-pointer"
                  >
                    +91 90261 19669
                  </a>
                  <span>,</span>
                  <a
                    href="tel:+918545045881"
                    className="hover:text-orange-400 transition cursor-pointer"
                  >
                    +91 85450 45881
                  </a>
                  ,
                  <span>
                    <a
                      href="https://starmotor-admin.netlify.app"
                      target="_blank"
                      className="
       cursor-pointer
        text-white 
        font-semibold 
        hover:text-orange-600 
        transition 
        duration-300
      "
                    >
                      Admin Login
                    </a>
                  </span>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex gap-2 items-center">
                <Mail size={14} className="text-orange-500" />
                <a
                  href="mailto:starmotorslucknow@gmail.com"
                  className="text-sm mt-1 block hover:text-orange-400 transition cursor-pointer"
                >
                  starmotorslucknow@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Map SECTION */}
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56911.07434078029!2d80.90426494863281!3d26.9370485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957b5e7d0468b%3A0xdc8a1fac896cec9d!2sStar%20Motors%20%E2%80%93%20Car%20Service%2C%20Repair%20%26%20Foam%20Wash%20Center%20Lucknow!5e0!3m2!1sen!2sin!4v1765450867551!5m2!1sen!2sin"
              className="w-full h-full rounded-md"
              loading="lazy"
              title="Google Map"
            ></iframe>
            {/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          </div>
        </div>
      </footer>

      {/* BOTTOM BAR */}
      <div className="border-t border-neutral-800 bg-neutral-950 font-chakra">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-center items-center  text-center">
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
