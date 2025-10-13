import { act, useState } from "react";

const Howitwork = () => {
  const [activeTab, setActiveTab] = useState("all");
  const workTabs = [
    {
      label: "All",
      id: 1,
      slug: "all",
      data: [
        {
          title: "Dynamic Digital Campaign",
          desc: "lorem",
          img: "",
          tag: "Digital Marketing",
        },
        {
          title: "Dynamic Digital Campaign",
          desc: "lorem",
          img: "",
          tag: "Digital Marketing",
        },
        {
          title: "Dynamic Digital Campaign",
          desc: "lorem",
          img: "",
          tag: "Digital Marketing",
        },
      ],
    },
    {
      label: "Branding & Identity",
      id: 2,
      slug: "branding_identity",
      data: [
        {
          title: "Dynamic Digital Campaign",
          desc: "lorem",
          img: "",
          tag: "Digital Marketing",
        },
        {
          title: "Dynamic Digital Campaign",
          desc: "lorem",
          img: "",
          tag: "Digital Marketing",
        },
        {
          title: "Dynamic Digital Campaign",
          desc: "lorem",
          img: "",
          tag: "Digital Marketing",
        },
      ],
    },
    {
      label: "Digital Marketing",
      id: 3,
      slug: "digital_marketing",
      data: [
        {
          title: "Dynamic Digital Campaign",
          desc: "lorem",
          img: "",
          tag: "Digital Marketing",
        },
        {
          title: "Dynamic Digital Campaign",
          desc: "lorem",
          img: "",
          tag: "Digital Marketing",
        },
        {
          title: "Dynamic Digital Campaign",
          desc: "lorem",
          img: "",
          tag: "Digital Marketing",
        },
      ],
    },
    {
      label: "SEO & Analytics",
      id: 4,
      slug: "seo_analytics",
      data: [
        {
          title: "Dynamic Digital Campaign",
          desc: "lorem",
          img: "",
          tag: "Digital Marketing",
        },
        {
          title: "Dynamic Digital Campaign",
          desc: "lorem",
          img: "",
          tag: "Digital Marketing",
        },
        {
          title: "Dynamic Digital Campaign",
          desc: "lorem",
          img: "",
          tag: "Digital Marketing",
        },
      ],
    },
  ];

  const alltabs = [
    {
      title: "Dynamic Digital Campaign",
      desc: "lorem",
      img: "",
      tag: "Digital Marketing",
      slug: "branding_identity",
    },

    {
      title: "Dynamic Digital Campaign",
      desc: "lorem",
      img: "",
      slug: "seo_analytics",
      tag: "Digital Marketing",
    },

    {
      title: "Dynamic Digital Campaign",
      desc: "lorem",
      img: "",
      slug: "seo_analytics",
      tag: "Digital Marketing",
    },
    {
      title: "Dynamic Digital Campaign",
      desc: "lorem",
      img: "",
      tag: "Digital Marketing",
      slug: "branding_identity",
    },
    {
      title: "Dynamic Digital Campaign",
      desc: "lorem",
      img: "",
      tag: "Digital Marketing",
      slug: "digital_marketing",
    },
    {
      title: "Dynamic Digital Campaign",
      desc: "lorem",
      img: "",
      tag: "Digital Marketing",
      slug: "digital_marketing",
    },
  ];
  return (
    <>
      <section class="bg-black">
        <div class="lg:max-w-[1140px] max-w-fit lg:pt-[30px] px-3 lg:pt-[161px] justify-between flex-col lg:flex-row items-center flex m-auto">
          <div>
            <div class="flex  items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 128 128"
              >
                <path
                  fill="#9fee00ff"
                  d="m89.31 71.03l-20.06-6.71c7.76-2.35 19.51-5.5 21.2-5.98c2.68-.76 4.14-1.8 3.51-4.51c-.5-2.17-3.16-8.27-5.57-11.4c-2.01-2.6-5.34.61-5.34.61l-16.3 12.84c1.28-5.57 4.38-18.66 5-20.64c.81-2.56-.4-4.86-3.24-5.4c-2.19-.42-8-.79-11.87 0c-3.98.81-2.33 5.8-2.33 5.8l4.78 20.23l-15.32-12.41s-4.22-4.2-6.75-1.02c-2.46 3.09-4.78 8.44-5.4 10.57c-.81 2.77.81 4.59 3.33 5.34c2.28.68 17.92 5.06 21.55 5.98L36.43 70.6s-5.58 1.39-4.26 5.23c1.28 3.74 4.55 8.56 6.01 10.24c1.9 2.17 4.49 2.06 6.29.06c1.27-1.41 9.1-9.31 13.61-13.58c-1.39 6.03-3.87 17.15-4.44 18.97c-.81 2.56.4 4.86 3.24 5.4c2.19.42 8 .79 11.87 0c3.98-.81 2.37-5.62 2.37-5.62l-4.38-18.74C71.09 76.67 80.15 85 81.49 86.49c1.8 2 4.39 2.11 6.29-.06c1.47-1.67 4.73-6.5 6.01-10.24c1.33-3.86-4.48-5.16-4.48-5.16"
                />
              </svg>
              <p class="text-white lg:text-[24px] lg:font-bold">HOW IT WORK</p>
            </div>
            <p class="text-[25px] text-white max-w-[636px] leading-[119%] lg:text-[50px]">
              Insights on digital <span class="text-lime">innovation</span> and
              growth
            </p>
          </div>
          <div class="max-w-[414px]">
            <p class="text-white">
              Our proven process combines research, strategy, and creativity to
              deliver tailored solutions that drive measurable results.
            </p>
          </div>
        </div>
        <div class="max-w-[843px]  flex overflow-x-auto px-2 py-[40px] gap-[15px] lg:gap-[35px] text-white m-auto">
          {workTabs.map((obj, i) => {
            return (
              <button
                key={i}
                onClick={() => setActiveTab(obj.slug)}
                className={`${
                  activeTab == obj.slug
                    ? "bg-lime-600 text-black"
                    : "bg-black text-white"
                } md:px-[32px]  min-w-[80px] hover:bg-lime-600  transition ease-in-out duration-300 py-[11px] border-1 border-white/20 rounded-[16px]`}
              >
                {obj.label}
              </button>
            );
          })}
        </div>
        <div class="flex max-w-[1140px] justify-start lg:justify-center m-auto px-4 overflow-x-auto  gap-[24px]">
          {alltabs.map((obj, i) => {
            if (activeTab == obj.slug || activeTab == "all") {
              return (
                <div class="max-w-[334px] min-w-[280px] w-full flex items-end justify-center  relative   h-[341px] bg-center bg-cover bg-[url(./src/assets/images/howitwork-img1.png)] rounded-3xl">
                  <div class="w-full h-full absolute top-0 z-4 bg-gradient-to-t from-black to-transparent h-48 w-full;]"></div>
                  <p className=" z-5 text-white mb-[20px] font-bold md:text-[20px]">
                    Dynamic Digital Campaign
                  </p>
                </div>
              );
            }
          })}
        </div>
      </section>
    </>
  );
};

export default Howitwork;
