import React from "react";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.jpg";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';



const Slider = () => {
  return (
    <div className="flex border-black flex-col flex-wrap my-5 md:my-10 justify-center text-center">
      <div>
      <ReactCompareSlider 
      itemOne={<ReactCompareSliderImage src={slider1} srcSet={slider1} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={slider2} srcSet={slider2} alt="Image two" />}
    />
      </div>
    </div>
  );
};

export default Slider;
