import { HashLink } from "react-router-hash-link";

function Nav({ isOpen, handleOpen }) {
  return (
    <nav
      className={`transition-all duration-500 absolute top-0 h-screen w-3/4 flex justify-start  items-start bg-[#fafafa] border md:border-none md:bg-transparent md:justify-end md:items-center  md:static md:w-2/4 md:h-11 md:transition-none    ${
        isOpen ? "right-0 block" : "-right-full"
      }`}
    >
      {/* <div className="w-5 h-5 bg-green-400">5</div> */}
      <ul className="w-full flex flex-col gap-8  md:font-light  text-lg  md:text-xs lg:text-sm md:gap-8 lg:gap-10 text-nowrap md:flex-row mt-20 mx-4  md:m-0 text-black ">
        <li>
          <HashLink
            smooth
            to="#home"
            className="px-4"
            onClick={() => isOpen && handleOpen()}
          >
            Home
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="#about"
            className="px-4 py-1 md:p-0"
            onClick={() => isOpen && handleOpen()}
          >
            About
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="#skills"
            className="px-4 py-1 md:p-0"
            onClick={() => isOpen && handleOpen()}
          >
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="#projects"
            className="px-4 py-1 md:p-0"
            onClick={() => isOpen && handleOpen()}
          >
            Projects
          </HashLink>
        </li>

        <li>
          <HashLink
            smooth
            to="#contact"
            className="flex justify-center bg-[#333333] md:bg-transparent text-white md:text-black py-1 rounded-md md:p-0"
            onClick={() => isOpen && handleOpen()}
          >
            Hire Me
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
