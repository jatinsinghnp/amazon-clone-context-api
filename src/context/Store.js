import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const storeContext = createContext();
const StoreContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const [products, setPorducts] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setPorducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!products) return null;

  const value = {
    products,
    cart,
    setCart,
  };

  // return

  return (
    <storeContext.Provider value={value}>
      {props.children}
    </storeContext.Provider>
  );
};

export default StoreContextProvider;
