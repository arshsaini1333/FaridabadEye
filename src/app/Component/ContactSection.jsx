"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function ContactShowcase() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const postData = new FormData();
    postData.append("api_key", "b8a83bb06c73df07865559018072fa35");
    postData.append("sell_do[form][lead][name]", formData.name);
    postData.append("sell_do[form][lead][email]", formData.email);
    postData.append("sell_do[form][lead][phone]", formData.phone);
    postData.append("sell_do[campaign][srd]", "693aace30d18514ae5751191");
    postData.append("sell_do[form][content][note]", formData.message || "Website enquiry");
  
    try {
      const res = await fetch("https://app.sell.do/api/leads/create", {
        method: "POST",
        body: postData,
      });
  
      // Clear form fields
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
  
      // Redirect
      window.location.href = "/thankyou";
  
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Try again.");
    }
  
    setLoading(false);
  };
  

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
            <div className="hidden sm:block absolute -top-6 -left-6 w-32 h-32 bg-[url('/dots.png')] bg-cover opacity-40"></div>

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
            <form className="space-y-4" onSubmit={handleSubmit}>

              {/* Name */}
              <div>
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:border-[#8B6A4F] outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* PHONE + EMAIL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:border-[#8B6A4F] outline-none"
                    placeholder="Phone"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:border-[#8B6A4F] outline-none"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows="1"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-la focus:border-[#8B6A4F] outline-none"
                  placeholder="Message"
                ></textarea>
              </div>

              {/* CTA BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#8B6A4F] text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-[#9C7B5C] transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Request"}
              </button>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
