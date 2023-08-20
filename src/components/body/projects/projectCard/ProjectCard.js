import React from "react";
import "./projectCard.css";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import { CCard,CCardImage,CCardBody,CCardTitle,CCardText } from '@coreui/react';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <CCard style={{width:"18rem"}} className="default-card" >
        <CCardImage orientation="top" className="project-photo" src={project.icon} />
        <CCardBody>
          <CCardTitle><label className='project-title'>{project.title}</label></CCardTitle>
          <CCardText>
                <div style={{display:"flex"}}>

               
                    {
                        project.live && (
                        <a className='project-link' href={project.live}>
                            <div className='link-button'>
                                <LanguageIcon className='icon' />Live
                            </div>
                        </a>
                    )}
                    {
                        project.gitHub && (
                            <a className='project-link' href={project.gitHub}>
                                <div className='link-button'>
                                    <GitHubIcon className='icon' />Code
                                </div>
                            </a>    
                        )
                    }
                    </div>
                  <p>{project.status && (`status: ${project.status}`)}</p>
                <p>{project.about}</p>
                    {project.tags.map((tag) => {
                        return (
                              <label className='tag'>{tag}</label>
                        )
                    })}
          </CCardText>
        </CCardBody>
      </CCard>
    </div>
  );
}

export default ProjectCard;
