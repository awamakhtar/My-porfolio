import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { MdMenu } from "react-icons/md"
import { IoCloseSharp } from "react-icons/io5"
import { useState } from 'react'

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="flex justify-between items-center px-6 py-4 md:px-16 bg-white dark:bg-black">
     
      <div className="text-black dark:text-white text-2xl font-semibold">
        <h4 className="font-allura text-2xl">Awa Sylla</h4>
      </div>

      {/* Icône menu burger visible uniquement sur mobile */}
      <button onClick={handleMenuToggle} className="md:hidden">
        <MdMenu className="w-6 h-6 text-black dark:text-white" />
      </button>

      {/* Menu desktop */}
      <div className="hidden md:flex items-center space-x-10">
        <a href="#" className={`font-playfair hover:text-[#A99886] ${darkMode ? 'text-white' : 'text-black'}`}>Accueil</a>
        <a href="#about" className={`font-playfair hover:text-[#A99886] ${darkMode ? 'text-white' : 'text-black'}`}>À propos</a>
        <a href="#competences" className={`font-playfair hover:text-[#A99886] ${darkMode ? 'text-white' : 'text-black'}`}>Compétences</a>
        <a href="#projets" className={`font-playfair hover:text-[#A99886] ${darkMode ? 'text-white' : 'text-black'}`}>Projets</a>
        {/* <a href="#services" className={`font-playfair hover:text-[#A99886] ${darkMode ? 'text-white' : 'text-black'}`}>Services</a> */}

        <a href="#contact">
          <div className="bg-[#A99886] hover:bg-[#8f7b6e] rounded-full">
            <button className="text-white px-5 py-1 text-sm font-playfair ">Contact</button>
          </div>
        </a>
        <button onClick={toggleDarkMode} className="focus:outline-none">
          {darkMode ? (
            <SunIcon className="w-6 h-6 text-white" />
          ) : (
            <MoonIcon className="w-6 h-6 text-black" />
          )}
        </button>
      </div>

    {/* Menu desktop - modal fullscreen  */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-black flex flex-col px-6 py-4 animate-fade-slide-down">
          {/* Barre du haut : logo + close */}
          <div className="flex justify-between items-center mb-12">
            <div className="text-black dark:text-white text-2xl font-semibold">
              <h4 className="font-allura text-2xl">Awa Sylla</h4>
            </div>
            <button onClick={handleMenuToggle}>
              <IoCloseSharp className="w-6 h-6 text-black dark:text-white" />
            </button>
          </div>

          {/* Liens de navigation au centre */}
          <div className="flex flex-col items-center space-y-8">
            <a href="#" onClick={handleMenuToggle} className={`font-playfair text-xl hover:text-[#A99886] ${darkMode ? 'text-white' : 'text-black'}`}>Accueil</a>
            <a href="#about" onClick={handleMenuToggle} className={`font-playfair text-xl hover:text-[#A99886] ${darkMode ? 'text-white' : 'text-black'}`}>À propos</a>
            <a href="#competences" onClick={handleMenuToggle} className={`font-playfair text-xl hover:text-[#A99886] ${darkMode ? 'text-white' : 'text-black'}`}>Compétences</a>
            <a href="#projets" onClick={handleMenuToggle} className={`font-playfair text-xl hover:text-[#A99886] ${darkMode ? 'text-white' : 'text-black'}`}>Projets</a>
            <a href="#contact" onClick={handleMenuToggle}>
              <div className="bg-[#A99886] hover:bg-[#8f7b6e] rounded-full">
                <button className="text-white px-5 py-1 text-sm">Contact</button>
              </div>
            </a>
            <button onClick={toggleDarkMode} className="focus:outline-none">
              {darkMode ? (
                <SunIcon className="w-6 h-6 text-white" />
              ) : (
                <MoonIcon className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
