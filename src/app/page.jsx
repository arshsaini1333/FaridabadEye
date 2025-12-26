"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "./Component/Navbar";
import PropertyInformation from "./Component/PropertyInformation";
import FlatSlider from "./Component/FlatGallery";
import ContactSection from "./Component/ContactSection";
import AmenitiesSlider from "./Component/Amenities";
import FloorPlan from "./Component/FloorPlan";
import LocationMap from "./Component/LocationMap";
import Footer from "./Component/Footer";
import EnquiryForm from "./Component/ContactForm";
import LocationAdvantages from "./Component/LocationAdvantages";
import BannerSection from "./Component/Hero2";
import { useEffect } from "react";
import WhatsAppButton from "./Component/WhatsAppButton";
export default function Home() {
  const [showForm, setShowForm] = useState(false);

  // functions you will pass to any component
  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

   // Auto-open popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
        <>
        <Navbar/>
        {/* <Hero openForm={openForm}/> */}
        <BannerSection openForm={openForm}/>
        <PropertyInformation openForm={openForm}/>
        <AmenitiesSlider/>
        <FlatSlider openForm={openForm}/>
        <FloorPlan/>
        <LocationAdvantages openForm={openForm}/>
        <LocationMap/>
        <ContactSection/>
        <button
          className="fixed right-5 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-3 rotate-270 origin-right  shadow-lg z-50 cursor-pointer" onClick={openForm}
        >ENQUIRE NOW</button>
        <Footer/>

        <WhatsAppButton/>
        <EnquiryForm isOpen={showForm} closeForm={closeForm} />
        </>
  );
}
