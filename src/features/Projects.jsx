import ProjectDetails from "./projects/ProjectDetails";

function Projects() {
  return (
    <div className="bg-black lg:h-screen py-11 flex flex-col  justify-center items-center">
      <p className="text-white font-bold text-3xl text-center  pb-11">
        Projects
      </p>
      <div className=" w-fit mb-11 grid grid-cols-1 gap-7 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
        <ProjectDetails imageName="src/data/project1.png" />
        <ProjectDetails imageName="src/data/project1.png" />
        <ProjectDetails imageName="src/data/project1.png" />
      </div>
    </div>
  );
}

export default Projects;
