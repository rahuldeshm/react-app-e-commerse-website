import React, { useContext, useState } from "react";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import DataContext from "../../store/data-context";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

function Header(props) {
  const ctx = useContext(DataContext);
  function openCartHandler() {
    ctx.cartHandler(true);
  }
  function logoutHandler() {
    if (ctx.authorise) {
      ctx.authenticationHandler(null);
      localStorage.removeItem("login");
    }
  }

  return (
    <Navbar
      bg="dark"
      expand="sm"
      variant="dark"
      className={classes.navbar}
      style={{ width: "100%", height: "4rem", position: "fixed", zIndex: "10" }}
    >
      <Container>
        <Navbar.Brand>e-commerse website</Navbar.Brand>
      </Container>
      <Nav>
        <NavLink to="/home" activeClassName={classes.active} className="m-3">
          Home
        </NavLink>
        {ctx.authorise && (
          <NavLink activeClassName={classes.active} to="/store" className="m-3">
            Store
          </NavLink>
        )}
        <NavLink activeClassName={classes.active} to="/about" className="m-3">
          About
        </NavLink>
        <NavLink activeClassName={classes.active} to="/contact" className="m-3">
          Contact
        </NavLink>

        <NavLink
          onClick={logoutHandler}
          activeClassName={classes.active}
          to="/login"
          className="m-3"
        >
          {ctx.authorise ? "Logout" : "login"}
        </NavLink>
      </Nav>

      {ctx.authorise && (
        <Button variant="primary" className="m-3" onClick={openCartHandler}>
          Cart<h2>{ctx.cartItems.length}</h2>
        </Button>
      )}
    </Navbar>
  );
}

export default Header;
