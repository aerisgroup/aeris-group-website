import React, { Fragment, useState } from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Fragment>
      <Container>
        <Navbar bg="light" expand="lg" fixed="top" expanded={expanded}>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">
              AerisGroup
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="Product And Solution" id="basic-navbar-nav">
                <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
                <Link
                  to="/productandsolution/frozen-shippers"
                  className="nav-link mx-4 py-1"
                  onClick={() => setExpanded(false)}
                >
                  Frozen Shippers
                </Link>

                <Link
                  to="/productandsolution/chilled-shippers"
                  className="nav-link mx-4 py-1"
                  onClick={() => setExpanded(false)}
                >
                  Chilled Shippers
                </Link>
                <Link
                  to="/productandsolution/ambient-shippers"
                  className="nav-link mx-4 py-1"
                  onClick={() => setExpanded(false)}
                >
                  Ambient Shippers
                </Link>
                <Link
                  to="/productandsolution/secondary-packaging"
                  className="nav-link mx-4 py-1"
                  onClick={() => setExpanded(false)}
                >
                  Secondary Packaging
                </Link>
                <Link
                  to="/productandsolution/data-loggers"
                  className="nav-link mx-4 py-1"
                  onClick={() => setExpanded(false)}
                >
                  Data-loggers
                </Link>
                <Link
                  to="/productandsolution/charterpod"
                  className="nav-link mx-4 py-1"
                  onClick={() => setExpanded(false)}
                >
                  Charterpod Leasing
                </Link>
                <Link
                  to="/productandsolution/research-and-development"
                  className="nav-link mx-4 py-1"
                  onClick={() => setExpanded(false)}
                >
                  Research And Development
                </Link>
              </NavDropdown>
              <Link
                to="/about"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Contact Us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Fragment>
  );
};

export default MainNavbar;
