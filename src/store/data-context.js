import React, { useEffect, useState } from "react";
const localAuth = JSON.parse(localStorage.getItem("login"));
export function ContextProvider(props) {
  const [authentication, setAuthentication] = useState(localAuth);
  const [cartPresent, setCartPresent] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, cartHandler] = useState(false);

  useEffect(fetchDataFromCrud, [authentication]);

  function fetchDataFromCrud() {
    if (!!authentication) {
      let lsls = authentication.email;
      let ls = lsls.replace("@", "");
      let laststring = ls.replace(".", "");
      fetch(
        `https://crudcrud.com/api/73823ed02847466cb47b2578c3326efe/${laststring}`,
        {
          method: "GET",
          headers: {
            "Content-Type": " application/problem+json",
          },
        }
      ).then((res) => {
        res.json().then((data) => setCartItems(data));
      });
    }
  }

  let authorise = !!authentication;
  function authenticationHandler(data) {
    setAuthentication(data);
  }

  function cartItemAddHandler(item, laststring) {
    const carttitles = [...cartPresent];
    if (carttitles.indexOf(item.title) === -1) {
      setCartPresent([...cartPresent, item.title]);
      setCartItems([...cartItems, item]);
      fetch(
        `https://crudcrud.com/api/73823ed02847466cb47b2578c3326efe/${laststring}`,
        {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": " application/problem+json",
          },
        }
      ).then((res) => {
        // console.log(res);
        res.json().then((data) => {
          // console.log(data);
        });
      });
    } else {
      console.log("warning");
    }
  }
  function removeFromCart(title) {
    const cartitemsfull = [...cartItems];
    const carttitles = [...cartPresent];
    const index = carttitles.indexOf(title);
    carttitles.splice(index, 1);
    cartitemsfull.splice(index, 1);
    setCartItems(cartitemsfull);
    setCartPresent(carttitles);
  }

  return (
    <DataContext.Provider
      value={{
        cartHandler: cartHandler,
        showCart: showCart,
        cartItemAddHandler: cartItemAddHandler,
        removeFromCart: removeFromCart,
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
  removeFromCart: (title) => {},
  cartItems: [],
  authentication: "",
  authenticationHandler: (data) => {},
  authorise: false,
});

export default DataContext;
