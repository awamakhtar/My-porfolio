

import Image from 'next/image';
import { Sparkles } from "lucide-react";
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projet = () => {
    return (
        <div className="dark:text-white text-black" id="projets">
            <div className="relative h-44 flex items-center justify-center">
                <h1 className="absolute font-playfair bottom-3 bg-[#A99886] text-white font-semibold py-2 px-3 m-4 rounded-full flex items-center shadow-lg hover:bg-[#A99886]-600 text-xl">
                    <Sparkles className="text-white w-4 h-4"/>
                    Réalisations
                </h1>
            </div>
            
            <div className="px-4">
                <h3 className="font-playfair text-center my-6 max-w-4xl mx-auto">
                    Ci-dessous, quelques exemples de réalisations effectuées durant la formation, le stage et plus encore :
                </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl px-4 md:px-6 mx-auto pb-12">

                {/* Card 1 - Maraxib Store */}
                <div className="mx-auto rounded-lg bg-[#A99886] w-full max-w-[350px] min-h-[480px] flex flex-col shadow-lg border border-[#A99886] cursor-pointer hover:scale-[99%] transition-all duration-700">
                    <div className="flex-shrink-0">
                        <Image 
                            src="/assets/maraxib.png" 
                            alt="maraxib" 
                            className="object-cover rounded-tl-md rounded-tr-md w-full h-48" 
                            width={1155} 
                            height={706}
                        />
                    </div>
                    <div className="flex flex-col flex-grow p-4">
                        <h2 className="uppercase text-white font-bold mb-2">Maraxib Store</h2>
                        <p className="text-white text-sm mb-4 flex-grow">
                            Maraxib est une boutique en ligne dédiée à la vente de vêtements et accessoires musulmans pour hommes et femmes. 
                            Le site propose une navigation fluide, un design épuré et une expérience utilisateur intuitive.
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-black bg-white px-2 py-1 rounded-sm text-xs">NextJS</span>
                            <span className="text-black bg-white px-2 py-1 rounded-sm text-xs">Tailwind CSS</span>
                        </div>

                        <div className="flex items-center space-x-1 mt-auto">   
                            <a 
                                href="https://maraxib-store-web.vercel.app/acceuil" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white hover:underline"
                            >
                                voir projet
                            </a>
                            <FaExternalLinkAlt className="text-white text-xs" />
                        </div>
                    </div>
                </div>

                {/* Card 2 - Site Vitrine Bootstrap */}
                <div className="mx-auto rounded-lg bg-[#A99886] w-full max-w-[350px] min-h-[480px] flex flex-col shadow-lg border border-[#A99886] cursor-pointer hover:scale-[99%] transition-all duration-700">
                    <div className="flex-shrink-0">
                        <Image 
                            src="/assets/bootsrap.jpg" 
                            alt="site bootstrap" 
                            className="object-cover rounded-tl-md rounded-tr-md w-full h-48" 
                            width={1150} 
                            height={706}
                        />
                    </div>
                    <div className="flex flex-col flex-grow p-4">
                        <h2 className="uppercase text-white font-bold mb-2">Site Vitrine</h2>
                        <p className="text-white text-sm mb-4 flex-grow">
                            Ce site vitrine a été conçu dans le cadre de ma pratique de Bootstrap, afin de mettre en application les composants, grilles et utilitaires proposés par le framework.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-black bg-white px-2 py-1 rounded-sm text-xs">Bootstrap</span>
                            <span className="text-black bg-white px-2 py-1 rounded-sm text-xs">HTML</span>
                            <span className="text-black bg-white px-2 py-1 rounded-sm text-xs">CSS</span>
                        </div>

                        <div className="flex items-center space-x-1 mt-auto">   
                            <a 
                                href="https://site-bootstrap-umber.vercel.app/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white hover:underline"
                            >
                                voir projet
                            </a>
                            <FaExternalLinkAlt className="text-white text-xs" />
                        </div>
                    </div>
                </div>

                {/* Card 3 - CV en ligne */}
                <div className="mx-auto rounded-lg bg-[#A99886] w-full max-w-[350px] min-h-[480px] flex flex-col shadow-lg border border-[#A99886] cursor-pointer hover:scale-[99%] transition-all duration-700">
                    <div className="flex-shrink-0">
                        <Image 
                            src="/assets/cv-projet.jpg" 
                            alt="cv en ligne" 
                            className="object-cover rounded-tl-md rounded-tr-md w-full h-48" 
                            width={1150} 
                            height={706}
                        />
                    </div>
                    <div className="flex flex-col flex-grow p-4">
                        <h2 className="uppercase text-white font-bold mb-2">CV en ligne</h2>
                        <p className="text-white text-sm mb-4 flex-grow">
                            Ce projet met en avant mon profil, mes compétences, mes projets et mes coordonnées de manière responsive.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-black bg-white px-2 py-1 rounded-sm text-xs">HTML</span>
                            <span className="text-black bg-white px-2 py-1 rounded-sm text-xs">Tailwind CSS</span>
                            <span className="text-black bg-white px-2 py-1 rounded-sm text-xs">JS</span>
                        </div>

                        <div className="flex items-center space-x-1 mt-auto">   
                            <a 
                                href="https://cv-nu-sand.vercel.app/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white hover:underline"
                            >
                                voir projet
                            </a>
                            <FaExternalLinkAlt className="text-white text-xs" />
                        </div>
                    </div>
                </div>

                {/* Card 4 - Intégration maquette */}
                <div className="mx-auto rounded-lg bg-[#A99886] w-full max-w-[350px] min-h-[480px] flex flex-col shadow-lg border border-[#A99886] cursor-pointer hover:scale-[99%] transition-all duration-700">
                    <div className="flex-shrink-0">
                        <Image 
                            src="/assets/test.png" 
                            alt="intégration maquette" 
                            className="object-cover rounded-tl-md rounded-tr-md w-full h-48" 
                            width={1150} 
                            height={706}
                        />
                    </div>
                    <div className="flex flex-col flex-grow p-4">
                        <h2 className="uppercase text-white font-bold mb-2">Intégration d&apos;une maquette web</h2>
                        <p className="text-white text-sm mb-4 flex-grow">
                            Transformation d&apos;une maquette Figma en une interface interactive et responsive avec React.js et Tailwind CSS.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-black bg-white px-2 py-1 rounded-sm text-xs">React</span>
                            <span className="text-black bg-white px-2 py-1 rounded-sm text-xs">Tailwind</span>
                        </div>

                        <div className="flex items-center space-x-1 mt-auto">   
                            <a 
                                href="https://www.behance.net/gallery/219421371/Porfolio" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white hover:underline"
                            >
                                voir projet
                            </a>
                            <FaExternalLinkAlt className="text-white text-xs" />
                        </div>
                    </div>
                </div>

                {/* Card 6 - Gestion Inscription */}
                <div className="mx-auto rounded-lg bg-[#A99886] w-full max-w-[350px] min-h-[480px] flex flex-col shadow-lg border border-[#A99886] cursor-pointer hover:scale-[99%] transition-all duration-700">
                    <div className="flex-shrink-0">
                        <Image 
                            src="/assets/gestion-inscription.png" 
                            alt="gestion inscription" 
                            className="object-cover rounded-tl-md rounded-tr-md w-full h-48" 
                            width={1150} 
                            height={706}
                        />
                    </div>
                    <div className="flex flex-col flex-grow p-4">
                        <h2 className="uppercase text-white font-bold mb-2">Plateforme de Gestion D&apos;inscription Scolaire</h2>
                        <p className="text-white text-sm mb-4 flex-grow">
                            Application web de gestion des inscriptions scolaires en ligne avec interface parent (React) et panel admin (Laravel + Filament).
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-black bg-white px-2 py-1 rounded-sm text-xs">Laravel</span>
                            <span className="text-black bg-white px-2 py-1 rounded-sm text-xs">React</span>
                            <span className="text-black bg-white px-2 py-1 rounded-sm text-xs">Tailwind</span>
                            <span className="text-black bg-white px-2 py-1 rounded-sm text-xs">Filament</span>
                            <span className="text-black bg-white px-2 py-1 rounded-sm text-xs">MySQL</span>
                        </div>

                        <div className="flex items-center space-x-1 mt-auto">   
                            <span className="text-white">En développement</span>
                            <FaExternalLinkAlt className="text-white text-xs" />
                        </div>
                    </div>
                </div>

                {/* Card 7 - Nouveau Projet  */}
                <div className="mx-auto rounded-lg bg-[#A99886] w-full max-w-[350px] min-h-[480px] flex flex-col shadow-lg border border-[#A99886] cursor-pointer hover:scale-[99%] transition-all duration-700">
                    <div className="flex-shrink-0">
                        <Image 
                            src="/assets/bibliotheque.jpg" 
                            alt="nouveau projet" 
                            className="object-cover rounded-tl-md rounded-tr-md w-full h-48" 
                            width={1150} 
                            height={706}
                        />
                    </div>
                    <div className="flex flex-col flex-grow p-4">
                        <h2 className="uppercase text-white font-bold mb-2">Bibliothéque en ligne</h2>
                        <p className="text-white text-sm mb-4 flex-grow">
                            Une application de bibliothèque en ligne permettant aux utilisateurs de parcourir, emprunter et gérer des livres numériques.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-black bg-white px-2 py-1 rounded-sm text-xs">HTML</span>
                            <span className="text-black bg-white px-2 py-1 rounded-sm text-xs">CSS</span>
                            <span className="text-black bg-white px-2 py-1 rounded-sm text-xs">JS</span>
                            <span className="text-black bg-white px-2 py-1 rounded-sm text-xs">PHP</span>
                        </div>

                        <div className="flex items-center space-x-1 mt-auto">   
                            <a 
                                href="https://biblio-web.infinityfreeapp.com/index.php" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white hover:underline"
                            >
                                voir projet
                            </a>
                            <FaExternalLinkAlt className="text-white text-xs" />
                        </div>
                    </div>
                </div>

                {/* Card 8 - Nouveau Projet */}
                <div className="mx-auto rounded-lg bg-[#A99886] w-full max-w-[350px] min-h-[480px] flex flex-col shadow-lg border border-[#A99886] cursor-pointer hover:scale-[99%] transition-all duration-700">
                    <div className="flex-shrink-0">
                        <Image 
                            src="/assets/Defi.jpg" 
                            alt="nouveau projet" 
                            className="object-cover rounded-tl-md rounded-tr-md w-full h-48" 
                            width={1150} 
                            height={706}
                        />
                    </div>
                    <div className="flex flex-col flex-grow p-4">
                        <h2 className="uppercase text-white font-bold mb-2">Defi Technique</h2>
                        <p className="text-white text-sm mb-4 flex-grow">
                            Ce projet consiste à relever un défi technique en analysant le site de LeCloudeFacile ,de refaire la maquette du landing page et de le concevoir avec HTML,CSS et JS
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-black bg-white px-2 py-1 rounded-sm text-xs">HTML</span>
                            <span className="text-black bg-white px-2 py-1 rounded-sm text-xs">CSS</span>
                            <span className="text-black bg-white px-2 py-1 rounded-sm text-xs">JS</span>
                        </div>

                        <div className="flex items-center space-x-1 mt-auto">   
                            <a 
                                href="https://defi-technique.vercel.app/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white hover:underline"
                            >
                                voir projet
                            </a>
                            <FaExternalLinkAlt className="text-white text-xs" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projet;