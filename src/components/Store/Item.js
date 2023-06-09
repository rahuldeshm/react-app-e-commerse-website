import React, { useContext } from "react";
import { Col, Row, Button } from "react-bootstrap";
import DataContext from "../../store/data-context";
import { NavLink } from "react-router-dom";

function Item(props) {
  const ctx = useContext(DataContext);
  const titl = props.e.title;
  function addCartHandler() {
    let lsls = ctx.authentication.email;
    let ls = lsls.replace("@", "");
    let laststring = ls.replace(".", "");
    ctx.cartItemAddHandler(props.e, laststring);
  }

  return (
    <Col sm={6}>
      <h3>{titl}</h3>
      <NavLink to={`/store/${titl}`} e={props.e}>
        <img src={props.e.imageUrl} alt="Product" />
      </NavLink>
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
