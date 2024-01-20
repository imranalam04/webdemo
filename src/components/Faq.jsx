import React from "react";

const FAQ = () => {
  return (
    <div>
      <section className="py-24 ">
        <div className="container mx-auto px-4">
          <h1 className=" text-black text-4xl lg:text-5xl font-bold font-heading text-center mb-4">
          Frequently asked questions?
          </h1>
          <p className="text-center text-lg text-black mb-16">
            Here you will find the answers to the frequently asked questions.
          </p>
          <div className="flex justify-center flex-wrap gap-6 mb-10 ">
            <a
              className="h-14 inline-flex items-center justify-center  sm:w-auto text-center py-4 px-6 rounded-full bg-white border border-gray-100 shadow font-bold font-heading hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200"
              href="#"
            >
              General
            </a>
            <a
              className="h-14 inline-flex items-center justify-center  sm:w-auto text-center py-4 px-6 rounded-full bg-orange-500 border border-white shadow font-bold font-heading text-white hover:bg-black hover: focus:ring focus:ring-orange-200 transition duration-200"
              href="#"
            >
              Community
            </a>
            <a
              className="h-14 inline-flex items-center justify-center  sm:w-auto text-center py-4 px-6 rounded-full bg-orange-500 border border-white shadow font-bold font-heading text-white hover:bg-black hover: focus:ring focus:ring-orange-200 transition duration-200"
              href="#"
            >
              Pricing
            </a>
          </div>
          <div className="flex flex-col items-center">
          <div className="w-9/12 bg-white border border-orange-400 rounded-3xl mb-3 p-6 flex items-center justify-between gap-6">
            <h2 className="text-black text-lg font-semibold">
            Who's the ideal client for WGMI Labs?
            </h2>
            <a
              className="text-orange-500 hover:text-orange-100 transition duration-200 w-8 h-8"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewbox="0 0 32 32"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 2.66669C8.63586 2.66669 2.66663 8.63592 2.66663 16C2.66663 23.3641 8.63586 29.3334 16 29.3334C23.3641 29.3334 29.3333 23.3641 29.3333 16C29.3333 8.63592 23.3641 2.66669 16 2.66669ZM17.0256 11.8975C17.0256 11.6254 16.9175 11.3646 16.7252 11.1722C16.5329 10.9799 16.272 10.8718 16 10.8718C15.7279 10.8718 15.4671 10.9799 15.2747 11.1722C15.0824 11.3646 14.9743 11.6254 14.9743 11.8975V14.9744H11.8974C11.6254 14.9744 11.3645 15.0824 11.1722 15.2748C10.9798 15.4671 10.8718 15.728 10.8718 16C10.8718 16.272 10.9798 16.5329 11.1722 16.7253C11.3645 16.9176 11.6254 17.0257 11.8974 17.0257H14.9743V20.1026C14.9743 20.3746 15.0824 20.6355 15.2747 20.8278C15.4671 21.0202 15.7279 21.1282 16 21.1282C16.272 21.1282 16.5329 21.0202 16.7252 20.8278C16.9175 20.6355 17.0256 20.3746 17.0256 20.1026V17.0257H20.1025C20.3745 17.0257 20.6354 16.9176 20.8278 16.7253C21.0201 16.5329 21.1282 16.272 21.1282 16C21.1282 15.728 21.0201 15.4671 20.8278 15.2748C20.6354 15.0824 20.3745 14.9744 20.1025 14.9744H17.0256V11.8975Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
          <div className="w-9/12 bg-white border border-orange-400 rounded-3xl mb-3 p-6 flex items-center justify-between gap-6">
            <h2 className="text-black text-lg font-semibold">
            Why wouldn't I just hire a full-time developer?
            </h2>
            <a
              className="text-orange-500 hover:text-orange-100 transition duration-200 w-8 h-8"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewbox="0 0 32 32"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 2.66669C8.63586 2.66669 2.66663 8.63592 2.66663 16C2.66663 23.3641 8.63586 29.3334 16 29.3334C23.3641 29.3334 29.3333 23.3641 29.3333 16C29.3333 8.63592 23.3641 2.66669 16 2.66669ZM17.0256 11.8975C17.0256 11.6254 16.9175 11.3646 16.7252 11.1722C16.5329 10.9799 16.272 10.8718 16 10.8718C15.7279 10.8718 15.4671 10.9799 15.2747 11.1722C15.0824 11.3646 14.9743 11.6254 14.9743 11.8975V14.9744H11.8974C11.6254 14.9744 11.3645 15.0824 11.1722 15.2748C10.9798 15.4671 10.8718 15.728 10.8718 16C10.8718 16.272 10.9798 16.5329 11.1722 16.7253C11.3645 16.9176 11.6254 17.0257 11.8974 17.0257H14.9743V20.1026C14.9743 20.3746 15.0824 20.6355 15.2747 20.8278C15.4671 21.0202 15.7279 21.1282 16 21.1282C16.272 21.1282 16.5329 21.0202 16.7252 20.8278C16.9175 20.6355 17.0256 20.3746 17.0256 20.1026V17.0257H20.1025C20.3745 17.0257 20.6354 16.9176 20.8278 16.7253C21.0201 16.5329 21.1282 16.272 21.1282 16C21.1282 15.728 21.0201 15.4671 20.8278 15.2748C20.6354 15.0824 20.3745 14.9744 20.1025 14.9744H17.0256V11.8975Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
          <div className="w-9/12  bg-white border border-orange-400 rounded-3xl mb-3 p-6 flex items-center justify-between gap-6">
            <h2 className="text-black text-lg font-semibold">
            Is there a limit to how many tasks or projects I can have?

            </h2>
            <a
              className="text-orange-500 hover:text-orange-100 transition duration-200 w-8 h-8"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewbox="0 0 32 32"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 2.66669C8.63586 2.66669 2.66663 8.63592 2.66663 16C2.66663 23.3641 8.63586 29.3334 16 29.3334C23.3641 29.3334 29.3333 23.3641 29.3333 16C29.3333 8.63592 23.3641 2.66669 16 2.66669ZM17.0256 11.8975C17.0256 11.6254 16.9175 11.3646 16.7252 11.1722C16.5329 10.9799 16.272 10.8718 16 10.8718C15.7279 10.8718 15.4671 10.9799 15.2747 11.1722C15.0824 11.3646 14.9743 11.6254 14.9743 11.8975V14.9744H11.8974C11.6254 14.9744 11.3645 15.0824 11.1722 15.2748C10.9798 15.4671 10.8718 15.728 10.8718 16C10.8718 16.272 10.9798 16.5329 11.1722 16.7253C11.3645 16.9176 11.6254 17.0257 11.8974 17.0257H14.9743V20.1026C14.9743 20.3746 15.0824 20.6355 15.2747 20.8278C15.4671 21.0202 15.7279 21.1282 16 21.1282C16.272 21.1282 16.5329 21.0202 16.7252 20.8278C16.9175 20.6355 17.0256 20.3746 17.0256 20.1026V17.0257H20.1025C20.3745 17.0257 20.6354 16.9176 20.8278 16.7253C21.0201 16.5329 21.1282 16.272 21.1282 16C21.1282 15.728 21.0201 15.4671 20.8278 15.2748C20.6354 15.0824 20.3745 14.9744 20.1025 14.9744H17.0256V11.8975Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
          <div className="w-9/12 bg-white border border-orange-400 rounded-3xl mb-3 p-6 flex items-center justify-between gap-6">
            <h2 className="text-black text-lg font-semibold">
            How long does it take to complete a development task?
            </h2>
            <a
              className="text-orange-500 hover:text-orange-100 transition duration-200 w-8 h-8"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewbox="0 0 32 32"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 2.66669C8.63586 2.66669 2.66663 8.63592 2.66663 16C2.66663 23.3641 8.63586 29.3334 16 29.3334C23.3641 29.3334 29.3333 23.3641 29.3333 16C29.3333 8.63592 23.3641 2.66669 16 2.66669ZM17.0256 11.8975C17.0256 11.6254 16.9175 11.3646 16.7252 11.1722C16.5329 10.9799 16.272 10.8718 16 10.8718C15.7279 10.8718 15.4671 10.9799 15.2747 11.1722C15.0824 11.3646 14.9743 11.6254 14.9743 11.8975V14.9744H11.8974C11.6254 14.9744 11.3645 15.0824 11.1722 15.2748C10.9798 15.4671 10.8718 15.728 10.8718 16C10.8718 16.272 10.9798 16.5329 11.1722 16.7253C11.3645 16.9176 11.6254 17.0257 11.8974 17.0257H14.9743V20.1026C14.9743 20.3746 15.0824 20.6355 15.2747 20.8278C15.4671 21.0202 15.7279 21.1282 16 21.1282C16.272 21.1282 16.5329 21.0202 16.7252 20.8278C16.9175 20.6355 17.0256 20.3746 17.0256 20.1026V17.0257H20.1025C20.3745 17.0257 20.6354 16.9176 20.8278 16.7253C21.0201 16.5329 21.1282 16.272 21.1282 16C21.1282 15.728 21.0201 15.4671 20.8278 15.2748C20.6354 15.0824 20.3745 14.9744 20.1025 14.9744H17.0256V11.8975Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            
          </div>
          <div className="w-9/12 bg-white border border-orange-400 rounded-3xl p-6 flex items-center justify-between gap-6">
            <h2 className="text-black text-lg font-semibold">
            What if I'm not satisfied with the software solution?
            </h2>
            <a
              className="text-orange-500 hover:text-orange-100 transition duration-200 w-8 h-8"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewbox="0 0 32 32"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 2.66669C8.63586 2.66669 2.66663 8.63592 2.66663 16C2.66663 23.3641 8.63586 29.3334 16 29.3334C23.3641 29.3334 29.3333 23.3641 29.3333 16C29.3333 8.63592 23.3641 2.66669 16 2.66669ZM17.0256 11.8975C17.0256 11.6254 16.9175 11.3646 16.7252 11.1722C16.5329 10.9799 16.272 10.8718 16 10.8718C15.7279 10.8718 15.4671 10.9799 15.2747 11.1722C15.0824 11.3646 14.9743 11.6254 14.9743 11.8975V14.9744H11.8974C11.6254 14.9744 11.3645 15.0824 11.1722 15.2748C10.9798 15.4671 10.8718 15.728 10.8718 16C10.8718 16.272 10.9798 16.5329 11.1722 16.7253C11.3645 16.9176 11.6254 17.0257 11.8974 17.0257H14.9743V20.1026C14.9743 20.3746 15.0824 20.6355 15.2747 20.8278C15.4671 21.0202 15.7279 21.1282 16 21.1282C16.272 21.1282 16.5329 21.0202 16.7252 20.8278C16.9175 20.6355 17.0256 20.3746 17.0256 20.1026V17.0257H20.1025C20.3745 17.0257 20.6354 16.9176 20.8278 16.7253C21.0201 16.5329 21.1282 16.272 21.1282 16C21.1282 15.728 21.0201 15.4671 20.8278 15.2748C20.6354 15.0824 20.3745 14.9744 20.1025 14.9744H17.0256V11.8975Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;