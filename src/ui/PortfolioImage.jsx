import photo from "../data/New/photo.jpg";
import { motion } from "motion/react";

function PortfolioImage() {
  return (
    <motion.div
      className="w-[200px] h-[200px] overflow-hidden border-3 border-black"
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
