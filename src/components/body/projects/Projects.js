import React from "react";
import Separator from "../../common/seperator/Separator";
import { projectData } from "../../Data/projects";
import "./project.css";
import ProjectCard from "./projectCard/ProjectCard";
import EngineeringIcon from "@mui/icons-material/Engineering";

function Projects() {
  const data = projectData;
  return (
    <div className="projects">
      <Separator />
      <div style={{ display: "flex", alignItems:"center" }}>
        <EngineeringIcon className="option-icon" fontSize="large" />
        <label className="section-title">Projects</label>
      </div>
      <div className="project" data-aos="fade-left">
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
