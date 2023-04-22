import React from "react";
import CartItem from "./CartItem";
import { Button, Table, Modal, Container, Row, Col } from "react-bootstrap";

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
      <Modal
        show={props.showCart}
        onHide={props.closeHandler}
        left="0px"
        style={{ textAlign: "center" }}
      >
        <Modal.Header closeButton>
          <Col style={{ textAlign: "center" }}>
            <Modal.Title>Cart</Modal.Title>
          </Col>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Table>
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
            </Table>
            <Row>
              <Col style={{ textAlign: "end" }}>
                <h3>Total- </h3>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <h3>$300</h3>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer style={{ textAlign: "center" }}>
          <Col>
            <Button onClick={props.closeHandler}>Purchase</Button>
          </Col>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;
