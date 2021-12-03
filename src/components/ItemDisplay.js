import React from "react";

const ItemDisplay = (props) => {
  const imgAlt = `poster ${props.id}`;
  return <img src={props.imgSrc} alt={imgAlt} id={props.id} />;
};

export default ItemDisplay;
