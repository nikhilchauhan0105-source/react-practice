import sphare from "../assets/images/ball-img.png";
import grid from "../assets/images/footer-bg.png"

const Collaborate = () => {
  return (
    <>
      <section className="bg-black  py-[40px] relative">
        <div className="max-w-[800px] xl:max-w-[1140px] m-auto text-center relative font-bold text-white from-lime from-5% to-black ">
          <p className="text-[50px] md:text-[80px] xl:text-[200px] leading-[120%] relative z-5">
            LET’S WORK TOGETHER
          </p>
          <div className="max-w-[141px] hidden bg-lime xl:flex flex-col absolute  top-[151px] animate-bounce z-6 left-[556px] items-center gap-[20px] text-black py-[37px] px-[28px] rounded-full">
            <svg className="w-[8px] lg:w-[20px]"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0332 5.87076L2.6673 19.2366L0.47113 17.0405L13.837 3.67459L2.05676 3.67459L2.05676 0.569214H19.1385V17.651L16.0332 17.651L16.0332 5.87076Z"
                fill="black"
              />
            </svg>
            <p className="text-[8px] lg:text-base font-bold">Get In Touch</p>
          </div>
          <div className="w-[141px] h-[141px] rounded-full blur-[100px] absolute z-1 top-[50%] left-[50%] -translate-[50%]  bg-lime "></div>
          <img
            className="z-1 top-[50%] left-[50%] absolute -translate-[50%]"
            src={grid}
            alt="grid"
          />
        </div>
        <img
          className="sphare absolute  top-[50px] xl:top-[208px] left-[-226px]"
          src={sphare}
          alt="rotating ball"
        />
      </section>
    </>
  );
};

export default Collaborate;
