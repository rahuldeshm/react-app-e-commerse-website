import React from "react";
import color1 from "./../../images/color1.jpg";
import color2 from "../../images/color2.jpg";
import color3 from "../../images/color3.jpg";
import color4 from "../../images/color4.jpg";
import { useParams } from "react-router-dom";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import Footer from "../Layout/Footer";

function Individual(props) {
  const params = useParams();
  return (
    <>
      <Container style={{ backgroundColor: "#ccc" }}>
        <Row className="p-4">something</Row>
        <Col sm={12} className="p-2" style={{ textAlign: "center" }}>
          <h1>{params.id}</h1>
        </Col>
        <Row>
          <Col sm={12} style={{ zIndex: "0" }}>
            <Carousel style={{ zIndex: "0" }} className="m-5">
              <Carousel.Item interval={10000} style={{ zIndex: "0" }}>
                <img
                  className="d-block w-100"
                  src={color2}
                  alt="colors with some features"
                />
              </Carousel.Item>
              <Carousel.Item interval={10000} style={{ zIndex: "0" }}>
                <img
                  className="d-block w-100"
                  src={color3}
                  alt="colors with some features"
                />
              </Carousel.Item>
              <Carousel.Item interval={10000} style={{ zIndex: "0" }}>
                <img
                  className="d-block w-100"
                  src={color4}
                  alt="colors with some features"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col className="m-5" style={{ height: "20rem" }}>
            <h1>some discription </h1>other some discription about colors and
            other thingss that can work for the people we we want something and
            this colors are the best and we can see that we aHere is the list of
            70 IELTS Reading Practice Tests. These are IELTS Academic Reading
            passages with answers. Practise using these IELTS Academic reading
            sample test papers and ace your exams. The IELTS Reading topics are
            carefully chosen, and the answer keys are reviewed multiple times.
            So this would be a 100% fruitful IELTS reading practice online.
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Individual;
