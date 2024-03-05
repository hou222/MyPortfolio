import { useState } from "react";
import Nav from "./Nav";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="flex bg-black justify-between items-center px-3 py-6 text-white">
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
      <Nav isOpen={isOpen} />
    </header>
  );
}

export default Header;
