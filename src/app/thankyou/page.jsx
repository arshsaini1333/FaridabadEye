"use client";
import { useEffect } from "react";
import "../Component/thankyou.css";
import Link from "next/link";

export default function ThankYouPage() {
  useEffect(() => {
    document.body.classList.add("thankyou-zoom-bg");
  }, []);

  return (
    <div className="thankyou-container">
      <div className="thankyou-content-box">
        <h1 className="thankyou-main-heading">Thankyou! You Are Eligible upto 50 Financial Benefits</h1>
        <h2 className="thankyou-sub-heading">Our team will contact you soon</h2>

        {/* Return Home Button */}
        <Link href="/" className="thankyou-home-btn">
          Go Back To Home
        </Link>
      </div>
    </div>
  );
}
