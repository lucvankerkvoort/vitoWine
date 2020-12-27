import React, { useContext, useEffect } from "react";
import CartItem from "../Components/CartItem/cartItem";

const Cart = (props) => {
  return (
    <div className="cart">
      {[].map((item, i) => {
        return (
          <CartItem
            key={i}
            title={item.title}
            description={item.description}
            pics={item.images}
            price={item.price}
            star={item.star}
          />
        );
      })}

      <div className="checkout">
        <p>Total: ,00 </p>
        <button>Checkout</button>
      </div>
    </div>
  );
};
export default Cart;
