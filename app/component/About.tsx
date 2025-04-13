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
            <p className="text-lg leading-8 font-playfair text-center md:text-left ">
             Je suis <span className="text-black font-bold font-playfair  dark:text-[#A99886]">Awa Sylla</span>, développeuse fullstack junior, passionnée par le design et le marketing digital. Autodidacte, 
             curieuse et créative, j’ai eu l’occasion de travailler sur plusieurs projets personnels et académiques qui m’ont permis de développer mes compétences aussi bien en frontend
              (Next.js, Tailwind CSS) qu’en backend (Laravel, Node.js, MongoDB). J’accorde une grande importance à l’esthétique et à l’expérience utilisateur. Mon intérêt pour le design et
               le marketing digital m’aide à concevoir des interfaces modernes. 
           <br /> Je suis en constante évolution, toujours à la recherche de nouvelles connaissances, de collaborations enrichissantes et d’opportunités pour mettre mes compétences au service de projets concrets.
            </p>
          </div>

          <div className="md:w-1/2 justify-center  flex mx-auto">
            <Image src="/assets/illustration.png" alt="Awa Sylla Illustration" className="" width={384} height={384} />
          </div>
        </div>
      </section>
      

    )
};

export default About;