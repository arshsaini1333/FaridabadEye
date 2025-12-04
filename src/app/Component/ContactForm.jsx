"use client";
import Image from "next/image";

export default function EnquiryForm({ isOpen, closeForm }) {
  if (!isOpen) return null;

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

        {/* Heading */}
        <h3 className="text-2xl font-light mb-6">Enquire Now</h3>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-xs mb-1">NAME*</label>
            <input
              type="text"
              className="w-full border-b border-gray-300 outline-none py-2"
            />
          </div>

          <div>
            <label className="block text-xs mb-1">PHONE*</label>
            <input
              type="text"
              className="w-full border-b border-gray-300 outline-none py-2"
            />
          </div>

          <div>
            <label className="block text-xs mb-1">EMAIL*</label>
            <input
              type="email"
              className="w-full border-b border-gray-300 outline-none py-2"
            />
          </div>

          <button
            type="submit"
            className="bg-black/90 text-white px-6 py-3 rounded-sm mt-4 hover:bg-black transition"
          >
            Enquire Now
          </button>
        </form>

      </div>
    </div>
  );
}
