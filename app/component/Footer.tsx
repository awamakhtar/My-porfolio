// import Image from 'next/image';




const Footer =()=> {
    return(
        
            <footer className="flex flex-col items-center justify-center dark:text-white text-black py-6 px-6">
                <p className="text-lg leading-8 font-playfair text-center">
                    © {new Date().getFullYear()} Awa Sylla. Tous droits réservés.
                </p>
            </footer>

            
    )

};

export default Footer;