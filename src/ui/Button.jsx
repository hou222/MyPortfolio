function Button({ children, type }) {
  const styles = {
    small: "px-5 py-2 text-xs",
    normal: "py-3 px-10 text-sm",
    wide: "py-3 px-10 text-sm w-full text-black",
  };
  return (
    <button
      className={`bg-yellow-300 border-2 border-[#bec0ae] ${styles[type]} font-semibold hover:bg-[#8b8b8b82] hover:border-white hover:text-white hover:transition-all hover:duration-500`}
    >
      {children}
    </button>
  );
}

export default Button;
