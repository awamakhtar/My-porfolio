

"use client";

import { FiSend } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { Sparkles, MapPin, Phone, Mail, Globe } from "lucide-react";

const contactInfos = [
  {
    icon: <MapPin className="w-4 h-4" />,
    label: "Localisation",
    value: "Dakar, Sénégal",
    href: null,
  },
  {
    icon: <Phone className="w-4 h-4" />,
    label: "Téléphone",
    value: "+221 77 866 60 64",
    href: "tel:+221778666064",
  },
  {
    icon: <Mail className="w-4 h-4" />,
    label: "Email",
    value: "awamakhtarsylla@gmail.com",
    href: "mailto:awamakhtarsylla@gmail.com",
  },
  {
    icon: <Globe className="w-4 h-4" />,
    label: "Site web",
    value: "awamakhtar.vercel.app",
    href: "https://awamakhtar.vercel.app",
  },
];

const socials = [
  {
    icon: <FaLinkedinIn className="w-4 h-4" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/awa-makhtar-sylla-2b6394188/",
    color: "hover:bg-[#0077B5]",
  },
  {
    icon: <FaGithub className="w-4 h-4" />,
    label: "GitHub",
    href: "https://github.com/awamakhtar",
    color: "hover:bg-[#333] dark:hover:bg-white dark:hover:text-black",
  },
  {
    icon: <FaWhatsapp className="w-4 h-4" />,
    label: "WhatsApp",
    href: "https://wa.me/221778666064?text=Bonjour%20Awa%20Sylla%20%F0%9F%91%8B,%0AJe%20viens%20de%20visiter%20votre%20portfolio%20et%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20votre%20profil.%20Pourrions-nous%20%C3%A9changer%20?",
    color: "hover:bg-[#25D366]",
  },
];

const Contact = () => {
  return (
    <div
      className="flex flex-col items-center justify-center dark:text-white text-black px-6 pb-20"
      id="contact"
    >
      {/* ── Titre ── */}
      <div className="relative h-44 flex items-center justify-center w-full">
        <h1 className="absolute font-playfair bottom-5 bg-[#A99886] text-white font-semibold py-2 px-4 m-4 text-xl rounded-full flex items-center gap-1 shadow-lg">
          <Sparkles className="text-white w-4 h-4" /> Contact
        </h1>
      </div>

      {/* ── Grid principal ── */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* ── Colonne gauche — Formulaire ── */}
        <div className="flex flex-col gap-4">
          <div className="mb-2">
            <h2 className="font-playfair text-2xl font-bold text-black dark:text-white">
              Envoyez-moi un message
            </h2>
            <p className="font-playfair text-sm text-black/50 dark:text-white/50 mt-1">
              Je vous répondrai dans les plus brefs délais ✨
            </p>
          </div>

          <input
            type="text"
            placeholder="Votre nom"
            className="w-full px-5 py-3.5 font-playfair text-sm rounded-2xl border-2 border-[#A99886]/40 focus:border-[#A99886] bg-white dark:bg-black text-black dark:text-white outline-none transition-colors duration-200 placeholder:text-black/30 dark:placeholder:text-white/30"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="w-full px-5 py-3.5 font-playfair text-sm rounded-2xl border-2 border-[#A99886]/40 focus:border-[#A99886] bg-white dark:bg-black text-black dark:text-white outline-none transition-colors duration-200 placeholder:text-black/30 dark:placeholder:text-white/30"
          />
          <textarea
            placeholder="Votre message..."
            rows={5}
            className="w-full px-5 py-3.5 font-playfair text-sm rounded-2xl border-2 border-[#A99886]/40 focus:border-[#A99886] bg-white dark:bg-black text-black dark:text-white outline-none transition-colors duration-200 resize-none placeholder:text-black/30 dark:placeholder:text-white/30"
          />

          <button className="group self-start inline-flex items-center gap-2 bg-[#A99886] hover:bg-[#927f6e] text-white font-playfair px-7 py-3 rounded-full shadow-lg hover:shadow-[#A99886]/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
            Envoyer
            <FiSend className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* ── Colonne droite — Infos de contact ── */}
        <div className="flex flex-col gap-6 justify-center">

          <div className="mb-2">
            <h2 className="font-playfair text-2xl font-bold text-black dark:text-white">
              Mes coordonnées
            </h2>
            <p className="font-playfair text-sm text-black/50 dark:text-white/50 mt-1">
              N&apos;hésitez pas à me contacter directement
            </p>
          </div>

          {/* Cartes d'info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {contactInfos.map(({ icon, label, value, href }) => {
              const inner = (
                <div
                  key={label}
                  className="flex items-start gap-3 p-4 rounded-2xl border-2 border-[#A99886]/30 bg-white dark:bg-black hover:border-[#A99886] hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#A99886]/10 flex items-center justify-center text-[#A99886] group-hover:bg-[#A99886] group-hover:text-white transition-colors duration-300">
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <p className="font-playfair text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40">
                      {label}
                    </p>
                    <p className="font-playfair text-sm font-semibold text-black dark:text-white truncate">
                      {value}
                    </p>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}
          </div>

          {/* Séparateur */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#A99886]/40 to-transparent" />
            <span className="font-playfair text-xs text-[#A99886] uppercase tracking-widest">
              Réseaux
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#A99886]/40 to-transparent" />
          </div>

          {/* Réseaux sociaux */}
          <div className="flex gap-3 flex-wrap">
            {socials.map(({ icon, label, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border-2 border-[#A99886]/40 bg-white dark:bg-black text-black dark:text-white font-playfair text-sm ${color} hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-0.5 shadow-sm`}
              >
                <span className="text-[#A99886] group-hover:text-white transition-colors">{icon}</span>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;