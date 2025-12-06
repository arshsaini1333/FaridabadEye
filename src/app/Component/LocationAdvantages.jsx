"use client";

import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function CircleAdvantages({ openForm }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, []);

  const locations = [
    "200 meters from the Delhi–Mumbai Expressway.",
    "1 km from Faridabad Jewar International Airport Express Highway.",
    "20 min drive from Jewar international Airport.",
    "6Km From The Eastern Peripheral Expressway (KGP).",
    "5 min drive from operational metro station.",
    "Aprox 10 Km from Faridabad–Gurugram Expressway.",
    "5 min drive from railway station and bus stand.",
    "15 Minutes drive from upcoming film city and electronic city.",
    "45min drive from IGI International Airport.",
    "3 km from National Highway 19."
  ];

  // Mobile ARC positions WITH MORE VERTICAL GAP
  const mobileArc = [
    { top: "5%", left: "50%" },
    { top: "15%", left: "72%" },
    { top: "30%", left: "88%" },
    { top: "48%", left: "78%" },
    { top: "62%", left: "50%" },
    { top: "48%", left: "22%" },
    { top: "30%", left: "12%" },
    { top: "15%", left: "28%" },
    { top: "78%", left: "68%" },
    { top: "78%", left: "32%" }
  ];

  // Desktop positions as before
  const desktopXY = [
    { x: "8%", y: "5%" },
    { x: "58%", y: "8%" },
    { x: "12%", y: "30%" },
    { x: "60%", y: "30%" },
    { x: "38%", y: "50%" },
    { x: "6%", y: "60%" },
    { x: "72%", y: "58%" },
    { x: "18%", y: "80%" },
    { x: "60%", y: "78%" },
    { x: "42%", y: "93%" }
  ];

  return (
    <>
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-white flex justify-center">
        <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row gap-10">

          {/* LEFT AREA */}
          <div className="relative w-full lg:w-[60%] 
            h-[600px] sm:h-[650px] md:h-[700px] lg:h-[750px]">

            {/* MOBILE CIRCLES */}
            {[200, 300, 380].map((size, i) => (
              <motion.div
                key={"mobCirc" + i}
                className="absolute rounded-full border lg:hidden"
                initial={{ opacity: 0.5, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{
                  borderColor: "#b19763",
                  width: size,
                  height: size,
                  top: `calc(50% - ${size / 2}px)`,
                  left: `calc(50% - ${size / 2}px)`
                }}
              />
            ))}

            {/* DESKTOP CIRCLES */}
            {[400, 550, 700].map((size, i) => (
              <motion.div
                key={"deskCirc" + i}
                className="absolute rounded-full border hidden lg:block"
                initial={{ opacity: 0.5, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
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
            {locations.map((label, i) => {
              const isDesktop =
                typeof window !== "undefined" && window.innerWidth >= 1024;

              const pos = isDesktop ? desktopXY[i] : mobileArc[i];

              return (
                <div
                  key={i}
                  className="absolute text-center"
                  style={{
                    top: pos.top || pos.y,
                    left: pos.left || pos.x,
                    transform: "translate(-50%, -50%)"
                  }}
                >
                  <div className="w-3 h-3 lg:w-5 lg:h-5 bg-[#b19763] rounded-full mx-auto"></div>

                  <div
                    className="
                      bg-white border border-[#b19763] shadow-md rounded-md mt-3
                      px-3 py-2
                      text-[11px] sm:text-[12px] lg:text-[15px]
                      max-w-[160px] sm:max-w-[190px] lg:max-w-[270px]
                      leading-snug
                    "
                  >
                    {label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-light text-black">LOCATION</h2>
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#b19763] mt-2">
              ADVANTAGES
            </h2>
            <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg">
              Discover the unmatched connectivity and strategic location benefits
              that elevate your lifestyle and daily convenience.
            </p>
          </div>
        </div>
      </section>

      {/* CTA BUTTON */}
      <div className="w-full flex justify-center mt-6">
        <button
          onClick={openForm}
          className="px-8 py-3 bg-[#8B6A4F] text-white rounded-lg shadow-lg hover:-translate-y-1 transition"
        >
          Book Your Site Visit Today
        </button>
      </div>
    </>
  );
}
