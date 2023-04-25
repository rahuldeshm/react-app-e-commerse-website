import React from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

function Individual(props) {
  const params = useParams();

  console.log(params.id);
  return (
    <Container fluid style={{ backgroundColor: "#ccc" }}>
      <Col>
        <Row style={{ padding: "6rem" }}>Individual item {params.id}</Row>
      </Col>
    </Container>
  );
}

export default Individual;
