import img5 from "../assets/Hero5.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/Hero4.jpg";
import hero7 from "../assets/Hero7.jpg";

const img = [img5, img5, img5];
const SideBar2 = () => {
  return (
    
    <div className="px-7 pt-7">
      {/* HEADING */}
      <h5 className="capitalize font-medium flex flex-col text-gray-50 text-sm ">
        Explore youre first <span>Collectible</span>
      </h5>

      <h1 className="mt-5 text-2xl text-gray-50 flex flex-col font-bold">
        Meta<span className="mt-[-8px]">Lives</span>
      </h1>
      <h5 className="text-gray-50 mt-4 text-sm font-medium">Live in Astrix</h5>
      {/* ABOUT EVENT */}
      <p className="text-gray-100 text-xs mt-4 w-56">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      {/* PEOPLE INTRESTED */}
      <div className="flex mt-4 items-center ">
        <img src={hero7} className="h-8 w-8 rounded-full object-cover" />
        <img
          src={img5}
          className="h-8 w-8 rounded-full object-cover relative left-[-14px]"
        />
        <img
          src={hero4}
          className="h-8 w-8 rounded-full object-cover relative left-[-24px]"
        />
        <img
          src={hero3}
          className="h-8 w-8 rounded-full object-cover relative left-[-34px]"
        />
        <img
          src={img5}
          className="h-8 w-8 rounded-full object-cover relative left-[-44px]"
        />
        <span className="text-xs font-medium ml-[-2rem] text-gray-50">
          22k people interested
        </span>
      </div>
      {/* POSTERS */}
      <h3 className="text-xs text-gray-50 font-medium mt-8">Collectibles</h3>
      <div className="flex items-center rounded overflow-hidden mt-2 gap-2">
        {img.map((img) => {
          return (
            <div key={img} className="text-gray-50 bg-[#b9a0fe] rounded px-2">
              <div className="flex justify-between items-center">
                <span className="text-[0.3rem] lg:text-[0.4rem] bg-black mt-1 px-1 rounded-md">
                  2024
                </span>
                <span className="text-[0.2rem] lg:text-[0.4rem] text-black font-bold  text-nowrap">
                  By Pablo
                </span>
              </div>
              <h3 className="text-[0.3rem] lg:text-[0.5rem]  text-center font-bold pb-1 text-black">
                Collectible Name
              </h3>
              <img
                key={img}
                src={img}
                className="h-[4.5rem] lg:h-[6.5rem] w-20 border-gray-900 border-[1px] object-cover rounded overflow-hidden mb-2"
              />
            </div>
          );
        })}
      </div>
      {/* BUTTON */}
      <footer className=" mt-24  justify-between ">
        <button className="btn relative bottom-6 hover:bg-yellow-500 left-28 lg:left-36 rounded-full px-3 mr-3 py-1 capitalize font-bold bg-[#ffca60] text-sm hover">
          Join Waitlist
        </button>
      </footer>
    </div>
  );
};

export default SideBar2;
