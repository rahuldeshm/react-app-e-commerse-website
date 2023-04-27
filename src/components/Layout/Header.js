import React, { useContext, useState } from "react";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import DataContext from "../../store/data-context";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

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
      className={classes.navbar}
      style={{ width: "100%", height: "4rem", position: "fixed" }}
    >
      <Container>
        <Navbar.Brand>e-commerse website</Navbar.Brand>
      </Container>
      <Nav>
        <NavLink
          onClick={cartHandler}
          to="/home"
          activeClassName={classes.active}
          className="m-3"
        >
          Home
        </NavLink>
        <NavLink
          activeClassName={classes.active}
          to="/store"
          onClick={storeHandler}
          className="m-3"
        >
          Store
        </NavLink>
        <NavLink
          activeClassName={classes.active}
          onClick={cartHandler}
          to="/about"
          className="m-3"
        >
          About
        </NavLink>
        <NavLink
          activeClassName={classes.active}
          onClick={cartHandler}
          to="/contact"
          className="m-3"
        >
          Contact
        </NavLink>
        <NavLink
          activeClassName={classes.active}
          onClick={cartHandler}
          to="/login"
          className="m-3"
        >
          Login
        </NavLink>
      </Nav>
      {store && (
        <Button variant="primary" className="m-3" onClick={openCartHandler}>
          Cart<h2>{ctx.cartItems.length}</h2>
        </Button>
      )}
    </Navbar>
  );
}

export default Header;
