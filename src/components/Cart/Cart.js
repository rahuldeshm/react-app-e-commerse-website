import React from "react";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

function Cart(props) {
  const clist = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <>
      <div className={classes.overlay}></div>
      <div className={classes.cart}>
        <button className={classes.exbtn} onClick={props.onClick}>
          X
        </button>
        <h1>Cart</h1>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {clist.map((e) => {
              return <CartItem key={`${e.title}_cart`} e={e}></CartItem>;
            })}
          </tbody>
        </table>
        <div className={classes.total}>
          <h3>Total- </h3>
          <h3>$300</h3>
        </div>
        <button className={classes.btn}>Purchase</button>
      </div>
    </>
  );
}

export default Cart;
