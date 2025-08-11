import { useRef } from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
function Form() {
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
  );
}

export default Form;
