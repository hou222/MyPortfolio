import { RiShareBoxFill } from "react-icons/ri";
function ProjectDetails({ project, setActiveItem, activeItem }) {
  return (
    <div className="bg-white shadow-md rounded-lg  px-3  pt-3 pb-5 flex flex-col gap-3">
      <div
        className="relative  overflow-hidden rounded-lg bg-blue-300 "
        onClick={() => setActiveItem(project.id)}
        onMouseEnter={() => setActiveItem(project.id)}
        onMouseLeave={() => setActiveItem(false)}
      >
        <img
          src={project.image}
          width={1000}
          height={1000}
          loading="lazy"
          className="max-w-full h-48 max-h-full object-cover object-top rounded-lg"
          alt="project photo"
        />

        <div
          className={`absolute top-0   w-full  bottom-0 bg-[#1f293799] flex justify-center items-center rounded-lg transition-all duration-500 ${
            activeItem === project.id ? "left-0" : "-left-full"
          }`}
        >
          <div className="bg-white p-2 w-fit rounded-md hover:cursor-pointer">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Project"
            >
              <RiShareBoxFill className="w-[20px] h-[20px]" />
            </a>
          </div>
        </div>
      </div>
      <h1 className=" font-semibold text-xl text-[#333333] pt-4">
        {project.title}
      </h1>
      <p className="text-[#757575] tracking-widest text-sm">
        {project.description}
      </p>
      <p className=" tracking-widest text-[#757575]">
        built with : {project.tools}
      </p>
    </div>
  );
}

export default ProjectDetails;
