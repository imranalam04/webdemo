import React from "react";
import pic1 from "../assets/pic.jpg";
import pic2 from "../assets/pic2.jpg";
import "./Brains.css";

const Brains = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-6xl font-bold mt-8">The Brains</h1>
        <div className="mt-5">
          <p className="text-lg font-sans text-center">
            Meet the founders behind WGMI Labs revolutionary development agency
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 md:mx-8 lg:mx-36 mx-3">
        <div className="max-w-sm md:max-w-full team6_item shadow">
          <a href="#" className="">
            <img className="rounded-t-lg w-full" src={pic1} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Brett Malinowski
              </h5>
            </a>
            <div>
              <span className="text-lg">CEO</span>
            </div>
            <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
              Educating Millions on Ai, Web3 and Future Technologies | Co-Founder
              of WGMI Academy, WGMI Labs, and WGMI Media
            </p>
          </div>
        </div>
        <div className="max-w-sm md:max-w-full team6_item shadow">
        <a href="#" className="">
          <img className="rounded-t-lg w-full" src={pic1} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Brett Malinowski
            </h5>
          </a>
          <div>
            <span className="text-lg">CEO</span>
          </div>
          <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
            Educating Millions on Ai, Web3 and Future Technologies | Co-Founder
            of WGMI Academy, WGMI Labs, and WGMI Media
          </p>
        </div>
      </div>
        
      </div>
    </>
  );
};

export default Brains;
