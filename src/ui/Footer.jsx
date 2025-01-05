import { FaHouseChimney, FaXTwitter } from "react-icons/fa6";
import { FaPhone, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-[#111111] text-white grid grid-cols-1 md:grid-cols-2  p-11">
      <ul className="p-5 ">
        <li className="flex gap-3">
          <FaHouseChimney />
          <a>Biskra ,Algeria</a>
        </li>
        <li className="flex gap-3">
          <FaPhone />
          <span>+213 699888694</span>
        </li>
        <li className="flex gap-3">
          <MdEmail />
          <span>houssambenlagha0@gmail.com</span>
        </li>
      </ul>

      <div className="p-5 flex flex-col justify-center items-start gap-2">
        <p className="font-semibold">About the company</p>
        <p>
          This is me Houssam Benlagha. I enjoy discussing new projects and
          design challenges.
        </p>
        <div className="flex gap-3">
          <a
            href="https://www.facebook.com/houssam.benlagha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="w-7 h-7" />
          </a>
          <a
            href="https://twitter.com/Houssambenlagha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="w-7 h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/ben-hou222"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-7 h-7" />
          </a>
          <a
            href="https://github.com/hou222"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-7 h-7" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
