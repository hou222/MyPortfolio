import Input from "../ui/Input";
import Button from "../ui/Button";

function Contact() {
  return (
    <>
      <div
        className={`bg-project bg-cover h-[520px] w-full bg-center bg-no-repeat`}
      >
        <div className="bg-[#000000d1] w-full h-[520px] flex justify-center items-center">
          <div className=" flex flex-col justify-center items-center gap-1 ">
            <p className="text-white text-3xl font-bold w-60 text-center  leading-snug md:w-auto md:text-4xl lg:text-5xl md:mb-2">
              CONTACT.
            </p>
            <p className="text-white text-lg font-semibold lg:text-xl">
              Lets have a chat
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black text-white flex flex-row justify-center items-center  py-10 px-4">
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center items-start">
          <label className="font-semibold mb-1">Your Name</label>
          <Input type="text" />
          <label className="font-semibold mb-1">Email</label>
          <Input type="email" />
          <label className="font-semibold mb-1">Subject</label>
          <Input type="text" />
          <label className="font-semibold mb-1">Message</label>
          <textarea
            placeholder="Type Your Message Here"
            className="bg-[#232323] border-[#454545] border outline-none mb-4 w-full h-[200px] text-white py-2 px-4 "
          ></textarea>
          <Button type="wide">Submit</Button>
        </div>
      </div>
    </>
  );
}

export default Contact;
