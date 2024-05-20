import { IoLocationOutline } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import img1 from "../assets//anish-prajapati-5Sxh_zg5Des-unsplash.jpg";
import img2 from "../assets/brandon-erlinger-ford-N9xA_BYSJAI-unsplash.jpg";
import img3 from "../assets/Hero4.jpg";
import qr from "../assets/qr.jpg";

const SideBar = () => {
  return (
    <div className="flex-shrink pl-5 pt-6 col-span-1 pr-4 z-10 bg-[#14181b]">
      <div>
        <h3 className="text-bold text-green-50 font-medium text-sm">
          Explore Youre First
        </h3>
        <h3 className="mt-[-2px] font-medium text-gray-50 text-sm">Event</h3>
      </div>
      <h2 className="mt-10 text-2xl tracking-wider text-gray-100 font-bold">
        Event Name
      </h2>
      {/* Event Details */}
      <div className="flex items-center text-xs mt-4">
        <IoLocationOutline className="text-gray-100" />
        <span className="text-gray-100 ml-2 font-medium">Venue</span>
        <LuAlarmClock className="text-gray-100 ml-7" />
        <span className="text-gray-100 ml-2">04/3/2024</span>
        <span className="text-gray-100 ml-1">@19:00</span>
      </div>
      {/* ABOUT EVENT */}
      <p className="text-gray-100 text-xs mt-4 w-56">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      {/* Artist DETAILS */}
      <h3 className="text-gray-100 capitalize font-medium mt-6">
        artist lineup
      </h3>

      <div className="flex items-center mt-8 ">
        <img
          src={img1}
          className="h-[4.5rem] w-[4.5rem] lg:h-[5.5rem] lg:w-[5.5rem] rounded object-cover  hover:cursor-pointer"
        />
        <img
          src={img2}
          className="h-[5.5rem] w-[5.5rem] lg:h-[7rem] lg:w-[6.5rem] rounded object-cover  hover:cursor-pointer"
        />
        <img
          src={img3}
          className="h-[4.5rem] w-[4.5rem] lg:h-[5.5rem] lg:w-[5.5rem] rounded object-cover hover:cursor-pointer"
        />
      </div>

      {/* QR_CODE & BUTTON */}
      <footer className=" mt-28  justify-between ">
        <img src={qr} className="h-16 w-16 rounded" />
        <button className="btn relative bottom-6 md:left-28 lg:left-36 rounded-full px-3 mr-3 py-1 capitalize font-bold bg-[#ffca60] text-sm hover:bg-yellow-500">
          Join Waitlist
        </button>
      </footer>
    </div>
  );
};

export default SideBar;
