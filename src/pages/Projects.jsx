import ProjectDetails from "../features/projects/ProjectDetails";
import project1 from "../data/project1.png";
import project2 from "../data/project23.png";
import project3 from "../data/project33.png";
import project4 from "../data/project44.png";
import project5 from "../data/project55.png";
import { useState } from "react";

function Projects() {
  const [activeItem, setActiveItem] = useState(null);
  const projects = [
    {
      id: 1,
      live: "https://gym-type.vercel.app/",
      code: "https://github.com/hou222/GymType",
      title: "Gym type",
      description:
        "Achieve your dream body with unrivaled gym facilities, unparalleled training classes, and world-class studios.",
      tools: "React.js, TypeScript, Tailwind.",
      image: project4,
    },

    {
      id: 2,
      live: "https://crypto-tracker-gamma-navy.vercel.app/",
      code: "https://github.com/hou222/CryptoTracker",
      title: "Coin wave",
      description:
        "Coin wave is an app displaying real-time prices, 24-hour percentage changes, market caps, and historical charts for each coin.",
      tools: "React.js, Tailwind.",
      image: project3,
    },
    {
      id: 3,
      live: "https://furniture-world.vercel.app",
      code: "https://github.com/hou222/FurnitureWorld",
      title: "Furniture world",
      description:
        "This store prioritize user experience, making it easy for cusomers to find and purchase the products they need.",
      tools: "React.js, Tailwind.",
      image: project2,
    },
    {
      id: 4,
      live: "https://lamborghini-ty5c.vercel.app",
      code: "https://github.com/hou222",
      title: "Lamborghini",
      description:
        "Lamborghini website clone with sleek UI, responsive design, and smooth animations. Replicates the brand’s luxury feel for front-end practice.",
      tools: "React.js, TypeScript, Tailwind.",
      image: project5,
    },

    {
      id: 5,
      live: "https://weatheer-appp.netlify.app/",
      code: "https://github.com/hou222/weatherApp",
      title: "'Tempo' Weather App",
      description:
        "Tempo is a straightforward web application that allows users to check weather forecasts for any city.",
      tools: "HTML, CSS, Java Script.",
      image: project1,
    },
  ];

  return (
    <div
      id="projects"
      className=" flex flex-col  justify-center gap-3 items-center pb-4 pt-16 px-5  max-w-5xl mx-auto"
    >
      <div className="text-center py-4">
        <h2 className="text-[#333333] text-xl md:text-2xl lg:text-4xl font-medium">
          My Projects
        </h2>
        <span className="text-xs lg:text-sm text-[#757575] pt-1">
          These Are My Latest Projects
        </span>
      </div>
      <div className=" w-fit mb-11 grid grid-cols-1 gap-7 lg:gap-7 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectDetails
            key={project.code}
            project={project}
            setActiveItem={setActiveItem}
            activeItem={activeItem}
          ></ProjectDetails>
        ))}
      </div>
    </div>
  );
}

export default Projects;
