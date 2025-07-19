function Button({ children }) {
  /*  const styles = {
    small: "px-5 py-2 text-xs",
    normal: "py-3 px-10 text-sm",
    wide: "py-3 px-10 text-sm w-full text-black",
  }; */
  return (
    <button className="flex justify-center items-center gap-2 text-sm md:text-base bg-[#333333] text-white px-[28px] py-[14px] rounded-xl text-[14px] font-light  lg:px-[30px] lg:py-[18px] ">
      {children}
    </button>
  );
}

export default Button;
