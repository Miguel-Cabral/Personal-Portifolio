import React from 'react'
import  EmailIcon from '@mui/icons-material/Email'
import  GithubIcon from '@mui/icons-material/GitHub'
import  LinkedInIcon from '@mui/icons-material/LinkedIn'
import '../styles/Home.css'


const Home = () => {

  return (
    <div className="home">
      <div className="about">
        <h2 className='typewriter'> Hi, I am Miguel</h2>
        <div className="prompt">
          <p>A Graduate Web Developer... </p>
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
      <div className="about-me">
        <h1>About Me</h1>
        <p>
          I am a dreamer, a passionate web developer Seeking an entry-level position in the technology industry with a company that values cultural diversity and social equality. Looking to contribute to a dynamic team and grow both personally and professionally. I enjoy working on both the front-end and back-end of web applications, and I'm always eager to learn new technologies and expand my skillset. I believe in the power of technology to drive positive change and I'm excited to be part of the ever-evolving tech industry. 
        </p>
      </div>
      <div className="poem">
        <h1>My Journey</h1>
        <p>
          In the land of Cape Verde, my journey began,<br />
          Amidst the ocean waves and the hot, sandy sand,<br />
          Born into a world of vibrant colors and song,<br />
          Where the people are strong, and the spirit is long.<br />
          <br />
          But dreams of a future beyond this island home,<br />
          Drove me to leave and venture forth to roam,<br />
          To Portugal, I went, with my hopes in tow,<br />
          To study and build a better life, and to grow.<br />
          <br />
          The road was long and the journey was hard,<br />
          But I persevered, with my spirit unmarred,<br />
          And as I walked the path of education,<br />
          I found new strength and new determination.<br />
          <br />
          But the call of destiny was yet to be fulfilled,<br />
          And so I traveled once more, my heart thrilled,<br />
          To the UK, where I built my family with love,<br />
          And found a new home, like a hand in a glove.<br />
          <br />
          Yet still, my dreams continued to grow,<br />
          And the desire for change began to show,<br />
          A new career, a new challenge to embrace,<br />
          To make a difference, to leave a new trace.<br />
          <br />
          So here I stand, proud and strong,<br />
          My journey still continuing on,<br />
          From Cape Verde to Portugal, and the UK too,<br />
          I am the sum of my parts, and the journey anew.
        </p>
      </div>
      <div className="skills">
        <h1>Tech Stack</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              JavaScript|ReactJS|HTML|CSS|NPM|BootStrap|MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS|ExpressJS|PostgreSQL
            </span>
          </li>
          <li className="item">
            <h2>Tools</h2>
            <span>
              VSCode|Postman|Git|GitHub|Trello|Slack|Netlify|Render
            </span>
          </li>
        </ol>
      </div>

      
    </div>
  );
  
}

export default Home