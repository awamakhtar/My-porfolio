
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { MdMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';


interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
const Navbar = ({ darkMode, toggleDarkMode}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center   px-16 bg-white dark:bg-black ">
      
       {/* Logo à droit */}
       <div className="  text-black dark:text-white whitespace-nowrap text-2xl font-semibold">
        <h4 className="font-allura text-2xl">Awa Sylla</h4>
      </div>
	
	 
    {/* Icône de menu burger à gauche */}
    <button onClick={handleMenuToggle} className=" focus:outline-none md:hidden   rounded-lg    ">
        {isMenuOpen ? (
          <IoCloseSharp className="w-6 h-6 text-black dark:text-white " />
        ) : (
          <MdMenu className="w-6 h-6 text-black dark:text-white" />
        )}
      </button>
      

      {/* Menu burger (affiché au centre quand ouvert) */}
      <div
        className={`${isMenuOpen ? 'flex' : 'hidden' } top-0 left-0 w-full h-full bg-white dark:bg-black flex-col items-center justify-center space-y-8 md:flex md:flex-row md:relative md:space-y-0 md:space-x-16`}>

        {/* Liens de navigation */}
        <a href="#" className={`font-playfair hover:text-[#A99886] ${darkMode ? 'text-white' : 'text-black'}`}>Accueil</a>
        <a href="#competences" className={`font-playfair hover:text-[#A99886] ${darkMode ? 'text-white' : 'text-black'}`}>Compétences</a>
        <a href="#projets" className={`font-playfair hover:text-[#A99886] ${darkMode ? 'text-white' : 'text-black'}`}>Projets</a>
        <a href="#projets" className={`font-playfair hover:text-[#A99886] ${darkMode ? 'text-white' : 'text-black'}`}>Services</a>
        <a href="#about" className={`font-playfair hover:text-[#A99886] ${darkMode ? 'text-white' : 'text-black'}`}>A Propos</a>
        
        {/* Bouton Contact */}
        <a href="#contact">
          <div className="bg-[#A99886] hover:bg-[#8f7b6e] rounded-[10px]">
            <button className="text-white px-5 py-1 text-sm">Contact</button>
          </div>
        </a>

        {/* Icône de mode sombre */}
        <button onClick={toggleDarkMode} className="focus:outline-none">
          {darkMode ? (
            <SunIcon className="w-6 h-6 text-black-400" />
          ) : (
            <MoonIcon className="w-6 h-6 text-black-600" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;





























