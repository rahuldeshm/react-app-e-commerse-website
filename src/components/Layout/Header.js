import React, { useContext } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import DataContext from "../../store/data-context";

function Header(props) {
  const ctx = useContext(DataContext);
  function openCartHandler() {
    ctx.cartHandler(true);
  }
  return (
    <Navbar
      bg="dark"
      expand="sm"
      variant="dark"
      style={{ width: "100%", height: "4rem", position: "fixed" }}
    >
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
      <Button variant="primary" className="m-3" onClick={openCartHandler}>
        Cart<h2>{ctx.cartItems.length}</h2>
      </Button>
    </Navbar>
  );
}

export default Header;
