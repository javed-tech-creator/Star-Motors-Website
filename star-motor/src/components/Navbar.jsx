import { useState } from "react";
import { ChevronDown } from "lucide-react";
import logo from "../assets/";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="w-full fixed top-0 left-0 bg-white shadow-md z-50 backdrop-blur-md bg-opacity-80">
      <nav className="max-w-[1300px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Star Motors Logo"
          className="h-12 w-auto object-contain cursor-pointer"
        />

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-800 font-medium text-[16px]">
          <li className="hover:text-blue-600 transition-all cursor-pointer">
            Home
          </li>

          {/* About Dropdown */}
          <li
            className="relative cursor-pointer"
            onClick={() => toggleDropdown("about")}
          >
            <div className="flex items-center hover:text-blue-600 transition-all">
              About <ChevronDown size={18} className="ml-1" />
            </div>

            {openDropdown === "about" && (
              <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md p-3 w-48 animate-fadeIn">
                <p className="p-2 hover:bg-gray-100 rounded">Who We Are</p>
                <p className="p-2 hover:bg-gray-100 rounded">
                  Mission & Vision
                </p>
                <p className="p-2 hover:bg-gray-100 rounded">History</p>
              </div>
            )}
          </li>

          {/* Management Dropdown */}
          <li
            className="relative cursor-pointer"
            onClick={() => toggleDropdown("management")}
          >
            <div className="flex items-center hover:text-blue-600 transition-all">
              Our Management <ChevronDown size={18} className="ml-1" />
            </div>

            {openDropdown === "management" && (
              <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md p-3 w-52 animate-fadeIn">
                <p className="p-2 hover:bg-gray-100 rounded">Board Members</p>
                <p className="p-2 hover:bg-gray-100 rounded">Leadership Team</p>
                <p className="p-2 hover:bg-gray-100 rounded">Advisors</p>
              </div>
            )}
          </li>

          {/* Services Dropdown */}
          <li
            className="relative cursor-pointer"
            onClick={() => toggleDropdown("services")}
          >
            <div className="flex items-center hover:text-blue-600 transition-all">
              Services <ChevronDown size={18} className="ml-1" />
            </div>

            {openDropdown === "services" && (
              <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md p-3 w-56 animate-fadeIn">
                <p className="p-2 hover:bg-gray-100 rounded">
                  Car Service / Reparing
                </p>
                <p className="p-2 hover:bg-gray-100 rounded">
                  Car, Bike Foam Wash
                </p>
                <p className="p-2 hover:bg-gray-100 rounded">
                  Interior Cleaning
                </p>
                <p className="p-2 hover:bg-gray-100 rounded">
                  Denting & Painting
                </p>
                <p className="p-2 hover:bg-gray-100 rounded">
                  Car Modification
                </p>
                <p className="p-2 hover:bg-gray-100 rounded">Wheel Alignment</p>
                <p className="p-2 hover:bg-gray-100 rounded">Wheel Balancing</p>
                <p className="p-2 hover:bg-gray-100 rounded">
                  Tyre With Tyre Changer
                </p>
              </div>
            )}
          </li>

          <li className="hover:text-blue-600 transition-all cursor-pointer">
            Career
          </li>
          <li className="hover:text-blue-600 transition-all cursor-pointer">
            Blog
          </li>
          <li className="hover:text-blue-600 transition-all cursor-pointer">
            Gallery
          </li>
          <li className="hover:text-blue-600 transition-all cursor-pointer">
            Contact Us
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-gray-800 text-3xl cursor-pointer">☰</div>
      </nav>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-in-out; }
      `}</style>
    </div>
  );
}
