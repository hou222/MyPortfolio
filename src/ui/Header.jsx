import { useState } from "react";
import Nav from "./Nav";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="z-10 flex justify-between items-center px-3 py-6 fixed top-0 left-0 right-0 text-white ">
      <p className="z-10 text-3xl font-bold ">Portfolio.</p>

      <Nav isOpen={isOpen} />

      {!isOpen ? (
        <button
          className="z-1 md:hidden "
          onClick={() => setIsOpen((open) => !open)}
        >
          <IoMenu className="h-10 w-10" />
        </button>
      ) : (
        <button
          className="z-1 text-white relative "
          onClick={() => setIsOpen((open) => !open)}
        >
          <IoClose className="h-10 w-10" />
        </button>
      )}

      {/* --------------------------------------------------------------------------------------------------------------- */}
      {/* <div className="flex bg-black justify-between items-center px-3 py-6 text-white">
        <p className=" text-3xl font-bold">Portfolio.</p>

        {!isOpen ? (
          <button
            className="md:hidden bg-red-400"
            onClick={() => setIsOpen((open) => !open)}
          >
            |||
          </button>
        ) : (
          <button className="z-1 " onClick={() => setIsOpen((open) => !open)}>
            X
          </button>
        )}
      </div>
      <Nav isOpen={isOpen} /> */}
    </header>
  );
}

export default Header;
