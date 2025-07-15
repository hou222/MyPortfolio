import githubimg from "../data/New/github.png";
import twitterimg from "../data/New/twitter (2).png";
import linkedinimg from "../data/New/linkedin (1).png";

function Links() {
  return (
    <div className=" flex flex-col items-start justify-center  gap-5 ">
      <a
        href="https://www.linkedin.com/in/ben-hou222/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinimg} alt="linkedin icon" />
      </a>
      <a
        href="https://github.com/hou222"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubimg} alt="github icon" />
      </a>
      <a
        href="https://twitter.com/Houssambenlagha"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitterimg} alt="twitter icon" />
      </a>
    </div>
  );
}

export default Links;
