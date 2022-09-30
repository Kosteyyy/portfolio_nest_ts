import React from "react";
import { TProject } from "../../types";
import { PROJECTS } from "./const";
import styles from "./index.module.scss";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section id="home-projects" className="section-wrapper">
      <div className="container">
        <h2>Проекты</h2>
        <h3>Что я сделал</h3>
        <div className={styles.projects}>
          {PROJECTS.map((project: TProject) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
