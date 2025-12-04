import Image from "next/image";
import "./banner.css";

export default function BannerSection({openForm}) {
  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden banner-zoom flex flex-col">
        <Image
          src="/banner.jpg"
          alt="Banner Background"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Left shaded box (only visible on xl screens) */}
        <div className="absolute left-20 top-30 h-full w-[26%] gradient-left border-t border-l border-[#8B6A4F]/70 hidden xl:block"></div>

        {/* LEFT CONTENT */}
        <div
          className="
            absolute 
            left-4 sm:left-10 md:left-16 xl:left-24 
            top-[48%] sm:top-[55%] md:top-[58%]
            -translate-y-1/2 
            text-white 
            max-w-sm sm:max-w-md md:max-w-xl 
            space-y-4 sm:space-y-5 md:space-y-6
          "
        >
          <h1 className="text-2xl sm:text-3xl font-bold shine-text tracking-wide">
            FARIDABAD EYE
          </h1>

          <span className="px-4 py-1 bg-[#8B6A4F] rounded-sm text-sm sm:text-md inline-block shine-bg">
            Sec 70, IMT Faridabad
          </span>

          <h2 className="text-xl sm:text-2xl font-semibold">
            3+1 BHK Ultra Luxury Duplex
          </h2>

          <ul className="text-sm sm:text-base space-y-1 opacity-95 leading-relaxed">
            <li>Ready To Move In</li>
            <li>2525 Sq. Ft. Area</li>
            <li>80% Government Bank Loan</li>
            <li>40,000 Sq. Ft. Sky Clubhouse</li>
          </ul>

          <div className="px-4 py-2 bg-[#8B6A4F] text-white rounded-sm text-sm sm:text-lg w-max shine-bg border border-[#8B6A4F] font-semibold">
            UPTO 50 LAC DISCOUNT FOR EARLY BIRDS
          </div>

          <div className="px-4 py-2 sm:py-3 bg-white text-black rounded-sm text-sm sm:text-lg w-max shine-light border border-[#8B6A4F] font-semibold cursor-pointer" onClick={openForm} >
            Price : ₹ 2.70 Cr* Onwards
          </div>
        </div>

        {/* DESKTOP / TABLET FORM */}
        <div
          className="
            hidden 
            md:block 
            absolute 
            right-4 md:right-8 xl:right-16 
            top-[12%] md:top-[10%] 
            w-[300px] sm:w-[340px] md:w-[360px] xl:w-[380px] 
            bg-white/95 backdrop-blur-sm rounded-md shadow-xl
          "
        >
          <div className="bg-[#3C2F25] text-center text-white py-3 text-lg font-semibold">
            BOOK YOUR VISIT TODAY !
          </div>

          <div className="p-6">
            <p className="text-center text-gray-700 mb-4 text-sm">
              Please feel free to connect regarding any kind of query !!
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full px-3 py-3 border border-gray-300 rounded outline-none focus:border-[#8B6A4F]"
              />
              <input
                type="tel"
                placeholder="Your Phone No.*"
                className="w-full px-3 py-3 border border-gray-300 rounded outline-none focus:border-[#8B6A4F]"
              />
              <input
                type="email"
                placeholder="Your Email Address*"
                className="w-full px-3 py-3 border border-gray-300 rounded outline-none focus:border-[#8B6A4F]"
              />
              <textarea
                placeholder="Your Message*"
                className="w-full px-3 py-3 border border-gray-300 rounded h-24 outline-none focus:border-[#8B6A4F]"
              ></textarea>

              <div className="flex items-start gap-2 text-xs text-gray-600 leading-tight">
                <input type="checkbox" className="mt-1 accent-[#8B6A4F]" />
                <span>
                  I authorize company representatives to Call, SMS, Email or
                  WhatsApp me about its products and offers.
                </span>
              </div>

              <button
                type="submit"
                className="shine-btn w-full bg-gradient-to-r from-[#8B6A4F] to-[#CFA97A] text-white py-3 rounded text-lg font-semibold"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MOBILE FORM BELOW BANNER (always visible, never clipped) */}
      <div className="md:hidden w-full px-4 mt-6">
        <div className="bg-white/95 backdrop-blur-sm rounded-md shadow-xl p-5">
          <div className="bg-[#3C2F25] text-center text-white py-2 text-base font-semibold rounded">
            BOOK YOUR VISIT TODAY !
          </div>

          <p className="text-center text-gray-700 my-3 text-sm">
            Please feel free to connect regarding any kind of query !!
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full px-3 py-3 border border-gray-300 rounded outline-none focus:border-[#8B6A4F]"
            />
            <input
              type="tel"
              placeholder="Your Phone No.*"
              className="w-full px-3 py-3 border border-gray-300 rounded outline-none focus:border-[#8B6A4F]"
            />
            <input
              type="email"
              placeholder="Your Email Address*"
              className="w-full px-3 py-3 border border-gray-300 rounded outline-none focus:border-[#8B6A4F]"
            />
            <textarea
              placeholder="Your Message*"
              className="w-full px-3 py-3 border border-gray-300 rounded h-24 outline-none focus:border-[#8B6A4F]"
            ></textarea>

            <div className="flex items-start gap-2 text-xs text-gray-600 leading-tight">
              <input type="checkbox" className="mt-1 accent-[#8B6A4F]" />
              <span>
                I authorize company representatives to Call, SMS, Email or
                WhatsApp me about its products and offers.
              </span>
            </div>

            <button
              type="submit"
              className="shine-btn w-full bg-gradient-to-r from-[#8B6A4F] to-[#CFA97A] text-white py-3 rounded text-lg font-semibold"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
