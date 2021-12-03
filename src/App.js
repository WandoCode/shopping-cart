import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Shop from "./pages/Shop";
import { useState } from "react";

function App() {
  const [cartArray, setCartArray] = useState([]);

  const addSelectionToCart = (id) => {
    let newid = [...cartArray, id];
    setCartArray(newid);
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route
          path="shop/:itemId"
          element={<Item addSelectionToCart={addSelectionToCart} />}
        />
        <Route path="cart" element={<Cart items={cartArray} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
