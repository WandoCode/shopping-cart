import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemDisplay from "../components/ItemDisplay";

const Item = (props) => {
  const [item, setItem] = useState("");
  const idItem = parseInt(useParams().itemId);

  const fetchItem = async () => {
    const promise = await fetch("http://localhost:8080/posters");
    const datas = await promise.json();
    const item = datas.find((poster) => {
      return poster.id === idItem;
    });
    setItem(item);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  // Allow redirection further in the function
  let navigate = useNavigate();

  // Handle adding item to the cart
  const addToCart = (e) => {
    e.preventDefault();

    // Get the number of item selected by user
    const nbrItem = e.target[0].value;

    // Form validation (it's a number, it's more than 0)
    if (isNaN(nbrItem)) {
      // Redirection
      navigate("/error");
      return;
    } else if (+nbrItem < 1) {
      // Redirection
      navigate("/error");
      return;
    }

    // Send information to cart
    props.addSelectionToCart({
      id: item.id,
      quantity: parseInt(nbrItem),
      title: item.title,
      price: parseInt(item.price),
    });
  };

  return (
    <div className="item">
      <h3>{item.title}</h3>
      <ItemDisplay imgSrc={item.url} id={item.id} />
      <form onSubmit={addToCart}>
        <input type="number" min="1" defaultValue="1" required />
        <input type="submit" value="Add to cart" />
      </form>
    </div>
  );
};

export default Item;
