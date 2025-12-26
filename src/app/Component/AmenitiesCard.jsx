"use client";

import Image from "next/image";

export default function AmenitiesCards() {
  const amenities = [
    { image: "/flat/img20.webp", title: "Private Roof Top" },
    { image: "/flat/img27.webp", title: "Private Pool" },
    { image: "/flat/img11.webp", title: "Observatory Room" },
    { image: "/flat/img26.webp", title: "Home Theater" },
    { image: "/flat/img12.webp", title: "Roof Top Club House" },
  ];

  return (
    <section className="w-full py-14 px-4 md:px-10" id="amenities">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-10">
        Amenities
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <div className="relative w-full h-52 md:h-60">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       33vw"
                className="object-cover"
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="text-lg font-medium">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
