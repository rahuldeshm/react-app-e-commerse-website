import React, { useContext } from "react";
import { Col, Row, Button } from "react-bootstrap";
import DataContext from "../../store/data-context";

function Item(props) {
  const ctx = useContext(DataContext);
  const titl = props.e.title;
  function addCartHandler() {
    ctx.cartItemAddHandler(props.e);
  }

  return (
    <Col sm={6}>
      <h3>{titl}</h3>
      <img src={props.e.imageUrl} alt="Product" />
      <Row className="m-3">
        <Col>
          <h3>{`$${props.e.price}`}</h3>
        </Col>
        <Col style={{ textAlign: "start" }}>
          <Button onClick={addCartHandler} className="m-0" variant="warning">
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Col>
  );
}

export default Item;
