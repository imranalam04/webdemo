import React from "react";
import "./About.css";
import Card from "./Cards";
import Slider from "./Slider";

const About = () => {
  return (
    <div className="flex flex-col justify-center mx-4 md:mx-28 flex-wrap ">
      <div className="w-full services-wrapper-block bg-white border-black rounded-xl shadow ">
        <div className="text-center">
          <span className="font-mono text-xl text-orange-500">
            WGMI LABS "NO-CODE" MISSION!!
          </span>
        </div>
        <div className="my-5 flex flex-col justify-center">
          <h1 className="text-3xl text-center md:text-5xl font-bold md:font-serif">
            Redefining Software
          </h1>
          <br className="" />
          <h1 className="text-3xl md:text-5xl font-bold md:font-serif text-center">
            Development
          </h1>
        </div>
        <div className="flex flex-col justify-center w-full md:w-8/12 my-1">
          <p className="text-center text-slate-800 text-lg">
            Skip the hassle of vetting developers or dealing with outsourcing -
            we replace conventional developers and costly agencies with a simple
            monthly payment. The perfect solution for startups and businesses.
          </p>
        </div>
        <div className="flex flex-col justify-center w-full md:w-8/12 my-6">
          <span className="text-center font-bold text-lg">
            ‍Welcome to the future of AI, Software, and Automation Development.
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-between my-3">
          <Card
            heading="Reduce Costs"
            para=" Minimize unnecessary costs hiring expensive or unqualified developers. Let us focus on high ROI development tasks while you focus on your business."
          />
          <Card
            heading="Increase Speed"
            para="Eliminate slowdowns with speedier project cycles and fewer meetings, accelerating your development process by up to 4x."
          />
          <Card
            heading="Quality Control"
            para="Ensure high quality development by minimizing miscommunication and inconsistencies through project management."
          />
        </div>
        <div>
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default About;
