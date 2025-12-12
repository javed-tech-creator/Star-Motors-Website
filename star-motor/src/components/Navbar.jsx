import React, { useState } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.jpg";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const services = [
    { name: "CAR REPAIRING SERVICE", path: "service/car-reparing-service" },
    { name: "DENTING & PAINTING", path: "service/car-denting-painting" },
    {
      name: "AC & Electrical Services",
      path: "service/car-ac-electrical-services",
    },
    { name: "CAR FOAM WASH", path: "service/car-foam-wash" },
    { name: "WHEEL ALIGNMENT", path: "service/car-wheel-alignment" },
    { name: "WHEEL BALANCING", path: "service/car-wheel-balancing" },
    { name: "INTERIOR CLEANING", path: "service/car-interior-cleaning" },
    { name: "CAR MODIFICATION", path: "service/car-modification" },
  ];

  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black backdrop-blur-sm font-chakra ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-25">
          {/* Logo */}

          <div className="flex  cursor-pointer" onClick={() => navigate("/")}>
            <img
              src={logo}
              alt="Star Motors Logo"
              className="w-52 h-25 object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10 px-2">
            {/* HOME */}
            <Link
              to="/"
              className="text-sm hover:text-[#ff6b35] transition-colors text-white"
            >
              HOME
            </Link>

            {/* ABOUT DROPDOWN */}
            <div className="relative group">
              <button className="text-sm text-white hover:text-[#ff6b35] flex items-center gap-1">
                ABOUT <span className="text-[#ff6b35] text-lg">+</span>
              </button>

              <div
                className="
                absolute top-10 left-0 w-45 bg-[#0f0f0f]
                border border-white
                max-h-0 
                opacity-0 overflow-hidden
                 group-hover:max-h-[500px] group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-500 ease-out
                "
              >
                <Link
                  to="about"
                  className="block px-4 py-1.5 text-white hover:text-[#ff6b35]"
                >
                  ABOUT US
                </Link>

                <Link
                  to="management"
                  className="block px-4 py-1.5 text-white hover:text-[#ff6b35]"
                >
                  OUR MANAGEMENT
                </Link>
              </div>
            </div>

            {/* <Link
            to="about"
              className="text-sm hover:text-[#ff6b35] transition-colors text-white"
          >
            ABOUT US
          </Link> */}

            {/* MANAGEMENT */}
            {/* <Link
              to="management"
              className="text-sm hover:text-[#ff6b35] transition-colors text-white text-center"
            >
              OUR MANAGEMENT
            </Link> */}

            {/* SERVICES DROPDOWN */}
            <div className="relative group">
              <button className="text-sm text-white hover:text-[#ff6b35] flex items-center gap-1">
                SERVICES <span className="text-[#ff6b35] text-lg">+</span>
              </button>

              <div
                className="
      absolute top-10 left-0 w-60 bg-[#0f0f0f]
      border border-white overflow-hidden
      max-h-0 opacity-0 translate-y-2
      group-hover:max-h-[500px] group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-500 ease-out
    "
              >
                {services.map((service, index) => (
                  <Link
                    to={service.path}
                    key={index}
                    className="block px-4 py-1.5 text-white hover:text-[#ff6b35]"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* BLOG */}
            <Link
              to="blog"
              className="text-sm hover:text-[#ff6b35] transition-colors text-white"
            >
              BLOG
            </Link>

            {/* GALLERY */}
            <Link
              to="gallery"
              className="text-sm hover:text-[#ff6b35] transition-colors text-white"
            >
              OUR WORKS
            </Link>

            {/* CONTACT */}
            <Link
              to="contact"
              className="text-sm hover:text-[#ff6b35] transition-colors text-white text-center"
            >
              CONTACT US
            </Link>
          </div>

          {/* Contact Number (Desktop) */}
          <Link
            to="tel:9956877786"
            className="
            hidden 
            lg:flex
            justify-center
              font-chakra
              relative
              text-white
              text-[14px]
              font-semibold
              px-6
              py-1.5
              uppercase
              tracking-tight
               items-center
              border-2 border-[#ff6b35]
              transition-all duration-300
              group
              min-w-[170px]     
            "
          >
            <span
              className="
                absolute inset-0 bg-[#ff6b35]
                scale-x-0 origin-center
                transition-transform duration-300 ease-out
                group-hover:scale-x-100
                z-0
              "
            ></span>

            <span className="absolute h-7 w-5 bg-black rotate-52 -left-2 -top-4 pointer-events-none"></span>
            <span className="absolute h-7 w-5 bg-black rotate-52 -right-2 -bottom-4 pointer-events-none"></span>

            <span className="relative z-10">+91 99568 77786</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="
    lg:hidden 
    text-white 
    p-1 
    border border-white
    rounded-md 
    w-8 h-8 
    flex items-center justify-center
    hover:text-[#ff6b35]
    transition-all duration-300
  "
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}

      <div
        className={`lg:hidden fixed top-0 left-0 min-h-screen w-72 bg-[#0f0f0f]  shadow-2xl transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className=" bg-black pl-5 flex items-start h-full w-full border-b border-gray-700 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="Star Motors Logo"
            className=" h-20 object-contain"
          />
        </div>

        <div className="px-4 mt-2 bg-[#0f0f0f] text-sm font-semibold">
          {/* ---- HOME ---- */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex justify-between items-center text-white hover:text-[#ff6b35] py-2 border-b border-gray-700"
          >
            HOME
          </Link>

          {/* ---- ABOUT DROPDOWN ---- */}
          <MobileDropdown title="ABOUT">
            <Link
              to="about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#ff6b35] text-gray-300"
            >
              ABOUT US
            </Link>
            <Link
              to="management"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-[#ff6b35] text-gray-300"
            >
              OUR MANAGEMENT
            </Link>
          </MobileDropdown>
          {/* <Link
            to="about"
            className="flex justify-between items-center text-white hover:text-[#ff6b35] py-2 border-b border-gray-700"
          >
            ABOUT US
          </Link> */}

          {/* ---- MANAGEMENT ---- */}
          {/* <Link
            to="management"
            onClick={() => setMobileMenuOpen(false)}
            className="flex justify-between items-center text-white hover:text-[#ff6b35] py-2 border-b border-gray-700"
          >
            MANAGEMENT
          </Link> */}

          {/* ---- SERVICES DROPDOWN ---- */}
          <MobileDropdown title="SERVICES">
            {services.map((service, index) => (
              <Link
                to={service.path}
                key={index}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-gray-300 hover:text-[#ff6b35]"
              >
                {service.name}
              </Link>
            ))}
          </MobileDropdown>

          {/* ---- BLOG ---- */}
          <Link
            to="blog"
            onClick={() => setMobileMenuOpen(false)}
            className="flex justify-between items-center text-white py-2 border-b hover:text-[#ff6b35] border-gray-700"
          >
            BLOG
          </Link>

          {/* ---- GALLERY ---- */}
          <Link
            to="gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="flex justify-between items-center hover:text-[#ff6b35] text-white py-2 border-b border-gray-700"
          >
            OUR WORKS
          </Link>

          {/* ---- CONTACT US ---- */}
          <Link
            to="contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex justify-between items-center hover:text-[#ff6b35] text-white py-2 border-b border-gray-700"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
}
const MobileDropdown = ({ title, children }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-700 ">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center hover:text-[#ff6b35] text-white py-2 "
      >
        {title}
        <span className=" text-white hover:text-[#ff6b35]">
          {open ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-4">{children}</div>
      </div>
    </div>
  );
};
