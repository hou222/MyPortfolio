import { RiSendPlaneLine } from "react-icons/ri";

function Contact() {
  return (
    <div id="contact" className="py-4 px-5  max-w-5xl mx-auto b ">
      <div className=" text-center py-4">
        <h2 className="text-[#333333] text-xl md:text-2xl lg:text-4xl font-medium">
          Get In Touch
        </h2>
        <span className="text-xs lg:text-sm text-[#757575] pt-1">
          {`Let's have A Chat And Discuss What We Can Accomplish`}
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center md:gap-24">
        <div className=" ">
          <h3 className="text-[#333333] text-center">Talk To Me</h3>
          <div className="flex flex-col justify-center items-center gap-4 py-8 ">
            <div className="bg-white border rounded-xl flex flex-col  items-center py-4 px text-[13px] w-full ss:w-[300px]">
              <div className="w-5 h-5 bg-black"></div>
              <h3 className="pt-4 font-light">Email</h3>
              <span className="text-[#757575]">houssambenlagha0@gmail.com</span>
              <a href="" className="pt-3 text-[#757575]">
                Write Me {`->`}
              </a>
            </div>
            <div className="bg-white border rounded-xl flex flex-col items-center py-4 px text-[13px] w-full ss:w-[300px]">
              <div className="w-5 h-5 bg-black"></div>
              <h3 className="pt-4 font-light">Whatsapp</h3>
              <span className="text-[#757575]">+213699888694</span>
              <a href="" className="pt-3 text-[#757575]">
                {`Let's Chat ->`}
              </a>
            </div>
            <div className="bg-white border rounded-xl flex flex-col items-center py-4 px text-[13px] w-full ss:w-[300px]">
              <div className="w-5 h-5 bg-black"></div>
              <h3 className="pt-4 font-light">Messenger</h3>
              <span className="text-[#757575]">Houssam Benlagha</span>
              <a href="" className="pt-3 text-[#757575]">
                {`Let's Talk ->`}
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <h3 className="text-[#333333] text-center">
            Tell Me More About Your Project
          </h3>
          <form action="" className="py-8 flex flex-col items-center   gap-8">
            <div className="relative text-[#757575] w-full ss:w-[360px]">
              <label
                htmlFor=""
                className="text-xs absolute  left-[20px] -top-[10px] bg-[#fafafa] px-1"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Please Enter Your Name"
                className="bg-transparent border-2 border-[#0000004d] w-full rounded-xl px-6 py-5 outline-none"
              />
            </div>
            <div className="relative text-[#757575] w-full ss:w-[360px]">
              <label className="text-xs absolute  left-[20px] -top-[10px] bg-[#fafafa] px-1">
                Email
              </label>
              <input
                type="text"
                placeholder="Please Enter Your Email"
                className="bg-transparent border-2 border-[#0000004d] w-full rounded-xl px-6 py-5 outline-none"
              />
            </div>
            <div className="relative text-[#757575]  w-full ss:w-[360px]">
              <label className="text-xs absolute  left-[20px] -top-[10px] bg-[#fafafa] px-1">
                Your Project
              </label>
              <textarea
                type="text"
                placeholder="Please Enter Your Project Details"
                className="bg-transparent border-2 border-[#0000004d] w-full rounded-xl px-6 py-5 outline-none h-[180px]"
              />
            </div>
            <div className="w-full flex justify-start ss:w-[360px]">
              <button className="flex justify-center items-center gap-2 text-sm md:text-base bg-[#333333] text-white px-[28px] py-[14px] rounded-xl text-[14px] font-light  lg:px-[30px] lg:py-[18px] ">
                {"Let's Meet"}
                <RiSendPlaneLine className="inline ml-2" color="white" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
