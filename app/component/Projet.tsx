
import Image from 'next/image';
import { Sparkles } from "lucide-react";
import { FaExternalLinkAlt } from 'react-icons/fa';




const Projet = ()=>{
    return(
        <div className="  dark:text-white text-black " id="projets">
            <div className="relative  h-44  flex items-center justify-center">
                <h1 className="absolute font-playfair bottom-3 bg-[#A99886] text-white font-semibold py-2 px-3 m-4 rounded-full flex items-center  shadow-lg hover:bg-[#A99886]-600 text-xl">
                <Sparkles className="text-white w-4 h-4"/>Réalisations</h1>
                </div>
               <div className="">

                <h3 className=" font-playfair text-center my-6">
                    Ci-dessous, quelques exemples de réalisations effectuées durant la formation, le stage et plus encore :
                </h3>
               </div>
                
           
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full max-w-5xl p-4  mx-auto ">

                <div className="mx-auto rounded-lg bg-[#A99886] w-[300px] h-[450px] shadow-lg border border-[#A99886]   cursor-pointer hover:scale-[99%] transition-all duration-700 hover:shadow-bs">
                    <div className="mb-6">
                        <Image src="/assets/maraxibe.jpg" alt="maraxib site de vente de vetement et accessoires musulmans" className=" object-cover rounded-tl-md rounded-tr-md" width={350} height={400}/>
                    </div>
                    <h2 className="uppercase text-start text-white font-bold mx-2">Maraxib Store</h2>
                    <p className="text-start text-white text-sm mt-4 mx-2">Commandez tout ce dont vous avez besoin dans votre boutique islamique en ligne que ce soit
                    Bayelahat, Laxasay, Coran, Xassida, Tapis de priere, chapelets, etc</p>

                    <div className="flex space-x-4 mt-8 text-sm mx-2">
                        <div className="text-black bg-white p-1 rounded-sm text-sm">NextJS</div>
                        <div className="text-black bg-white p-1 rounded-sm text-sm">Tailwind</div>
                        <div className="text-black bg-white p-1 rounded-sm text-sm">Laravel</div>
                    </div>

                    <div className="flex  space-x-1  mt-3 mx-2  ">   

                        <div className=" text-white">
                            <a href="https://maraxib-alkaly02s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                            voir projet
                            </a>
                        </div>           
                        <FaExternalLinkAlt className="text-white mt-2 text-xs" />
                       
                    </div>
                </div>

                 <div className="mx-auto rounded-lg bg-[#A99886] w-[300px] h-[450px]   shadow-lg border border-[#A99886]    cursor-pointer hover:scale-[99%] transition-all duration-700">
                    <div className="mb-6">
                        <Image src="/assets/al-mountakha.jpg" alt="maraxib" className=" object-cover rounded-tl-md rounded-tr-md" width={1155} height={706}/>
                    </div>
                    <h2 className="uppercase text-start text-white font-bold mx-2">Al-muntakha-vision</h2>
                    <p className="text-start text-white text-sm mt-4 mx-2">Al-Muntakha Vision est une boutique en ligne dédiée à la vente de lunettes pour femmes et hommes, soigneusement
                         sélectionnées pour allier élégance, confort et qualité </p>

                    <div className="flex space-x-4 mt-4 text-sm mx-2">
                        <div className="text-black bg-white p-1 rounded-sm text-sm">WordPress</div>
                    </div>

                    <div className="flex  space-x-1  mt-4 mx-2  ">   
                    <div className=" text-white">
                            <a href="https://maraxib-alkaly02s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                            voir projet
                            </a>
                        </div>           
                        <FaExternalLinkAlt className="text-white mt-2 text-xs" />
                    </div>
                </div>

                <div className="mx-auto rounded-lg bg-[#A99886] w-[300px] h-[450px]  shadow-lg border border-[#A99886]  cursor-pointer hover:scale-[99%] transition-all duration-700">
                    <div className="mb-6">
                        <Image src="/assets/bootsrap.jpg" alt="maraxib" className="object-cover rounded-tl-md rounded-tr-md" width={1150} height={706}/>
                    </div>
                    <h2 className="uppercase text-start text-white font-bold mx-2">Site Vitrine</h2>
                    <p className="text-start text-white text-sm mt-4 mx-2">Ce site vitrine a été conçu dans le cadre de ma pratique de Bootstrap, afin de mettre en application les composants, grilles et utilitaires proposés par le framework</p>

                    <div className="flex space-x-4 mt-8 text-sm mx-2">
                        <div className="text-black bg-white p-1 rounded-sm text-sm">Bootstrap</div>
                        <div className="text-black bg-white p-1 rounded-sm text-sm">HTML</div>
                        <div className="text-black bg-white p-1 rounded-sm text-sm">CSS</div>
                    </div>

                    <div className="flex  space-x-1  mt-4  mx-2">   
                    <div className=" text-white">
                            <a href="https://site-bootstrap-umber.vercel.app/" target="_blank" rel="noopener noreferrer">
                            voir projet
                            </a>
                        </div>           
                        <FaExternalLinkAlt className="text-white mt-2 text-xs" />
                    </div>
                </div>

                
                <div className="mx-auto rounded-lg bg-[#A99886] w-[300px] h-[450px]  shadow-lg border border-[#A99886]  cursor-pointer hover:scale-[99%] transition-all duration-700">
                    <div className="mb-6">
                        <Image src="/assets/cv-projet.jpg" alt="maraxib" className="object-cover rounded-tl-md rounded-tr-md" width={1150} height={706}/>
                    </div>
                    <h2 className="uppercase text-start text-white font-bold mx-2">CV en lign</h2>
                    <p className="text-start text-white text-sm mt-4 mx-2">Ce projet met en avant mon profil, mes compétences, mes projets et mes coordonnées de manière responsive.</p>

                    <div className="flex space-x-4 mt-8 text-sm mx-2">
                        <div className="text-black bg-white p-1 rounded-sm text-sm">HTML</div>
                        <div className="text-black bg-white p-1 rounded-sm text-sm">Tailwind CSS</div>
                        <div className="text-black bg-white p-1 rounded-sm text-sm">JS</div>
                    </div>

                    <div className="flex  space-x-1  mt-4  mx-2">   
                    <div className=" text-white">
                            <a href="https://cv-nu-sand.vercel.app/" target="_blank" rel="noopener noreferrer">
                            voir projet
                            </a>
                        </div>           
                        <FaExternalLinkAlt className="text-white mt-2 text-xs" />
                    </div>
                </div>

                <div className="mx-auto rounded-lg bg-[#A99886] w-[300px] h-[450px]  shadow-lg border border-[#A99886]  cursor-pointer hover:scale-[99%] transition-all duration-700">
                    <div className="mb-6">
                        <Image src="/assets/portfolio.jpg" alt="maraxib" className="object-cover rounded-tl-md rounded-tr-md" width={1150} height={706}/>
                    </div>
                    <h2 className="uppercase text-start text-white font-bold mx-2"> Maquette de mon portfolio </h2>
                    <p className="text-start text-white text-sm mt-4 mx-2">J’ai réalisé la maquette de mon portfolio sur Figma afin de concevoir une interface moderne, élégante et responsive. </p>

                    <div className="flex space-x-4 mt-8 text-sm mx-2">
                        <div className="text-black bg-white p-1 rounded-sm text-sm">Figma</div>
                    </div>

                    <div className="flex  space-x-1  mt-4  mx-2">   
                    <div className=" text-white">
                            <a href="https://www.behance.net/gallery/219421371/Porfolio" target="_blank" rel="noopener noreferrer">
                            voir projet
                            </a>
                        </div>           
                        <FaExternalLinkAlt className="text-white mt-2 text-xs" />
                    </div>
                </div>

                <div className="mx-auto rounded-lg bg-[#A99886] w-[300px] h-[450px]  shadow-lg border border-[#A99886]  cursor-pointer hover:scale-[99%] transition-all duration-700">
                    <div className="mb-6">
                        <Image src="/assets/stocksite.jpg" alt="maraxib" className="object-cover rounded-tl-md rounded-tr-md" width={1150} height={706}/>
                    </div>
                    <h2 className="uppercase text-start text-white font-bold mx-2"> Site vitrine de sunu stock</h2>
                    <p className="text-start text-white text-sm mt-4 mx-2">Ce site est conçu pour la présentation de l&apos;application  Sunu Stock et de ces différentes fonctionnalités </p>

                    <div className="flex space-x-4 mt-8 text-sm mx-2">
                        <div className="text-black bg-white p-1 rounded-sm text-sm">Wordpress</div>
                    </div>

                    <div className="flex  space-x-1  mt-4  mx-2">   
                    <div className=" text-white">
                            <a href="https://www.sunu-stock.ndiagandiaye.com/" target="_blank" rel="noopener noreferrer">
                            voir projet
                            </a>
                        </div>           
                        <FaExternalLinkAlt className="text-white mt-2 text-xs" />
                    </div>
                </div>

                <div className="mx-auto rounded-lg bg-[#A99886] w-[300px] h-[450px]  shadow-lg border border-[#A99886]  cursor-pointer hover:scale-[99%] transition-all duration-700">
                    <div className="mb-6">
                        <Image src="/assets/sunustock.jpg" alt="maraxib" className="object-cover rounded-tl-md rounded-tr-md" width={1150} height={706}/>
                    </div>
                    <h2 className="uppercase text-start text-white font-bold mx-2"> Sunu stock</h2>
                    <p className="text-start text-white text-sm mt-4 mx-2">Il s&lsquo;agit d&apos;une application web développée dans le cadre de notre soutenance de fin de formation.
                         Elle permet de gérer efficacement les stocks d’une entreprise en temps réel. </p>

                    <div className="flex space-x-4 mt-8 text-sm mx-2">
                        <div className="text-black bg-white p-1 rounded-sm text-sm">Laravel</div>
                        <div className="text-black bg-white p-1 rounded-sm text-sm">Bootstrap</div>
                        <div className="text-black bg-white p-1 rounded-sm text-sm">CSS</div>
                        <div className="text-black bg-white p-1 rounded-sm text-sm">MySQL</div>
                    </div>

                    <div className="flex  space-x-1  mt-4  mx-2">   
                    <div className=" text-white">
                            <a href="https://app-stock.ndiagandiaye.com/login" target="_blank" rel="noopener noreferrer">
                            voir projet
                            </a>
                        </div>           
                        <FaExternalLinkAlt className="text-white mt-2 text-xs" />
                    </div>
                </div>


                

                

            </div>
        </div>



          )
        };
export default Projet;          