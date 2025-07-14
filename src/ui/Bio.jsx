import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Bio() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["HOUSSEM BENLAGHA", "REACT DEVELOPER."],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1200,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="pr-5 pt-4">
      <span className="text-black font-semibold text-3xl pt-6" ref={el} />

      {/* <p className="text-black font-semibold text-3xl pt-6">HOUSSEM BENLAGHA</p> */}
      <p className="relative block text-[15px] before:content-[''] before:absolute before:inline before:h-[1px] before:w-[40px]  before:top-1/2 before:max-w-[200px]  before:left-0 before:bg-black pl-[50px] text-[#333333]">
        Fontend Developer
      </p>
      <p className="text-[15px] leading-[24px] text-start text-[#757575] pb-5">
        🧑‍💻 As a recent computer science graduate with a passion for web
        development, I am excited to leverage my skills and experience to create
        engaging and user-friendly web applications, and I am eager to continue
        learning and growing in this field.leverage my skills and experience to
        create engaging and user-friendly web applications, and I am eager to
        continue learning and growing in this field.
      </p>
    </div>
  );
}

export default Bio;
