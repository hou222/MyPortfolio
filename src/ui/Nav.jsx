import { NavLink } from "react-router-dom";

function Nav({ isOpen }) {
  return (
    <nav
      className={`transition-all duration-500 h-screen absolute top-0 w-full flex justify-center items-start md:px-3 bg-black md:block  md:static  ${
        isOpen ? "left-0 block h-screen w-full" : "-left-full"
      }`}
    >
      <ul className=" flex flex-col gap-10 font-semibold text-4xl  md:text-xl md:gap-10 md:flex-row  m-52 text-white">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/project">Project</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
