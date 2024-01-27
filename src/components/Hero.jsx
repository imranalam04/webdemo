import React from "react";
import "./Hero.css";
import Img1 from "../assets/hero.png";

const Hero = () => {
  return (
    <div>
     
        <section className="bg-center bg-no-repeat bg-cover  bg-blend-multiply"
        style={{ backgroundImage: `url('${Img1}')` }}>
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-8xl ">
              The Future of Software
              <br />
              <span> Development</span>
            </h1>
            <p className=" py-5 mb-8 text-lg font-normal text-slate-900 lg:text-xl sm:px-16 lg:px-48 ">
              Unlimited development requests with a simple, all-inclusive
              monthly subscription. Simply provide us your designs, create
              unlimited development requests, and let us bring your ideas to
              life.
            </p>
            <div className="">
            <span className="bg-orange-500 text-white py-3 px-7 rounded-xl font-semibold">Get Started Now</span>
            </div>
          </div>
        </section>
    
    </div>
  );
};

export default Hero;
