import Chosse from "../assets/images/chosse.jpg";
import { useState } from "react";

const whychosse = () => {
  // const QNA = () => {
  //   const fAQdata = [
  //     {
  //       question: "Data-Driven Approach",
  //       answer:
  //         "We leverage data and insights to make informed decisions that lead to more effective and efficient solutions.",
  //     },

  //     {
  //       question: "Data-Driven Approach",
  //       answer:
  //         "We leverage data and insights to make informed decisions that lead to more effective and efficient solutions.",
  //     },

  //     {
  //       question: "Data-Driven Approach",
  //       answer:
  //         "We leverage data and insights to make informed decisions that lead to more effective and efficient solutions.",
  //     },
  //   ];
  // };
  // const [Open, setOpen] = useState(false);
  return (
    <div class="bg-black ">
      <div class="lg:max-w-[1140px] max-w-fit pt-[30px] px-3 lg:pt-[161px] justify-between flex-col lg:flex-row items-center flex m-auto">
        <div>
          <div class="flex  items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 128 128"
            >
              <path
                fill="#9fee00ff"
                d="m89.31 71.03l-20.06-6.71c7.76-2.35 19.51-5.5 21.2-5.98c2.68-.76 4.14-1.8 3.51-4.51c-.5-2.17-3.16-8.27-5.57-11.4c-2.01-2.6-5.34.61-5.34.61l-16.3 12.84c1.28-5.57 4.38-18.66 5-20.64c.81-2.56-.4-4.86-3.24-5.4c-2.19-.42-8-.79-11.87 0c-3.98.81-2.33 5.8-2.33 5.8l4.78 20.23l-15.32-12.41s-4.22-4.2-6.75-1.02c-2.46 3.09-4.78 8.44-5.4 10.57c-.81 2.77.81 4.59 3.33 5.34c2.28.68 17.92 5.06 21.55 5.98L36.43 70.6s-5.58 1.39-4.26 5.23c1.28 3.74 4.55 8.56 6.01 10.24c1.9 2.17 4.49 2.06 6.29.06c1.27-1.41 9.1-9.31 13.61-13.58c-1.39 6.03-3.87 17.15-4.44 18.97c-.81 2.56.4 4.86 3.24 5.4c2.19.42 8 .79 11.87 0c3.98-.81 2.37-5.62 2.37-5.62l-4.38-18.74C71.09 76.67 80.15 85 81.49 86.49c1.8 2 4.39 2.11 6.29-.06c1.47-1.67 4.73-6.5 6.01-10.24c1.33-3.86-4.48-5.16-4.48-5.16"
              />
            </svg>
            <p class="text-white lg:text-[24px] lg:font-bold">Why chosse</p>
          </div>
          <p class="text-[25px] text-white max-w-[609px] lg:text-[50px]">
            Expertise for <span class="text-lime">your digital</span> growth
            journey
          </p>
        </div>
        <div class="max-w-[441px]">
          <p class="text-white">
            Our dedicated team is committed to understanding your unique needs,
            ensuring that we provide innovative strategies that drive results.
            With a focus on quality and integrity.
          </p>
        </div>
      </div>
      <div class="lg:flex-row flex flex-col-reverse px-3 gap-3 mt-4  lg:mt-[31px] max-w-[1140px] items-center justify-between m-auto">
        <div class="max-w-[581px] flex-col flex gap-[20px]">
          <article Class="border-1 border-white/20 rounded-xl md:rounded-3xl p-2 md:p-[28px] bg-[#191B17] text-white">
            <p class="font-bold">Data-Driven Approach</p>
            <p>
              We leverage data and insights to make informed decisions that lead
              to more effective and efficient solutions.
            </p>
          </article>
          <article Class="border-1 border-white/20 rounded-xl md:rounded-3xl p-2 md:p-[28px] bg-[#191B17] text-white">
            <p class="font-bold">Competitive Pricing</p>
            <p>
              We offer our top-quality services at competitive prices, providing
              you with great value for your investment.
            </p>
          </article>
          <article Class="border-1 border-white/20 rounded-xl md:rounded-3xl p-2 md:p-[28px] bg-[#191B17] text-white">
            <p class="font-bold">Ethical Business Practices</p>
            <p>
              We maintain the highest level of professionalism and ethical
              standards professionalism in all our business dealings.
            </p>
          </article>
        </div>

        <div class="lg:max-w-[485px] max-w-[600px]  rounded-xl lg:rounded-3xl overflow-hidden">
          <img
            class=" object-cover w-full   h-[300px] lg:h-[512px]"
            src={Chosse}
            alt="person with laptop"
          />
        </div>
      </div>
    </div>
  );
};

export default whychosse;
