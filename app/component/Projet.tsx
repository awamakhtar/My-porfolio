
// import Image from 'next/image';
import { useState } from 'react';
import { GrLinkPrevious,  GrLinkNext } from "react-icons/gr";
import { FaRegPlayCircle } from "react-icons/fa";

const Projet = ()=>{
    const projects =[
        {
            title: "Maraxib Store",
            description: "Un site en ligne de vente de vêtements musulmans",
            imageUrl: "/assets/maraxibe.jpg",
            link: "https://maraxib-alkaly02s-projects.vercel.app",
            
        },
        {
            title: "Affiche de vente de vêtement",
            description: "Projet Design",
            imageUrl: "/assets/design.jpg",
            link: "https://maraxib-alkaly02s-projects.vercel.app",
          },
          {
            title: "Al-Muntakha-Vision",
            description: "Un site en ligne de vente de lunettes de tout genre",
            imageUrl: "/assets/al-mountakha.jpg",
            link: "https://maraxib-alkaly02s-projects.vercel.app",
          },
          {
            title: "Affiche de badge",
            description: "Projet Design",
            imageUrl: "/assets/Gamou.png",
            link: "https://maraxib-alkaly02s-projects.vercel.app",
          },
    ];

    const [currentIndex, setCurrentProject] = useState(0);
    const projectsPerPage = 2;
  // Fonction pour défiler à gauche
  const goToPrevious = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - projectsPerPage : prev - projectsPerPage));
  };

  // Fonction pour défiler à droite
  const goToNext = () => {
    setCurrentProject((prev) => (prev + projectsPerPage >= projects.length ? 0 : prev + projectsPerPage));
  };



    return(
        <div className="flex flex-col text-center justify-center dark:text-white text-black" id="projets">

            <h1 className="font-playfair text-4xl font-bold text-[#A99886] my-8 ">Projet</h1>

            <div className="relative flex items-center justify-center space-x-4 my-8 mx-20 ">

                <button onClick={goToPrevious} className="relative left-0 top-1/2 transform -translate-y-1/2  p-2 rounded-full shadow-md bg-white border border-black text-black dark-bg-black dark-border-white dark-text-white ">
                    <GrLinkPrevious className="" />
                </button>

            
        <div className="flex space-x-2">
          {projects.slice(currentIndex, currentIndex + projectsPerPage).map((project, index) => (
            <div key={index} className="relative w-80 h-48 sm:w-96 sm:h-64 bg-cover bg-center rounded-lg shadow-lg hover:scale-110 transition-transform duration-300" 
              style={{ backgroundImage: `url(${project.imageUrl})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <h3 className="text-white text-sm sm:text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="mt-4 p-2 rounded-full shadow-md border border-white text-white dark:bg-black dark:border-white dark:text-white">
                    <FaRegPlayCircle />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

            {/* <div className="relative w-96 h-64 bg-cover bg-center rounded-lg shadow-lg hover:scale-110 transform transition-transform duration-300" 
                style={{ backgroundImage: `url(${projects[currentProject].imageUrl})`}}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                    <h3 className="text-white text-2xl font-bold">{projects[currentProject].title}</h3>
                    <p className="text-gray-300 mt-2">{projects[currentProject].description}</p>
                    <a href={projects[currentProject].link} target="_blank" rel="noopener noreferrer">
                    <button  className="mt-4 p-2 rounded-full shadow-md border border-white text-white dark-bg-black dark-border-white dark-text-white ">
                        <FaRegPlayCircle className="" />
                    </button>
                    </a>
                </div>
            </div> */}

            {/* <div className="relative w-96 h-64 bg-cover bg-center rounded-lg shadow-lg hover:scale-110 transform transition-transform duration-300" 
                style={{ backgroundImage: `url(${projects[currentProject].imageUrl})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                    <h3 className="text-white text-2xl font-bold">{projects[currentProject].title}</h3>
                    <p className="text-gray-300 mt-2">{projects[currentProject].description}</p>
                    <a href={projects[currentProject].link} target="_blank" rel="noopener noreferrer" >
                    <button  className="mt-4 p-2 rounded-full shadow-md border border-white text-white dark-bg-black dark-border-white dark-text-white ">
                        <FaRegPlayCircle className="" />
                    </button>
                    </a>
                </div>
            </div> */}


            <button onClick={goToNext} className="relative right-0 top-1/2 transform -translate-y-1/2  p-2 rounded-full shadow-md bg-white border border-black text-black dark-bg-black dark-border-white dark-text-white ">
                    <GrLinkNext  className=" "/>
                    
                </button>
                
            </div>
        </div>
    )
};

export default Projet;