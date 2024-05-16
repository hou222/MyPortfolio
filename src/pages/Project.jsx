import Projects from "../features/Projects";

function Project() {
  return (
    <>
      <div
        className={`bg-project bg-cover h-[520px] w-full bg-center bg-no-repeat`}
      >
        <div className="bg-[#000000d1] w-full h-[520px] flex justify-center items-center">
          <div className=" flex flex-col justify-center items-center gap-1 ">
            <p className="text-white text-3xl font-bold w-60 text-center  leading-snug md:w-auto md:text-4xl lg:text-5xl md:mb-2">
              PROJECTS.
            </p>
            <p className="text-white text-lg font-semibold lg:text-xl">
              Some of my most recent works
            </p>
          </div>
        </div>
      </div>
      <Projects />
    </>
  );
}

export default Project;
