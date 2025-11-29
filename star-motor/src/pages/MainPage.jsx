import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import OurServices from "../components/ServicesSection";
import ServicesHeader from "../components/ServicesHeader";
import AboutUsHeader from "../components/AboutUsHeader";

const MainPage = () => {
  useEffect(() => {
    const follower = document.getElementById("cursorFollower");

    const move = (e) => {
      follower.style.left = e.clientX + 12 + "px"; // pointer ke thoda right me
      follower.style.top = e.clientY + 12 + "px"; // pointer ke thoda bottom me
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {" "}
      <div
        id="cursorFollower"
        className="hidden lg:block cursor-follower"
      ></div>
      <div>
        <HeroSection />

        {/*  ABOUT HEADING ADDED HERE  */}
        <AboutUsHeader />
        <AboutSection />

        {/*  Services HEADING ADDED HERE  */}
        <ServicesHeader />
        <OurServices />
      </div>
    </>
  );
};

export default MainPage;
