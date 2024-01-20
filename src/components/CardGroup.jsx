import React from "react";
import './CardGroup.css'

const CardGroup = () => {
  return (
    <div className="flex flex-col items-center">
      <a
        href="#"
        className="mx-10 layout302_item block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
         SASS Development
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Develop your software application MVP faster than ever. Speed is your friend.
        </p>
      </a>
    </div>
  );
};

export default CardGroup;
