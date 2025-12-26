"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="absolute top-0 left-0 w-full z-50 bg-black/1">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between pt-2">
        <Image 
             src="/logo.png" 
             alt="Hero image"
             width={160}
             height={50}
             className="w-25 h-auto sm:w-20 md:w-48" 
           />
          {/* LOGO */}
          <div className="text-5xl font-semibold text-white tracking-wide">
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="text-white w-7 h-5 flex flex-col items-center justify-between cursor-pointer"
          >
            <span className="w-full h-[2px] bg-white"></span>
            <span className="w-full h-[2px] bg-white"></span>
            <span className="w-full h-[1px] bg-white"></span>
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* DRAWER */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-[#1a1a1a] text-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-5">
          <button onClick={() => setOpen(false)} className="cursor-pointer">
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        {/* Menu items */}
        <div className="flex flex-col gap-6 px-8 mt-4 text-lg tracking-wide">
          <Link href="#home" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="#about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="#amenities" onClick={() => setOpen(false)}>
            Amenities
          </Link>

          <Link href="#gallery" onClick={() => setOpen(false)}>
            Gallery
          </Link>

          <Link href="#floorplan" onClick={() => setOpen(false)}>
            Floor Plan
          </Link>
          <Link href="#locationmap" onClick={() => setOpen(false)}>
            Location Map
          </Link>

          <Link href="#contact" onClick={() => setOpen(false)}>
            Contact Us
          </Link>
        </div>
      </aside>
    </>
  );
}
