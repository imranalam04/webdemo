import React from "react";
import { motion } from "framer-motion";
import salesforce from "../assets/salesforce.png";
import chatgpt from "../assets/chatgpt.png";
import hubspot from "../assets/hubspot.png";
import make from "../assets/make.png";
import sheet from "../assets/sheet.png";
import "./FramerCards.css";

const FramerCards = () => {
  const variants = {
    hover: {
      rotateY: [0, 180, 0], // Rotate from 0 to 180 and back to 0
    },
  };

  return (
    <div className="md:ml-36">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { src: salesforce, alt: "Salesforce" },
          { src: chatgpt, alt: "ChatGPT" },
          { src: hubspot, alt: "HubSpot" },
          { src: make, alt: "Make" },
          { src: sheet, alt: "Sheet" },
        ].map((image, index) => (
          <motion.div
            key={index}
            whileHover="hover"
            variants={variants}
            className="md:w-8/12"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full rounded-lg border-4 border-black"
            />
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-8 md:mt-36">
        <span className="text-3xl md:text-5xl text-slate-900 font-bold">
          Development Timeline
        </span>
        <div className="mt-3 text-gray-700 text-lg text-center w-8/12">
          <p>
            Building great stuff isn't just going through the motions—it's about
            sticking to a brilliant game plan.
            <br /> Explore our stages of product development.
          </p>
        </div>
        <div className="w-11/12 tabs-menu-2 mt-6 md:mt-10">
          <ul className="flex flex-wrap text-sm font-medium text-center">
            <li className="me-2 mb-2 md:mb-0">
              <a
                href="#"
                aria-current="page"
                className=" p-3 md:p-4 text-blue-600  rounded-t-lg active  dark:text-blue-500"
              >
                🔔 #1 Discovery
              </a>
            </li>
            <li className="me-2 mb-2 md:mb-0">
              <a
                href="#"
                className=" p-3 md:p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              >
                ✅ #2 Design
              </a>
            </li>
            <li class="me-2 mb-2 md:mb-0">
              <a
                href="#"
                className=" p-3 md:p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              >
                😁 #3 Development
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FramerCards;
