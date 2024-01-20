import React from "react";
import "./Cards.css";

import icon from "../assets/tick.png";

const Cards = (props) => {
  return (
    <div className="benefits-wrapper-2">
      <div className="max-w-sm p-4 md:p-6 text-center">
        <div className="flex flex-row justify-center mb-4">
          <img src={icon} alt="Tick Icon" className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <div className="">
          <a href="#">
            <h5 className="mb-2 text-lg md:text-xl lg:text-2xl flex flex-col font-semibold tracking-tight text-black">
              {props.heading}
            </h5>
          </a>
        </div>
        <p className="mb-3 text-sm md:text-base font-normal text-gray-500 dark:text-gray-400">
          {props.para}
        </p>
      </div>
    </div>
  );
};

export default Cards;
