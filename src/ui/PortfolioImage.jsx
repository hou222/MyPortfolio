import photo from "../data/New/photo.jpg";
import { motion } from "motion/react";

function PortfolioImage() {
  return (
    <motion.div
      className=" w-[200px] h-[200px] md:w-[250px] md:h-[250px]  lg:w-[300px] lg:h-[300px] md:order-1  overflow-hidden flex-none lg:mx-auto lg:mt-11"
      animate={{
        borderTopRightRadius: ["40% 30%", "60% 60%", "40% 30%"],
        borderBottomLeftRadius: ["70% 40%", "40% 60%", "70% 40%"],
        borderBottomRightRadius: ["30% 70%", "70% 30%", "30% 70%"],
        borderTopLeftRadius: ["60% 60%", "30% 50%", "60% 60%"],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <img src={photo} alt="Profile" className="w-full h-full object-cover" />
    </motion.div>
  );
}

export default PortfolioImage;
