import React, { useContext } from "react";

import Item from "./Item";
import Footer from "./../Layout/Footer";
import { Container, Row, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import DataContext from "../../store/data-context";

function Store(props) {
  const ctx = useContext(DataContext);

  const list = [
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
  function openCartHandler() {
    ctx.cartHandler(true);
  }
  return (
    <div>
      <Container
        fluid
        style={{
          backgroundColor: "#ccc",
          textAlign: "center",
        }}
      >
        <Row
          style={{
            backgroundColor: "chocolate",
            height: "4rem",
          }}
        ></Row>
        <Row style={{ backgroundColor: "chocolate" }}>
          <h1>Generics</h1>
        </Row>
        <Row className="border m-2">
          <h1>MUSIC</h1>
        </Row>
        <Row>
          {list.map((e) => {
            return <Item key={e.title} e={e}></Item>;
          })}
        </Row>
        <Row className="border m-2">
          <h1>MERCH</h1>
        </Row>
        <Button onClick={openCartHandler}>Cart</Button>
      </Container>
      <Cart></Cart>
      <Footer></Footer>
    </div>
  );
}

export default Store;
