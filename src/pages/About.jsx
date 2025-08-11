import PortfolioImage from "../ui/PortfolioImage";
import photo from "../data/New/photo2.jpg";
import download from "../data/New/download.png";
import cv from "../../public/BenlaghaHoussem-cv.pdf";
function About() {
  return (
    <div id="about" className="pb-4 pt-16 px-5  max-w-5xl mx-auto">
      <div className=" text-center py-4">
        <h2 className="text-[#333333] text-xl md:text-2xl lg:text-4xl font-medium">
          You Wanna Know Me ?
        </h2>
        <span className="text-xs lg:text-sm text-[#757575] pt-1">
          Some Info About Me:
        </span>
      </div>
      <div className="py-10 flex flex-col lg:flex-row items-center lg:gap-12">
        <PortfolioImage img={photo} size="big" />

        <div className="text-center flex flex-col items-center py-6  lg:items-start lg:gap-8">
          <p className="text-[15px] md:text-[16px] leading-[24px] text-center lg:text-start text-[#757575] pb-5 lg:pr-24">
            As a Junior Front-End Developer, I possess an impressive of skills
            in HTML, CSS, JavaScript, React, Tailwind, Typescript. I excel in
            designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge develpment tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
          {/* <p className="text-[15px] md:text-[16px] leading-[24px] text-center lg:text-start text-[#757575] pb-5 lg:pr-24">
            I am a passionate MERN Stack Developer, fueled by an unwavering love
            for creating beautiful and functional digital experiences. With
            expertise in React, HTML, CSS, JavaScript, TypeScript, and Next.js,
            I am dedicated to continuously refining my skills and embracing
            cutting-edge technologies to stay at the forefront of web
            development.
          </p> */}

          <a
            href={cv}
            className="flex justify-center items-center gap-2 text-sm md:text-base bg-[#333333] text-white px-[28px] py-[14px] rounded-xl text-[14px] font-light  lg:px-[30px] lg:py-[18px] "
            download
          >
            {"Persue My Résumé"}
            <img src={download} alt="download cv" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
