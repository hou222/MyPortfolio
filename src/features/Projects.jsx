import ProjectDetails from "./projects/ProjectDetails";
import project1 from "../data/project1.png";
import project2 from "../data/project23.png";
import project3 from "../data/project33.png";
import project4 from "../data/project44.png";

function Projects() {
  const projects = [
    {
      live: "https://gym-type.vercel.app/",
      code: "https://github.com/hou222/GymType",
      title: "Gym type",
      description:
        "Achieve your dream body with unrivaled gym facilities, unparalleled training classes, and world-class studios.",
      tools: "React.js, TypeScript, Tailwind.",
      image: project4,
    },

    {
      live: "https://crypto-tracker-gamma-navy.vercel.app/",
      code: "https://github.com/hou222/CryptoTracker",
      title: "Coin wave",
      description:
        "Coin wave is an app displaying real-time prices, 24-hour percentage changes, market caps, and historical charts for each coin.",
      tools: "React.js, Tailwind.",
      image: project3,
    },
    {
      live: "https://furniture-world.vercel.app",
      code: "https://github.com/hou222/FurnitureWorld",
      title: "Furniture world",
      description:
        "This store prioritize user experience, making it easy for cusomers to find and purchase the products they need.",
      tools: "React.js, Tailwind.",
      image: project2,
    },

    {
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
    <div className="bg-black  py-11 flex flex-col  justify-center items-center ">
      <p className="text-white font-bold text-3xl text-center  pb-11">
        Projects
      </p>
      <div className=" w-fit mb-11 grid grid-cols-1 gap-7 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
        {/* <div className=" w-fit mb-11 grid grid-cols-1 gap-7 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 "> */}
        {projects.map((project) => (
          <ProjectDetails key={project.code} project={project}>
            {/* {project.description}
            <br></br>
            <br></br> built with : {project.tools} */}
          </ProjectDetails>
        ))}

        {/* <ProjectDetails imageName={project2} />
        <ProjectDetails imageName={project3} /> */}
      </div>
    </div>
  );
}

export default Projects;
