"use client";

import Image from 'next/image';
import { Sparkles, GraduationCap, Lightbulb, Rocket } from "lucide-react";

const stats = [
  { value: "10+", label: "Projets réalisés" },
  { value: "2+", label: "Ans d'expérience" },
  { value: "100%", label: "Passion & créativité" },
];

const traits = [
  { icon: <GraduationCap className="w-4 h-4" />, text: "Autodidacte & curieuse" },
  { icon: <Lightbulb className="w-4 h-4" />, text: "Orientée design & UX" },
  { icon: <Rocket className="w-4 h-4" />, text: "Toujours en évolution" },
];

const About = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center dark:text-white text-black px-6 pb-20 overflow-hidden"
      id="about"
    >
   
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#A99886]/10 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute top-1/4 right-0 w-56 h-56 bg-[#A99886]/10 rounded-full blur-[80px] translate-x-1/3" />
      </div>

      <div className="relative h-24 flex items-center justify-center">
        <h1 className="absolute bottom-4 bg-[#A99886] text-white font-semibold text-xl py-2 px-4 rounded-full flex items-center gap-1 shadow-lg font-playfair">
          <Sparkles className="w-4 h-4" /> À propos
        </h1>
      </div>
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="relative flex-shrink-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
          {/* Ombre colorée */}
          <div className="absolute inset-0 rounded-3xl bg-[#A99886]/20 blur-2xl scale-90 translate-y-4" />
          {/* Cadre décoratif décalé */}
          <div className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl border-2 border-[#A99886]/40" />
          <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl border border-[#A99886]/20" />
          <Image
            src="/assets/illustration.png"
            alt="Awa Sylla Illustration"
            width={320}
            height={320}
            className="relative w-full h-full object-cover rounded-3xl shadow-xl"
          />
          {/* Badge flottant */}
          <div className="absolute -top-4 -left-4 bg-[#A99886] text-white rounded-2xl px-3 py-2 shadow-lg text-center animate-float">
            <p className="font-playfair text-[10px] uppercase tracking-widest opacity-80">Disponible</p>
            <p className="font-playfair text-xs font-bold">Freelance ✨</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">

          {/* Accroche */}
          <div>
            <p className="font-playfair text-xs uppercase tracking-[0.3em] text-[#A99886] mb-2">
              Qui suis-je ?
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-black dark:text-white leading-tight">
              Awa <span className="text-[#A99886]">Sylla</span>
              <br />
              <span className="text-xl sm:text-2xl font-normal text-black/60 dark:text-white/60">
                Développeuse Fullstack & UI
              </span>
            </h2>
          </div>

          {/* Séparateur */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="h-px w-8 bg-[#A99886]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#A99886]" />
            <div className="h-px w-24 bg-[#A99886]/30" />
          </div>

          {/* Description */}
          <p className="font-playfair text-base text-black/70 dark:text-white/70 leading-relaxed">
            Passionnée par le design et le marketing digital, j&apos;ai travaillé sur de nombreux projets personnels et académiques qui m&apos;ont permis de maîtriser le{" "}
            <span className="text-[#A99886] font-semibold">frontend</span> (Next.js, Tailwind CSS) comme le{" "}
            <span className="text-[#A99886] font-semibold">backend</span> (Laravel, MySQL).
            <br /><br />
            J&apos;accorde une grande importance à l&apos;esthétique et à l&apos;expérience utilisateur, toujours à la recherche de collaborations enrichissantes et d&apos;opportunités concrètes.
          </p>

          {/* Traits de personnalité */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {traits.map(({ icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-[#A99886]/40 bg-white dark:bg-black text-xs font-playfair text-black dark:text-white hover:border-[#A99886] hover:bg-[#A99886] hover:text-white transition-all duration-300 cursor-default"
              >
                <span className="text-[#A99886]">{icon}</span>
                {text}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center md:items-start p-3 rounded-2xl border-2 border-[#A99886]/20 bg-white dark:bg-black hover:border-[#A99886]/60 transition-all duration-300"
              >
                <span className="font-playfair text-2xl font-bold text-[#A99886]">{value}</span>
                <span className="font-playfair text-[10px] uppercase tracking-wider text-black/40 dark:text-white/40 leading-tight mt-0.5">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default About;