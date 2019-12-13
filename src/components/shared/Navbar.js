import React, { Fragment } from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <Fragment>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Link to="/" className="navbar-brand">
            AerisGroup
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="Product And Solution" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
                <Link
                  to="/productandsolution/frozen-shippers"
                  className="nav-link mx-4 py-1"
                >
                  Frozen Shippers
                </Link>

                <Link
                  to="/productandsolution/chilled-shippers"
                  className="nav-link mx-4 py-1"
                >
                  Chilled Shippers
                </Link>
                <Link
                  to="/productandsolution/ambient-shippers"
                  className="nav-link mx-4 py-1"
                >
                  Ambient Shippers
                </Link>
                <Link
                  to="/productandsolution/secondary-packaging"
                  className="nav-link mx-4 py-1"
                >
                  Secondary Packaging
                </Link>
                <Link
                  to="/productandsolution/data-loggers"
                  className="nav-link mx-4 py-1"
                >
                  Data-loggers
                </Link>
                <Link
                  to="/productandsolution/charterpod"
                  className="nav-link mx-4 py-1"
                >
                  Charterpod Leasing
                </Link>
                <Link
                  to="/productandsolution/research-and-development"
                  className="nav-link mx-4 py-1"
                >
                  Research And Development
                </Link>
              </NavDropdown>
              <Link to="/about" className="nav-link">
                About Us
              </Link>
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default MainNavbar;
