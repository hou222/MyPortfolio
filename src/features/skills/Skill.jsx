import { LazyLoadImage } from "react-lazy-load-image-component";

function Skill({ children, skillName, center = false }) {
  const add = "xl:col-start-2 xl:col-end-3";
  return (
    <div
      className={`bg-white shadow-md w-full rounded-lg    py-10 flex flex-col  justify-center  items-center gap-4 ${
        center ? add : ""
      }`}
    >
      <div className="bg-black p-3 rounded-md flex justify-center items-center">
        <LazyLoadImage
          src={skillName}
          className="w-[40px] h-[40px]"
          alt="skill"
          loading="lazy"
        />
      </div>
      <h1 className=" font-semibold text-xl text-center">{children}</h1>
    </div>
  );
}

export default Skill;
