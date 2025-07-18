import PortfolioImage from "../ui/PortfolioImage";
import photo from "../data/New/photo.jpg";

function About() {
  return (
    <div className="py-4 px-5  max-w-5xl mx-auto">
      <div className=" text-center py-4">
        <h3 className="text-xl font-medium">You Wanna Know Me ?</h3>
        <p className="text-xs text-[#757575] pt-1">Some Info About Me:</p>
      </div>
      <div className="py-10 bg-blue-500 flex flex-col items-center">
        <img src="" alt="" />
        <PortfolioImage img={photo} size="big" />
      </div>
    </div>
  );
}

export default About;
