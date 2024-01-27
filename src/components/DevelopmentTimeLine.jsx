import React from "react";

const DevelopmentTimeLine = () => {
  return (
    <div>
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
        <div className=" tabs-menu-2 mt-6 md:mt-10 mx-1">
          <ul className="flex flex-wrap text-sm font-medium justify-center">
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
              <a href="#" className=" p-3 md:p-4 rounded-t-lg text-black">
                ✅ #2 Design
              </a>
            </li>
            <li class="me-2 mb-2 md:mb-0">
              <a href="#" className=" p-3 md:p-4 rounded-t-lg text-black">
                😁 #3 Development
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentTimeLine;
