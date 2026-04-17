import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "221706226844";
  const message = "Bonjour, je suis intéressé par vos services";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl flex items-center justify-center"
    >
      <FaWhatsapp size={20} />
    </a>
  );
};

export default WhatsAppButton;