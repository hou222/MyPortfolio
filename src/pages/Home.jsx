import Container from "../ui/Container";
import Projects from "../features/Projects";
import Button from "../ui/Button";

function Home() {
  return (
    <>
      <div
        className={`bg-home bg-cover h-screen w-full bg-center bg-no-repeat`}
      >
        <div className="bg-[#000000bd] w-full h-screen flex justify-center items-center">
          <div className=" flex flex-col justify-center items-center gap-3 ">
            <p className="text-white font-semibold text-xl">{`HI, I'M HOUSSAM BENLAGHA`}</p>
            <p className="text-white text-5xl font-bold w-60 text-center  leading-snug md:w-auto md:text-6xl lg:text-7xl md:mb-2">
              React Developer.
            </p>
            <div className="flex flex-row gap-2 ">
              <Button type="normal">PROJECTS</Button>

              <button className="border-2 py-3 px-10 text-white text-sm font-semibold hover:bg-[#8b8b8b82]">
                CONTACT
              </button>
            </div>
          </div>
        </div>
      </div>

      <Projects />
    </>
  );
}

export default Home;
