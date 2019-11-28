import React from "react";
import { Row, Container } from "react-bootstrap";

const LandingMobile = () => {
  return (
    <div className="showcase-mobile mobile-size-overlay landing-home">
      <Row className="align-items-center h-100">
        <div className="main-statement mx-auto">
          <Container>
            <h1 className="display-5">
              <strong>Cold-Chain Solution for your business</strong>
            </h1>
            <p className="mb-4 mt-3">
              We are an innovative Pioneer in this industry,
              <br />
              Providing End-To-End Services from <br />
              manufacturing of temperature controlled
              <br />
              solutions to logistical and warehousing support
            </p>
            <div className="d-flex button-group justify-content-center">
              <a
                className="btn rounded-0 btn btn-success mr-3"
                href="customer.html"
              >
                Contact Us
              </a>
              <a
                className="btn rounded-0  btn btn-success ml-3"
                href="customer.html"
              >
                Look at our Product
              </a>
            </div>
          </Container>
        </div>
      </Row>
    </div>
  );
};

export default LandingMobile;
