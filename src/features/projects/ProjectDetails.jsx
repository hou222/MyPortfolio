import { RiShareBoxFill } from "react-icons/ri";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
          className="max-w-full h-48 max-h-full object-cover object-top rounded-lg"
          alt="project photo"
        />
        {/* <LazyLoadImage
          src={project.image}
          className="max-w-full h-48 max-h-full object-cover object-top rounded-lg"
          alt="project photo"
        /> */}
        <div
          className={`absolute top-0   w-full  bottom-0 bg-[#1f293799] flex justify-center items-center rounded-lg transition-all duration-500 ${
            activeItem === project.id ? "left-0" : "-left-full"
          }`}
        >
          <div className="bg-white p-2 w-fit rounded-md hover:cursor-pointer">
            <a href={project.live} target="_blank" rel="noopener noreferrer">
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
      {/* <div
        className="flex
      justify-between items-center py-2"
      >
        
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          
        >
          
        </a>
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-300 border-2 border-[#bec0ae] px-5 py-2 text-xs font-semibold hover:bg-[#8b8b8b82] hover:border-white hover:text-white hover:transition-all hover:duration-500 cursor-pointer"
        >
          SOURCE
        </a>
        
      </div> */}
    </div>
  );
}

export default ProjectDetails;
