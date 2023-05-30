import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

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

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Out 2011 - May 2012"
          iconStyle={{ background: "#000309", color: " rgb(146, 229, 44)"}}
          icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            School Intership - youth detention center of Leiria
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Leiria, Portugal
          </h4>
          <p>helped young people with problems of social integration</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sep 2010 - Out 2011"
          iconStyle={{ background: "#000309", color: " rgb(146, 229, 44)" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            ISLA-Portugal
          </h3>
          <p> Postgraduate Degree, Training in Citizenship and Criminal Psychology</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2006 - 2010"
          iconStyle={{ background: "#000309", color: " rgb(146, 229, 44)" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            ESECS-Portugal
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Social Work</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="jul 2022 - present"
          iconStyle={{ background: " rgb(146, 229, 44)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Document prep clerk/Quality control - Iron Mountain
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Mancheter, UK
          </h4>
          <p>Work with sensitive documents from NHS, checked-in, prepping, scanning and quality control .</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2019 - Abr 2022"
          iconStyle={{ background: " rgb(146, 229, 44)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Vehicle Body Builder - TruckCraft Bodies ltd
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Dukinfield, UK
          </h4>
          <p>Built body of commercial vehicle.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Out 2016 - Maio 2019"
          iconStyle={{ background: " rgb(146, 229, 44)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Semi-Skilled Vehicle Body Builder - Alloy Boddies ltd
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Manchester, UK
          </h4>
          <p>Built body of commercial vehicle.</p>
        </VerticalTimelineElement>

      </VerticalTimeline>

    </div>
  )
}

export default Experience