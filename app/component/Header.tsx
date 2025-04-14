
import Image from 'next/image';

// import SplitText from "./SplitText";



const Header =()=> {
    return(
        <div className="flex flex-col md:flex-row items-center  md:items-start  mt-18 text-center justify-center   space-x-8 m-8 ">
            <div className="mt-24 ">
                <h5 className="font-playfair text-black dark:text-white ">Hello, je suis</h5>
                <h3 className="font-allura text-[#A99886] text-9xl  "> Awa Sylla</h3>
                <p className="font-playfair ">Je suis développeur fullstack, passionnée de design</p>
                <a href="/assets/CV.pdf" download>
                    <button  className="font-playfair bg-[#A99886] rounded-full py-2 text-white px-5 mt-5 animate-bounce" >
                    Télécharger CV 
                    </button>
                </a>
            </div>

            <div className="px-24 sm:mt-12 flex justify-center items-center ">
                <Image  src="/assets/profile-pic.png" alt="" width={300} height={250}  className="w-full shadow-lg rounded-full"/>
            </div>
        </div>
    );

};

 export default Header;