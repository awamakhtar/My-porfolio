
import Image from 'next/image';
import { Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { IoMdArrowDroprightCircle } from "react-icons/io";




const Projet = ()=>{
    return(
        <div className="  dark:text-white text-black " id="projets">
            {/* <h1 className="font-playfair text-4xl font-bold text-[#A99886] my-8 flex-col md:flex-row">Mes Réalisations</h1> */}
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
                        <Image src="/assets/maraxibe.jpg" alt="maraxib site de vente de vetement et accessoires musulmans" className=" object-cover rounded-lg" width={350} height={400}/>
                    </div>
                    <h2 className="uppercase text-start text-white font-bold mx-2">Maraxib Store</h2>
                    <p className="text-start text-white text-sm mt-4 mx-2">Commandez tout ce dont vous avez besoin dans votre boutique islamique en ligne que ce soit
                    Bayelahat, Laxasay, Coran, Xassida, Tapis de priere, chapelets, etc</p>

                    <div className="flex space-x-4 mt-4 text-sm mx-2">
                        <div className="text-black bg-white p-1 rounded-sm text-sm">NextJS</div>
                        <div className="text-black bg-white p-1 rounded-sm text-sm">Tailwind</div>
                        <div className="text-black bg-white p-1 rounded-sm text-sm">Laravel</div>
                    </div>

                    <div className="flex  space-x-6  mt-3 mx-2  ">   
                        <a href="https://github.com/bakeli-OpenSource/maraxib-store-web" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-2xl border-2 border-black rounded-full" />
                        </a>
                        <a href="https://maraxib-alkaly02s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <IoMdArrowDroprightCircle  className="text-2xl border-2 border-black rounded-full"/>

                        </a>
                    </div>
                </div>

                 <div className="mx-auto rounded-lg bg-[#A99886] w-[300px] h-[450px]   shadow-lg border border-[#A99886]    cursor-pointer hover:scale-[99%] transition-all duration-700">
                    <div className="mb-6">
                        <Image src="/assets/al-mountakha.jpg" alt="maraxib" className=" object-cover rounded-lg" width={1155} height={706}/>
                    </div>
                    <h2 className="uppercase text-start text-white font-bold mx-2">Al-muntakha-vision</h2>
                    <p className="text-start text-white text-sm mt-4 mx-2">Commandez tout ce dont vous avez besoin dans votre boutique islamique en ligne que ce soit
                    Bayelahat, Laxasay, Coran, Xassida, Tapis de priere, chapelets, etc</p>

                    <div className="flex space-x-4 mt-4 text-sm mx-2">
                        <div className="text-black bg-white p-1 rounded-sm text-sm">WordPress</div>
                        {/* <div className="text-black bg-white p-1 rounded-sm text-sm">Tailwind</div>
                        <div className="text-black bg-white p-1 rounded-sm text-sm">Laravel</div> */}
                    </div>

                    <div className="flex  space-x-6  mt-4 mx-2  ">   
                        <a href="https://github.com/bakeli-OpenSource/maraxib-store-web" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-2xl border-2 border-black rounded-full" />
                        </a>
                        <a href="https://maraxib-alkaly02s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <IoMdArrowDroprightCircle  className="text-2xl border-2 border-black rounded-full"/>

                        </a>
                    </div>
                </div>

                <div className="mx-auto rounded-lg bg-[#A99886] w-[300px] h-[450px]  shadow-lg border border-[#A99886]  cursor-pointer hover:scale-[99%] transition-all duration-700">
                    <div className="mb-6">
                        <Image src="/assets/bootsrap.jpg" alt="maraxib" className="object-cover rounded-lg" width={1150} height={706}/>
                    </div>
                    <h2 className="uppercase text-start text-white font-bold mx-2">Maraxib Store</h2>
                    <p className="text-start text-white text-sm mt-4 mx-2">Commandez tout ce dont vous avez besoin dans votre boutique islamique en ligne que ce soit
                    Bayelahat, Laxasay, Coran, Xassida, Tapis de priere, chapelets, etc</p>

                    <div className="flex space-x-4 mt-4 text-sm mx-2">
                        <div className="text-black bg-white p-1 rounded-sm text-sm">Bootstrap</div>
                        <div className="text-black bg-white p-1 rounded-sm text-sm">HTML</div>
                        <div className="text-black bg-white p-1 rounded-sm text-sm">CSS</div>
                    </div>

                    <div className="flex  space-x-6  mt-4  mx-2">   
                        <a href="https://github.com/awamakhtar/Site_Bootstrap" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-2xl border-2 border-black rounded-full" />
                        </a>
                        <a href="https://site-bootstrap-umber.vercel.app/#topics" target="_blank" rel="noopener noreferrer">
                        <IoMdArrowDroprightCircle  className="text-2xl border-2 border-black rounded-full"/>

                        </a>
                    </div>
                </div>

                

            </div>
        </div>



          )
        };
export default Projet;          