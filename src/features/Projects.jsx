import ProjectDetails from "./projects/ProjectDetails";
import project1 from "../data/project1.png";
import project2 from "../data/project22.png";

function Projects() {
  const projects = [
    {
      live: "https://tempoweather.netlify.app/",
      code: "https://github.com/hou222/weatherApp",
      image: project1,
    },
    {
      live: "https://vercel.com/hou222s-projects/furniture-world",
      code: "https://github.com/hou222/FurnitureWorld",
      image: project2,
    },
  ];

  return (
    <div className="bg-black lg:h-screen py-11 flex flex-col  justify-center items-center">
      <p className="text-white font-bold text-3xl text-center  pb-11">
        Projects
      </p>
      <div className=" w-fit mb-11 grid grid-cols-1 gap-7 lg:gap-10 md:grid-cols-2 xl:grid-cols-2 ">
        {/* <div className=" w-fit mb-11 grid grid-cols-1 gap-7 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 "> */}
        {projects.map((project) => (
          <ProjectDetails key={project.code} project={project}>
            Tempo is a straightforward web application that allows users to
            check weather forecasts for any city <br></br>
            <br></br> built with : HTML, CSS, Java Script
          </ProjectDetails>
        ))}

        {/* <ProjectDetails imageName={project2} />
        <ProjectDetails imageName={project3} /> */}
      </div>
    </div>
  );
}

export default Projects;
