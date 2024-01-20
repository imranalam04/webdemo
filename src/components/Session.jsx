import React from "react";

const Session = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-8">
      <span className="text-xl md:text-4xl lg:text-5xl font-bold text-center my-4">
        Connect your Companies Existing <br /> Tools
      </span>
      <div className="w-full md:w-7/12">
        <p className="text-slate-900 text-base md:text-lg">
          With the understanding that every business carries its own unique
          fingerprint, WGMI Labs crafts AI solutions that align perfectly with
          the specific needs and characteristics of your organization.
        </p>
      </div>
      <div className="mt-5">
        <button className="border-2 border-black rounded text-black hover:bg-black hover:text-white px-4 py-2">
          Book a Brainstorming Session
        </button>
      </div>
    </div>
  );
};

export default Session;
