import { FaArrowRight, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Form from "../ui/Form";

function Contact() {
  return (
    <div id="contact" className="pb-4 pt-16 px-5  max-w-5xl mx-auto  ">
      <div className=" text-center py-4 ">
        <h2 className="text-[#333333] text-xl md:text-2xl lg:text-4xl font-medium ">
          Get In Touch
        </h2>
        <span className="text-xs lg:text-sm text-[#757575] pt-1">
          {`Let's have A Chat And Discuss What We Can Accomplish`}
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center md:items-sta py-6 md:py-12 lg:py- md:gap-24 ">
        <div className="  ">
          <h3 className="text-[#333333] text-center">Talk To Me</h3>
          <div className="flex flex-col justify-center items-center gap-4 md:gap-0 md:justify-between py-8 md:pt-8 md:pb-0 md:h-[500px] ">
            <div className="bg-white border rounded-xl flex flex-col  items-center py-4 px text-[13px] w-full ss:w-[300px]">
              <MdOutlineAlternateEmail className="w-[24px] h-[24px]" />
              <h3 className="pt-4 font-light">Email</h3>
              <span className="text-[#757575]">houssambenlagha0@gmail.com</span>

              <a
                href="mailto:houssambenlagha0@gmail.com"
                className="pt-3 text-[#757575] flex items-center justify-center"
              >
                Write Me
                <span>
                  <FaArrowRight className="text-black mx-2" />
                </span>
              </a>
            </div>
            <div className="bg-white border rounded-xl flex flex-col items-center py-4 px text-[13px] w-full ss:w-[300px]">
              <FaWhatsapp className="w-[24px] h-[24px]" />
              <h3 className="pt-4 font-light">Whatsapp</h3>
              <span className="text-[#757575]">+213699888694</span>
              <a
                href="https://wa.me/213699888694"
                className="pt-3 text-[#757575] flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Let's Chat"}
                <span>
                  <FaArrowRight className="text-black mx-2" />
                </span>
              </a>
            </div>
            <div className="bg-white border rounded-xl flex flex-col items-center py-4 px text-[13px] w-full ss:w-[300px]">
              <FaFacebookMessenger className="w-[24px] h-[24px]" />
              <h3 className="pt-4 font-light">Messenger</h3>
              <span className="text-[#757575]">Houssam Benlagha</span>
              <a
                href="https://m.me/houssambenlagha"
                className="pt-3 text-[#757575] flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Let's Talk"}
                <span>
                  <FaArrowRight className="text-black mx-2" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <h3 className="text-[#333333] text-center">
            Tell Me More About Your Project
          </h3>

          <Form />
        </div>
      </div>
    </div>
  );
}

export default Contact;
