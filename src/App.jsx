import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Firstabout from "./components/Firstabout";
import SecondAbout from "./components/SecondAbout";
import HowItWorks from "./components/HowItWorks";
import Timeline from "./components/Timeline";
import Service from "./components/Service";
import CardGroup from "./components/CardGroup";
import Session from "./components/Session";
import FramerCards from "./components/FramerCards";
import Pricing from "./components/Pricing";
import Brains from "./components/Brains";
import Footer from "./components/Footer";
import Question from "./components/Question";
// import ServiceCard from "./components/ServiceCard";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="mt-20">
        <Hero />
      </div>
      <div className="mt-52">
        <About />
      </div>
      <div className="flex flex-col md:flex-row ">
        <div className="mt-5 w-full md:w-10/12">
          <Firstabout />
        </div>
        <div className="mt-5 w-full md:w-10/12">
          <SecondAbout />
        </div>
      </div>
      <div className="mt-16">
        <HowItWorks />
      </div>
      <div className="">
        <Timeline />
      </div>
      <div>
        <div className=" mt-32">
          <Service />
        </div>
        <div className="flex flex-wrap justify-center"></div>
      </div>
      <div className="mt-10 mx-4 md:mx-16 grid grid-cols-2 md:grid-cols-4 gap-2">
        <CardGroup />
        <CardGroup />
        <CardGroup />
        <CardGroup />
        <CardGroup />
        <CardGroup />
        <CardGroup />
        <CardGroup />
        <CardGroup />
        <CardGroup />
        <CardGroup />
        <CardGroup />
      </div>
      <div className="mt-16 md:mt-28">
      <Session />
      </div>
      <div  className="mt-16 md:mt-28">
      <FramerCards />
      </div>
      <div className="mt-16 md:mt-28">
      <Pricing />
      </div>
      <div className="mt-16 md:mt-28">
      <Brains />
      </div>
      <div className="">
     <Question/>
      </div>
      <div className="">
     <Footer/>
      </div>
     
    </div>
  );
};

export default App;
