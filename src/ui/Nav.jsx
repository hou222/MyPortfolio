import { NavLink } from "react-router-dom";

function Nav({ isOpen }) {
  return (
    <nav
      className={`transition-all duration-500 h-screen absolute top-0 w-full flex justify-center items-start bg-black md:bg-transparent md:justify-end md:items-center  md:static md:w-2/4 md:h-11  ${
        isOpen ? "left-0 block h-screen w-full" : "-left-full"
      }`}
    >
      <ul className=" flex flex-col gap-10 font-semibold text-4xl  md:text-xl md:gap-7 lg:gap-10  md:flex-row  m-52 md:m-3 text-white ">
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
