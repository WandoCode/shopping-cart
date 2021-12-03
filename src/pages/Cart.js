import React from "react";
import uniqid from "uniqid";
const Cart = (props) => {
  return (
    <div className="cart">
      {props.items.map((item) => {
        return (
          <div key={uniqid()}>
            (id:{item.id}) -- {item.title} == {item.quantity}
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
