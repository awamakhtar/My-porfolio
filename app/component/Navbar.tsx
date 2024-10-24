
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    
    return (
      <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center py-4 px-6 bg-white dark:bg-black">
        <div className="font-figmaHand text-xl text-black dark:text-white">
          <h4 className='font-allura text-2xl'>Awa Sylla</h4>
        </div>
  
        <div className="flex-grow flex justify-center">
                <div className="flex flex-col space-y-4 md:flex-row md:space-x-16 md:space-y-0">
                    <a href="#" className={`font-playfair hover:text-[#A99886] ${darkMode ? 'text-white' : 'text-black'}`}>Accueil</a>
                    <a href="#competences" className={`font-playfair hover:text-[#A99886] ${darkMode ? 'text-white' : 'text-black'}`}>Compétences</a>
                    <a href="#projets" className={`font-playfair hover:text-[#A99886] ${darkMode ? 'text-white' : 'text-black'}`}>Projets</a>
                    {/* <a href="#services" className={`font-playfair hover:text-[#A99886] ${darkMode ? 'text-white' : 'text-black'}`}>Service</a> */}
                    <a href="#about" className={`font-playfair hover:text-[#A99886] ${darkMode ? 'text-white' : 'text-black'}`}>A Propos</a>
                </div>
            </div>




            <div className="flex items-center space-x-4">
               <a href="#contact">
                <div className="bg-[#A99886] hover:bg-[#8f7b6e] rounded-[10px]">
                        <button className="text-white px-5 py-1 text-sm ">Contact</button>
                    </div>
               </a>
                <button onClick={toggleDarkMode} className="focus:outline-none">
                    {darkMode ? (
                        <SunIcon className="w-6 h-6 text-black-400" />
                    ) : (
                        <MoonIcon className="w-6 h-6 text-gray-600" />
                    )}
                </button>
            </div>
            
      
      </nav>
    );
  };
  
  export default Navbar;
  