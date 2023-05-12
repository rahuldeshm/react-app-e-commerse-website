import React, { useContext } from "react";
import CartItem from "./CartItem";
import { Button, Table, Modal, Container, Row, Col } from "react-bootstrap";
import DataContext from "../../store/data-context";

function Cart(props) {
  const ctx = useContext(DataContext);
  let price = 0;

  function closeHandler() {
    ctx.cartHandler(false);
  }
  return (
    <>
      <Modal
        show={ctx.showCart}
        onHide={closeHandler}
        left="0px"
        style={{ textAlign: "center" }}
      >
        <Modal.Header closeButton>
          <Col style={{ textAlign: "center" }}>
            <Modal.Title>Cart</Modal.Title>
            <p>{ctx.authentication.email}</p>
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
                {ctx.cartItems.map((e) => {
                  price = e.price + price;
                  return <CartItem key={`${e.title}_cart`} e={e}></CartItem>;
                })}
              </tbody>
            </Table>
            <Row>
              <Col style={{ textAlign: "end" }}>
                <h3>Total- </h3>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <h3>{`$${price}`}</h3>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer style={{ textAlign: "center" }}>
          <Col>
            <Button onClick={closeHandler}>Purchase</Button>
          </Col>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;
