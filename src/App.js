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

  const addSelectionToCart = (itemSelection) => {
    let newItemSelection = [];
    // If the item is already in the cart, add it the quantity

    if (
      cartArray.some((item) => {
        return item.id === itemSelection.id;
      })
    ) {
      console.log("item in cart already");
      newItemSelection = cartArray.map((item) => {
        if (item.id === itemSelection.id) {
          item.quantity += itemSelection.quantity;
          return item;
        } else {
          return item;
        }
      });
    } else {
      newItemSelection = [...cartArray, itemSelection];
    }
    setCartArray(newItemSelection);
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
