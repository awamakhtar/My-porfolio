import Image from 'next/image';
import { FiSend } from "react-icons/fi";
import { FaInstagram,FaLinkedinIn,FaGithub,FaWhatsapp } from "react-icons/fa";


const Contact =()=>{

    return(
    
      <div className="flex flex-col items-center justify-center dark:text-white text-black py-10 px-6" id="contact">
    
          <h1 className="text-4xl font-bold text-[#A99886] mb-8 text-center font-playfair">Contact</h1>
    
        <div className="flex flex-col md:flex-row justify-between w-full">
            
            <div className="w-full md:w-1/2 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
                <input type="text" placeholder="Votre Nom" className="w-full p-4 text-white bg-white  dark:bg-black dark:border-[#A99886] border-[#A99886] border-2 rounded-lg"/>
                <input type="email" placeholder="Votre email" className="w-full p-4 text-white bg-white dark:bg-black dark:border-[#A99886] border-[#A99886] border-2 rounded-lg"/>
                <textarea placeholder="Votre message" className="w-full p-4 h-32 text-white dark:bg-black dark:border-[#A99886] border-[#A99886] border-2 rounded-lg"></textarea>
                
                
            </div>
            {/* <button className="flex items-center bg-[#A99886] text-white px-6 py-3 rounded-lg hover:bg-[#8a7864]">
                    Envoyer
                    <FiSend className="mx-3"/>
            </button> */}
        
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end mt-8 md:mt-0">
              <Image src="/assets/contact.png" width={400} height={300} alt="Illustration Contact"/>
              <div className="flex space-x-4 mt-4">              
                  <a href="https://www.instagram.com/awasyllamakhtar/"  target="_blank" rel="noopener noreferrer"  className="rounded-full bg-[#A99886]  dark:text-black dark:bg-[#A99886] w-10 h-10 flex items-center justify-center hover:animate-bounce ">
                      <FaInstagram className=" text-white dark:text-black text-2xl"/>
                  </a>
                  <a href="https://www.linkedin.com/in/awa-makhtar-sylla-2b6394188/"  target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#A99886] dark:text-black dark:bg-[#A99886] w-10 h-10 flex items-center justify-center hover:animate-bounce">
                      <FaLinkedinIn className=" text-white dark:text-black text-2xl"/>
                  </a>
                  <a href="https://github.com/awamakhtar"  target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#A99886] dark:text-black dark:bg-[#A99886] w-10 h-10 flex items-center justify-center hover:animate-bounce">
                      <FaGithub className=" text-white dark:text-black text-2xl"/>
                  </a>
                  <a href="#"  target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#A99886] dark:text-black dark:bg-[#A99886] w-10 h-10 flex items-center justify-center hover:animate-bounce">
                      <FaWhatsapp className= "text-white dark:text-black text-2xl"/>
                  </a>
              </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8">
            <button className="flex items-center space-x-2 bg-[#A99886] hover:bg-[#A99886] dark:bg-[#A99886] dark:hover:bg-[#A99886]  text-white px-6 py-3 rounded-lg hover:animate-bounce">
            Envoyer
            <FiSend className="mx-3"/>
            </button>
        </div>
  </div>
    )
};

export default Contact;