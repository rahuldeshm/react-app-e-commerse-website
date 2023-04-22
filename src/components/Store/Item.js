import React from "react";
import { Col, Row, Button } from "react-bootstrap";

function Item(props) {
  return (
    <Col sm={6}>
      <h3>{props.e.title}</h3>
      <img src={props.e.imageUrl} alt="Product" />
      <Row className="m-3">
        <Col>
          <h3>{`$${props.e.price}`}</h3>
        </Col>
        <Col style={{ textAlign: "start" }}>
          <Button className="m-0" variant="warning">
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Col>
  );
}

export default Item;
