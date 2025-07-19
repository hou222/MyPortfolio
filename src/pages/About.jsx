import PortfolioImage from "../ui/PortfolioImage";
import photo from "../data/New/photo2.jpg";
import download from "../data/New/download.png";
import Button from "../ui/Button";

function About() {
  return (
    <div className="py-4 px-5  max-w-5xl mx-auto">
      <div className=" text-center py-4">
        <h3 className="text-xl md:text-2xl lg:text-4xl font-medium">
          You Wanna Know Me ?
        </h3>
        <p className="text-xs lg:text-sm text-[#757575] pt-1">
          Some Info About Me:
        </p>
      </div>
      <div className="py-10 flex flex-col lg:flex-row items-center lg:gap-12">
        <PortfolioImage img={photo} size="big" />

        <div className="text-center flex flex-col items-center py-6  lg:items-start lg:gap-8">
          <p className="text-[15px] md:text-[16px] leading-[24px] text-center lg:text-start text-[#757575] pb-5 lg:pr-24">
            I am a passionate MERN Stack Developer, fueled by an unwavering love
            for creating beautiful and functional digital experiences. With
            expertise in React, HTML, CSS, JavaScript, TypeScript, and Next.js,
            I am dedicated to continuously refining my skills and embracing
            cutting-edge technologies to stay at the forefront of web
            development.
          </p>
          <Button>
            {"Persue My Résumé"}
            <img src={download} alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default About;
