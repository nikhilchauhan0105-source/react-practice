

const Subscribe = () => {
  return (
    <>
      <section className="bg-black">
        <div className="max-w-[1140px] bg-lime w-full m-auto">
          <div className="max-w-[647px] m-auto text-center ">
            <p className="text-[40px] font-bold">Subscribe to Newsletter</p>
            <p className="leading-[160%] mt-[16px]">
              Sign up for our newsletter to stay up-to-date on the latest
              promotions, discounts, and new features releases.
            </p>
            <div className="max-w-[408px] flex justify-between bg-white mt-[30px]  m-auto py-[2px] rounded-2xl px-[2px]">
              <input className="px-2" type="text" placeholder="Enter your email "  />
              <button className="bg-lime px-[24px] py-[12px] rounded-2xl ">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Subscribe