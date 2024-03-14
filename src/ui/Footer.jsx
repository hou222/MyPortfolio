import { FaHouseChimney } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-[#141414] text-white grid grid-cols-2 p-11">
      <ul className="bg-red-400 p-5 ">
        <li className="inline-">
          <FaHouseChimney />
          <a>Biskra ,Algeria</a>
        </li>
        <li>
          <FaPhone />
          <span>+213 699888694</span>
        </li>
        <li>
          <MdEmail />
          <span>houssambenlagha0@gmail.com</span>
        </li>
      </ul>

      <div className="p-5">
        <p className="font-semibold">About the company</p>
        <p>
          This is me Houssam Benlagha. I enjoy discussing new projects and
          design challenges.
        </p>
        <div>
          <a>F</a>
          <a>T</a>
          <a>L</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
