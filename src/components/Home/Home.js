import React from "react";
import play from "./../../images/playlogo.png";
import Tours from "./Tours";
import Footer from "./../Layout/Footer";
import { Col, Container, Row, Image } from "react-bootstrap";

function Home() {
  return (
    <>
      <Container fluid style={{ backgroundColor: "#ccc", textAlign: "center" }}>
        <Col style={{ backgroundColor: "chocolate" }}>
          <Row>
            <h2>Play Sound</h2>
          </Row>
          <Row className="border m-2">
            <h2>Get Our Latest Album</h2>
          </Row>
          <Image className="m-3" src={play} roundedCircle></Image>
        </Col>
        <Tours></Tours>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Home;
