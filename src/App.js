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

  // Helpers Function: Add a given quantity to the item object with the given id
  const addQuantityToCart = (id, quantityNum) => {
    return cartArray.map((item) => {
      if (item.id === id) {
        item.quantity += quantityNum;
        return item;
      } else {
        return item;
      }
    });
  };

  // Add the item object to te cartArray
  const addSelectionToCart = (itemSelection) => {
    let newItemSelection = [];
    // If the item is already in the cart, add it the quantity
    if (
      cartArray.some((item) => {
        return item.id === itemSelection.id;
      })
    ) {
      newItemSelection = addQuantityToCart(
        itemSelection.id,
        itemSelection.quantity
      );
      // Otherwise, just push the item object to the cart
    } else {
      newItemSelection = [...cartArray, itemSelection];
    }
    setCartArray(newItemSelection);
  };

  const removeItems = (id) => {
    // Remove item with the given id from the cartArray
    let newItemSelection = [];
    newItemSelection = cartArray.filter((item) => {
      return item.id !== id;
    });
    setCartArray(newItemSelection);
  };

  // Remove one item with the given id from the cart
  const removeOneItem = (id) => {
    let newItemSelection = [];

    // Remove 1 to the quantity of the item in the cart array
    newItemSelection = addQuantityToCart(id, -1);

    // Filter cart to remove item object with quantity <= 0
    const cleanArray = newItemSelection.filter((item) => {
      return item.quantity > 0;
    });

    setCartArray(cleanArray);
  };

  // Add one item with the given id from the cart
  const addOneItem = (id) => {
    let newItemSelection = [];
    // Add 1 to the quantity of the item in the cart array
    newItemSelection = addQuantityToCart(id, 1);
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
        <Route
          path="cart"
          element={
            <Cart
              items={cartArray}
              removeItems={removeItems}
              removeOneItem={removeOneItem}
              addOneItem={addOneItem}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
