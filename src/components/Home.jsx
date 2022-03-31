import React, { useContext } from "react";
import { storeContext } from "../context/Store";
import SingleProductPage from "./SingleProductPage";
import bimg from '../img/ecommerce.jpg'
const Home = () => {
  const { products } = useContext(storeContext);

  return (
    <>
      <div
        className="bg-no-repeat w-full h-[50vh] bg-cover bg-left"
        style={{
          backgroundImage: `url(${bimg})`
        }}
        
      ></div>

      <div style={{ textAlign: "center" }}>
        <span style={{ fontSize: 30 }}>Welcome Page</span>

        <div className="flex p-[20px]  flex-wrap justify-center items-center mx-[5px]">
          {products.map((prod) => (
            <div className="">
              <SingleProductPage prod={prod} key={prod.id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
