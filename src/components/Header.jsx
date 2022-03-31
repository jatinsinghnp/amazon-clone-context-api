import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { storeContext } from "../context/Store";

const Header = () => {
  const { cart } = useContext(storeContext);
  return (
    <header>
      <nav className="bg-[#131921]   min-h-[57px] flex-wrap">
        <ul className="flex items-center py-4 space-x-8 flex-wrap">
          <li>
            <Link to="/">
              <img
                src="https://i.imgur.com/yNjKszW.jpeg"
                alt=""
                className="w-[100px] bg-white"
              />
            </Link>
          </li>

          <li>
            <div className="relative ">
              <p className="text-white px-1">
                <i class="fa-solid fa-location-pin "></i>
                <span className="font-bold">select your address</span>
              </p>
              <div className="absolute text-white -top-5 left-5">
                <p>Hellow</p>
              </div>
            </div>
          </li>
          <li>
            <input
              type="text"
              className="w-[722px] rounded py-2 outline-none"
            />
            <button className="pl-1 bg-[#FFD342] p-2 rounded">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </li>

          <li className="text-white">
            <p>Hellow ,Sing in</p>

            <span>Account&list</span>
          </li>
          <li className="text-white">
            <p>retrun&order</p>
          </li>
          <li>
            <li>
              <li class="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
                <Link to="cart/" role="button" class="relative flex">
                  <i class="fa-solid fa-cart-shopping text-white p-4"></i>
                  <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                    ({cart.length})
                  </span>
                </Link>
              </li>
            </li>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
