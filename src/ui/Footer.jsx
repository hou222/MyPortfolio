import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <div className="bg-white text-[#333333]   p-11">
      <div className="py-4 flex flex-col justify-center items-center gap-8">
        <p className="text-4xl font-medium">Benlagha</p>
        <ul className="flex gap-2 font-light">
          <li>
            <HashLink smooth to="#about">
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#projects">
              Projects
            </HashLink>
          </li>
        </ul>
        <div className="flex gap-3">
          <a
            href="https://www.facebook.com/houssam.benlagha/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="w-7 h-7" />
          </a>
          <a
            href="https://twitter.com/Houssambenlagha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaXTwitter className="w-7 h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/ben-hou222"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <FaLinkedin className="w-7 h-7" />
          </a>
          <a
            href="https://github.com/hou222"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FaGithub className="w-7 h-7" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
