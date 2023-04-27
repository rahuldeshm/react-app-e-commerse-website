import React, { useContext, useRef } from "react";
import Footer from "../Layout/Footer";
import {
  Container,
  Col,
  Row,
  Form,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import DataContext from "../../store/data-context";

function Login(props) {
  const history = useHistory();
  const ctx = useContext(DataContext);
  const enteredEmail = useRef();
  const enteredPass = useRef();
  function submitHandler(e) {
    e.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAVVFxex2DkoJzmrbLNI1k-qI-CED2MHPY",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail.current.value,
          password: enteredPass.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          ctx.authenticationHandler(data);
          localStorage.setItem("login", JSON.stringify(data));
          history.replace("/store");
        });
      } else {
        res.json().then((data) => {
          alert(data.error.message);
        });
      }
    });
  }
  return (
    <>
      <Container fluid style={{ backgroundColor: "#ccc", textAlign: "center" }}>
        <Col style={{ backgroundColor: "chocolate" }}>
          <Row style={{ height: "4rem" }}></Row>
          <Row>
            <h2>Log In</h2>
          </Row>
        </Col>

        <Container
          style={{
            backgroundColor: "#5a616b",
            textAlign: "center",
            width: "50%",
            borderRadius: "1rem",
          }}
        >
          <Form
            className="p-2 m-5"
            style={{ margin: "0rem" }}
            onSubmit={submitHandler}
          >
            <FormLabel>Email</FormLabel>
            <FormControl
              type="email"
              className="m-1"
              ref={enteredEmail}
            ></FormControl>
            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"
              ref={enteredPass}
              className="m-1"
            ></FormControl>
            <Button onClick={submitHandler} className="m-2">
              Login
            </Button>
          </Form>
        </Container>
        <Row style={{ height: "3rem" }}></Row>
      </Container>

      <Footer></Footer>
    </>
  );
}

export default Login;
