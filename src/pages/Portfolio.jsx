import { SlSocialLinkedin } from "react-icons/sl";

function Portfolio() {
  return (
    <div>
      <div className="text-4xl h-screen w-full pt-20 px-5 bg-gray-100 ">
        <div className="flex gap-8">
          <div className="flex flex-col justify-center gap-5  bg-red-400">
            <div>
              <SlSocialLinkedin className="w-5 h-5" />
            </div>
            <div className="w-5 h-5 bg-black"></div>
            <div className="w-5 h-5 bg-black"></div>
          </div>
          <div className="rounded-full w-[150px] h-[150px] bg-black "></div>
        </div>
        <div className="pr-5">
          <p className="text-black font-semibold text-3xl pt-6">
            HOUSSEM BENLAGHA
          </p>
          <p className="relative block text-[15px] before:content-[''] before:absolute before:inline before:h-[1px] before:w-[40px]  before:top-1/2 before:max-w-[200px]  before:left-0 before:bg-black pl-[50px] text-[#333333]">
            Fontend Developer
          </p>
          <p className="text-[15px] leading-[24px] text-start text-[#757575] pb-5">
            🧑‍💻 As a recent computer science graduate with a passion for web
            development, I am excited to leverage my skills and experience to
            create engaging and user-friendly web applications, and I am eager
            to continue learning and growing in this field.leverage my skills
            and experience to create engaging and user-friendly web
            applications, and I am eager to continue learning and growing in
            this field.
          </p>
        </div>
        <div className=" pt-5">
          <button className="bg-[#333333] text-white px-[40px] py-[10px] rounded-lg text-base ">
            {"Let's Meet"}
          </button>
        </div>
      </div>
      dfd
    </div>
  );
}

export default Portfolio;
