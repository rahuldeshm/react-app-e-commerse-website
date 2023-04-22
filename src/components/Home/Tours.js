import React from "react";
import { Container, Col, Row, Table, Button } from "react-bootstrap";

function Tours(props) {
  const list = [
    { a: "JUL16", b: "DETROIT, MI", c: "DTE ENERGY MUSIC THEATRE" },
    { a: "JUL19", b: "TORONTO,ON", c: "BUDWEISER STAGE" },
    { a: "JUL 22", b: "BRISTOW, VA", c: "JIGGY LUBE LIVE" },
    { a: "JUL 29", b: "PHOENIX, AZ", c: "AK-CHIN PAVILION" },
    { a: "AUG 2", b: "LAS VEGAS, NV", c: "T-MOBILE ARENA" },
    { a: "AUG 7", b: "CONCORD, CA", c: "CONCORD PAVILION" },
  ];

  return (
    <Container fluid>
      <Col>
        <Row className="m-3 border">
          <h1>Tours</h1>
        </Row>
        <Table striped>
          <thead className="table table-dark">
            <tr>
              <th> Date </th>
              <th> Place</th>
              <th>Place</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((e) => {
              return (
                <tr key={e.a}>
                  <td>{e.a}</td>
                  <td>{e.b}</td>
                  <td>{e.c}</td>
                  <td>
                    <Button size="sm">Buy Tickets</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
    </Container>
  );
}

export default Tours;
