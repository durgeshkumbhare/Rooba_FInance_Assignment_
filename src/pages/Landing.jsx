import { useState } from "react";
import Hero from "../components/Hero";
import ScrollText from "../components/ScrollText";
import SideBar from "../components/SideBar";
import SideBar2 from "../components/SideBar2";

const Landing = () => {
  const [events, setEvents] = useState(true);

  return (
    <div className="flex ">
      <Hero events={events} setEvents={setEvents} />
      <ScrollText />
      {events ? <SideBar /> : <SideBar2 />}
    </div>
  );
};

export default Landing;
