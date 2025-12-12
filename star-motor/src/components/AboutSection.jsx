import React from "react";
import aboutImg from "../assets/aboutsection.jpg"; // 👉 apni image ka path yaha daalna

export default function AboutSection() {
  return (
    <section className="w-full bg-[#111111] pb-10 px-6 lg:px-20">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-12  items-center">
        {/* LEFT SIDE CONTENT */}
        <div>
          {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-chakra font-bold text-white leading-tight">
            WE MAKE AUTO REPAIR <br /> MORE CONVENIENT
          </h2> */}

          <p className="text-gray-300 text-lg leading-relaxed mt-6 font-chakra">
            At <span className="text-orange-500 font-semibold"> Star Motors</span> , we bring you a complete range of automotive care —
            all under one roof. From regular maintenance and repair services to
            car/bike foam wash, interior cleaning, denting & painting, car
            modification, wheel alignment, wheel balancing, and even tyre
            replacement with advanced tyre changer, we do it all with precision
            and perfection.
            <br />
            With a team of skilled technicians and modern equipment, we ensure
            your vehicle receives the best care, durability, and performance it
            deserves. Whether it’s restoring your car’s shine or enhancing its
            performance, Star Motors is your trusted destination for premium car
            and bike care services.
            <br />
            <br />
            Drive In. Drive Out – With Confidence.
          </p>

          {/* Progress Bars */}
       
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-full overflow-hidden rounded-lg">
          <img
            src={aboutImg}
            alt="About StarMotors"
            className="w-full h-full object-cover rounded-lg opacity-95 hover:opacity-100 duration-300"
          />
        </div>
      </div>
    </section>
  );
}
