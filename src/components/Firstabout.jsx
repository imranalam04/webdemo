import React from "react";
import { FaCube } from "react-icons/fa6";
import "./Firsabout.css";
import laptop from "../assets/laptop1.png";

const Firstabout = () => {
  return (
    <div className="first-about-wrapper">
      <div className="services-wrapper-block w-full p-4 rounded-lg shadow sm:p-8">
        <button className="libraries-usecases_text-label-2 my-6 text-black md:ml-[-75%]">
          FOR STARTUPS
        </button>
        <div className="md:my-6 w-full hidden:flex flex-row md:flex-row h-fit">
          <h1 className="text-4xl w-full font-bold md:mr-60 text-black">
            Ready to Build your own Software?
          </h1>
          <div className="my-5">
            <p className="tracking-normal leading-relaxed text-lg text-slate-800">
              The conventional coding process is slow, bulky, and can be a drain
              on resources. WGMI Labs taps into the capabilities of no-code
              development, enabling us to develop MVPs for a fraction of the
              time and cost.
            </p>
          </div>
          <div className="flex items-center mb-3 text-lg">
            <FaCube className="mr-2 mb-2 md:mb-0 text-slate-900" />
            <span className="mx-2 md:mx-3 text-slate-900">
              Rapid MVP Prototyping
            </span>
          </div>
          <div className="flex items-center mb-3 text-lg">
            <FaCube className="mr-2 mb-2 md:mb-0 text-slate-900" />
            <span className="mx-2 md:mx-3 text-slate-900">
              From Ideas to Production Ready Software
            </span>
          </div>
          <div className="flex items-center mb-3 text-lg">
            <FaCube className="mr-2 mb-2 md:mb-0 text-slate-900" />
            <span className="mx-2 md:mx-3 text-slate-900">
              Accelerated Development Timelines
            </span>
          </div>
        </div>
        <div className="w-full" style={{ width: "90%" }}>
          <img src={laptop} className="mt-5" />
        </div>
      </div>
    </div>
  );
};

export default Firstabout;
