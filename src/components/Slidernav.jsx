const Slidernav = ({setSidebarShow}) => {
  return (
    <div class="absolute h-screen w-screen bg-black z-10">
      {" "}
      <ul class="flex flex-col w-fit mx-auto gap-[40px] lg:flex">
        <li>
          <a href="#Home" class="text-white">
            Home
          </a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Contactus">Contact us</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Pages">Pages</a>
        </li>
      </ul>
      <button onClick={() => setSidebarShow(false)} class="text-white">
        kat de
      </button>
    </div>
  );
};

export default Slidernav;
