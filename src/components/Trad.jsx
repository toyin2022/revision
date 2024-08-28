import taco from "../assets/taco.png";

const Trad = () => {
  return (
    <div className="flex w-full h-[90vh] gap-4 justify-center items-center">
      <div className="w-1/2">
        <img className="ratation" src={taco} alt="" />
      </div>
      <div className="w-1/2 flex flex-col gap-4 items-start">
        <p className="text-5xl w-2/3 font-extrabold mb-4">
          Traditional Vegetarian Food
        </p>
        <p className="w-2/3 leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          quaerat quae adipisci illo cum assumenda similique odit, minus
          accusamus necessitatibus.
        </p>
        <button className="bg-slate-700 w-[15rem] h-[3rem] text-yellow-500  py-2">
          Order Veg Food
        </button>
      </div>
    </div>
  );
};

export default Trad;
