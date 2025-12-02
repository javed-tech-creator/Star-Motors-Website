import React, { useState } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f0f0f] backdrop-blur-sm font-chakra ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-[#ff6b35] flex items-center justify-center text-[#ff6b35] text-xl font-bold">
              ⚙
            </div>
            <div className="text-xl font-bold text-white ">
              STAR<span className="text-[#ff6b35]  ">MOTORS</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
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
                ABOUT <span className="text-[#ff6b35]">+</span>
              </button>

              <div
                className="
                absolute top-10 left-0 w-48 bg-[#0f0f0f]
                border border-white
                max-h-0 
                opacity-0 overflow-hidden
                 group-hover:max-h-[500px] group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-500 ease-out
                "
              >
                <Link
                  to="#about-company"
                  className="block px-4 py-1.5 text-white hover:text-[#ff6b35]"
                >
                  ABOUT US
                </Link>

                <Link
                  to="#team"
                  className="block px-4 py-1.5 text-white hover:text-[#ff6b35]"
                >
                  OUR TEAM
                </Link>

                <Link
                  to="#works"
                  className="block px-4 py-1.5 text-white hover:text-[#ff6b35]"
                >
                  OUR WORKS
                </Link>

                <Link
                  to="#faq"
                  className="block px-4 py-1.5 text-white hover:text-[#ff6b35]"
                >
                  FAQ
                </Link>
              </div>
            </div>

            {/* MANAGEMENT */}
            <Link
              to="management"
              className="text-sm hover:text-[#ff6b35] transition-colors text-white"
            >
              OUR MANAGEMENT
            </Link>

            {/* SERVICES DROPDOWN */}
            <div className="relative group">
              <button className="text-sm text-white hover:text-[#ff6b35] flex items-center gap-1">
                SERVICES <span className="text-[#ff6b35]">+</span>
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
                <Link
                  to="service/service1"
                  className="block px-4 py-1.5 text-white hover:text-[#ff6b35]"
                >
                  CAR SERVICE/REPARING
                </Link>

                <Link
                  to="service/service2"
                  className="block px-4 py-1.5 text-white hover:text-[#ff6b35]"
                >
                  CAR, BIKE FOAM WASH
                </Link>

                <Link
                  to="service/single1"
                  className="block px-4 py-1.5 text-white hover:text-[#ff6b35]"
                >
                  INTERIOR CLEANING
                </Link>

                <Link
                  to="service/single2"
                  className="block px-4 py-1.5 text-white hover:text-[#ff6b35]"
                >
                  DENTING PAINTING
                </Link>

                <Link
                  to="service/single3"
                  className="block px-4 py-1.5 text-white hover:text-[#ff6b35]"
                >
                  CAR MODIFICATION
                </Link>

                <Link
                  to="service/single4"
                  className="block px-4 py-1.5 text-white hover:text-[#ff6b35]"
                >
                  WHEEL ALIGNMENT
                </Link>

                <Link
                  to="service/single5"
                  className="block px-4 py-1.5 text-white hover:text-[#ff6b35]"
                >
                  WHEEL BALANCING
                </Link>

                <Link
                  to="service/single6"
                  className="block px-4 py-1.5 text-white hover:text-[#ff6b35]"
                >
                  TYRE WITH TYRE CHANGING
                </Link>
              </div>
            </div>

            {/* BLOG */}
            <Link
              to="#blog"
              className="text-sm hover:text-[#ff6b35] transition-colors text-white"
            >
              BLOG
            </Link>

            {/* GALLERY */}
            <Link
              to="#gallery"
              className="text-sm hover:text-[#ff6b35] transition-colors text-white"
            >
              GALLERY
            </Link>

            {/* CONTACT */}
            <Link
              to="#contactus"
              className="text-sm hover:text-[#ff6b35] transition-colors text-white"
            >
              CONTACT US
            </Link>
          </div>

          {/* Contact Number (Desktop) */}
          <Link
            to="tel:7526074042"
            className="
            hidden 
            lg:flex
              font-chakra
              relative
              text-white
              text-[14px]
              font-semibold
              px-7
              py-1.5
              uppercase
              tracking-tight
               items-center
              border-2 border-[#ff6b35]
              transition-all duration-300
              group
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

            <span className="absolute h-7 w-5 bg-[#0f0f0f] rotate-52 -left-2 -top-4 pointer-events-none"></span>
            <span className="absolute h-7 w-5 bg-[#0f0f0f] rotate-52 -right-2 -bottom-4 pointer-events-none"></span>

            <span className="relative z-10">+91 752 60 74 042</span>
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
        <div className="flex gap-2 items-center px-4 py-10 border-b border-gray-700">
          <div className="w-10 h-10 rounded-full border-2 border-[#ff6b35] flex items-center justify-center text-[#ff6b35] text-xl font-bold">
            ⚙
          </div>
          <div className="text-xl font-bold text-white ">
            STAR<span className="text-[#ff6b35]  ">MOTORS</span>
          </div>
        </div>

        <div className="px-4 mt-2 bg-[#0f0f0f] text-sm font-semibold">
          {/* ---- HOME ---- */}
          <Link
            to="/"
            className="flex justify-between items-center text-white hover:text-[#ff6b35] py-2 border-b border-gray-700"
          >
            HOME
          </Link>

          {/* ---- ABOUT DROPDOWN ---- */}
          <MobileDropdown title="ABOUT">
            <Link
              to="#about-company"
              className="block py-2 hover:text-[#ff6b35] text-gray-300"
            >
              ABOUT US
            </Link>
            <Link
              to="#team"
              className="block py-2 hover:text-[#ff6b35] text-gray-300"
            >
              OUR TEAM
            </Link>
          </MobileDropdown>

          {/* ---- MANAGEMENT ---- */}
          <Link
            to="management"
            className="flex justify-between items-center text-white hover:text-[#ff6b35] py-2 border-b border-gray-700"
          >
            MANAGEMENT
          </Link>

          {/* ---- SERVICES DROPDOWN ---- */}
          <MobileDropdown title="SERVICES">
            <Link to="service/service1"  className="block py-2 text-gray-300 hover:text-[#ff6b35]">
              CSR SERVICE/REPARING
            </Link>
            <Link to="service/service2" className="block py-2 text-gray-300 hover:text-[#ff6b35]">
              CAR, BIKE FOAM WASH
            </Link>
            <Link to="service/single1" className="block py-2 text-gray-300 hover:text-[#ff6b35]">
              INTERIOR CLEANING
            </Link>
            <Link to="service/single2" className="block py-2 text-gray-300 hover:text-[#ff6b35]">
              DENTING PAINTING
            </Link>
            <Link  to="service/single3"className="block py-2 text-gray-300 hover:text-[#ff6b35]">
              CAR MODIFICATION
            </Link>
            <Link to="service/single4" className="block py-2 text-gray-300 hover:text-[#ff6b35]">
              WHEEL ALIGNMENT
            </Link>
            <Link to="service/single5" className="block py-2 text-gray-300 hover:text-[#ff6b35]">
              WHEEL BALANCING
            </Link>
            <Link to="service/single6" className="block py-2 text-gray-300 hover:text-[#ff6b35]">
              TYRE WITH TYRE CHANGING
            </Link>
          </MobileDropdown>

          {/* ---- BLOG ---- */}
          <Link
            to="#blog"
            onClick={() => setMobileMenuOpen(false)}
            className="flex justify-between items-center text-white py-2 border-b hover:text-[#ff6b35] border-gray-700"
          >
            BLOG
          </Link>

          {/* ---- GALLERY ---- */}
          <Link
            to="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="flex justify-between items-center hover:text-[#ff6b35] text-white py-2 border-b border-gray-700"
          >
            GALLERY
          </Link>

          {/* ---- CONTACT US ---- */}
          <Link
            to="#contactus"
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
