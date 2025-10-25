"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import useProjectData, { ProjectType } from "../../hooks/useProjectData";
import ProjectCard from "./project-card";
import { useEffect, useState } from "react";

const ProjectSection = () => {
  const {
    filteredProjects,
    selectedSkill,
    isLoading,
    error,
    allSkills,
    setSelectedSkill,
  } = useProjectData({ itemQuantity: 3 });


  // add useEffect to imports: import { useState, useEffect } from "react";
  const [paginatedProjects, setPaginatedProjects] = useState<ProjectType[]>(
    () => filteredProjects.slice(0, 3)
  );

  useEffect(() => {
    setPaginatedProjects(filteredProjects.slice(0, 3));
  }, [filteredProjects]);

  const handlePaginate = (direction: "next" | "prev") => {
    if (filteredProjects.length === 0) return;

    const first = paginatedProjects[0];
    const currentIndex =
      first != null ? filteredProjects.findIndex((p) => p.id === first.id) : 0;

    if (currentIndex === -1) {
      setPaginatedProjects(filteredProjects.slice(0, 3));
      return;
    }

    const pageSize = Math.min(3, filteredProjects.length);
    let newIndex =
      direction === "next"
        ? Math.min(currentIndex + pageSize, Math.max(0, filteredProjects.length - pageSize))
        : Math.max(currentIndex - pageSize, 0);

    setPaginatedProjects(filteredProjects.slice(newIndex, newIndex + pageSize));
  };



  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center pt-[10%]  dark:text-white px-[5%] tablet:px-[10%] desktop:px-[17%]"
    >
      <h1 className="text-3xl tablet:text-3xl mb-0">My Projects</h1>
      <p className=" tablet:px-[100px]">
       I have completed diverse projects involving mechanical design, 3D modeling, and interactive web applications, showcasing my skills in CAD software and modern web technologies.
      </p>
      <div className="flex flex-wrap justify-start gap-x-3 gap-y-2 tablet:gap-3 tablet:p-2">
        {allSkills.map((skill, index) => (
          <button
            key={index}
            onClick={() => setSelectedSkill(skill)}
            className={` flex px-3 py-2 tablet:px-5 tablet:py-3 font-poppins rounded-lg tablet:text-sm ${
              selectedSkill === skill
                ? "bg-darkorange-100"
                : "bg-whitesmoke-200 dark:bg-white text-black dark:hover:bg-gainsboro-200"
            }`}
          >
            {skill.charAt(0).toUpperCase() + skill.slice(1)}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-7 pt-[2rem] tablet:flex-row">
        <div className="flex flex-col justify-center items-center">
          {
            filteredProjects.length > 3 && (
              <ChevronLeft className="h-12 w-12" onClick={() => handlePaginate('prev')} />
            )
          }
        </div>
        {isLoading ? (
          <p>Loading</p>
        ) : error ? (
          <p>getting error when fetching the data</p>
        ) : (
          paginatedProjects.map((project: ProjectType) => (
            <ProjectCard
              key={project.id}
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              skills={project.skills}
            />
          ))
        )}
         <div className="flex flex-col justify-center items-center">
          {
            filteredProjects.length > 3 && (
              <ChevronRight className="h-12 w-12 hover:cursor-pointer" onClick={() => handlePaginate('next')} />
            )
          }
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
