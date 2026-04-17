"use client";

import Image from 'next/image';
import { Download, Code2, Palette } from 'lucide-react';

const Header = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20" id="header">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A99886]/20 dark:bg-[#A99886]/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#c9b9a8]/15 dark:bg-[#A99886]/8 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4" />
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] grid-background" />
            </div>

            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6 animate-fadeInLeft">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#A99886]/50 bg-[#A99886]/10 text-[#A99886] text-xs font-playfair tracking-widest uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A99886] animate-pulse" />
                        Disponible pour un projet
                    </span>

                    {/* Intro */}
                    <div>
                        <p className="font-playfair text-sm tracking-[0.3em] uppercase text-black/50 dark:text-white/50 mb-1">
                            Hello, je suis
                        </p>
                        <h1 className="font-allura text-6xl sm:text-7xl text-[#A99886] leading-none drop-shadow-sm">
                            Awa Sylla
                        </h1>
                    </div>

                    {/* Séparateur décoratif */}
                    <div className="flex items-center gap-3 w-full max-w-xs md:mx-0 mx-auto">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#A99886] to-transparent" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#A99886]" />
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#A99886] to-transparent" />
                    </div>

                    {/* Description */}
                    <p className="font-playfair text-base text-black/70 dark:text-white/70 max-w-sm leading-relaxed">
                        Développeuse <span className="text-[#A99886] font-semibold">Fullstack</span>, Je crée des sites web pour aider les petites entreprises à trouver plus de clients en ligne.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {[
                            { icon: <Code2 className="w-3.5 h-3.5" />, label: "Fullstack Dev" },
                            { icon: <Palette className="w-3.5 h-3.5" />, label: "UI Design" },
                        ].map(({ icon, label }) => (
                            <span
                                key={label}
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-black border border-[#A99886]/40 text-xs font-playfair text-black dark:text-white shadow-sm"
                            >
                                <span className="text-[#A99886]">{icon}</span>
                                {label}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <a href="/assets/Awa_Sylla.pdf" download>
                        <button className="group relative inline-flex items-center gap-2 font-playfair bg-[#A99886] hover:bg-[#927f6e] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-[#A99886]/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
                            <Download className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                            Télécharger CV
                        </button>
                    </a>
                </div>
                        {/* image */}
                <div className="relative flex-shrink-0 animate-fadeInRight">

                    {/* Cercle décoratif tournant */}
                    <div className="absolute inset-0 m-auto w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] rounded-full border-2 border-dashed border-[#A99886]/30 animate-spin-slow" />
                    <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] m-[30px] sm:m-[35px] md:m-[40px]">
                        <div className="absolute inset-0 rounded-full bg-[#A99886]/30 blur-xl scale-90 translate-y-4" />
                        <div className="absolute -inset-3 rounded-full border border-[#A99886]/40" />
                        <div className="absolute -inset-6 rounded-full border border-[#A99886]/20" />

                        {/* Image */}
                        <Image
                            src="/assets/profile-pic.png"
                            alt="Awa Sylla"
                            width={320}
                            height={320}
                            className="relative w-full h-full object-cover rounded-full shadow-2xl"
                            priority
                        />
                    </div>
                    <div className="absolute -bottom-2 -left-4 md:-left-8 bg-white dark:bg-black border border-[#A99886]/40 rounded-2xl px-4 py-2 shadow-lg flex items-center gap-2 animate-float">
                        <span className="text-xl">✨</span>
                        <div className="text-left">
                            <p className="text-[10px] text-black/40 dark:text-white/40 font-playfair uppercase tracking-wider">Passion</p>
                            <p className="text-xs font-semibold font-playfair text-black dark:text-white">Design & Code</p>
                        </div>
                    </div>

                    {/* stack  flottant*/}
                    <div className="absolute -top-2 -right-4 md:-right-8 bg-[#A99886] rounded-2xl px-4 py-2 shadow-lg animate-float-delay">
                        <p className="text-[10px] text-white/70 font-playfair uppercase tracking-wider">Stack</p>
                        <p className="text-xs font-semibold font-playfair text-white">Next.js · Laravel</p>
                    </div>
                </div>
            </div>

            {/* ── Animations ── */}
            <style jsx>{`
                @keyframes fadeInLeft {
                    from { opacity: 0; transform: translateX(-30px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes fadeInRight {
                    from { opacity: 0; transform: translateX(30px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50%       { transform: translateY(-6px); }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                .animate-fadeInLeft  { animation: fadeInLeft  0.8s ease both; }
                .animate-fadeInRight { animation: fadeInRight 0.8s ease 0.2s both; }
                .animate-float       { animation: float 3s ease-in-out infinite; }
                .animate-float-delay { animation: float 3s ease-in-out 1.5s infinite; }
                .animate-spin-slow   { animation: spin-slow 18s linear infinite; }
                .grid-background {
                    background-image: linear-gradient(#A99886 1px, transparent 1px), linear-gradient(90deg, #A99886 1px, transparent 1px);
                    background-size: 60px 60px;
                }
            `}</style>
        </section>
    );
};

export default Header;