import React from "react";
import "./CardGroup.css";

const CardGroup = ({ heading, para, img }) => {
  return (
    <div className="w-full mx-auto">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-900"></div>
        <div className="layout302_item relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 w-full h-[140px]">
          <svg
            className="w-8 h-8 text-purple-600"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
            ></path>
          </svg>
          <div className="space-y-2 flex-grow">
            <h1 className="text-slate-800 text-xl font-semibold">{heading}</h1>
            <p className="text-slate-800 leading-5">{para}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
