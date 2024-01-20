import React from 'react';

const ServiceCard = () => {
  return (
    <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
      <div className="white-background-card max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl">
        <div className="p-5">
          <span className="text-lg md:text-xl bg-black text-white font-semibold service-title-holder">
            SAAS Development
          </span>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm md:text-base">
            Develop your very own Software Business! We convert your wireframe
            designs into robust and user-friendly applications using Bubble.io
            that align with your project requirements. Simply share your idea
            and project details then watch our developers bring your idea to
            life
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
