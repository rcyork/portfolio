import React from "react";
import { ProjectShowcase } from "./ProjectShowcase/ProjectShowcase";

import { PROJECTS } from "../../projects_data";
import "./Projects.css";

export const Projects = () => {
  return (
    <div className="projects">
      {PROJECTS.map(project => {
        return <ProjectShowcase project={project} key={project.title} />;
      })}
    </div>
  );
};
