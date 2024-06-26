import Skill from "./Skill";
import html from "../../data/html.png";
import javascript from "../../data/javascript.png";
import css from "../../data/css.png";
import responsive from "../../data/responsive.png";
import react from "../../data/react.png";
import tailwind from "../../data/tailwind.png";

function Skills() {
  return (
    <div className="bg-black py-11 flex flex-col  justify-center items-center">
      <p className="text-white font-bold text-3xl text-center  pb-11">Skills</p>
      <div className=" w-fit mb-11 grid grid-cols-3 gap-3 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
        <Skill skillName={html}>HTML</Skill>

        <Skill skillName={css}>CSS</Skill>
        <Skill skillName={javascript}>JS</Skill>
        <Skill skillName={tailwind}>TAILWIND</Skill>
        <Skill skillName={responsive}>Responsive Design</Skill>
        <Skill skillName={react}>REACT</Skill>
        {/*<Skill skillName="tailwind" /> */}
      </div>
    </div>
  );
}

export default Skills;
