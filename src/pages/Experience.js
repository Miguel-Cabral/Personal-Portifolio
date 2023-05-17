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
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jun.2022 - Abr.2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Trainee CodeYourFuture, Manchester, uk
          </h3>
          <p> Studied Full Stack Web Developer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="jul 2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Document prep clerk/Quality control - Iron Mountain
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Mancheter, UK
          </h4>
          <p>Work with sensitive documents from NHS, checking, prepping, scanning and quality control .</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2019 - Abr 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
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
          date="May 2019 - Abr 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
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
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Out 2011 - May 2012"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
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
          iconStyle={{ background: "#3e497a", color: "#fff" }}
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
          iconStyle={{ background: "#3e497a", color: "#fff" }}
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
        

        
      </VerticalTimeline>

    </div>
  )
}

export default Experience