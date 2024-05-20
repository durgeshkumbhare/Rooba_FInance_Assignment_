import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import hero1 from "../assets/Hero1.jpg";
import hero3 from "../assets/hero3.jpg";
import hero2 from "../assets/Hero2.jpg";
import hero4 from "../assets/Hero4.jpg";
import Hero6 from "../assets/Hero6.jpg";
import Hero7 from "../assets/Hero7.jpg";

const carasouelImages = [hero1, hero2, hero3, hero4];
const carasouelImages1 = [Hero6, hero3, hero4, Hero7];

const Carsouel = ({ events }) => {
  const [currentImg, setCurrentImg] = useState(0);

  // SLIDER FUNCTIONALITY
  const nextImage = () => {
    setCurrentImg((oldImage) => {
      const result = (oldImage + 1) % carasouelImages.length;
      return result;
    });
  };
  useEffect(() => {
    let sliderId = setInterval(() => {
      nextImage();
    }, 2000);
    return () => {
      clearInterval(sliderId);
    };
  }, [events]);

  return (
    // DISPLAYING IMAGES
    <section
      style={events ? { top: "6rem" } : { top: "4rem" }}
      className="slider-container relative h-[28rem] max-w-[57rem] overflow-hidden  flex justify-center z-[2] "
    >
      {(events ? carasouelImages : carasouelImages1).map((image, index) => {
        return (
          <article
            key={image}
            className="transition flex-none absolute overflow-hidden  "
            style={{ transform: `translateX(${100 * (index - currentImg)}%)` }}
          >
            {!events ? (
              <h2 className="text-gray-50 flex flex-col font-bold ml-3">
                Lunar Place: <span>(ft. Kanye west)</span>
              </h2>
            ) : (
              ""
            )}
            <img
              src={image}
              className="person-img h-80 w-64 lg:h-96 lg:w-80 object-cover ml-3 hover:cursor-pointer "
            />
            {events ? (
              <h2 className="relative top-[-4rem] pl-3 text-gray-50 flex flex-col  font-bold ml-3">
                Event Name <span className="flex items-center gap-3 font-normal"><IoLocationOutline/> Location</span>
              </h2>
            ) : (
              ""
            )}
          </article>
        );
      })}
    </section>
  );
};

export default Carsouel;
