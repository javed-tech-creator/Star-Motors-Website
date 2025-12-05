import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import OurServices from "../components/ServicesSection";
import ServicesHeader from "../components/ServicesHeader";
import AboutUsHeader from "../components/AboutUsHeader";
import CTASection from "../components/CTASection";
import OurClientsHeading from "../components/OurClientsHeading";
import ClientBrands from "../components/ClientBrands";
import ClientTestimonials from "../components/ClientTestimonials";
import ClientTestimonialsHeader from "../components/ClientTestimonialsHeader";
import LatestArticlesHeader from "../components/LatestArticlesHeader";
import LatestArticlesSection from "../components/LatestArticlesSection";

const MainPage = () => {
  return (
    <>
      <HeroSection />

      {/*  ABOUT HEADING ADDED HERE  */}
      <AboutUsHeader />
      <AboutSection />

       <LatestArticlesHeader />
      <LatestArticlesSection />

      {/*  Services HEADING ADDED HERE  */}
      <ServicesHeader />
      <OurServices />

      {/*  CTA HEADING ADDED HERE  */}
      <CTASection />

      {/*  client tail HEADING ADDED HERE  */}
      <OurClientsHeading />
      <ClientBrands />

      {/*  What Our Client Says HEADING ADDED HERE  */}
      <ClientTestimonialsHeader />
      <ClientTestimonials />

     
    </>
  );
};

export default MainPage;
