import burger from "../assets/burger.png";
const Hero = ({ handleScroll }) => {
  return (
    <div className="flex w-full h-[90vh] gap-4 justify-center items-center">
      <div className="w-1/2 flex flex-col gap-4 items-start">
        <p className="text-7xl font-extrabold mb-4">Quality Food Delivered!</p>
        <p className="w-2/3 leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          quaerat quae adipisci illo cum assumenda similique odit, minus
          accusamus necessitatibus.
        </p>
        <button
          className="bg-yellow-500 w-[10rem] text-white shadow-lg shadow-yellow-500 rounded-full py-2"
          onClick={handleScroll}
        >
          Get Started
        </button>
      </div>
      <div className="left">
        <img src={burger} alt="" />
      </div>
    </div>
  );
};

export default Hero;
