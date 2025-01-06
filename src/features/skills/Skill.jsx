import { LazyLoadImage } from "react-lazy-load-image-component";

function Skill({ children, skillName }) {
  return (
    <div className="bg-gray-800 w-[110px] md:w-[350px] lg:w-[400px]  p-3 flex flex-col md:flex-row justify-center md:justify-start items-center gap-1 md:gap-7">
      <LazyLoadImage src={skillName} alt="skill" loading="lazy" />
      <h1 className="text-white font-semibold text-xl text-center">
        {children}
      </h1>
    </div>
  );
}

export default Skill;
