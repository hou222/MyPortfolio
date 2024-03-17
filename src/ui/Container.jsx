function Container({ children, image }) {
  return (
    <div
      className={`bg-${image} bg-cover h-screen w-full bg-center bg-no-repeat`}
    >
      <div className="bg-[#000000bd] w-full h-screen flex justify-center items-center">
        <div className=" flex flex-col justify-center items-center gap-3 ">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Container;
