import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Firstabout from "./components/Firstabout";
import SecondAbout from "./components/SecondAbout";
import HowItWorks from "./components/HowItWorks";
import Timeline from "./components/Timeline";
import Service from "./components/Service";
import Session from "./components/Session";
import FramerCards from "./components/FramerCards";
import Pricing from "./components/Pricing";
import Brains from "./components/Brains";
import Footer from "./components/Footer";
import Question from "./components/Question";
import About from "./components/About";
import GridCard from "./components/GridCard";
// import ServiceCard from "./components/ServiceCard";
import "./App.css";
import DevelopmentTimeLine from "./components/DevelopmentTimeLine";

const App = () => {
  return (
    <div>
      <div className="py-5">
        <Navbar />
      </div>
      <div className="mt-20">
        <Hero />
      </div>
      <div className="mt-52">
        <About />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-2 md:mx-24">
        <Firstabout />
        <SecondAbout />
      </div>
      <div className="min-h-screen flex flex-col py-72 md:py-0">
      <div className="md:mt-96 sm:mt-0 flex-shrink-0 h-[120] sm:h-auto mt-72">
        <HowItWorks />
      </div>
      <div className="flex-shrink-0">
        <Timeline />
      </div>
    </div>
      <div>
        <div className="md:my-32">
          <Service />
        </div>
        <div className="flex flex-wrap justify-center"></div>
      </div>
      <div className="justify-center">
        <GridCard />
      </div>
      <div className="mt-16 md:mt-10">
        <Session />
      </div>
      <div className="mt-16 md:mt-28">
        <FramerCards />
      </div>
      <div className="mt-16 md:mt-16">
        <DevelopmentTimeLine />
      </div>
      <div className="mt-16 md:mt-28">
        <Pricing />
      </div>
      <div className="mt-16 md:mt-28">
        <Brains />
      </div>
      <div className="">
        <Question />
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default App;
