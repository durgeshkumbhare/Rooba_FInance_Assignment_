import { FaStarOfLife } from "react-icons/fa";
import Carsouel from "./Carsouel";
import { useState } from "react";

const Hero = ({ events, setEvents }) => {
  const handleClick = () => {
    setEvents(!events);
  };
  return (
    <div className=" flex-shrink basis-[57rem] h-screen z-[1] ">
      {/* ASTRIX LOGO */}
      <div className="flex pl-3 pt-2 text-center ">
        <FaStarOfLife className="text-yellow-400 pt-2 text-[2.5rem]" />
        <span className="text-3xl text-yellow-300 ml-3 mt-2 capitalize tracking-wide font-bold">
          Astrix.
        </span>
      </div>
      {/* CARSOUEL COMPONENT */}
      <Carsouel events={events} />
      {/* ASTRIX TEXT */}
      <div className="flex flex-col relative top-[-26rem] z-[1]">
        <span className="text-7xl text-[#45464a] font-bold ml-4 mt-4">
          ASTR
        </span>
        <span className="text-7xl text-[#45464a] font-bold ml-4">IX</span>
        <span className="text-7xl text-[#45464a] font-bold ml-4 mt-12">
          EVE
        </span>
        <span className="text-7xl text-[#45464a] font-bold ml-4">NTS</span>
      </div>
      {/* BUTTONS */}
      <div className="relative top-[-26rem] text-white  font-medium bg-[#282b30] ml-6  w-52  justify-center flex gap-4 align-center rounded-[1rem] mt-40 overflow-hidden justify-center">
        <button
          disabled={events}
          style={events ? { background: "gray" } : { background: "none" }}
          onClick={handleClick}
          className="text-xs py-2 px-8 rounded-2xl"
        >
          Events
        </button>
        <button
          disabled={!events}
          onClick={handleClick}
          style={!events ? { background: "gray" } : { background: "none" }}
          className="text-xs pr-8 pl-4 rounded- rounded-2xl"
        >
          Collections
        </button>
      </div>
    </div>
  );
};

export default Hero;
