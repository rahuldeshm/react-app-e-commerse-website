import React, { useContext } from "react";

import Item from "./Item";
import Footer from "./../Layout/Footer";
import { Container, Row, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import DataContext from "../../store/data-context";

function Store(props) {
  const ctx = useContext(DataContext);

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
          {ctx.list.map((e, index) => {
            return <Item key={e.title} e={e} index={index}></Item>;
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
