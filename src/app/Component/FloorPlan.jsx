"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function FloorPlan() {
    useEffect(() => {
        AOS.init({ duration: 800, once: false });
        AOS.refresh();
      }, []);
  return (
    <section className="w-full py-16 px-6 flex flex-col items-center" id="floorplan">
      
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-wide mb-10" data-aos="fade-up">
        Floor Plans
      </h2>

      {/* Images Wrapper (max width control) */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10" data-aos="fade-up">

        {/* Plan 1 */}
        <div className="rounded-xl overflow-hidden shadow-lg justify-center">
          <Image
            src="/flat/img23.jpg"
            alt="Floor Plan 1"
            width={500}
            height={350}
            className="object-contain w-full max-h-[450px]"
          />
          <div className="flex flex-col w-full items-center justify-center text-center py-5">
            <h2 className="text-xl font-semibold text-[#8B6A4F]">Lower Level Duplex Floor Plan</h2>
            <p className="font-semibold text-[#333]">Super Area 1490 Sq. Feet</p>
          </div>
        </div>

        {/* Plan 2 */}
        <div className="rounded-xl overflow-hidden shadow-lg  justify-center">
          <Image
            src="/flat/img24.jpg"
            alt="Floor Plan 2"
            width={500}
            height={350}
            className="object-contain w-full max-h-[450px]"
          />
          <div className="flex flex-col w-full items-center justify-center text-center py-5">
            <h2 className="text-xl font-semibold text-[#8B6A4F]">Upper Level Duplex Floor Plan</h2>
            <p className="font-semibold text-[#333]">Super Area 1035 Sq. Feet</p>
          </div>
        </div>

      </div>

      {/* Download Button */}
      <div className="mt-10">
        <a
          href="/Faridabad_Eye_Brochure.pdf"
          download
          className="
            cursor-pointer
            px-8 py-3 rounded-lg bg-[#8B6A4F] text-white font-semibold
            text-lg tracking-wide shadow-lg transition-all duration-300
            hover:bg-[#9C7B5C] hover:-translate-y-1 active:scale-95
          "
        >
          Download Brochure
        </a>
      </div>
    </section>
  );
}
