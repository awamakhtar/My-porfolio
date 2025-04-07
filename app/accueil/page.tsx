"use client"
import { useState, useEffect } from 'react';
import Navbar from "../component/Navbar"
import Header from "../component/Header"
import Competence from "../component/Competence"
import Projet  from "../component/Projet"
// import Service  from "../component/Service"
import About  from "../component/About"
import Contact  from "../component/Contact"
import Footer  from "../component/Footer"
import DockMenu from "../component/DockMenu";



export default function Accueil() {
    const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
      document.documentElement.classList.add('dark'); // Applique la classe "dark" à l'élément HTML
    }
  }, []);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };
    
    return(
        <div className="min-h-screen">
            {/* <button
            onClick={toggleDarkMode}
            className="p-2 bg-gray-800 text-white dark:bg-gray-300 dark:text-black"
            >
             {darkMode ? (
                        <SunIcon className="w-6 h-6 text-white-400" />
                    ) : (
                        <MoonIcon className="w-6 h-6 text-black-600" />
                    )}
            </button> */}
            <main className="bg-white dark:bg-black text-black dark:text-white p-8">
                <Navbar  darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
                <Header />
                <About />
                <Competence />
                <Projet />
                {/* <Service /> */}
                
                <Contact />
                <Footer/>
                <div className="relative">
                 
                  <DockMenu />
                </div>

            </main>
            
        </div>
    )
}
