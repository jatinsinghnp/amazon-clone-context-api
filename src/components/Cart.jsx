import React, { useContext, useEffect, useState } from "react";
import { storeContext } from "../context/Store";
import { Link } from "react-router-dom";
import SingleProductPage from "./SingleProductPage";
import stock from "../img/stock-vector-gift-coupon-template-with-up-to-percent-off-limited-time-voucher-layout-with-special-sale-offer-1966689436.jpg";
const Cart = () => {
  const { cart } = useContext(storeContext);
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  return (
    <>
      <div className="">
        <div className="flex justify-between  items-center mb-10">
          <img src={stock} alt="" className="w-[700px]" />
          <div className="text-center mx-4 flex">
            <p>Betst way to buy and get many discount asap</p>
          </div>
          <div className="bg-[#A7A6A2] p-6 mx-11 space-y-3 ">
            <p>
              SubTotal({cart.length}):${total}
            </p>
            <p className="">
              <input type="checkbox" /> <span>this order contains gifts</span>
            </p>
            <button>
              <Link to="/sucess/" className="bg-[#ffd814] p-1 rounded py-2  ">
                proceed TO checkout
              </Link>
            </button>
          </div>
        </div>
        <div className="">
          {cart.map((prod) => (
            <SingleProductPage prod={prod} key={prod.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
