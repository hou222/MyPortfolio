import { RiSendPlaneLine } from "react-icons/ri";

import PortfolioImage from "../ui/PortfolioImage";
import Links from "../ui/Links";
import Bio from "../ui/Bio";

function Home() {
  return (
    <div className="text-4xl h-screen w-full pt-12 px-5  ">
      <div className="grid grid-cols-[0.5fr_3fr] md:grid-cols-[100px_1fr_1fr] md:items-center gap-5 ">
        <Links />
        <PortfolioImage />
        <Bio />
      </div>
      {/* <div className=" pt-1">
        <button className="bg-[#333333] text-white px-[30px] py-[5px] rounded-xl text-[15px] ">
          {"Let's Meet"}
          <RiSendPlaneLine className="inline ml-2" color="white" />
        </button>
      </div> */}
    </div>
  );
}

export default Home;
