import React from 'react'
import  EmailIcon from '@material-ui/icons/Email'
import  GithubIcon from '@material-ui/icons/GitHub'
import  LinkedInIcon from '@material-ui/icons/LinkedIn'
import '../styles/Home.css'


const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hello, I am Miguel</h2>
        <div className="prompt">
          <p>A highly motivated Full Stack Web Development graduate with transferable skills in problem-solving, time management, and attention to detail. Seeking an entry-level position in the technology industry with a company that values cultural diversity and social equality. Looking to contribute to a dynamic team and grow both personally and professionally while utilizing my skills and knowledge.</p>
          <div className="links">
            <a href="mailto:rmiguelfe@gmail.com" target='blank'>
              <EmailIcon />
            </a>
            <a href="https://github.com/Miguel-Cabral" target='blank'>
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/rmcf/" target='blank'>
              <LinkedInIcon />
            </a>
          </div>
          
        </div>
      </div>
      <div className="skills">
        <h1>Tech Stack</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              JavaScript,ReactJS, HTML, CSS, NPM, BootStrap, MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, PostgreSQL
            </span>
          </li>
          <li className="item">
            <h2>Tools</h2>
            <span>
              VSCode, Postman, Git, GitHub, Trello, Slack
            </span>
          </li>
        </ol>
      </div>
      
    </div>
  );
  
}

export default Home