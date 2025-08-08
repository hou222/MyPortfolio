import { RiSendPlaneLine } from "react-icons/ri";
import email from "../data/New/email.png";
import whatsapp from "../data/New/whatsapp.png";
import messenger from "../data/New/messager.png";
import { FaArrowRight, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yzx0v3g", "template_np18isj", form.current, {
        publicKey: "u6dq8OZdglpzSPN95",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

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
          <form
            ref={form}
            onSubmit={sendEmail}
            className="py-8 md:pb-0 flex flex-col items-center gap-6 md:gap-0  md:justify-between  md:h-[500px]"
          >
            <div className="relative text-[#757575] w-full ss:w-[360px]">
              <label
                htmlFor=""
                className="text-xs absolute  left-[20px] -top-[10px] bg-[#fafafa] px-1"
              >
                Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Please Enter Your Name"
                className="bg-transparent border-2 border-[#0000004d] w-full rounded-xl px-6 py-5 outline-none"
              />
            </div>
            <div className="relative text-[#757575] w-full ss:w-[360px]">
              <label className="text-xs absolute  left-[20px] -top-[10px] bg-[#fafafa] px-1">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="Please Enter Your Email"
                className="bg-transparent border-2 border-[#0000004d] w-full rounded-xl px-6 py-5 outline-none"
              />
            </div>
            <div className="relative text-[#757575]  w-full ss:w-[360px]">
              <label className="text-xs absolute  left-[20px] -top-[10px] bg-[#fafafa] px-1">
                Your Project
              </label>
              <textarea
                name="message"
                placeholder="Please Enter Your Project Details"
                className="bg-transparent border-2 resize-none border-[#0000004d] w-full rounded-xl px-6 py-5 outline-none h-[180px]"
              />
            </div>
            <div className="w-full flex justify-start ss:w-[360px]">
              <button
                type="submit"
                className="flex justify-center items-center gap-2 text-sm md:text-base bg-[#333333] text-white px-[28px] py-[14px] rounded-xl text-[14px] font-light  lg:px-[30px] lg:py-[18px] "
              >
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
