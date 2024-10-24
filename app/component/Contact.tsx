import Image from 'next/image';
import { FiSend } from "react-icons/fi";
import { FaInstagram,FaLinkedinIn,FaGithub,FaWhatsapp } from "react-icons/fa";


const Contact =()=>{

    return(
        // <div className="flex flex-col  items-center justify-center dark:text-white text-black" id="contact">
        //     <h1 className="font-playfair text-4xl font-bold text-[#A99886] my-3 ">Contact</h1>
        //     <div className="flex w-full md:w-1/2 space-y-4">
        //         <div className="  ">
        //             <form action=" "> 
        //                 <div className="">                     
        //                     <input type="text" placeholder="Votre Nom" className="rounded-[10px] bg-white dark:bg-black dark:border-[#A99886] border-[#A99886] border-2"/>
        //                 </div>
        //                 <div className="">
        //                     <input type="text" placeholder="Votre Nom" className="rounded-[10px] bg-white dark:bg-black dark:border-[#A99886] border-[#A99886] border-2"/>
        //                 </div>
        //                 <div className="">
        //                     <textarea name="" id="" placeholder="Votre méssage " className="rounded-[10px] bg-white dark:bg-black dark:border-[#A99886] border-[#A99886] border-2 w-full p-4 h-32"></textarea>
        //                 </div>
        //                 <button className="rounded-[10px] bg-white dark:bg-[#A99886] dark:border-[#A99886] border-[#A99886] border-2">
        //                     Envoyer
        //                 </button>
        //             </form>
        //         </div>
        //     </div>

        // </div>



        <section className="flex flex-col md:flex-row justify-between items-center p-8 dark:text-white text-black rounded-lg">
            {/* <h1 className="text-4xl font-bold text-[#A99886] mb-6 text-center font-playfair">A Propos</h1> */}
        {/* Partie Formulaire de Contact */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-[#A99886] mb-6">Contact</h2>
  
          <input type="text" placeholder="Votre Nom" className="w-full p-4 text-white bg-white dark:bg-black dark:border-[#A99886] border-[#A99886] border-2 rounded-lg"/>
          <input type="email" placeholder="Votre email" className="w-full p-4 text-white bg-white dark:bg-black dark:border-[#A99886] border-[#A99886] border-2 rounded-lg"/>
          <textarea placeholder="Votre message" className="w-full p-4 h-32 text-white dark:bg-black dark:border-[#A99886]  border-[#A99886] border-2 rounded-lg"></textarea>
  
          <button className="flex items-center bg-[#A99886] text-white px-6 py-3 rounded-lg hover:bg-[#8a7864]">
            Envoyer
            <FiSend className="mx-3"/>
          </button>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <Image src="/assets/contact.png"  width={400} height={300} alt=""/>
          <div className="flex space-x-4 ">
            {/* Icônes des réseaux sociaux */}
            <a href="#" className="text-[#A99886] ">
                <FaInstagram className=" rounded-full  dark:text-black dark:bg-[#A99886] "/>
            </a>
            <a href="#" className="text-[#A99886]">
                <FaLinkedinIn className="dark:text-black dark:bg-[#A99886] rounded-full"/>
            </a>
            <a href="#" className="text-[#A99886]">
                <FaGithub className="dark:text-black dark:bg-[#A99886]  rounded-full"/>
            </a>
            <a href="#" className="text-[#A99886]">
                <FaWhatsapp className="dark:text-black dark:bg-[#A99886] rounded-full"/>
            </a>
          </div>
        </div>
      </section>
    )
};

export default Contact;