import React, { useState } from "react";
import Footer from "../Layout/Footer";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormLabel,
  Row,
  Col,
} from "react-bootstrap";

function ContactUs() {
  const [Submit, setSubmit] = useState("Submit");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  async function sendDatatoBackend(data) {
    try {
      setSubmit("Submitting....!");
      const res = await fetch(
        "https://react-http-c1852-default-rtdb.asia-southeast1.firebasedatabase.app/userData.json",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        setSubmit("Submitted successfully");
        setEnteredEmail("");
        setEnteredPhone("");
        setEnteredName("");
      }
      console.log(res);
    } catch {
      setSubmit("Try Again");
      console.error("some error occered while fetching the data to site");
    }
  }
  function nameChangeHandler(e) {
    setEnteredName(e.target.value);
  }

  function emailChangeHandler(e) {
    setEnteredEmail(e.target.value);
  }

  function phoneChangeHandler(e) {
    setEnteredPhone(e.target.value);
  }

  function onSubmitHandler(e) {
    // console.log("subimetted");
    e.preventDefault();
    // console.log(enteredEmail, enteredName, enteredPhone);
    sendDatatoBackend({ enteredEmail, enteredName, enteredPhone });
  }
  return (
    <>
      <Container fluid style={{ backgroundColor: "#ccc", textAlign: "center" }}>
        <Col style={{ backgroundColor: "chocolate" }}>
          <Row style={{ height: "4rem" }}></Row>
          <Row>
            <h2>Contact Us</h2>
          </Row>
        </Col>
        <Row className="border m-2">
          <h2>Fill the form below and we will contact you</h2>
        </Row>

        <Container style={{ backgroundColor: "#ccc", textAlign: "center" }}>
          <Form className="p-5" style={{ margin: "0rem" }}>
            <FormLabel>Name</FormLabel>
            <FormControl
              value={enteredName}
              onChange={nameChangeHandler}
              className="m-1"
            ></FormControl>
            <FormLabel>Email</FormLabel>
            <FormControl
              value={enteredEmail}
              onChange={emailChangeHandler}
              className="m-1"
            ></FormControl>
            <FormLabel>Phone Number</FormLabel>
            <FormControl
              value={enteredPhone}
              onChange={phoneChangeHandler}
              className="m-1"
            ></FormControl>
            <Button onClick={onSubmitHandler} className="m-2">
              {Submit}
            </Button>
          </Form>
        </Container>
      </Container>

      <Footer></Footer>
    </>
  );
}

export default ContactUs;
