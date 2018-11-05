import React from "react";

const CartItem = props => {
  console.log(props);
  var cartItems = props.cart.map(item => {
    return (
      <div class="list-group-item">
        <div class="row">
          <div class="col-md-8"> {item.product.name} </div>{" "}
          <div class="col-md-2"> {item.product.priceInCents} </div>{" "}
          <div class="col-md-2"> {item.quantity} </div>{" "}
        </div>{" "}
      </div>
    );
  });

  return (
    <div>
      <div class="collection-item"> {cartItems} </div>;{" "}
    </div>
  );
};

export default CartItem;
