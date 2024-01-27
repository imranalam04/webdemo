import React from "react";
import "./About.css";
import Slider from "./Slider";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="flex flex-col justify-center mx-4 md:mx-28 flex-wrap">
        <div className="w-full services-wrapper-block bg-white text-black border-black rounded-xl shadow ">
          <div className="text-center flex flex-col">
            <span className="font-mono  md:text-xl text-orange-500">
              WGMI LABS "NO-CODE" MISSION!!
            </span>
          </div>
          <div className="my-5 flex flex-col justify-center">
            <h1 className="text-3xl text-center md:text-5xl font-bold md:font-serif">
              Redefining Software
            </h1>
            <h1 className="text-3xl md:py-4 md:text-5xl font-bold md:font-serif text-center">
              Development
            </h1>
          </div>
          <div className="md:w-8/12 mx-auto my-1 text-center">
            <p className="text-slate-900 text-lg">
              Skip the hassle of vetting developers or dealing with outsourcing
              - we replace conventional developers and costly agencies with a
              simple monthly payment. The perfect solution for startups and
              businesses.
            </p>
          </div>
          <div className="flex flex-col items-center md:w-8/12 my-6">
            <span className="text-center font-bold text-lg">
              ‍Welcome to the future of AI, Software, and Automation
              Development.
            </span>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 ">
            <div className="benefits-wrapper-2 services-wrapper-block card  shadow-xl ">
              <figure className="py-5 md:py-0 md:text-4xl text-3xl font-semibold">
                <h1 className="text-center">Reduce Cost</h1>
              </figure>
              <div className="card-body items-center text-center">
                <p className="responsive-paragraph">
                  Minimize unnecessary costs hiring expensive or unqualified
                  developers. Let us focus on high ROI development tasks while
                  you focus on your business.
                </p>
              </div>
            </div>
            <div className="benefits-wrapper-2 services-wrapper-block card  shadow-xl">
              <figure className="py-5 md:py-0 md:text-4xl text-3xl font-semibold">
                <h1 className="text-center">Increase Speed</h1>
              </figure>
              <div className="card-body items-center text-center">
                <p className="responsive-paragraph ">
                  Eliminate slowdowns with speedier project cycles and fewer
                  meetings, accelerating your development process by up to 4x.
                </p>
              </div>
            </div>
            <div className="benefits-wrapper-2 services-wrapper-block card shadow-xl">
              <figure className="py-5 md:py-0 md:text-4xl text-3xl font-semibold">
                <h1 className="text-center">Quality Control</h1>
              </figure>
              <div className="card-body items-center text-center">
                <p className="responsive-paragraph">
                  Ensure high quality development by minimizing miscommunication
                  and inconsistencies through project management.
                </p>
              </div>
            </div>
          </div>

          <div
            className="slider-wrapper"
            style={{ height: "", width: "80%", overflow: "hidden" }}
          >
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
