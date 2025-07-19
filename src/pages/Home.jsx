import PortfolioImage from "../ui/PortfolioImage";
import Links from "../ui/Links";
import Bio from "../ui/Bio";
import photo from "../data/New/photo.jpg";
import { motion } from "motion/react";

function Home() {
  return (
    <div className="grid gap-28 h-screen w-full pt-12 lg:pt-16 px-5  max-w-5xl mx-auto">
      <div className="grid grid-cols-[0.5fr_3fr] md:grid-cols-[100px_1fr_1fr] lg:grid-cols-[116px_1fr_1fr] md:items-center gap-5">
        <Links />
        <PortfolioImage img={photo} size="small" />
        <Bio />
      </div>
      <div>
        <div className="hidden  w-fit p-3 md:flex gap-3 ml-[120px] items-center">
          <div className="w-[20px] h-[35px]  border-2 border-black rounded-2xl flex justify-center items-start">
            <motion.div
              initial={{ y: 3 }}
              animate={{ y: [3, 10] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-[0.1rem] h-[0.5rem] bg-black "
            ></motion.div>
          </div>

          <span className="text-base">Scroll Down</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
