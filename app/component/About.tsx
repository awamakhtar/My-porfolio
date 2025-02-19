import Image from 'next/image';
import { Sparkles } from "lucide-react";


const About =()=>{

    return(
        <section className="flex flex-col items-center justify-center dark:text-white text-black  px-6" id="about">
       
        {/* <h1 className="text-4xl font-bold text-[#A99886] mb-6 text-center font-playfair">A Propos</h1> */}
        <div className="relative  h-44  flex items-center justify-center">
                <h1 className="absolute bottom-4 bg-[#A99886] text-white font-semibold text-xl py-2 px-3 rounded-full flex items-center  shadow-lg hover:bg-[#A99886]-600">
                <Sparkles className="text-white w-4 h-4" /> Apropos</h1>
            </div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-5 md:mb-0">
            <p className="text-lg leading-8 font-playfair mx-10">
              Je suis développeuse web avec une licence en développement web.J&apos;ai acquis une solide expertise en développement full-stack et front-end grâce à mes études et à plusieurs formations.
              J&apos;ai obtenu deux certifications, l&apos;une en développement full-stack avec Bakeli, et l&apos;autre en développement front-end via le programme Force N. 
              J&apos;ai également effectué un stage de 6 mois chez Bakeli, où j&apos;ai pu appliquer et approfondir mes compétences dans le développement web.
            </p>
          </div>

          <div className="md:w-1/2 justify-center md:justify-end">
            <Image src="/assets/me.png" alt="Awa Sylla Illustration" className="" width={284} height={284} />
          </div>
        </div>
      </section>
      

    )
};

export default About;