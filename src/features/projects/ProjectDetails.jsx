function ProjectDetails({ project, children }) {
  return (
    <div className="bg-gray-800 w-[350px] md:w-[350px] lg:w-[400px]  p-3 flex flex-col gap-2">
      <img src={project.image} alt="project photo" className="h-46 w-full" />
      <h1 className="text-white font-semibold text-xl">{`"Tempo" Weather App`}</h1>
      <p className="text-white tracking-widest">{children}</p>
      <div
        className="flex
      justify-between items-center py-2"
      >
        {/* <Button type="small">VIEW</Button> */}
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-300 border-2 border-[#bec0ae] px-5 py-2 text-xs font-semibold hover:bg-[#8b8b8b82] hover:border-white hover:text-white hover:transition-all hover:duration-500 cursor-pointer"
        >
          VIEW
        </a>
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-300 border-2 border-[#bec0ae] px-5 py-2 text-xs font-semibold hover:bg-[#8b8b8b82] hover:border-white hover:text-white hover:transition-all hover:duration-500 cursor-pointer"
        >
          SOURCE
        </a>
        {/* <Button type="small">SOURCE</Button> */}
      </div>
    </div>
  );
}

export default ProjectDetails;
