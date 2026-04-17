"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [showBubble, setShowBubble] = useState(false);

  const phoneNumber = "221706226844";
  const message =
    "Bonjour, je viens de voir votre portfolio et je suis intéressé par vos services";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // Affiche la bulle après 3 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end space-y-2">
      
      {/* Bulle message */}
      {showBubble && (
        <div className="bg-white text-black px-4 py-2 rounded-lg shadow-lg text-sm animate-fadeIn">
          Besoin d’un site web ? 👇
        </div>
      )}

      {/* Bouton WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl flex items-center justify-center animate-bounce"
      >
        <FaWhatsapp size={20} />
      </a>
    </div>
  );
};

export default WhatsAppButton;