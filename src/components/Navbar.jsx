import { BiSolidFoodMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { productStore } from "../store/store";
import { useState } from "react";
import { FaCartShopping, FaTrash } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const foodCount = productStore((state) => state.food.length);
  const foodInCart = productStore((state) => state.food);
  const [showCart, setshowCart] = useState(false);

  let total = 0;
  foodInCart.map((it) => {
    total += it.price;
    return total;
  });

  const handleRemoveFromTray = productStore((state) => state.removeProduct);

  return (
    <div className="h-[10vh]  relative w-[90%] mx-auto justify-around flex items-center ">
      <div className="logo">
        <h1 className="text-4xl font-bold">
          Food<span className="text-yellow-500">Ka</span>
        </h1>
      </div>
      <div className="flex gap-[2rem] cursor-pointer">
        <p>Home</p>
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/catalog">
          <p>Catalog</p>
        </Link>
      </div>
      <div
        onClick={() => setshowCart((prev) => !prev)}
        className="relative border p-2"
      >
        <p className="absolute -top-4 p-2 left-0 rounded-full bg-yellow-600 text-[12px] text-white">
          {foodCount}
        </p>
        <BiSolidFoodMenu className="text-yellow-500 cursor-pointer text-2xl" />
      </div>
      <div className="border rounded-full border-yellow-500 w-[10rem] py-[0.5rem] flex items-center justify-center">
        <p>Order Now</p>
      </div>

      {showCart ? (
        <div className="min-h-[80vh] shadow-lg translate-x-0 transition-all duration-500 absolute top-[10vh] right-[-4rem] w-[40vw] bg-transparent backdrop-blur-xl">
          <div className="w-full py-4 flex bg-yellow-400 items-center justify-between px-2">
            <FaCartShopping size={24} />
            <p>
              <span className="font-bold">
                {foodCount} {foodCount > 1 ? "items " : "item "}
              </span>
              in your cart
            </p>
            <FaTimes
              className="cursor-pointer"
              size={24}
              onClick={() => setshowCart(false)}
            />
          </div>
          <div>
            {foodInCart.map((food) => (
              <div
                key={food.id}
                className="flex items-center justify-around p-2 shadow-md gap-2 py-2"
              >
                <img src={food.image} alt="" className="w-[80px]" />
                <div>
                  <p className="font-bold">{food.name}</p>
                  <p>Price: ${food.price}</p>
                </div>
                <FaTrash
                  className="text-yellow-500 cursor-pointer"
                  onClick={() => handleRemoveFromTray(food.id)}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-around py-4 items-center">
            <button className="w-[10rem]  text-white bg-yellow-500 shadow-lg shadow-yellow-500 rounded-full py-2">
              Checkout
            </button>
            <p>
              <span className="font-bold">Total: </span> ${total.toFixed(2)}
            </p>
          </div>
        </div>
      ) : (
        <div className="translate-x-96 absolute"></div>
      )}
    </div>
  );
};

export default Navbar;
