import React, { useContext, useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import DataContext from "../../store/data-context";
import { NavLink } from "react-router-dom";

function Header(props) {
  const [store, setStore] = useState(false);
  const ctx = useContext(DataContext);
  function openCartHandler() {
    ctx.cartHandler(true);
  }
  function storeHandler() {
    setStore(true);
  }
  function cartHandler() {
    setStore(false);
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
      <NavLink onClick={cartHandler} to="/" className="m-3">
        Home
      </NavLink>
      <NavLink to="/store" onClick={storeHandler} className="m-3">
        Store
      </NavLink>
      <NavLink onClick={cartHandler} to="/about" className="m-3">
        About
      </NavLink>
      <NavLink onClick={cartHandler} to="/contact" className="m-3">
        Contact Us
      </NavLink>
      {store && (
        <Button variant="primary" className="m-3" onClick={openCartHandler}>
          Cart<h2>{ctx.cartItems.length}</h2>
        </Button>
      )}
    </Navbar>
  );
}

export default Header;
