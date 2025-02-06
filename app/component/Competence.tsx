"use client";

import { FaBootstrap, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaLaravel, FaWordpress } from 'react-icons/fa';
import { SiNextdotjs, SiMysql, SiMongodb, SiTailwindcss, SiFigma, SiVercel, SiCanva, SiAdobephotoshop } from 'react-icons/si';


const Competence = () => {
    return (
        <div className="flex flex-col text-center justify-center dark:text-white text-black " id="competences">
            <h1 className="font-playfair text-4xl font-bold text-[#A99886] my-8 flex-col md:flex-row">Compétences</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl p-4 mx-16 ">

                <div className="p-6 bg-white dark:bg-black  dark:border-[#A99886] border-[#A99886] border-2 rounded-lg   dark:hover:bg-[#A99886] animate-slideUp delay-100 hover:animate-jump-in">
                    <h2 className="font-playfair font-bold text-xl dark:text-white text-black">Front-End</h2>
                    <ul className="space-y-5">
                        <li className="flex items-center space-x-2 ">
                            <FaBootstrap className="w-6 h-6  rounded-full  dark:text-black dark:bg-white" />
                            <span className="font-playfair">Bootstrap</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaHtml5 className="w-6 h-6  rounded-full  dark:text-black dark:bg-white" />
                            <span className="font-playfair">HTML</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <SiNextdotjs className="w-6 h-6 rounded-full  dark:bg-black " />
                            <span>Next.js</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaCss3Alt className="w-6 h-6  rounded-full  dark:text-black dark:bg-white" />
                            <span>CSS</span>
                        </li>
                    </ul>
                </div>

                <div className="p-6 bg-white dark:bg-black  dark:border-[#A99886] border-[#A99886] border-2  rounded-lg  dark:hover:bg-[#A99886] animate-slideUp delay-100">
                    <h2 className="font-playfair font-bold text-xl dark:text-white text-black">Back-End</h2>
                    <ul className="space-y-5">
                        <li className="flex items-center space-x-2">
                            <FaLaravel className="w-6 h-6  rounded-full  dark:text-black dark:bg-white" />
                            <span className="font-playfair">Laravel</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaNodeJs className="w-6 h-6  rounded-full dark:text-black dark:bg-white" />
                            <span className="font-playfair">Node.js</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <SiMysql className="w-6 h-6  rounded-full  dark:text-black dark:bg-white" />
                            <span>MySQL</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <SiMongodb className="w-6 h-6  rounded-full  dark:text-black dark:bg-white" />
                            <span>MongoDB</span>
                        </li>
                    </ul>
                </div>

                <div className="p-6 bg-white dark:bg-black dark:border-[#A99886] border-[#A99886] border-2 rounded-lg  dark:hover:bg-[#A99886] animate-slideUp delay-100">
                    <h2 className="font-playfair font-bold text-xl dark:text-white text-black">CSS & UI</h2>
                    <ul className="space-y-5">
                        <li className="flex items-center space-x-2">
                            <SiTailwindcss className="w-6 h-6 rounded-full  dark:text-black dark:bg-white" />
                            <span className="font-playfair">Tailwind CSS</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <SiFigma className="w-6 h-6  rounded-full  dark:text-black dark:bg-white" />
                            <span className="font-playfair">Figma</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <SiAdobephotoshop className="w-6 h-6 rounded-full  dark:bg-black dark:text-white" />
                            <span>Photoshop</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <SiCanva className="w-6 h-6" />
                            <span>Canva</span>
                        </li>
                    </ul>
                </div>

                <div className="p-6 bg-white dark:bg-black dark:border-[#A99886] border-[#A99886] border-2 rounded-lg  dark:hover:bg-[#A99886] animate-slideUp delay-100">
                    <h2 className="font-playfair font-bold text-xl dark:text-white text-black">Outils & Plateformes</h2>
                    <ul className="space-y-5">
                        <li className="flex items-center space-x-2">
                            <FaGitAlt className="w-6 h-6  rounded-full bg-white dark:text-black dark:bg-white" />
                            <span className="font-playfair">Git</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaGithub className="w-6 h-6 text-black rounded-full bg-white dark:text-white dark:bg-black" />
                            <span className="font-playfair">Github</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <SiVercel className="w-6 h-6  rounded-full  dark:text-black dark:bg-white" />
                            <span>Vercel</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaWordpress className="w-6 h-6 text-black rounded-full bg-white dark:text-white dark:bg-black" />
                            <span>WordPress</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Competence;
