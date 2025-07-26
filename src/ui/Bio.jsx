import { useEffect, useRef } from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import Typed from "typed.js";
import Button from "./Button";

function Bio() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Houssem Benlagha", "React Developer"],
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
    <div className="col-start-1 col-end-3 md:col-start-auto md:col-end-auto  pr-5 md:pt-4">
      <h3 className="text-black font-medium text-3xl lg:text-[34px]">
        <span ref={el} />
      </h3>

      <p className="relative block text-[15px] lg:text-[21px] md:font-sem before:content-[''] before:absolute before:inline before:h-[1px] before:w-[40px]  before:top-1/2 before:max-w-[200px]  before:left-0 before:bg-black pl-[50px] text-[#333333] lg:py-2">
        Fontend Developer
      </p>
      <p className="text-[15px] md:text-[16px] leading-[24px] text-start text-[#757575] pb-5 lg:py-3">
        🧑‍💻 As a recent computer science graduate with a passion for web
        development, I am excited to leverage my skills and experience to create
        engaging and user-friendly web applications, and I am eager to continue
        learning and growing in this field.leverage my skills and experience to
        create engaging and user-friendly web applications, and I am eager to
        continue learning and growing in this field.
      </p>
      <div className=" pt-1 md:pt-4 lg:pt-8">
        <Button>
          {"Let's Meet"}
          <RiSendPlaneLine className="inline ml-2" color="white" />
        </Button>
      </div>
    </div>
  );
}

export default Bio;
