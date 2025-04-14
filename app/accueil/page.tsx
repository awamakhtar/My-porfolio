"use client"
import { useState, useEffect } from 'react';
import Navbar from "../component/Navbar"
import Header from "../component/Header"
import Competence from "../component/Competence"
import Projet  from "../component/Projet"

import About  from "../component/About"
import Contact  from "../component/Contact"
import Footer  from "../component/Footer"
import DockMenu from "../component/DockMenu";
import AnimatedSection from "../component/AnimatedSection"






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
            
            <main className="bg-white dark:bg-black text-black dark:text-white p-8">
                <Navbar  darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
                <Header />

                <AnimatedSection direction="up" delay="delay-300">
                  <About />
                </AnimatedSection>

                <AnimatedSection direction="up" delay="delay-300">
                  <Competence />
                </AnimatedSection>

                <AnimatedSection direction="up" delay="delay-300">
                    <Projet />
                </AnimatedSection>
               
                <AnimatedSection direction="up" delay="delay-300">
                    <Contact />
                </AnimatedSection>
                <Footer/>
                <div className="relative">
                 
                  <DockMenu />
                </div>

            </main>
            
        </div>
    )
}
