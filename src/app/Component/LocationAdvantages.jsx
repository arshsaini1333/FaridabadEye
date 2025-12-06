"use client";

import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function CircleAdvantages({openForm}) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, []);

  const locations = [
    { label: "200 meters from the Delhi–Mumbai Expressway.", x: "15%", y: "8%" },
    { label: "1 km from Faridabad Jewar International Airport Express Highway.", x: "58%", y: "8%" },
    { label: "20 min drive from Jewar international Airport.", x: "12%", y: "30%" },
    { label: "6Km From The Eastern Peripheral Expressway (KGP).", x: "60%", y: "30%" },
    { label: "5 min drive from operational metro station.", x: "38%", y: "45%" },
    { label: "Aprox 10 Km from Faridabad–Gurugram Expressway.", x: "10%", y: "65%" },
    { label: "5 min drive from railway station and bus stand.", x: "58%", y: "60%" },
    { label: "15 Minutes drive from upcoming film city and electronic city.", x: "18%", y: "80%" },
    { label: "45min drive from IGI International Airport.", x: "60%", y: "78%" },
    { label: "3 km from National Highway 19.", x: "42%", y: "93%" }
  ];

  return (
    <>
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-white flex justify-center">
      <div
        className="
          w-full max-w-7xl 
          flex 
          flex-col-reverse lg:flex-row 
          gap-10
        "
      >

        
        

        {/* LEFT SIDE - CIRCLES SECTION */}
        <div
          className="
            relative 
            w-full 
            lg:w-[60%]
            h-[420px] sm:h-[520px] md:h-[600px] lg:h-[700px]
          "
        >

          {/* DESKTOP CIRCLES (unchanged) */}
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
              className="absolute rounded-full border hidden lg:block"
              style={{
                borderColor: "#b19763",
                width: size,
                height: size,
                top: `calc(50% - ${size / 2}px)`,
                left: `calc(50% - ${size / 2}px)`
              }}
            />
          ))}

          {/* MOBILE/TABLET CIRCLES */}
          {[160, 240, 320].map((size, i) => (
            <motion.div
              key={"mob" + i}
              initial={{ opacity: 0.5, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              className="absolute rounded-full border lg:hidden"
              style={{
                borderColor: "#b19763",
                width: size,
                height: size,
                top: `calc(50% - ${size / 2}px)`,
                left: `calc(50% - ${size / 2}px)`
              }}
            />
          ))}

          {/* LABELS */}
          {locations.map((loc, i) => (
            <div
              key={i}
              className="
                absolute 
                max-w-[150px] sm:max-w-[180px] lg:max-w-[240px]
              "
              style={{
                top: loc.y,

                // MOBILE/TABLET: push slightly right
                left: `calc(${loc.x} + 10%)`,

                // DESKTOP: keep original placement
                ...(typeof window !== "undefined" &&
                window.innerWidth >= 1024
                  ? { left: loc.x }
                  : {}),

                transform: "translate(-50%, -50%)"
              }}
            >
              <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-[#b19763] rounded-full mx-auto"></div>

              <div
                className="
                  bg-white border border-[#b19763] mt-2 
                  px-2 sm:px-3 py-2 
                  text-[10px] sm:text-[11px] lg:text-[12px]
                  shadow-md rounded-md text-center
                  hover:scale-[1.05] hover:shadow-lg 
                  transition-all leading-tight
                "
              >
                {loc.label}
              </div>
            </div>
          ))}

        </div>
{/* RIGHT SIDE CONTENT (TOP ON MOBILE, RIGHT ON DESKTOP) */}
        <div
          className="
            w-full 
            lg:w-[40%] 
            flex flex-col 
            justify-center 
            text-center lg:text-left 
            px-2 lg:px-6
          "
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl font-light text-black tracking-wide leading-tight">
            LOCATION
          </h2>

          <h2 className="text-4xl sm:text-5xl font-semibold text-[#b19763] tracking-wider leading-tight mt-2">
            ADVANTAGES
          </h2>

          <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
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
                Book Your Visit Today
              </button>
            </div>
    </>
  );
}
