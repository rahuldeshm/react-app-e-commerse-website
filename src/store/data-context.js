import React, { useEffect, useState } from "react";
const localAuth = JSON.parse(localStorage.getItem("login"));
const list = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

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
        `https://crudcrud.com/api/35942738b84b4f04b90a8680915219ee/${laststring}`,
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
        `https://crudcrud.com/api/35942738b84b4f04b90a8680915219ee/${laststring}`,
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
        list: list,
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
  list: [],
});

export default DataContext;
