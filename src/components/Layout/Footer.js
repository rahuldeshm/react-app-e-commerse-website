import React from "react";

import youtube from "./../../images/youtube.png";
import facebook from "./../../images/Facebook.svg.png";
import insta from "./../../images/insta.webp";
import { Col, Container, Row, Image } from "react-bootstrap";

function Footer(props) {
  return (
    <Container
      className="mt-0"
      fluid
      style={{
        textAlign: "center",
        backgroundColor: "rgb(33,37,41)",
        color: "white",
      }}
    >
      <Row>
        <Col sm={9}>
          <p>
            <b>R* All rights reserved</b>
            All the content of this site is reserved for our company. you are
            not allowed to copy or print full site or any part of the site or
            copy and reuse is strictly prohibited
          </p>
        </Col>
        <Col sm={3} style={{ alignContent: "center" }}>
          <a href="https://www.youtube.com">
            <Image
              className="m-3"
              style={{ height: "1.5rem" }}
              src={youtube}
              alt="youtube logo"
            />
          </a>
          <a href="https://www.instagram.com">
            <Image
              className="m-3"
              style={{ height: "1.5rem" }}
              src={insta}
              alt="insta logo"
            />
          </a>
          <a href="https://www.facebook.com">
            <Image
              className="m-3"
              style={{ height: "1.5rem" }}
              src={facebook}
              alt="facebook logo"
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
