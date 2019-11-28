import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MissionStatement from "./MissionStatement";

const LandingDesktop = () => {
  return (
    <Fragment>
      <Row className="d-flex my-3 landing-home">
        <Col lg={5} className="align-self-center main-statement pl-5">
          <Container>
            <h1 class="display-5">
              <strong>
                {" "}
                Cold-Chain Solution
                <br />
                for your business{" "}
              </strong>
            </h1>
            <p class="mb-4 mt-3">
              We are an innovative Pioneer in this industry,
              <br />
              Providing End-To-End Services from <br />
              manufacturing of temperature controlled
              <br />
              solutions to logistical and warehousing support
            </p>
            <div class="d-flex button-group justify-content-center">
              <a
                class="btn rounded-0 btn btn-success mr-3"
                href="customer.html"
              >
                Contact Us
              </a>
              <a
                class="btn rounded-0  btn btn-success ml-3"
                href="customer.html"
              >
                Look at our Product
              </a>
            </div>
          </Container>
        </Col>
        <Col>
          <div class="col showcase d-none d-md-block"></div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default LandingDesktop;
