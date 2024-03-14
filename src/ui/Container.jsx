function Container({ children }) {
  return (
    <div className="bg-home bg-cover h-screen w-full bg-center bg-no-repeat ">
      <div className="bg-[#000000bd] w-full h-screen flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}

export default Container;
