function Home() {
  return (
    <div className="bg-home bg-cover h-screen w-full bg-center bg-no-repeat brightness-50 flex justify-center items-center">
      <div className="bg-red-600 flex flex-col justify-center items-center">
        <p className="text-white text-3xl">{`HI, I'M HOUSSAM BENLAGHA`}</p>
        <p>React Developer.</p>
        <div className="flex flex-col md:flex-row">
          <button>PROJECTS</button>

          <button>CONTACT</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
