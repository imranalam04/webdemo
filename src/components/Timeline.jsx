import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "./WorkIcon";
import "./Timeline.css";
import { FaBeer } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { AiOutlineProject } from "react-icons/ai";
import { MdTaskAlt } from "react-icons/md";
import { BiRevision } from "react-icons/bi";
import { GiProgression } from "react-icons/gi";

const Timeline = () => {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<IoCall />}
        >
          <h3 className="vertical-timeline-element-title text-4xl font-semibold py-3">
            Book a Discovery Call
          </h3>
          <h4 className="vertical-timeline-element-subtitle ">
            Lets chat about your business...
          </h4>
          <p className="text-slate-800">
            Schedule a Discovery Call with us to understand your business,
            project idea, and clarify your vision. We'll examine your current
            systems and create actionable next steps while answering any
            questions you might have about our service.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<AiOutlineProject />}
        >
          <h3 className="vertical-timeline-element-title text-4xl font-semibold py-3">
            Subscribe & Add Your Project Details
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Time to set up your Project Management Board...
          </h4>
          <p className="text-slate-800">
            Once subscribed add your project details to your Trello board. This
            includes uploading designs, outlining functionality, and providing
            all information that will guide the development process. Don't worry
            we'll guide you in setting up your project board correctly
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<MdTaskAlt />}
        >
          <h3 className="vertical-timeline-element-title text-4xl font-semibold py-3">
            Create Your Project Tasks
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            We create your tasks and set up Weekly Sprints
          </h4>
          <p className="text-slate-800">
            We breakdown your project details into actionable development tasks.
            Your developer will then create a weekly 'Sprint’ cycle comprised of
            multiple tasks that will be due end of week. Each task throughout
            the week will be marked for review once completed.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<BiRevision />}
        >
          <h3 className="vertical-timeline-element-title text-4xl font-semibold py-3">
            Request Unlimited Revisions
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Once a task is reviewed mark it as complete...
          </h4>
          <p className="text-slate-800">
            We revise each tasks until you’re 100% happy. Once you approve a
            task, we move onto the next and each week a new sprint will be
            created consisting of new tasks. If a task from a previous sprint is
            still 'in-progress' that task will roll over into the new sprint.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<GiProgression />}
        >
          <h3 className="vertical-timeline-element-title text-4xl font-semibold py-3">
            Track and Manage your Progress
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Watch as we bring your idea to life...
          </h4>
          <p className="text-slate-800">
            Simply login and track your projects progress using Trello. We make
            it easy to review tasks, assign revisions, add comments, view links,
            and share new details with your developer. We understand that
            development needs can fluctuate. That's why you can pause your
            subscription if you have no tasks and resume when you do.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
