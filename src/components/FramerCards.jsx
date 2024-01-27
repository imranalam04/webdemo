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
      <div className="grid grid-cols-1 mx-20 md:grid-cols-3 gap-4">
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

     
    </div>
  );
};

export default FramerCards;
