
import Image from 'next/image';



const Header =()=> {
    return(

        <div className="flex mt-18 text-center justify-center flex-col md:flex-row space-y-4">
            <div className="mt-24 ">
                <h5 className="font-playfair text-black dark:text-white ">Hello, je m&apos;appable</h5>
                <h3 className="font-allura text-[#A99886] text-9xl  "> Awa Sylla</h3>
                <p className="font-playfair ">Je suis développeuse web,  j&apos;ai également des notions en design</p>
                <a href="/assets/CV.pdf" download>
                    <button  className="font-playfair bg-[#A99886] rounded-[10px]
                     text-white px-5 py-1 outline mt-5  animate-bounce" >             
                    Télécharger CV
                    </button>
                </a>
            </div>

            <div className="px-20">
                <Image  src="/assets/profile-pic.png
                " alt="" width={350} height={250} objectFit="cover"
                
                 />
            </div>
        </div>
    );

};

 export default Header;