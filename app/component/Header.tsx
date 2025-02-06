
import Image from 'next/image';
// import SplitText from "./SplitText";



const Header =()=> {
    return(

        <div className="flex mt-18 text-center justify-center flex-col md:flex-row space-y-4">
            <div className="mt-24 ">
            {/* <SplitText 
                text="Hello, je m'appelle"
                className="font-playfair text-black dark:text-white"
                delay={50}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,30px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            /> */}
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

            <div className="px-24">
                <Image  src="/assets/profile-pic.png" alt="" width={300} height={250}  className='w-full h-auto'/>
            </div>
        </div>
    );

};

 export default Header;