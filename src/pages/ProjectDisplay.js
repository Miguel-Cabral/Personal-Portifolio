import React from 'react'
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/projectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";
import Button from "@mui/material/Button";


const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className='project'>
      <h1> {project.name}</h1>
      <img src={project.image} />

      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className='buttons-container'>
        <Button
          variant="contained"
          className='project-button'
          style={{ backgroundColor: '#5a9a29', color: '#fff', marginRight: '10px' }}
          href={project.demo}
          target="_blank"

        >
          Live Demo
        </Button>
        <Button
          variant="contained"
          className='project-button'
          style={{ backgroundColor: '#5a9a29', color: '#fff', marginRight: '10px' }}
          href={project.github}
          target="_blank"
          startIcon={<GitHubIcon />}
        >
          Repository
        </Button>
        <Button
          variant='contained'
          className='project-button'
          style={{ backgroundColor: '#5a9a29', color: '#fff' }}
          href={project.emaze}
          target='_blank'
        >
          Presentation
        </Button>
      </div>

    </div>

  )
}

export default ProjectDisplay