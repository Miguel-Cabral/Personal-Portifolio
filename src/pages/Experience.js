import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";

const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#000309">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jun.2022 - Abr.2023"
          iconStyle={{ background: "#000309", color: " rgb(146, 229, 44)" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Trainee CodeYourFuture, Manchester, uk
          </h3>
          <p> An intense 10-month full stack web development course  taught by professionals in the     technology industry.Learned to Build responsive web applications using vanilla JavaScript, HTML, CSS, React on the front-end, NodeJS, Express, PostgreSQL on the back-end.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Mar.2022 - Abr.2023"
          iconStyle={{ background: "#000309", color: " rgb(146, 229, 44)" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Web Developer - CodeYourFuture, Manchester, uk
          </h3>
          <p>Built a study group app for CodeYourFuture in the final project. Collaborated in an Agile project team of 4 developers and 1 product  manager to deliver a minimum viable product(MVP) within a tight deadline of 4 weeks.</p>
        </VerticalTimelineElement>

      </VerticalTimeline>

    </div>
  )
}

export default Experience