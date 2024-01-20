import React from "react";
import "./Firsabout.css";
import laptop from "../assets/laptop1.png";

const Firstabout = () => {
  return (
    <div className="md:mx-24 mx-3">
      <div className="services-wrapper-block p-4 border-black rounded-lg shadow sm:p-8">
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-10 md:my-6">
          <button className="libraries-usecases_text-label-2 my-6 ">
            FOR STARTUPS
          </button>
          <div className="md:my-6 w-full hidden:flex flex-row md:flex-row">
            <h1 className="text-4xl w-full font-bold md:mr-60">
              Ready to Build your own Software?
            </h1>
            <div className="my-5">
              <p className="tracking-normal leading-relaxed text-lg">
                The conventional coding process is slow, bulky, and can be a
                drain on resources. WGMI Labs taps into the capabilities of
                no-code development, enabling us to develop MVPs for a fraction
                of the time and cost.
              </p>
            </div>
            <div className="text-lg text-semibold leading-loose">
              <div className="">
                ⚫<span className="mx-5">Rapid MVP Prototyping</span>{" "}
              </div>
              <div className="">
                ⚫
                <span className="mx-4">
                  {" "}
                  From Ideas to Production Ready Software
                </span>
              </div>
              <div>
                ⚫
                <span className="mx-4">Accelerated Development Timelines</span>
              </div>
            </div>
            <div className="w-full">
              <img src={laptop} className="mt-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstabout;
