"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero({openForm, closeForm}) {
  const slides = [
    {
      image: "/image7.jpg",
      title: "A Landmark That Defines the Skyline",
      subtitle:
        "Faridabad Eye rises as the tallest residential tower in the city, offering ultra-luxury duplexes designed for those who appreciate height, elegance, and a life above expectations.",
    },
    {
      image: "/image5.jpg",
      title: "A Landmark That Defines the Skyline",
      subtitle:
        "Faridabad Eye rises as the tallest residential tower in the city, offering ultra-luxury duplexes designed for those who appreciate height, elegance, and a life above expectations.",
    },
    
    {
      image: "/image4.jpg",
      title: "A Landmark That Defines the Skyline",
      subtitle:
        "Faridabad Eye rises as the tallest residential tower in the city, offering ultra-luxury duplexes designed for those who appreciate height, elegance, and a life above expectations.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden" id="home">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-out ${
            index === i
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover"
          />

          {/* Softer luxury overlay */}
          <div className="absolute inset-0 bg-black/55 md:bg-black/55"></div>

          {/* Text content */}
          <div className="absolute inset-0 flex flex-col justify-baseline px-6 md:px-20 text-white mt-50">
            <h1 className="text-6xl text-center md:text-6xl font-semibold w-full mb-2 leading-tight">
              {slide.title}
            </h1>

            <p className="text-xl min-h-20 md:text-xl w-2/3 mx-auto text-center opacity-90 mb-6">
              {slide.subtitle}
            </p>

            <button
              className="
                cursor-pointer
                px-8 
                py-3 
                rounded-lg 
                bg-[#8B6A4F] 
                text-white 
                font-semibold
                text-lg 
                tracking-wide 
                shadow-lg 
                transition-all 
                duration-300
                hover:bg-[#9C7B5C] 
                hover:-translate-y-1
                w-max
                mx-auto
                active:scale-95
              "
              onClick={openForm}
            >
              Contact Us
            </button>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all ${
              index === i ? "bg-white scale-125" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
