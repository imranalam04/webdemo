import React from "react";
import "./Hero.css";
import Img1 from "../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <div
        className="relative isolate z-0 px-6 pt-14 lg:px-8"
        style={{
          backgroundImage: `url(${Img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div className="relative mx-auto max-w-2xl py-26 text-center">
          <h1 className="md:text-6xl font-bold tracking-tight text-gray-900 text-6xl">
            The Future of <b className="text-orange-500">Software</b>
          </h1>
          <h1 className="md:text-6xl flex justify-center font-bold tracking-tight text-gray-900 text-6xl h1-imran">
            Development
          </h1>
          <p className="mt-16 text-xl leading-8 text-gray-600">
            Unlimited development requests with a simple, all-inclusive monthly
            subscription. Simply provide us your designs, create unlimited
            development requests, and let us bring your ideas to life.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-2">
            <button
              type="button"
              className="md:text-xl rounded-xl border  px-5 py-4  md:my-5 text-sm font-semibold text-white bg-orange-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
