import React from "react";
import { FormControl, Image, Button, Col, Row } from "react-bootstrap";

function CartItem(props) {
  return (
    <tr>
      <td style={{ display: "flex" }} className="m-0 p-0">
        <Col className="m-0 p-0 ">
          <Image
            rounded
            className="m-0 p-0 "
            style={{ height: "3rem", width: "3rem" }}
            src={props.e.imageUrl}
            alt="item"
          />
        </Col>
        <Col className="m-0 p-0 ">{props.e.title}</Col>
      </td>
      <td>{props.e.price}</td>
      <td>
        <Row>
          <Col className="p-0">
            <FormControl
              defaultValue={1}
              className="p-0"
              style={{ width: "2rem" }}
              type="number"
            />
          </Col>
          <Col className="p-0">
            <Button
              variant="warning"
              size="sm"
              className="p-0"
              style={{ width: "4rem" }}
            >
              Remove
            </Button>
          </Col>
        </Row>
      </td>
    </tr>
  );
}

export default CartItem;
