import { NavLink } from "react-router-dom";

function Nav({ isOpen, handleOpen }) {
  return (
    <nav
      className={`transition-all duration-500 absolute top-0 h-screen w-full flex justify-center items-start bg-black md:bg-transparent md:justify-end md:items-center  md:static md:w-2/4 md:h-11 md:transition-none  ${
        isOpen ? "left-0 block" : "-left-full "
      }`}
    >
      <ul className=" flex flex-col gap-10 font-semibold text-4xl  md:text-xl md:gap-7 lg:gap-10  md:flex-row  m-52 md:m-3 text-white ">
        <li>
          <NavLink to="/home" onClick={isOpen && handleOpen}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/project" onClick={isOpen && handleOpen}>
            Project
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={isOpen && handleOpen}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={isOpen && handleOpen}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
