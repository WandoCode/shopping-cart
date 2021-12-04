import React from "react";
import uniqid from "uniqid";
const Cart = (props) => {
  // Total cart price
  let totalPrice = 0;

  return (
    <div className="cart">
      {props.items.map((item) => {
        // Extract total price for a given item
        const subTotal = item.quantity * item.price;

        // Add to cart total
        totalPrice += subTotal;
        return (
          <div key={uniqid()}>
            (id:{item.id}) -- {item.title} == {item.quantity} | Price:{" "}
            {subTotal}
            <button onClick={() => props.removeOneItem(item.id)}>
              Remove one from cart
            </button>
            <button onClick={() => props.addOneItem(item.id)}>
              Add one to cart
            </button>
            <button onClick={() => props.removeItems(item.id)}>
              Remove from cart
            </button>
          </div>
        );
      })}
      <div>Total: {totalPrice}</div>
    </div>
  );
};

export default Cart;
