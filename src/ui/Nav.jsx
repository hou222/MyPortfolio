import { HashLink } from "react-router-hash-link";

function Nav({ isOpen, handleOpen }) {
  return (
    <nav
      className={`transition-all duration-500 absolute top-0 h-screen w-full flex justify-center items-start bg-black md:bg-transparent md:justify-end md:items-center  md:static md:w-2/4 md:h-11 md:transition-none    ${
        isOpen ? "left-0 block" : "-left-full"
      }`}
    >
      <ul className=" flex flex-col gap-10 font-semibold md:font-light  text-4xl  md:text-xs lg:text-sm md:gap-8 lg:gap-10 text-nowrap md:flex-row  m-52 md:m-0 text-black ">
        <li>
          <HashLink smooth to="#home" onClick={() => isOpen && handleOpen()}>
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#about" onClick={() => isOpen && handleOpen()}>
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#skills" onClick={() => isOpen && handleOpen()}>
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="#projects"
            onClick={() => isOpen && handleOpen()}
          >
            Projects
          </HashLink>
        </li>

        <li>
          <HashLink smooth to="#contact" onClick={() => isOpen && handleOpen()}>
            Hire Me
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
