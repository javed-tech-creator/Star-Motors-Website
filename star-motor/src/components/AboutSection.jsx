import React from "react";
import aboutImg from "../assets/aboutsection.jpg"; // 👉 apni image ka path yaha daalna

export default function AboutSection() {
  return (
    <section className="w-full bg-[#111111] py-10 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-12  items-center">
        {/* LEFT SIDE CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-chakra font-bold text-white leading-tight">
            WE MAKE AUTO REPAIR <br /> MORE CONVENIENT
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mt-6 font-chakra">
            StarMotors is a trusted automotive service hub dedicated to
            delivering professional car care with precision and reliability.
            From routine maintenance to premium detailing, we ensure every
            vehicle receives the highest level of attention and expertise.
          </p>

          {/* Progress Bars */}
          <div className="mt-10 space-y-6">
            {/* ---------- EXPERTS ---------- */}
            <div>
              <div className="flex justify-between text-white font-chakra mb-1">
                <span>HIGHLY QUALIFIED EXPERTS</span>
                <span>90%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded">
                <div
                  className="h-full bg-[#ff6b35] rounded"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            {/* ---------- CLEAN FACILITY ---------- */}
            <div>
              <div className="flex justify-between text-white font-chakra mb-1">
                <span>CLEAN, MODERN FACILITY</span>
                <span>99%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded">
                <div
                  className="h-full bg-[#ff6b35] rounded"
                  style={{ width: "99%" }}
                ></div>
              </div>
            </div>
          </div>
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
