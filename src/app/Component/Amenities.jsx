"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useRef, useState } from "react";

export default function AmenitiesCarousel() {
  const swiperRef = useRef(null);
  const [activeTitle, setActiveTitle] = useState(0);

  const amenities = [
    { image: "/flat/img20.jpg", title: "Private Roof Top" },
    { image: "/flat/img27.jpg", title: "Private Pool" },
    { image: "/flat/img11.webp", title: "Observatory Room" },
    { image: "/flat/img26.webp", title: "Home Theater" },
    { image: "/flat/img12.webp", title: "Private Roof Top Club House" },
  ];

  return (
    <section className="w-full" id="amenities">
      <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-wide mb-10">
        AMENITIES
      </h2>

      <div className="relative w-full mx-auto">

        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveTitle(swiper.realIndex)}
          autoplay={{ delay: 3000 }}
          loop
          className="overflow-hidden"
        >
          {amenities.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[260px] sm:h-[350px] md:h-[450px] lg:h-[550px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 80vw,
                         1000px"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Bar */}
        <div className="w-full flex justify-between items-center bg-white shadow-md py-4 px-4 md:px-6 max-w-[500px] mx-auto -mt-1 rounded-md z-10 relative -top-5">

          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="text-xl md:text-2xl px-3 cursor-pointer"
          >
            ←
          </button>

          <span className="text-base md:text-lg font-medium tracking-wide text-center">
            {amenities[activeTitle]?.title}
          </span>

          <button
            onClick={() => swiperRef.current.slideNext()}
            className="text-xl md:text-2xl px-3 cursor-pointer"
          >
            →
          </button>

        </div>
      </div>
    </section>
  );
}
