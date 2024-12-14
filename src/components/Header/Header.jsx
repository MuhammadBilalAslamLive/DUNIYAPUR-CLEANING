import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./styles.scss";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <div className="logo">
                        <Link to="/">DUNIYAPUR CLEANING LTD</Link>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link>
                            <NavLink to="/" className="mx-lg-2">
                                Home
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink  to="/about" className="mx-lg-2">
                                About
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link className="mx-lg-2">
                            <NavLink  to="/services" className="mx-lg-2">
                                Services
                            </NavLink>
                        </Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        <Nav.Link className="mx-lg-2">
                            <NavLink  to="/contact" className="mx-lg-2">
                                Contact
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link className="mx-lg-2">
                        <div className="call d-block d-lg-none">Call 07444 235891 or 07377 769463 click here for immediate help!</div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className="call d-none d-lg-block">Call 07444 235891/07377 769463 click here for immediate help!</div>
            </Container>
        </Navbar>
    );
};

export default Header;
