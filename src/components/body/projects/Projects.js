import React from 'react'
import Separator from '../../common/seperator/Separator';
import { projectData } from '../../Data/projects'
import './project.css'
import ProjectCard from './projectCard/ProjectCard';

function Projects() {
    const data = projectData;
  return (
    <div className='projects'>
        <Separator />
        <label className='section-title' >Projects</label>
        <div className='project'>
            {data.map((project) => {
                return (
                    <ProjectCard project={project} />
                )
            })}
        </div>
    </div>
  )
}

export default Projects