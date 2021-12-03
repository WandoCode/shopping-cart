import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

  const addToCart = (e) => {
    e.preventDefault();

    // Get the number of item selected by user
    const nbrItem = e.target[0].value;

    // Form validation
    if (isNaN(nbrItem)) {
      return;
    } else if (+nbrItem < 1) {
      return;
    }

    // Send information to cart
    props.addSelectionToCart({
      id: item.id,
      quantity: parseInt(nbrItem),
      title: item.title,
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
