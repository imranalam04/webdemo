import React from "react";
import "./Firsabout.css";
import brain from "../assets/brain.png";

const SecondAbout = () => {
  return (
    <div className="md:mx-24 mx-3">
      <div className="services-wrapper-block p-4 border-black rounded-lg shadow sm:p-8">
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-10 md:my-6">
          <button className="libraries-usecases_text-label-2 my-6 ">
            For businesses
          </button>
          <div className="md:my-6 w-full hidden:flex flex-row md:flex-row">
            <h1 className="text-4xl w-full font-bold md:mr-60">
              Build Custom Solutions for your Business
            </h1>
            <div className="my-5">
              <p className="tracking-normal leading-relaxed text-lg">
                Discover a new level of streamlined processes like you've never
                experienced before. Using AI and No Code to reshape your
                business from custom tools, task completion, automation, and so
                much more.
              </p>
            </div>
            <div className="text-lg text-semibold leading-loose py-3">
              <div className="">⚫
                <span className="mx-3">Custom Dashboards, CRMs, Internal Tools</span>
              </div>
              <div className="">⚫
                <span className="mx-3">AI Trained Chatbots (Support & Lead Gen)</span>
              </div>
              <div>⚫
                <span className="mx-3">Smooth Integration with all your platforms</span>
              </div>
            </div>
            <div className="w-full">
              <img src={brain} className="mt-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondAbout;
