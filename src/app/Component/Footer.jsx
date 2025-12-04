"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Logo + Brand */}
        <div>
          <Image
            src="/logo.png"  // update with your logo
            width={160}
            height={80}
            alt="Faridabad Eye Logo"
            className="mb-4"
          />

          <p className="text-sm text-gray-300 leading-relaxed">
            Faridabad Eye is a landmark luxury residential tower redefining 
            premium living with world-class design, unmatched views, and 
            timeless elegance.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3" style={{ color: "#8B6A4F" }}>
            Contact Us
          </h3>

          <p className="text-sm text-gray-300 mb-2">
            📍 IMT, Faridabad, Haryana, India
          </p>

          <p className="text-sm text-gray-300 mb-2">
            📞 +918920455162
          </p>

          <p className="text-sm text-gray-300">
            ✉️ info@faridabadeye.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3" style={{ color: "#8B6A4F" }}>
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-[#8B6A4F] transition cursor-pointer"><a href="#about">About Project</a></li>
            <li className="hover:text-[#8B6A4F] transition cursor-pointer"><a href="#amenities">Amenities</a></li>
            <li className="hover:text-[#8B6A4F] transition cursor-pointer"><a href="#gallery">Gallery</a></li>
            <li className="hover:text-[#8B6A4F] transition cursor-pointer"><a href="#floorplan">Floor Plans</a></li>
            <li className="hover:text-[#8B6A4F] transition cursor-pointer"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-white/10 py-4">
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Faridabad Eye. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
