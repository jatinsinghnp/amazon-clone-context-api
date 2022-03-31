import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import SucessPage from "./components/SucessPage";

import StoreContextProvider from "./context/Store";
function App() {
  return (
    <>
      <StoreContextProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="cart/" element={<Cart />}></Route>
          <Route path="sucess/" element={<SucessPage />}></Route>
        </Routes>

        <Footer />
      </StoreContextProvider>
    </>
  );
}

export default App;
