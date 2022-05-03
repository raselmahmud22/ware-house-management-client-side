import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <Navbar expand="lg" style={{backgroundColor:"#AA55FF", paddingTop: "0px", paddingBottom: "0px" }}>
          <Navbar.Brand href="/">
            <span className="logo ms-4">King Furniture</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav variant="tabs" defaultActiveKey="/">
              <Nav.Item>
                <NavLink className="nav-link" to="/">Home</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink className="nav-link" to="/inventory" eventkey="inventory">Inventory</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink eventkey="shop" className="nav-link" to={'/blog'}>Blog</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink className="nav-link" to="/order" eventkey="order">My Order</NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;