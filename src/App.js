import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="shop" exact element={<Shop />} />
        <Route path="shop/:itemId" element={<Item />} />
        <Route path="cart" element={<Cart />} />
        <Route element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
