
import honeycomeleft from "../assets/images/honeycome-left.png"
import honeycomeright from "../assets/images/honeycome-right.png"
const Subscribe = () => {
  return (
    <>
      <section className="bg-black py-[30px] px-3 xl:py-[156px]">
        <div className="max-w-[1140px] relative overflow-hidden  bg-lime py-[25px] px-[20px] md:px-[50px] lg:py-[76px]  rounded-3xl w-full m-auto">
          <div className="max-w-[647px] m-auto text-center z-4 ">
            <p className="text-[25px] xl:text-[40px] font-bold">
              Subscribe to Newsletter
            </p>
            <p className="leading-[160%] mt-[16px]">
              Sign up for our newsletter to stay up-to-date on the latest
              promotions, discounts, and new features releases.
            </p>
            <div className="max-w-[408px] flex justify-between bg-white  mt-[30px]  m-auto py-[2px] rounded-2xl px-[2px]">
              <input
                className="px-2 max-w-[150px]"
                type="text"
                placeholder="Enter your email "
              />
              <button className="bg-lime px-[24px] py-[12px] cursor-pointer rounded-2xl ">
                Subscribe
              </button>
            </div>
          </div>
          <img
            className=" absolute left-0 hidden md:flex bottom-0 max-w-[265px] "
            src={honeycomeleft}
            alt="honeycome pattern"
          />
          <img
            className=" absolute hidden md:flex right-0 top-0 max-w-[265px] "
            src={honeycomeright}
            alt="honeycome pattern"
          />
        </div>
      </section>
    </>
  );
}

export default Subscribe