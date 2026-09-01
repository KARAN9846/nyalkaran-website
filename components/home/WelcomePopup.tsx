"use client";

import { useEffect, useState } from "react";
import { Phone, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("nyalkaran-welcome-popup");

    if (!hasSeenPopup) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("nyalkaran-welcome-popup", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/45 px-4 backdrop-blur-md">
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close welcome popup"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors duration-300 hover:bg-gray-200"
        >
          <X size={18} aria-hidden="true" />
        </button>

        {/* Popup Content */}
        <div className="px-7 py-10 text-center sm:px-12 sm:py-12">
          {/* Accent Icon */}
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F65011] text-2xl text-white shadow-[0_8px_20px_rgba(246,80,17,0.20)]">
            ✦
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Let&apos;s Build Something Great
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-600 sm:text-base">
            Have a project in mind? Talk to our team and let&apos;s turn your
            idea into a digital solution.
          </p>

          {/* Contact Buttons */}
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            {/* Call Us */}
            <a
              href="tel:+919904425105"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F65011] px-6 py-3.5 text-sm font-bold !text-white shadow-[0_10px_25px_rgba(246,80,17,0.18)] transition-colors duration-300 hover:bg-[#D9430B]"
            >
              <Phone
                size={17}
                className="shrink-0 text-white"
                aria-hidden="true"
              />
              Call Us
            </a>

            {/* WhatsApp Us */}
            <a
              href="https://wa.me/919904425105?text=Hello%20Nyalkaran%20Technosoft%2C%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#25D366] bg-[#25D366] px-6 py-3.5 text-sm font-bold !text-white transition-colors duration-300 hover:border-[#20BD5A] hover:bg-[#20BD5A]"
            >
              <SiWhatsapp
                size={17}
                className="shrink-0 text-white"
                aria-hidden="true"
              />
              WhatsApp Us
            </a>
          </div>

          {/* Explore More */}
          <button
            onClick={handleClose}
            className="mt-7 text-sm font-medium text-gray-700 underline underline-offset-4 transition-colors duration-300 hover:text-[#F65011]"
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}
