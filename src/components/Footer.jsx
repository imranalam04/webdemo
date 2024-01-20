import React from "react";
import footerlogo from "../assets/footerlogo.png";

const Footer = () => {
  return (
    <div>
      <footer aria-label="Site Footer">
        <div className="  ">
          <div className="flex flex-col items-center gap-4 bg-white p-6 shadow-lg sm:flex-row sm:justify-between">
            <div className="md:mx-8 lg:mx-32">
              <img
                src={footerlogo}
                className="w-32"
              />
            </div>

            <a
              className="inline-flex items-center rounded-xl h-12 mx-4 sm:mx-8 lg:mx-32 border border-white bg-orange-500 px-8 py-3 text-white hover:bg-transparent hover:text-orange-600 focus:outline-none focus:ring active:bg-white/90"
              href="/"
            >
              <span className="text-sm font-medium text-center">
                {" "}
                Let's Get Started{" "}
              </span>

              <svg
                className="ml-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
          <div className="bg-black  flex flex-col flex-wrap">
            <div className="md:m-8 lg:m-24 mx-16 py-5">
              <span className="text-white text-2xl md:text-3xl ">
                We're Gonna Make It
              </span>
              <p className="text-slate-200 py-5 text-lg">
                WGMI Labs is simply the Development <br />
                Agency of the Future
              </p>
              <div>
                <hr className=" border-slate-700 md:my-10 w-full " />
                <div className="mt-10">
                  <span className="text-slate-300 font-semibold">
                    © Copyright 2022 Black Box Ventures LLC
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
