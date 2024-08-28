import { useRef } from "react";
import GetStarted from "../components/GetStarted";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trad from "../components/Trad";

const HomePage = () => {
  let scrollTo = useRef(null);

  const handleScroll = () => {
    scrollTo.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-gradient-to-b from-[#FFFDD0] to-[#FCFBF4]">
      <Navbar />
      <Hero handleScroll={handleScroll} />
      <Trad />
      <div className="" ref={scrollTo}>
        <GetStarted />
      </div>
    </div>
  );
};

export default HomePage;
