import React from "react";
import { useState, useEffect } from "react";
import ItemDisplay from "../components/ItemDisplay";
import uniqid from "uniqid";
import { Link } from "react-router-dom";

const Shop = () => {
  const [pictures, setPictures] = useState([]);

  const fetchImages = async () => {
    const datas = await fetch("http://localhost:8080/posters");
    const itemsArray = await datas.json();
    setPictures(itemsArray);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div class="shop">
      {pictures.map((pictureObj) => {
        return (
          <Link to={`/shop/${pictureObj.id}`} key={uniqid()}>
            <ItemDisplay imgSrc={pictureObj.url} id={pictureObj.id} />
          </Link>
        );
      })}
    </div>
  );
};

export default Shop;
