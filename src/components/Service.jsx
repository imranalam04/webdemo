import React from "react";
import "./ServiceCard.css";
import panda from "../assets/panda.jpg";

const Service = () => {
  return (
    <div className="px-4">
      <ul className="grid w-full gap-6 md:grid-cols-2 text-black">
        <li className="block md:mx-7">
          <div className="md:w-8/12 mx-3 md:mx-28 ">
            <span className="text-4xl md:text-6xl font-bold">
              What We Do Best
            </span>
          </div>
          <br />
          <div className="pt-5 w-full md:w-10/12 mx-3 md:mx-28">
            <span className="text-lg">
              We didn't just reinvent software development - we made it
              accessible, efficient, and affordable. The era of traditional
              coding is out.
            </span>
          </div>
          <div className="pt-5 w-full md:w-10/12 mx-3 md:mx-28">
            <span className="text-lg">
              Experience the accelerated pace of No Code development, achieving
              up to 5x faster project completion, with your first task completed
              within 72 hours.
            </span>
          </div>
        </li>
        <li className="md:flex md:mx-0">
          <div className="card-container  text-center">
            <div className="card bg-white border-black border-2 shadow-xl mx-auto md:max-w-[600px] md:w-full">
              <div className="card-body">
                <h2 className="card-title text-white bg-black py-2 px-4 rounded-xl w-full md:w-[46%] mx-auto">
                  SASS Development
                </h2>
                <p className="pt-5 md:tracking-tighter leading-relaxed text-center">
                  Develop your very own Software Business! We convert your
                  wireframe designs into robust and user-friendly applications
                  using Bubble.io that align with your project requirements.
                  Simply share your idea and project details then watch our
                  developers bring your idea to life.
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Service;
