import React, { useState } from "react";
const localAuth = localStorage.getItem("login");
export function ContextProvider(props) {
  const [authentication, setAuthentication] = useState(localAuth);
  const [cartPresent, setCartPresent] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, cartHandler] = useState(false);
  let authorise = !!authentication;
  function authenticationHandler(data) {
    setAuthentication(data);
  }

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
        authentication: authentication,
        authorise: authorise,
        authenticationHandler: authenticationHandler,
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
  authentication: "",
  authenticationHandler: (data) => {},
  authorise: false,
});

export default DataContext;
