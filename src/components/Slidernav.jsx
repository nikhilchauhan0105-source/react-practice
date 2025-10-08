const Slidernav = ({setSidebarShow}) => {
  return (
    <div class="absolute  top-[20px] w-[200px] bg-black/60 backdrop-blur-xs  rounded-2xl z-10">
      {" "}  <button onClick={() => setSidebarShow(false)} class="text-red-600 px-2 ">
       close
      </button>
      <ul class="flex flex-col w-fit mx-auto gap-5 py-2 text-white lg:flex">
       
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
     
    </div>
  );
};

export default Slidernav;
