import React, { useState } from "react";

export function ContextProvider(props) {
  const [cartPresent, setCartPresent] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, cartHandler] = useState(false);

  function cartItemAddHandler(item) {
    const cartitems = [...cartPresent];
    if (cartitems.indexOf(item.title) === -1) {
      setCartPresent([...cartPresent, item.title]);
      setCartItems([...cartItems, item]);
    } else {
      console.log("warning");
    }
  }
  return (
    <DataContext.Provider
      value={{
        cartHandler: cartHandler,
        showCart: showCart,
        cartItemAddHandler: cartItemAddHandler,
        cartItems: cartItems,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

const DataContext = React.createContext({
  cartHandler: () => {},
  showCart: false,
  cartItemAddHandler: () => {},
  cartItems: [],
});

export default DataContext;
