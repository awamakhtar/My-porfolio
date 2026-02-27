"use client";

import Image from 'next/image';
import { Sparkles, ExternalLink, Clock } from "lucide-react";

const projects = [
  {
    image: "/assets/maraxib.png",
    title: "Maraxib Store",
    description: "Boutique en ligne dédiée à la vente de vêtements et accessoires musulmans. Navigation fluide, design épuré et expérience utilisateur intuitive.",
    tags: ["Next.js", "Tailwind CSS"],
    href: "https://maraxib-store-web.vercel.app/acceuil",
    status: "live",
  },
  {
    image: "/assets/bootsrap.jpg",
    title: "Site Vitrine",
    description: "Site vitrine conçu pour mettre en application les composants, grilles et utilitaires du framework Bootstrap.",
    tags: ["Bootstrap", "HTML", "CSS"],
    href: "https://site-bootstrap-umber.vercel.app/",
    status: "live",
  },
  {
    image: "/assets/cv-projet.jpg",
    title: "CV en ligne",
    description: "Portfolio CV mettant en avant mon profil, mes compétences, mes projets et mes coordonnées de manière responsive.",
    tags: ["HTML", "Tailwind CSS", "JS"],
    href: "https://cv-nu-sand.vercel.app/",
    status: "live",
  },
  {
    image: "/assets/test.png",
    title: "Intégration Maquette",
    description: "Transformation d'une maquette Figma en une interface interactive et responsive.",
    tags: ["React", "Tailwind CSS"],
    href: "https://projet-react-aa74.vercel.app/",
    status: "live",
  },
  {
    image: "/assets/gestion-inscription.png",
    title: "Gestion d'inscription Scolaire",
    description: "Application web de gestion des inscriptions avec interface parent (React) et panel admin (Laravel + Filament).",
    tags: ["Laravel", "React", "Tailwind", "Filament", "MySQL"],
    href: null,
    status: "wip",
  },
  {
    image: "/assets/bibliotheque.jpg",
    title: "Bibliothèque en ligne",
    description: "Application permettant aux utilisateurs de parcourir, emprunter et gérer des livres numériques.",
    tags: ["HTML", "CSS", "JS", "PHP"],
    href: "https://biblio-web.infinityfreeapp.com/index.php",
    status: "live",
  },
  {
    image: "/assets/Defi.jpg",
    title: "Défi Technique",
    description: "Analyse du site LeCloudeFacile, refonte de la maquette du landing page puis intégration complète.",
    tags: ["HTML", "CSS", "JS"],
    href: "https://defi-technique.vercel.app/",
    status: "live",
  },
  {
  image: "/assets/Defi.jpg",
  title: "Défi Technique",
  description: "Cette maquette est une refonte du landing page de CloudFacile, réalisée sur Figma dans le cadre d’un défi technique en design UI/UX.",
  tags: ["HTML", "CSS", "JS"],
  href: "https://www.behance.net/gallery/244925899/Defi-Technique",
  status: "live",
},
];

const ProjectCard = ({ image, title, description, tags, href, status }: { image: string; title: string; description: string; tags: string[]; href: string | null; status: string }) => (
  <div className="group relative flex flex-col bg-white dark:bg-black border-2 border-[#A99886]/20 hover:border-[#A99886] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#A99886]/10 transition-all duration-500 hover:-translate-y-1">

    {/* Image */}
    <div className="relative overflow-hidden h-48 flex-shrink-0">
      <Image
        src={image}
        alt={title}
        width={700}
        height={400}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      {/* Overlay au hover */}
      <div className="absolute inset-0 bg-[#A99886]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        {status === "live" && href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-[#A99886] font-playfair font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            <ExternalLink className="w-4 h-4" />
            Voir le projet
          </a>
        ) : (
          <span className="flex items-center gap-2 bg-white/20 text-white font-playfair text-sm px-5 py-2.5 rounded-full border border-white/40">
            <Clock className="w-4 h-4" />
            En développement
          </span>
        )}
      </div>
      {/* Badge statut */}
      <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-playfair font-semibold uppercase tracking-wider ${
        status === "live"
          ? "bg-emerald-100 text-emerald-700"
          : "bg-amber-100 text-amber-700"
      }`}>
        {status === "live" ? "● Live" : "⏳ En cours"}
      </div>
    </div>

    {/* Contenu */}
    <div className="flex flex-col flex-grow p-5 gap-3">
      <h2 className="font-playfair font-bold text-base text-black dark:text-white leading-snug group-hover:text-[#A99886] transition-colors duration-300">
        {title}
      </h2>
      <p className="font-playfair text-sm text-black/60 dark:text-white/60 leading-relaxed flex-grow">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {tags.map((tag: string) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-full bg-[#A99886]/10 text-[#A99886] text-[11px] font-playfair font-medium border border-[#A99886]/20"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Lien bas */}
      <div className="pt-2 border-t border-[#A99886]/10">
        {status === "live" && href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#A99886] font-playfair text-sm hover:gap-2.5 transition-all duration-300"
          >
            Voir le projet
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-amber-500 font-playfair text-sm">
            <Clock className="w-3.5 h-3.5" />
            En développement
          </span>
        )}
      </div>
    </div>
  </div>
);

const Projet = () => {
  return (
    <div className="dark:text-white text-black " id="projets">

      {/* Titre */}
      <div className="relative h-44 flex items-center justify-center">
        <h1 className="absolute font-playfair bottom-3 bg-[#A99886] text-white font-semibold py-2 px-4 rounded-full flex items-center gap-1 shadow-lg text-xl">
          <Sparkles className="w-4 h-4" />
          Réalisations
        </h1>
      </div>

      {/* Sous-titre */}
      <div className="px-6 text-center mb-10">
        <p className="font-playfair text-sm text-black/50 dark:text-white/50 max-w-xl mx-auto leading-relaxed">
          Quelques projets réalisés durant ma formation, mon stage et en autonomie — chacun représente une étape de mon évolution.
        </p>
        {/* Compteur */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <div className="text-center">
            <span className="font-playfair text-2xl font-bold text-[#A99886]">{projects.length}</span>
            <p className="font-playfair text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40">Projets</p>
          </div>
          <div className="h-8 w-px bg-[#A99886]/20" />
          <div className="text-center">
            <span className="font-playfair text-2xl font-bold text-[#A99886]">
              {projects.filter(p => p.status === "live").length}
            </span>
            <p className="font-playfair text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40">En ligne</p>
          </div>
          <div className="h-8 w-px bg-[#A99886]/20" />
          <div className="text-center">
            <span className="font-playfair text-2xl font-bold text-[#A99886]">
              {projects.filter(p => p.status === "wip").length}
            </span>
            <p className="font-playfair text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40">En cours</p>
          </div>
        </div>
      </div>

      {/* Grille */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4 md:px-6 mx-auto pb-16">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projet;