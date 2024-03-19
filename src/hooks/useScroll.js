import { useEffect, useState } from "react";

export function useScroll() {
  const [scroll, setScroll] = useState(window.scrollY);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scroll;
}
