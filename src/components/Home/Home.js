import React from "react";
import play from "./../../images/playlogo.png";
import Tours from "./Tours";
import Footer from "./../Layout/Footer";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  return (
    <>
      <Container fluid style={{ backgroundColor: "#ccc", textAlign: "center" }}>
        <Col style={{ backgroundColor: "chocolate" }}>
          <Row
            style={{
              backgroundColor: "chocolate",
              height: "4rem",
            }}
          ></Row>
          <Route path="/home/new-user">
            <Row style={{ backgroundColor: "yellowgreen" }}>
              <h3>Welcome, New User!</h3>
            </Row>
          </Route>
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
