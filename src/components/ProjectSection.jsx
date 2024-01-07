import React from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";
import "animate.css"; // Import animate.css for pre-built animations

const ProjectSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className={`bg-white transform ${
        inView ? "animate__animated animate__fadeInUp" : "opacity-0"
      } transition-all duration-500 ease-in-out`}
    >
      <div className="container mx-auto">
        <h1 className="text-[#1f2937] text-center m-3 text-3xl lg:text-5xl font-semibold animate-fade-right animate-delay-200">
          My Projects
        </h1>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default ProjectSection;
