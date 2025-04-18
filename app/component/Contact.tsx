import Image from 'next/image';
import { FiSend } from "react-icons/fi";
import { FaLinkedinIn,FaGithub,FaWhatsapp } from "react-icons/fa";
import { Sparkles } from "lucide-react";


const Contact =()=>{

    return(
    
      <div className="flex flex-col items-center justify-center dark:text-white text-black  px-6" id="contact">
         <div className="relative  h-44  flex items-center justify-center">
                <h1 className="absolute font-playfair bottom-5 bg-[#A99886] text-white font-semibold py-2 px-3 m-4  text-xl rounded-full flex items-center  shadow-lg hover:bg-[#A99886]-600">
                <Sparkles className="text-white w-4 h-4"/> Contact
                </h1>
            </div>
        <div className="flex flex-col md:flex-row justify-between w-full">
            
            <div className="w-full md:w-1/2 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
                <input type="text" name="name" id="nom" placeholder=" Nom" className="w-full p-4 text-black dark:text-white bg-white  dark:bg-black dark:border-[#A99886] border-[#A99886] border-2 rounded-lg outline-none"/>
                <input type="email" name="email" id="email" placeholder=" email" className="w-full p-4 text-black dark:text-white bg-white dark:bg-black dark:border-[#A99886] border-[#A99886] border-2 rounded-lg outline-none"/>
                <textarea name="message" id="message" placeholder=" message" className="w-full p-4 h-32 text-black dark:text-white dark:bg-black dark:border-[#A99886] border-[#A99886] border-2 rounded-lg outline-none"></textarea>
                
                <button className="flex items-center bg-[#A99886] text-white px-6 py-3 rounded-full hover:scale-[88%] transition-all duration-700">
                    Envoyer
                    <FiSend className="mx-3"/>
                </button>
                
            </div>
            
        
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-center mt-8 md:mt-0">

              <Image src="/assets/contact.png" width={400} height={500} alt="Illustration Contact"/>            
              <div className="flex space-x-4 mt-4">                             
                  <a href="https://www.linkedin.com/in/awa-makhtar-sylla-2b6394188/"  target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#A99886] dark:text-black dark:bg-[#A99886] w-10 h-10 flex items-center justify-center hover:animate-bounce">
                      <FaLinkedinIn className=" text-white dark:text-black text-2xl"/>
                  </a>
                  <a href="https://github.com/awamakhtar"  target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#A99886] dark:text-black dark:bg-[#A99886] w-10 h-10 flex items-center justify-center hover:animate-bounce">
                      <FaGithub className=" text-white dark:text-black text-2xl"/>
                  </a>
                  <a href="https://wa.me/221778666064?text=Bonjour%20Awa%20Sylla%20%F0%9F%91%8B,%0AJe%20viens%20de%20visiter%20votre%20portfolio%20et%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20votre%20profil.%20Pourrions-nous%20%C3%A9changer%20?" 
                   target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#A99886] dark:text-black dark:bg-[#A99886] w-10 h-10 flex items-center justify-center hover:animate-bounce">
                      <FaWhatsapp className= "text-white dark:text-black text-2xl"/>
                  </a>
              </div>
          </div>
        </div>

        
        
  </div>
    )
};

export default Contact;