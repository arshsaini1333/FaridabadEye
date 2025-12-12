"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function LegendWithImage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    // refresh AOS if dynamic content is added later:
    AOS.refresh();
  }, []);
  return (
    <div id="locationmap" className="mt-20">
      <h2
        className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide mb-2"
        data-aos="fade-up"
      >
        LOCATION MAP
      </h2>

      <section
        className="
          w-full 
          flex flex-col md:flex-row 
          justify-between 
          gap-10 
          p-4 sm:p-6 md:p-10 
          items-start
        "
        data-aos="fade-up"
      >
        {/* LEFT SIDE – LEGEND */}
        <div className="w-full md:w-1/3 space-y-3 sm:space-y-4">

          <h1 className="text-lg sm:text-xl font-bold tracking-wide">FARIDABAD</h1>

          <p className="text-xs sm:text-sm leading-tight">
            FINAL DEVELOPMENT PLAN FOR FARIDABAD BALLABGARH CONTROL AREAS
          </p>

          <p className="text-xs sm:text-sm font-medium">PROPOSED LAND USE FOR 2011 AD</p>

          <h2 className="text-md sm:text-lg font-semibold mt-1 mb-1">LEGEND</h2>

          {/* EXISTING FEATURES */}
          <div className="space-y-1 sm:space-y-2">
            <LegendRow label="STATE BOUNDARY" color="#ffffff" border="border-red-500" />
            <LegendRow label="CONTROLLED AREA BOUNDARY" color="#ffffff" border="border-green-600" />
            <LegendRow label="M.C.F. BOUNDARY" color="#ffffff" border="border-red-700" />
            <LegendRow label="ROAD" color="#ffffff" border="border-gray-700" />
            <LegendRow label="CANAL/NALA" color="#ffffff" border="border-blue-500" />
            <LegendRow label="RAILWAY LINE" customIcon />
            <LegendRow label="ABADI" color="#f4cd73" />
          </div>

          <h2 className="text-md sm:text-lg font-semibold mt-2 mb-1">LANDUSE</h2>

          {/* LANDUSE */}
          <div className="space-y-1 sm:space-y-2">
            <LegendRow label="INDUSTRIAL AREA" color="#8C50A3" />
            <LegendRow label="RESIDENTIAL AREA" color="#DDD556" />
            <LegendRow label="COMMERCIAL AREA" color="#1194C6" />
            <LegendRow label="GREEN LAND" color="#478447" />
            <LegendRow label="TRANSPORT & COMMUNICATION" color="#676966" />
            <LegendRow label="INSTITUTIONAL AREA" color="#D82D2E" />
            <LegendRow label="AGRICULTURAL ZONE" color="#DBE8B8" />
            <LegendRow label="HOSPITAL" color="#EFB7C5" hasCross />
            <LegendRow label="COLLEGE" color="#ffffff" border="border-gray-500" />
          </div>
        </div>

        {/* RIGHT SIDE – IMAGE */}
        <div className="w-full md:w-1/2">
          <div
            className="
              relative 
              w-full 
              h-[90vh] 
              rounded-lg overflow-hidden shadow-md
            "
          >
            <Image
              src="/flat/img22.jpg"
              alt="Map legend"
              fill
              className="
                  
                bg-white
              "
            />
          </div>
        </div>

      </section>
    </div>
  );
}

/* LEGEND ROW COMPONENT */
function LegendRow({ label, color, border, customIcon, hasCross }) {
  return (
    <div className="flex items-center gap-2 text-xs sm:text-sm">
      
      {/* Default block */}
      {!customIcon && !hasCross && (
        <div
          className={`w-4 h-3 sm:w-5 sm:h-3 rounded-sm border ${border || ""}`}
          style={{ backgroundColor: color }}
        ></div>
      )}

      {/* Railway icon */}
      {customIcon && (
        <div className="flex items-center gap-[2px]">
          <div className="w-[2px] h-4 bg-black" />
          <div className="w-[2px] h-4 bg-white border border-black" />
        </div>
      )}

      {/* Hospital icon */}
      {hasCross && (
        <div className="relative w-4 h-3 sm:w-5 sm:h-3 bg-pink-200 rounded-sm flex items-center justify-center">
          <span className="text-red-600 font-bold text-[8px] sm:text-[10px] leading-none">+</span>
        </div>
      )}

      <span>{label}</span>
    </div>
  );
}
