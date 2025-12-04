"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function GallerySlider({openForm}) {
  const images = [
    { name: "Balcony", path: "/flat/img10.webp" },
    { name: "Living Room", path: "/flat/img1.webp" },
    { name: "Kitchen", path: "/flat/img2.webp" },
    { name: "Dining", path: "/flat/img3.webp" },
    { name: "Master Bedroom", path: "/flat/img4.webp" },
    { name: "Upper Floor", path: "/flat/img5.webp" },
    { name: "Bed Room", path: "/flat/img7.webp" },
    { name: "Closet", path: "/flat/img8.webp" },
    { name: "Toilet", path: "/flat/img9.webp" },
  ];

  const [active, setActive] = useState(null);
  const sliderRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;

    const interval = setInterval(() => {
      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });

      scrollAmount += 350;

      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="gallery">
      <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-wide mt-10">
        FLAT GALLERY
      </h2>

      <div
        className="w-full overflow-x-auto py-10 custom-scroll"
        ref={sliderRef}
      >
        <div className="
            flex gap-6 px-6 md:px-10 transition-all duration-300 w-max
          "
        >
          {images.map((src, i) => (
            <div
              key={i}
              className={`
                relative overflow-hidden rounded-md cursor-pointer
                transition-all duration-300 ease-out
                h-[250px] min-w-[250px] 
                sm:h-[320px] sm:min-w-[300px] 
                md:h-[420px] md:min-w-[350px]
                ${active === i ? "md:min-w-[420px] brightness-100" : "brightness-75"}
                hover:brightness-100 hover:md:min-w-[420px]
              `}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <Image
                src={src.path}
                alt={src.name}
                fill
                className="object-cover transition-all duration-300"
              />

              {/* Hover Label (desktop) */}
              <div
                className={`
                  absolute bottom-0 left-0 w-full py-2 
                  bg-black/60 backdrop-blur-sm text-white text-sm sm:text-base md:text-lg 
                  text-center font-medium transition-all duration-300
                  ${active === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 md:translate-y-5"}
                  md:block hidden
                `}
              >
                {src.name}
              </div>

              {/* Mobile Label (always visible) */}
              <div className="
                absolute bottom-0 left-0 w-full py-2 
                bg-black/60 backdrop-blur-sm text-white text-sm 
                text-center md:hidden
              ">
                {src.name}
              </div>
            </div>
          ))}
        </div>
      </div>
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
                Reserve Your Exclusive Space Today
              </button>
            </div>
    </div>
  );
}
