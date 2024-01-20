import React from "react";
import "./ServiceCard.css";

const Service = () => {
  return (
    <div className="flex flex-wrap md:flex-row flex-col">
      {/* Service Component */}
      <div className="w-full md:w-4/12 px-4 md:pr-8 md:mb-0 md:order-1 order-2 md:mx-36">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl text-black font-bold mb-4 md:mb-0">
            What We Do Best
          </h1>
          <div>
            <p className="text-lg md:text-xl md:w-9/12 mt-5 text-slate-900">
              We didn't just reinvent software development - we made it
              accessible, efficient, and affordable. The era of traditional
              coding is out.
            </p>
          </div>
          <div className="my-7">
            <p className="text-lg md:text-xl mt-5 text-slate-900 md:w-9/12">
              Experience the accelerated pace of No Code development, achieving
              up to 5x faster project completion, with your first task completed
              within 72 hours.
            </p>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Service;
