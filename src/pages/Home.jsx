function Home() {
  return (
    <div className="bg-home bg-cover h-screen w-full bg-center bg-no-repeat ">
      <div className="bg-[#000000bd] w-full h-screen flex justify-center items-center">
        <div className=" flex flex-col justify-center items-center gap-3 ">
          <p className="text-white text-xl">{`HI, I'M HOUSSAM BENLAGHA`}</p>
          <p className="text-white text-5xl font-bold w-60 text-center  leading-snug md:w-auto md:text-6xl lg:text-7xl md:mb-2">
            React Developer.
          </p>
          <div className="flex flex-row gap-2 ">
            <button className="bg-yellow-300 border-2 border-yellow-300 py-3 px-10 text-sm font-semibold hover:bg-[#8b8b8b82] hover:border-white hover:text-white">
              PROJECTS
            </button>

            <button className="border-2 py-3 px-10 text-white text-sm font-semibold hover:bg-[#8b8b8b82]">
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
