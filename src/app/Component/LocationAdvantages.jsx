"use client";

import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function CircleAdvantages({ openForm }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();
  }, []);

  const locations = [
    { label: "200 meters from the Delhi–Mumbai Expressway.", x: "30%", y: "8%" },
    { label: "1 km from Faridabad Jewar International Airport Express Highway.", x: "68%", y: "8%" },
    { label: "20 min drive from Jewar international Airport.", x: "20%", y: "30%" },
    { label: "6Km From The Eastern Peripheral Expressway (KGP).", x: "80%", y: "30%" },
    { label: "5 min drive from operational metro station.", x: "55%", y: "45%" },
    { label: "Aprox 10 Km from Faridabad–Gurugram Expressway.", x: "20%", y: "55%" },
    { label: "5 min drive from railway station and bus stand.", x: "78%", y: "60%" },
    { label: "15 Minutes drive from upcoming film city and electronic city.", x: "28%", y: "70%" },
    { label: "45 min drive from IGI International Airport.", x: "70%", y: "80%" },
    { label: "3 km from National Highway 19.", x: "42%", y: "93%" }
  ];

  return (
    <>
      <section className="w-full py-7 sm:py-16 px-4 sm:px-6 bg-white flex justify-center">
        <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row gap-10">

          {/* ------------------------ 
              MOBILE IMAGE VERSION 
          ------------------------ */}
          <div className="block lg:hidden w-full">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-light text-black tracking-wide">LOCATION</h2>
              <h2 className="text-4xl font-semibold text-[#b19763] tracking-wider mt-2">
                ADVANTAGES
              </h2>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                Discover the unmatched connectivity and strategic location benefits
                that elevate your lifestyle and daily convenience.
              </p>
            </div>

            {/* Mobile Image */}
            <img
              src="/locationadj.png"  
              alt="Location Map"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* ------------------------
              DESKTOP/TABLET CIRCLES 
          ------------------------ */}
          <div className="relative w-full lg:w-[60%] h-[420px] sm:h-[520px] md:h-[600px] lg:h-[700px] hidden lg:block">

            {[400, 550, 700].map((size, i) => (
              <motion.div
                key={"desk" + i}
                initial={{ opacity: 0.5, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
                className="absolute rounded-full border"
                style={{
                  borderColor: "#b19763",
                  width: size,
                  height: size,
                  top: `calc(50% - ${size / 2}px)`,
                  left: `calc(50% - ${size / 2}px)`
                }}
              />
            ))}

            {/* DESKTOP LABELS */}
            {locations.map((loc, i) => (
              <div
                key={i}
                className="absolute max-w-[240px]"
                style={{
                  top: loc.y,
                  left: loc.x,
                  transform: "translate(-50%, -50%)"
                }}
              >
                <div className="w-5 h-5 bg-[#b19763] rounded-full mx-auto"></div>

                <div className="bg-white border border-[#b19763] mt-2 px-3 py-2 text-[16px] shadow-md rounded-md text-center leading-tight w-[250px]">
                  {loc.label}
                </div>
              </div>
            ))}
          </div>

          {/* ------------------------
              RIGHT SIDE (DESKTOP ONLY)
          ------------------------ */}
          <div
            className="w-full lg:w-[40%] hidden lg:flex flex-col justify-center text-left px-6"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-light text-black tracking-wide leading-tight">
              LOCATION
            </h2>

            <h2 className="text-5xl font-semibold text-[#b19763] tracking-wider leading-tight mt-2">
              ADVANTAGES
            </h2>

            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              Discover the unmatched connectivity and strategic location benefits
              that elevate your lifestyle and daily convenience.
            </p>
          </div>

        </div>
      </section>

      <div className="w-full flex justify-center mt-4" data-aos="fade-up">
        <button
          className="
              cursor-pointer
              px-6 sm:px-8
              py-3 
              rounded-lg 
              bg-[#8B6A4F] 
              text-white 
              font-semibold
              text-base sm:text-lg
              tracking-wide 
              shadow-lg 
              transition-all 
              duration-300
              hover:bg-[#9C7B5C] 
              hover:-translate-y-1
              active:scale-95
            "
          onClick={openForm}
        >
          Book Your Site Visit Today
        </button>
      </div>
    </>
  );
}
