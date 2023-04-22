import React, { useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";

function Header(props) {
  return (
    <Navbar bg="dark" expand="sm" variant="dark">
      <Container>
        <Navbar.Brand>e-commerse website</Navbar.Brand>
      </Container>
      <Button variant="warning" className="m-3">
        Home
      </Button>
      <Button variant="warning" className="m-3">
        Store
      </Button>
      <Button variant="warning" className="m-3">
        About
      </Button>
      <Button variant="primary" className="m-3">
        Cart
      </Button>
    </Navbar>
  );
}

export default Header;
