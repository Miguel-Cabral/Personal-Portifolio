import React from 'react'
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/projectList";
import "../styles/Projects.css";


const Projects = () => {
  return (
    <div>
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, index) => {
          return (
            <ProjectItem id={index} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  )
}

export default Projects