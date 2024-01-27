import React, { useState } from "react";
import "./Navbar.css";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  return (
    <>
      <div className="container nav-container">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
          <div className="flex h-16 items-center justify-between ">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="/">
                <img
                  src="https://assets-global.website-files.com/647bce5ff98ec4d3b577f27b/647fd9745a3d834a49879e6d_WGMI_Labs_Logo-08.png"
                  loading="lazy"
                  width="Auto"
                  sizes="119.734375px"
                  alt=""
                  srcSet="https://assets-global.website-files.com/647bce5ff98ec4d3b577f27b/647fd9745a3d834a49879e6d_WGMI_Labs_Logo-08-p-500.png 500w, https://assets-global.website-files.com/647bce5ff98ec4d3b577f27b/647fd9745a3d834a49879e6d_WGMI_Labs_Logo-08-p-800.png 800w, https://assets-global.website-files.com/647bce5ff98ec4d3b577f27b/647fd9745a3d834a49879e6d_WGMI_Labs_Logo-08-p-1080.png 1080w, https://assets-global.website-files.com/647bce5ff98ec4d3b577f27b/647fd9745a3d834a49879e6d_WGMI_Labs_Logo-08-p-1600.png 1600w, https://assets-global.website-files.com/647bce5ff98ec4d3b577f27b/647fd9745a3d834a49879e6d_WGMI_Labs_Logo-08-p-2000.png 2000w, https://assets-global.website-files.com/647bce5ff98ec4d3b577f27b/647fd9745a3d834a49879e6d_WGMI_Labs_Logo-08-p-2600.png 2600w, https://assets-global.website-files.com/647bce5ff98ec4d3b577f27b/647fd9745a3d834a49879e6d_WGMI_Labs_Logo-08-p-3200.png 3200w, https://assets-global.website-files.com/647bce5ff98ec4d3b577f27b/647fd9745a3d834a49879e6d_WGMI_Labs_Logo-08.png 3334w"
                  className="logo-image"
                />
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Site Nav" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li className="text-lg">
                    <a
                      className="text-black font-semibold  transition hover:text-orange-500"
                      href="/"
                    >
                      About
                    </a>
                  </li>

                  <li className="text-lg">
                    <a
                      className="text-black font-semibold transition hover:text-orange-500"
                      href="/"
                    >
                      How It Works
                    </a>
                  </li>

                  <li className="text-lg">
                    <a
                      className="text-black font-semibold  transition hover:text-orange-500"
                      href="/"
                    >
                      Services
                    </a>
                  </li>

                  <li className="text-lg">
                    <a
                      className="text-black font-semibold transition hover:text-orange-500"
                      href="/"
                    >
                      Pricing
                    </a>
                  </li>

                  <li className="text-lg">
                    <a
                      className="text-black font-semibold transition hover:text-orange-500"
                      href="/"
                    >
                      FAQ
                    </a>
                  </li>

                  <li className="text-lg">
                    <a
                      className="text-black font-semibold transition hover:text-orange-500"
                      href="/"
                    >
                      Login
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 "
                  onClick={toggleNavbar}
                >
                  {isClick ? (
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isClick && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div class="w-full mt-2 md:mt-auto p-4 text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            
              <ul class="list-none font-semibold text-lg  ">
              <li class="mb-2">
                  <a href="#">About</a>
                </li>
                <li class="mb-2">
                  <a href="#">How It Works</a>
                </li>
                <li class="mb-2">
                  <a href="#">Services</a>
                </li>
                <li class="mb-2">
                  <a href="#">Pricing</a>
                </li>
                <li class="mb-2">
                  <a href="#">FAQ</a>
                </li>
                <li class="mb-2">
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
