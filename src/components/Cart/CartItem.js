import React from "react";
import classes from "./CartItem.module.css";

function CartItem(props) {
  return (
    <tr className={classes.tablerow}>
      <td className={classes.item}>
        <td>
          <img src={props.e.imageUrl} alt="item" />
        </td>
        <td>{props.e.title}</td>
      </td>
      <td>{props.e.price}</td>
      <td>
        <input type="number" />
        <button>Remove</button>
      </td>
    </tr>
  );
}

export default CartItem;
