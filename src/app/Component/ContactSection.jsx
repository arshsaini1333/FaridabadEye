"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ContactShowcase() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();
  }, []);

  return (
    <div className="w-full mt-25" id="contact">

      {/* Heading */}
      <div className="grid w-[90%] sm:w-[80%] mx-auto gap-5 mb-0 px-4" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black leading-tight text-center">
          Connect With Your Future of Elevated Living
        </h2>
      </div>

      <section className="w-full py-8 sm:py-20" data-aos="fade-up">
        <div className="
          max-w-7xl mx-auto px-4 sm:px-6 
          grid grid-cols-1 md:grid-cols-2 
          gap-10 items-center
        ">

          {/* LEFT IMAGE SECTION */}
          <div className="relative flex justify-center md:justify-start">

            {/* Decorative dots (hidden on mobile for alignment) */}
            <div className="hidden sm:block absolute -top-6 -left-6 w-32 h-32 bg-[url('/dots.png')] bg-cover opacity-40"></div>

            {/* BIG IMAGE */}
            <div className="
              relative 
              rounded-tl-[100px] rounded-tr-[100px] sm:rounded-tl-[180px] sm:rounded-tr-[180px] 
              rounded-3xl overflow-hidden shadow-xl
              w-[90%] sm:w-full
            ">
              <Image
                src="/flat/img5.webp"
                alt="Building"
                width={700}
                height={800}
                className="object-cover w-full h-[300px] sm:h-[450px] md:h-[500px]"
              />
            </div>

            {/* FLOATING SMALL IMAGE */}
            <div className="
              absolute 
              -bottom-8 sm:-bottom-10 
              left-1/2 sm:left-10 
              -translate-x-1/2 sm:translate-x-0 
              w-36 h-36 sm:w-52 sm:h-52 
              rounded-2xl border-4 border-white 
              overflow-hidden shadow-xl bg-white
            ">
              <Image
                src="/flat/img10.webp"
                alt="Sub Building"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-5 mt-10 md:mt-0 mx-4 sm:mx-0">
            <form className="space-y-4">

              {/* Name */}
              <div>
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:border-[#8B6A4F] outline-none"
                  placeholder="Enter your name"
                />
              </div>

              {/* PHONE + EMAIL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="text"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:border-[#8B6A4F] outline-none"
                    placeholder="Phone"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:border-[#8B6A4F] outline-none"
                    placeholder="Email"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows="1"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:border-[#8B6A4F] outline-none"
                  placeholder="Message"
                ></textarea>
              </div>

              {/* CTA BUTTON */}
              <button
                className="w-full bg-[#8B6A4F] text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-[#9C7B5C] transition"
              >
                Send Request
              </button>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
