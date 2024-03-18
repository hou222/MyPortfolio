import Button from "../ui/Button";

function About() {
  return (
    <>
      <div
        className={`bg-project bg-cover h-[520px] w-full bg-center bg-no-repeat`}
      >
        <div className="bg-[#000000d1] w-full h-[520px] flex justify-center items-center">
          <div className=" flex flex-col justify-center items-center gap-1 ">
            <p className="text-white text-3xl font-bold w-60 text-center  leading-snug md:w-auto md:text-4xl lg:text-5xl md:mb-2">
              ABOUT.
            </p>
            <p className="text-white text-lg font-semibold lg:text-xl">
              Im a friendly Front-End Developer.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black  flex flex-col md:flex-row">
        <div className="flex flex-col md:w-1/2 justify-center items-center gap-3  p-14 md:py-40">
          <p className="text-2xl md:text-4xl font-bold text-white">Who AM I</p>
          <p className=" font-semibold text-center  w-[280px]  md:text-lg text-white">
            Im a react front-end developer. I create responsive secure websites
            for my clients.
          </p>
          <Button type="normal">CONTACT</Button>
        </div>
        <div className="relative h-[230px] md:w-1/2">
          <img
            src="../src/data/react2.webp"
            alt=""
            className="w-[240px] h-[150px] md:w-[500px] md:h-[320px] absolute top-7 left-28  md:top-20 md:left-72"
          />
          <img
            src="../src/data/react1.jpg"
            alt=""
            className="w-[200px] h-[130px] md:w-[420px] md:h-[280px]  absolute left-7 top-16 md:left-28 md:top-36"
          />
        </div>
      </div>
    </>
  );
}

export default About;
