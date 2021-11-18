import React from "react";
import { useState } from "react";
import ItemDisplay from "../components/ItemDisplay";
import pictures from "../images/images";
import uniqid from "uniqid";

const Shop = () => {
  const displayShopItems = () => {
    return pictures.map((imgSrc) => {
      return <ItemDisplay key={uniqid()} id={uniqid()} imgSrc={imgSrc} />;
    });
  };
  return (
    <div className="shop">
      {displayShopItems()} {pictures}
    </div>
  );
};

export default Shop;
