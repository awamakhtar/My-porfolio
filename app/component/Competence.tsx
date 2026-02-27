"use client";

import { FaBootstrap, FaReact, FaHtml5, FaCss3Alt, FaPhp, FaGitAlt, FaGithub, FaLaravel, FaWordpress } from 'react-icons/fa';
import { SiNextdotjs, SiMysql, SiTailwindcss, SiFigma, SiVercel, SiCanva, SiAdobephotoshop } from 'react-icons/si';
import { Sparkles } from "lucide-react";

const categories = [
  {
    label: "Front-End",
    skills: [
      { name: "React", icon: <FaReact className="w-5 h-5" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" /> },
      { name: "HTML", icon: <FaHtml5 className="w-5 h-5" /> },
      { name: "CSS", icon: <FaCss3Alt className="w-5 h-5" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="w-5 h-5" /> },
    ],
  },
  {
    label: "Back-End",
    skills: [
      { name: "Laravel", icon: <FaLaravel className="w-5 h-5" /> },
      { name: "PHP", icon: <FaPhp className="w-5 h-5" /> },
      { name: "MySQL", icon: <SiMysql className="w-5 h-5" /> },
    ],
  },
  {
    label: "CSS & UI",
    skills: [
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" /> },
      { name: "Figma", icon: <SiFigma className="w-5 h-5" /> },
      { name: "Photoshop", icon: <SiAdobephotoshop className="w-5 h-5" /> },
      { name: "Canva", icon: <SiCanva className="w-5 h-5" /> },
    ],
  },
  {
    label: "Outils & Plateformes",
    skills: [
      { name: "Git", icon: <FaGitAlt className="w-5 h-5" /> },
      { name: "GitHub", icon: <FaGithub className="w-5 h-5" /> },
      { name: "Vercel", icon: <SiVercel className="w-5 h-5" /> },
      { name: "WordPress", icon: <FaWordpress className="w-5 h-5" /> },
    ],
  },
];

const Competence = () => {
  return (
    <section
      className="flex flex-col items-center text-center dark:text-white text-black py-12 px-4 sm:px-8"
      id="competences"
    >
      {/* Title */}
      <div className="relative h-24 flex items-center justify-center">
        <h1 className="absolute bottom-4 bg-[#A99886] text-white font-semibold py-2 px-4 rounded-full flex items-center gap-2 shadow-lg text-xl font-playfair">
          <Sparkles className="w-4 h-4" /> Compétences
        </h1>
      </div>

      {/* Categories */}
      <div className="w-full max-w-4xl space-y-10">
        {categories.map((cat) => (
          <div key={cat.label} className="space-y-3">
            {/* Category label */}
            <p className="text-xs uppercase tracking-widest text-[#A99886] font-semibold font-playfair text-left pl-1">
              {cat.label}
            </p>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="
                    flex items-center gap-2
                    px-3 py-1.5 sm:px-4 sm:py-2
                    rounded-full
                    border-2 border-[#A99886]
                    bg-white dark:bg-black
                    text-black dark:text-white
                    font-playfair text-xs sm:text-sm
                    shadow-sm
                    hover:bg-[#A99886] hover:text-white
                    dark:hover:bg-[#A99886] dark:hover:text-white
                    hover:[&>span]:text-white
                    transition-colors duration-300
                    cursor-default select-none
                    whitespace-nowrap
                  "
                >
                  <span className="text-[#A99886] transition-colors duration-300">
                    {skill.icon}
                  </span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Competence;