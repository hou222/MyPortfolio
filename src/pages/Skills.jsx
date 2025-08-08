import Skill from "../features/skills/Skill";
import html from "../data/New/html.png";
import javascript from "../data/New/javascript.png";
import css from "../data/New/css.png";
import responsive from "../data/New/responsive.png";
import react from "../data/New/react.png";
import tailwind from "../data/New/tailwind.png";
import typescript from "../data/New/typescript.png";

function Skills() {
  return (
    <div
      id="skills"
      className="px-5 max-w-5xl mx-auto pt-16 pb-14 flex flex-col text-[#333333] justify-center items-center gap-3 lg:gap-5 "
    >
      <div className=" text-center py-4 ">
        <h2 className="text-[#333333] text-xl md:text-2xl lg:text-4xl font-medium">
          My Skills
        </h2>
        <span className="text-xs lg:text-sm text-[#757575] pt-1">
          {"Let's See What Can I Do :"}
        </span>
      </div>
      <div className=" w-full  grid grid-cols-1 gap-5   md:justify-items-center md:grid-cols-2 xl:grid-cols-3 ">
        <Skill skillName={html}>HTML</Skill>

        <Skill skillName={css}>CSS</Skill>
        <Skill skillName={javascript}>JavaScript</Skill>
        <Skill skillName={tailwind}>Tailwind</Skill>
        <Skill skillName={responsive}>Responsive Design</Skill>
        <Skill skillName={react}>Rreact</Skill>
        <Skill skillName={typescript} center={true}>
          TypeScript
        </Skill>
      </div>
    </div>
  );
}

export default Skills;
