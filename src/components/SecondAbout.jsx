// import React from "react";
import "./SecondAbout.css";
// import brain from "../assets/brain.png";

// const SecondAbout = () => {
//   return (
//     <div className="md:mx-24 mx-3">
//       <div className="services-wrapper-block p-4 border-black rounded-lg shadow sm:p-8">
//         <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-10 md:my-6">
//           <button className="libraries-usecases_text-label-2 my-6 ">
//             For businesses
//           </button>
//           <div className="md:my-6 w-full hidden:flex flex-row md:flex-row">
//             <h1 className="text-4xl w-full font-bold md:mr-60">
//               Build Custom Solutions for your Business
//             </h1>
//             <div className="my-5">
//               <p className="tracking-normal leading-relaxed text-lg">
//                 Discover a new level of streamlined processes like you've never
//                 experienced before. Using AI and No Code to reshape your
//                 business from custom tools, task completion, automation, and so
//                 much more.
//               </p>
//             </div>
//             <div className="text-lg text-semibold leading-loose py-3">
//               <div className="">⚫
//                 <span className="mx-3">Custom Dashboards, CRMs, Internal Tools</span>
//               </div>
//               <div className="">⚫
//                 <span className="mx-3">AI Trained Chatbots (Support & Lead Gen)</span>
//               </div>
//               <div>⚫
//                 <span className="mx-3">Smooth Integration with all your platforms</span>
//               </div>
//             </div>
//             <div className="w-full">
//               <img src={brain} className="mt-5" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SecondAbout;

// import React from "react";
import React from "react";
import { FaCube } from "react-icons/fa6";
import brain from "../assets/brain.png";
import HowItWorks from "./HowItWorks";

const SecondAbout = () => {
  return (
    <div className="first-about-wrapper py-72 md:py-0 md:mt-0">
      <div className="services-wrapper-block w-full p-4 rounded-lg shadow sm:p-8">
        <button className="libraries-usecases_text-label-2 my-6 text-black md:ml-[-75%]">
          FOR STARTUPS
        </button>
        <div className="md:my-6 w-full hidden:flex flex-row md:flex-row h-fit">
          <h1 className="text-4xl w-full font-bold md:mr-60 text-black">
            Ready to Build your own Software?
          </h1>
          <div className="my-5">
            <p className="tracking-normal leading-relaxed text-lg text-slate-800">
              The conventional coding process is slow, bulky, and can be a drain
              on resources. WGMI Labs taps into the capabilities of no-code
              development, enabling us to develop MVPs for a fraction of the
              time and cost.
            </p>
          </div>
          <div className="flex items-center mb-3 text-lg">
            <FaCube className="mr-2 mb-2 md:mb-0 text-slate-900" />
            <span className="mx-2 md:mx-3 text-slate-900">
              Rapid MVP Prototyping
            </span>
          </div>
          <div className="flex items-center mb-3 text-lg">
            <FaCube className="mr-2 mb-2 md:mb-0 text-slate-900" />
            <span className="mx-2 md:mx-3 text-slate-900">
              From Ideas to Production Ready Software
            </span>
          </div>
          <div className="flex items-center mb-3 text-lg">
            <FaCube className="mr-2 mb-2 md:mb-0 text-slate-900" />
            <span className="mx-2 md:mx-3 text-slate-900">
              Accelerated Development Timelines
            </span>
          </div>
        </div>
        <div className="w-full" style={{ width: "90%" }}>
          <img src={brain} className="mt-5" />
        </div>
      </div>
    </div>
  );
};

export default SecondAbout;
