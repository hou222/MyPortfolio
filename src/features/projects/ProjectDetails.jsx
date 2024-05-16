import Button from "../../ui/Button";

function ProjectDetails({ imageName }) {
  return (
    <div className="bg-gray-800 w-[350px] md:w-[350px] lg:w-[400px]  p-3 flex flex-col gap-2">
      <img src={imageName} alt="project photo" className="h-46 w-full" />
      <h1 className="text-white font-semibold text-xl">
        LMS/Course Website Design
      </h1>
      <p className="text-white tracking-widest">
        Podacst Thriving Facebook community and top-ranked, Amy inspires a
        grounded, tangible and self-affiming sense of
        {`"Wow! I really can do
        this"`}
        for over 100,000 online entrepreneurs, Best-selling marketing courses
      </p>
      <div
        className="flex
      justify-between items-center"
      >
        <Button type="small">VIEW</Button>
        <Button type="small">SOURCE</Button>
      </div>
    </div>
  );
}

export default ProjectDetails;
