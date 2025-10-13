
const Hero = () => {
  return (
    <section class="pb-[20px] px-3 lg:pb-[134px]">
      <div class="max-w-[1093px] m-auto pt-[30px] lg:pt-[141px] px-4 md:mb-[28px]">
        <h1 class="text-[30px] sm:text-[45px]  leading-[119%] lg:text-[96px] font-bold text-white  ">
          Innovative solutions for{" "}
          <span class="text-[#BFF747]">Digital World</span>{" "}
        </h1>
      </div>
      <div class="flex px-3 flex-col md:flex-row gap-[20px] md:gap-[106px] items-center max-w-[893px] m-auto">
        <div class="relative mt-[30px] max-w-fit">
          <img
            class="max-w-[103px]"
            src="./src/assets/images/circle-text.png"
            alt="circle text"
          />
          <div class="w-[58px] h-[58px] rounded-full grid place-items-center absolute top-[20px] left-[23px] bg-[#BFF747]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 12 12"
            >
              <path
                fill="#000"
                d="M10.541 6.786a.903.903 0 0 0 0-1.572L3.372 1.122C2.762.774 2 1.211 2 1.91v8.182c0 .698.762 1.135 1.372.787z"
              />
            </svg>
          </div>
        </div>
        <div class="max-w-[685px] ">
          <div>
            <p class="text-[16px] md:text-[20px] lg:text-[24px] text-white">
              At our Creative Digital Agency, we bring your ideas to life by
              crafting engaging, impactful digital experiences that captivate
              audiences and drive results.{" "}
            </p>
          </div>
          <div class="flex mt-[20px]">
            <button class="bg-[#515151] px-4 text-[14px] sm:text-[16px] md:py-[16px] md:px-[32px] text-white rounded-4xl">
              Get started
            </button>
            <div class="bg-[#BFF747] md:w-[55px] grid place-items-center rounded-full">
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
      </div>
    </section>
  );
}

export default Hero