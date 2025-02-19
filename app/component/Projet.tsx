
import Image from 'next/image';
import { Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { IoMdArrowDroprightCircle } from "react-icons/io";




const Projet = ()=>{
    return(
        <div className="flex flex-col text-center justify-center dark:text-white text-black " id="projets">
            {/* <h1 className="font-playfair text-4xl font-bold text-[#A99886] my-8 flex-col md:flex-row">Mes Réalisations</h1> */}
            <div className="relative  h-44  flex items-center justify-center">
                <h1 className="absolute bottom-3 bg-[#A99886] text-white font-semibold py-2 px-3 m-4 rounded-full flex items-center  shadow-lg hover:bg-[#A99886]-600 text-xl">
                <Sparkles className="text-white w-4 h-4"/>Réalisations</h1>
            </div>
            <div className="grid  mx-6  p-4 grid-cols-3">

                <div className="rounded-lg bg-[#A99886] w-[300px] h-[450px] mx-16 shadow-lg border border-[#A99886]  dark:hover:bg-gray-500/30 p-2 ">
                    <div className="mb-6">
                        <Image src="/assets/maraxibe.jpg" alt="maraxib" className="card-img-top object-cover rounded-lg" width={350} height={400}/>
                    </div>
                    <h2 className="uppercase text-start text-white font-bold">Maraxib Store</h2>
                    <p className="text-start text-white text-sm mt-4">Commandez tout ce dont vous avez besoin dans votre boutique islamique en ligne que ce soit
                    Bayelahat, Laxasay, Coran, Xassida, Tapis de priere, chapelets, etc</p>

                    <div className="flex space-x-4 mt-4 text-sm">
                        <div className="text-white bg-black p-1 rounded-sm text-sm">NextJS</div>
                        <div className="text-white bg-black p-1 rounded-sm text-sm">Tailwind</div>
                        <div className="text-white bg-black p-1 rounded-sm text-sm">Laravel</div>
                    </div>

                    <div className="flex  space-x-6  mt-6  ">   
                        <a href="https://github.com/bakeli-OpenSource/maraxib-store-web" >
                            <FaGithub className="text-2xl border-2 border-black rounded-full" />
                        </a>
                        <a href="https://github.com/bakeli-OpenSource/maraxib-store-web" >
                        <IoMdArrowDroprightCircle  className="text-2xl border-2 border-black rounded-full"/>

                        </a>
                    </div>
                </div>

                <div className="rounded-lg bg-[#A99886] w-[300px] h-[450px] mx-16 shadow-lg border border-[#A99886]  dark:hover:bg-gray-500/30 p-2">
                    <div className="mb-6">
                        <Image src="/assets/maraxibe.jpg" alt="maraxib" className="card-img-top object-cover rounded-lg" width={350} height={400}/>
                    </div>
                    <h2 className="uppercase text-start text-white font-bold">Maraxib Store</h2>
                    <p className="text-start text-white text-sm mt-4">Commandez tout ce dont vous avez besoin dans votre boutique islamique en ligne que ce soit
                    Bayelahat, Laxasay, Coran, Xassida, Tapis de priere, chapelets, etc</p>

                    <div className="flex space-x-4 mt-4 text-sm">
                        <div className="text-white bg-black p-1 rounded-sm text-sm">NextJS</div>
                        <div className="text-white bg-black p-1 rounded-sm text-sm">Tailwind</div>
                        <div className="text-white bg-black p-1 rounded-sm text-sm">Laravel</div>
                    </div>

                    <div className="flex  space-x-6  mt-6  ">   
                        <a href="https://github.com/bakeli-OpenSource/maraxib-store-web" >
                            <FaGithub className="text-2xl border-2 border-black rounded-full" />
                        </a>
                        <a href="https://github.com/bakeli-OpenSource/maraxib-store-web" >
                        <IoMdArrowDroprightCircle  className="text-2xl border-2 border-black rounded-full"/>

                        </a>
                    </div>
                </div>

                <div className="rounded-lg bg-[#A99886] w-[300px] h-[450px] mx-16 shadow-lg border border-[#A99886]  dark:hover:bg-gray-500/30 p-2">
                    <div className="mb-6">
                        <Image src="/assets/maraxibe.jpg" alt="maraxib" className="card-img-top object-cover rounded-lg" width={350} height={400}/>
                    </div>
                    <h2 className="uppercase text-start text-white font-bold">Maraxib Store</h2>
                    <p className="text-start text-white text-sm mt-4">Commandez tout ce dont vous avez besoin dans votre boutique islamique en ligne que ce soit
                    Bayelahat, Laxasay, Coran, Xassida, Tapis de priere, chapelets, etc</p>

                    <div className="flex space-x-4 mt-4 text-sm">
                        <div className="text-white bg-black p-1 rounded-sm text-sm">NextJS</div>
                        <div className="text-white bg-black p-1 rounded-sm text-sm">Tailwind</div>
                        <div className="text-white bg-black p-1 rounded-sm text-sm">Laravel</div>
                    </div>

                    <div className="flex  space-x-6  mt-6  ">   
                        <a href="https://github.com/bakeli-OpenSource/maraxib-store-web" >
                            <FaGithub className="text-2xl border-2 border-black rounded-full" />
                        </a>
                        <a href="https://github.com/bakeli-OpenSource/maraxib-store-web" >
                        <IoMdArrowDroprightCircle  className="text-2xl border-2 border-black rounded-full"/>

                        </a>
                    </div>
                </div>

            </div>
        </div>



          )
        };
export default Projet;          