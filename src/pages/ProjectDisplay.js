import React from 'react'
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/projectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";
import Button from "@material-ui/core/Button";


const ProjectDisplay = () => {
 const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className='project'>
      <h1> {project.name}</h1>
      <img src={project.image} />
    </div>
  )
}

export default ProjectDisplay