"use client";

import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const WhatsAppFloat: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState("01722562608");

  useEffect(() => {
    // Show the button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Fetch WhatsApp number from settings
    const fetchWhatsAppNumber = async () => {
      try {
        const response = await fetch("/api/settings");
        const data = await response.json();

        if (data.success && data.settings.socialLinks.whatsapp) {
          setWhatsappNumber(data.settings.socialLinks.whatsapp);
        }
      } catch (error) {
        console.error("Error fetching WhatsApp number:", error);
        // Use default number if fetch fails
      }
    };

    fetchWhatsAppNumber();
  }, []);

  const handleWhatsAppClick = () => {
    // Format the phone number (remove any non-digits and add country code if needed)
    let formattedNumber = whatsappNumber.replace(/\D/g, "");

    // Add Bangladesh country code if not present
    if (
      !formattedNumber.startsWith("880") &&
      formattedNumber.startsWith("01")
    ) {
      formattedNumber = "880" + formattedNumber.substring(1);
    }

    const message = encodeURIComponent(
      "Hello! I'm interested in your services. Let's discuss!"
    );
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-10 right-6 z-50 group">
      {/* WhatsApp Button */}
      <div className="relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
          title="Close"
        >
          <FaTimes />
        </button>

        {/* Main WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="relative md:w-16 md:h-16 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 flex items-center justify-center transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />

          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        </button>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Chat on WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </div>

      {/* Notification Badge (optional) */}
      <div className="absolute -top-1 -left-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-bounce">
        1
      </div>
    </div>
  );
};

export default WhatsAppFloat;
