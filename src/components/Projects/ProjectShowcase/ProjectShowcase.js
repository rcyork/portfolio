import React from "react";

import "./ProjectShowcase.css";

export const ProjectShowcase = ({ project }) => {
  return (
    <div className="projectWrap">
      <h3 className="title">{project.title}</h3>
      <a
        href={project.link}
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={project.img} alt={project.altText} />
      </a>
      <ul className="description">
        {project.description.map((text, index) => {
          return <li key={index}> {text}</li>;
        })}
      </ul>
      <a
        href={project.repo}
        className="repoLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github fa-2x githubIcon" />
        <span className="linkText">Project Repository</span>
      </a>
    </div>
  );
};
