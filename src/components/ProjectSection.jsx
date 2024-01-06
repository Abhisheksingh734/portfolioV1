import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-[#1f2937] text-center m-3 text-3xl lg:text-5xl font-semibold animate-fade-right  animate-delay-200'">
          My Projects
        </h1>
        <ProjectCard />
      </div>
    </section>
  );
};

export default ProjectSection;
