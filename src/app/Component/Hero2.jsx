"use client";
import Image from "next/image";
import "./banner.css";
import { useState } from "react";

export default function BannerSection({ openForm }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);

  // FIX: checkbox + text handled correctly (no visual change)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const postData = new FormData();
    postData.append("api_key", "b8a83bb06c73df07865559018072fa35");
    postData.append("sell_do[form][lead][name]", formData.name);
    postData.append("sell_do[form][lead][email]", formData.email);
    postData.append("sell_do[form][lead][phone]", formData.phone);
    postData.append("sell_do[form][lead][message]", formData.message);
    postData.append("sell_do[campaign][srd]", "693aace30d18514ae5751191");
    postData.append("sell_do[form][content][note]", "Website Enquiry");

    try {
      const res = await fetch("https://app.sell.do/api/leads/create", {
        method: "POST",
        body: postData,
      });

      if (!res.ok) throw new Error("Lead failed");

      // brochure download
      const link = document.createElement("a");
      link.href = "/Faridabad_Eye_Brochure.pdf";
      link.download = "Faridabad-Eye-Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        consent: false,
      });

      setTimeout(() => {
        window.location.href = "/thankyou";
      }, 600);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="relative w-full min-h-[100svh] overflow-hidden">
        {/* DESKTOP HERO IMAGE (LCP IMAGE) */}
        <div className="hidden md:block absolute inset-0 banner-zoom">
  <Image
    src="/banner.webp"
    alt="Faridabad Eye Luxury Duplex"
    fill
    priority
    fetchPriority="high"
    quality={75}
    sizes="(min-width: 768px) 100vw"
    className="object-cover"
  />
</div>


        {/* MOBILE HERO IMAGE (NOT LCP) */}
        <div className="block md:hidden absolute inset-0 banner-zoom">
  <Image
    src="/banner_m.webp"
    alt="Faridabad Eye Luxury Duplex"
    fill
    quality={70}
    sizes="100vw"
    className="object-cover"
  />
</div>


        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute left-20 top-30 h-full w-[26%] gradient-left border-t border-l border-[#8B6A4F]/70 hidden xl:block"></div>

        {/* LEFT CONTENT (UNCHANGED) */}
        <div
          className="
            absolute 
            left-4 sm:left-10 md:left-16 xl:left-24 
            top-[53%] sm:top-[50%] md:top-[58%]
            -translate-y-1/2 
            text-white 
            max-w-sm sm:max-w-md md:max-w-xl 
            space-y-4 sm:space-y-5 md:space-y-6
          "
        >
          <h1 className="text-xl sm:text-3xl font-bold shine-text tracking-wide w-full">
            Faridabad&apos;s Tallest Iconic Towers <br /> 3+1 BHK Ultra-Luxury Duplex
          </h1>

          <span className="px-4 py-1 bg-[#8B6A4F] rounded-sm sm:text-md inline-block shine-bg font-bold text-xl">
            Sec 70, IMT Faridabad
          </span>

          <ul className="text-sm sm:text-base space-y-1 opacity-95 leading-relaxed">
            <li>Ready To Move In</li>
            <li>2525 Sq. Ft. Area</li>
            <li>80% Government Bank Loan</li>
            <li>40,000 Sq. Ft. Sky Clubhouse</li>
          </ul>

          <div className="px-4 py-2 bg-[#8B6A4F] text-white rounded-sm text-sm sm:text-lg w-max shine-bg border border-[#8B6A4F] font-semibold">
            UPTO 50 LAC DISCOUNT FOR EARLY BIRDS
          </div>

          <div
            className="px-4 py-2 sm:py-3 bg-white text-black rounded-sm text-sm sm:text-lg w-max shine-light border border-[#8B6A4F] font-semibold cursor-pointer"
            onClick={openForm}
          >
            Price : ₹ 2.70 Cr* Onwards
          </div>
        </div>

        {/* DESKTOP FORM (UNCHANGED VISUALLY) */}
        <div
          className="
            hidden 
            md:block 
            absolute 
            right-4 md:right-8 xl:right-16 
            top-[25%] md:top-[18%] 
            w-[300px] sm:w-[340px] md:w-[360px] xl:w-[380px] 
            bg-white/95 backdrop-blur-sm rounded-md shadow-xl
          "
        >
          <div className="bg-[#3C2F25] text-center text-white py-3 text-lg font-semibold">
            BOOK YOUR SITE VISIT TODAY !
          </div>

          <div className="p-6">
            <p className="text-center text-gray-700 mb-4 text-sm">
              Please feel free to connect regarding any kind of query !!
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input className="w-full px-3 py-3 border border-gray-300 rounded" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name*" required />
              <input className="w-full px-3 py-3 border border-gray-300 rounded" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone No.*" required />
              <input className="w-full px-3 py-3 border border-gray-300 rounded" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email Address*" required />
              <textarea className="w-full px-3 py-3 border border-gray-300 rounded" rows={1} name="message" value={formData.message} onChange={handleChange} placeholder="Your Message*" required />

              <div className="flex items-start gap-2 text-xs text-gray-600">
                <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required className="mt-1 accent-[#8B6A4F]" />
                <span>I authorize company representatives to Call, SMS, Email or WhatsApp me.</span>
              </div>

              {/* FIXED HEIGHT → NO CLS */}
              <button
                type="submit"
                disabled={loading}
                className="shine-btn w-full h-[48px] bg-linear-to-r from-[#8B6A4F] to-[#CFA97A] text-white rounded text-lg font-semibold"
              >
                {loading ? "Downloading..." : "Download Brochure"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MOBILE FORM (UNCHANGED VISUALLY) */}
      <div className="md:hidden w-full px-4 mt-6">
        <div className="bg-white/95 backdrop-blur-sm rounded-md shadow-xl p-5">
          <div className="bg-[#3C2F25] text-center text-white py-2 text-base font-semibold rounded">
            BOOK YOUR SITE VISIT TODAY !
          </div>

          <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
            <input className="w-full px-3 py-3 border border-gray-300 rounded" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name*" required />
            <input className="w-full px-3 py-3 border border-gray-300 rounded" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone No.*" required />
            <input className="w-full px-3 py-3 border border-gray-300 rounded" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email Address*" required />
            <textarea className="w-full px-3 py-3 border border-gray-300 rounded h-24" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message*" required />

            <button
              type="submit"
              disabled={loading}
              className="shine-btn w-full h-[48px] bg-linear-to-r from-[#8B6A4F] to-[#CFA97A] text-white rounded text-lg font-semibold"
            >
              {loading ? "Downloading..." : "Download Brochure"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
