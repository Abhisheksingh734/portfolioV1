import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ButtonListItem from "../utils/ButtonListItem";
import ytkclone from "../assets/ytclone.png";
const ProjectSection2 = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  My Recent Projects
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe aliquam nulla rem facilis perspiciatis unde ducimus,
                  quia
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <ButtonListItem
                  onClick={() => handleProject("all")}
                  label="All Projects"
                  active={showCard === "all"}
                />
                <ButtonListItem
                  onClick={() => handleProject("html/css/js")}
                  label="HTML/CSS/JS"
                  active={showCard === "html/css/js"}
                  className="ml-1"
                />
                <ButtonListItem
                  onClick={() => handleProject("react")}
                  label="React"
                  active={showCard === "react"}
                  className="ml-1"
                />
                <ButtonListItem
                  onClick={() => handleProject("jscli")}
                  label="jscli"
                  active={showCard === "jscli"}
                  className="ml-1"
                />
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <ProjectCard
              ImageHref={ytkclone}
              category="html/css/js"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <ProjectCard
              ImageHref={ytkclone}
              category="React"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <ProjectCard
              ImageHref={ytkclone}
              category="JSCLI"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectSection2;
