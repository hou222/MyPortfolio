import { NavLink } from "react-router-dom";

function Nav({ isOpen }) {
  return (
    <nav
      className={`flex justify-center items-start px-3 bg-black md:block  md:static md:w ${
        isOpen ? "block h-screen w-full" : "hidden"
      }`}
    >
      <ul className=" flex flex-col gap-10 font-semibold text-4xl  md:text-xl md:gap-10 md:flex  m-52 text-white">
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
