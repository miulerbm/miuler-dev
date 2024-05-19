import Project from "@/components/project";
import projectData from "@/public/data/projects.json";

const Page = () => {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            Projects
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-8">
        {projectData.data.map((item, index) => (
          <Project
            key={index}
            headline={item.title}
            image={item.image}
            text={item.text}
            tags={item.tags}
            link={item.link}
            indev={item.indev}
            desktop={item.desktop}
            mobile={item.mobile}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
