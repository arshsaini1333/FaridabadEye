"use client";
import { useState } from "react";

export default function EnquiryForm({ isOpen, closeForm }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = e => {
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
    postData.append("sell_do[form][content][note]", "Website Enquiry");
  
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
      });
  
      closeForm();
  
      // Redirect
      window.location.href = "/thankyou";
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Try again.");
    }
  
    setLoading(false);
  };
  

  return (
    <div className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-md rounded-lg shadow-xl p-6">

        {/* Close Button */}
        <button
          onClick={closeForm}
          className="absolute top-4 right-4 text-xl text-gray-600 hover:text-black"
        >
          ✕
        </button>

        <h3 className="text-2xl font-light mb-6">Enquire Now</h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label className="block text-xs mb-1">NAME*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 outline-none py-2"
            />
          </div>

          <div>
            <label className="block text-xs mb-1">PHONE*</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 outline-none py-2"
            />
          </div>

          <div>
            <label className="block text-xs mb-1">EMAIL*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 outline-none py-2"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-black/90 text-white px-6 py-3 rounded-sm mt-4 hover:bg-black transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Enquire Now"}
          </button>

        </form>

      </div>
    </div>
  );
}
