import { useState } from "react";
import Nav from "./Nav";
import { IoMenu, IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useScroll } from "../hooks/useScroll";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const scroll = useScroll();

  function handleOpen() {
    setIsOpen((open) => !open);
  }
  return (
    <header
      className={` z-10  fixed top-0 left-0 right-0 text-black transition-all duration-1000  ${
        scroll ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-5 py-4 max-w-5xl mx-auto">
        <p
          className="z-10 text-3xl font-bold hover:cursor-pointer"
          onClick={() => navigate("/home")}
        >
          HM
        </p>

        <Nav isOpen={isOpen} handleOpen={handleOpen} />

        {!isOpen ? (
          <button className="z-1 md:hidden " onClick={handleOpen}>
            <IoMenu className="h-10 w-10" />
          </button>
        ) : (
          <button className="z-1 text-white relative " onClick={handleOpen}>
            <IoClose className="h-10 w-10" />
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
