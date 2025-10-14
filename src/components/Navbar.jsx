import Slidernav from "./Slidernav";
import { useState } from "react";

const Navbar = () => {
  const [isSidebarShow, setSidebarShow] = useState(false);
  return (
    <>
      {isSidebarShow ? <Slidernav setSidebarShow={setSidebarShow} /> : null}

      <div class="flex   py-3 md:py-[23px] px-3 justify-between max-w-[1140px] m-auto items-center">
        <div class="flex   justify items-center gap-[50px]">
          <button onClick={() => setSidebarShow(true)}>
            <svg
              class="lg:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 16 16"
            >
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M0 3.75A.75.75 0 0 1 .75 3h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 3.75M0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8m.75 3.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <img
            class="max-w-[140px] md:max-w-[170px]"
            src="./src/assets/images/digitaal-logo.png"
            alt="logo"
          />
        </div>
        <ul class="flex gap-[40px] text-white lg:flex hidden">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#contact">Contact us</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#pages">Pages</a>
          </li>
        </ul>
        <div class="flex md:flex  hidden">
          <button class="bg-[#515151] px-4 text-[14px] sm:text-[16px] font-bold lg:py-[16px] md:px-[32px] text-white rounded-4xl">
            Get started
          </button>
          <div class="bg-lime lg:w-[55px]   linear   grid place-items-center rounded-full">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.6276 14.7276L12.0207 23.3345L10.6065 21.9203L19.2134 13.3134L11.6276 13.3134L11.6276 11.3137H22.6273V22.3135L20.6276 22.3135V14.7276Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
