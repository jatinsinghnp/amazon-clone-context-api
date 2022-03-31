import React, { useContext } from "react";
import { storeContext } from "../context/Store";
const SingleProductPage = ({ prod }) => {
  const { cart, setCart } = useContext(storeContext);
  

  return (
    <>
      <div className="mb-[20px] mx-10 mt-4">
        <span>{prod.title}</span>

        <img
          src={prod.image}
          alt={prod.name}
          className="w-[300px] p-[20px] mt-[20px]"
        />
        <div className="">
          <span style={{ fontWeight: 700 }}>{prod.name}</span>
          <span>$ {prod.price}</span>
        </div>
        {cart.includes(prod) ? (
          <button
            className="bg-red-500 p-2 rounded hover:bg-red-300 text-white"
            onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            className="bg-yellow-300 p-2 rounded text-white hover:bg-yellow-200"
            onClick={() => setCart([...cart, prod])}
          >
            Add to Cart
          </button>
        )}
      </div>
    </>
  );
};

export default SingleProductPage;
