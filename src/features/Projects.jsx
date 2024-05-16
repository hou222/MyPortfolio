import ProjectDetails from "./projects/ProjectDetails";
import project1 from "../data/project1.png";

function Projects() {
  const urlProject = "https://tempoweather.netlify.app/";
  const urlCode = "https://github.com/hou222/weatherApp";
  return (
    <div className="bg-black lg:h-screen py-11 flex flex-col  justify-center items-center">
      <p className="text-white font-bold text-3xl text-center  pb-11">
        Projects
      </p>
      <div className=" w-fit mb-11 grid grid-cols-1 gap-7 lg:gap-10 md:grid-cols-1 xl:grid-cols-1 ">
        {/* <div className=" w-fit mb-11 grid grid-cols-1 gap-7 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 "> */}
        <ProjectDetails
          imageName={project1}
          projectLink={urlProject}
          codeLink={urlCode}
        >
          Tempo is a straightforward web application that allows users to check
          weather forecasts for any city <br></br>
          <br></br> built with : HTML, CSS, Java Script
        </ProjectDetails>
        {/* <ProjectDetails imageName={project2} />
        <ProjectDetails imageName={project3} /> */}
      </div>
    </div>
  );
}

export default Projects;
