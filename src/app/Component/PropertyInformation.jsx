"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function PropertyInformation({ openForm }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();
  }, []);

  return (
    <section className="w-full py-12 sm:py-16" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Main Row: Left Text + Right Image */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          data-aos="fade-up"
        >
          {/* Left Content */}
          <div className="mt-4 md:mt-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black leading-snug mb-4">
              Faridabad’s Most Prestigious Address
            </h2>

            <p className="text-base sm:text-lg text-black leading-relaxed">
              Experience duplex living in Faridabad’s tallest and most iconic
              residential tower. A new benchmark in upscale living featuring
              modern design, vast interiors, and panoramic skyline views.
            </p>

            <div
  className="w-full flex justify-center sm:justify-start mt-8 sm:mt-10"
  data-aos="fade-up"
>
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
    Reserve Your Exclusive Space Today
  </button>
</div>


          </div>

          {/* Right Image */}
          <div
            className="
              w-full 
              h-[260px] 
              sm:h-[340px] 
              md:h-[420px] 
              lg:h-[500px] 
              rounded-2xl 
              overflow-hidden 
              shadow-md
            "
          >
            <Image
              src="/flat/img1.webp"
              alt="Luxury Duplex Living Room"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
