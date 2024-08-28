import { useEffect, useState } from "react";
import { foods } from "../data/Food";
import { productStore } from "../store/store";
const GetStarted = () => {
  const [data, setdata] = useState([]);

  // const foodstate = productStore((state) => state.food);

  const handleAddToTray = productStore((state) => state.addProduct);

  useEffect(() => {
    setdata(foods);
  }, []);

  return (
    <div className="h-[60vh] ">
      <div className="flex flex-wrap gap-4">
        {data?.map((food) => (
          <div
            key={food.id}
            className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
          >
            <img
              src={food.image}
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 "
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">
                  {food.name}
                </h2>
                <p className="dark:text-gray-800">{food.description}</p>
              </div>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
                onClick={() => handleAddToTray(food)}
              >
                Add to tray
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
