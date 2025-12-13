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
import ChooseUS from "../components/ChooseUS";
import OurWorksHeading from "../components/OurWorksHeading";
import OurWorksSection from "../components/OurWorksSection";

const MainPage = () => {
  return (
    <>
      <HeroSection />

      {/*  ABOUT HEADING ADDED HERE  */}
      <AboutUsHeader />
      <AboutSection />

      {/* Stats */}
      <div className=" w-full py-10 px-6 lg:px-20 font-chakra">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "10+", label: "Years of Excellence" },
            { number: "10,000+", label: "Happy Customers" },
            { number: "100%", label: "Satisfaction Rate" },
            { number: "10+", label: "Services Offered" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-linear-to-br from-gray-600/50 to-black/10 rounded-xl border border-gray-800/50 hover:border-orange-500/50 transition-all duration-300"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/*  Services HEADING ADDED HERE  */}
      <ServicesHeader />
      <OurServices />

      {/*  CTA HEADING ADDED HERE  */}
      <ChooseUS />
      <CTASection />

         {/* Our Works  */}
      <OurWorksHeading />
      <OurWorksSection />

      {/*  client tail HEADING ADDED HERE  */}
      <OurClientsHeading />
      <ClientBrands />

      {/*  What Our Client Says HEADING ADDED HERE  */}
      <ClientTestimonialsHeader />
      <ClientTestimonials />

      <LatestArticlesHeader />
      <LatestArticlesSection />
    </>
  );
};

export default MainPage;
