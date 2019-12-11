import React, { Fragment } from "react";

const AboutUs = () => {
  return (
    <Fragment>
      <section id="aboutUs">
        <header>
          <div className="main-blue-color py-5 text-white">
            <div className="p-5 text-center">
              <h1 className="display-5">
                <strong>Who we are</strong>
              </h1>
              <div className="box">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </header>
        <header>
          <div className="py-5 text-dark">
            <div className="p-5 text-center">
              <p className="lead w-75 m-auto">
                Established since year 2001 in Singapore, we have expanded to
                over 8 strategic locations. We continue to set our sights into
                the horizon to bring affordable and quality products across
                Asia-Pacific
              </p>
            </div>
          </div>
        </header>
        <header>
          <div className="container">
            <div className="row no-gutter">
              <div className="col-md-6 d-flex">
                <div className="align-self-center py-5 my-5 ml-4">
                  <h2 className="display-5 font-weight-bold">Vision</h2>
                  <p className="mb-4 mt-3 ">
                    Be the global leader in providing Cold-Chain solutions and
                    temperature controlled packaging products.
                  </p>
                </div>
              </div>

              <img
                className="col-md-6 margin-top"
                src={require("../../img/landing/ourService/ColdChainSolutionDisplay.jpg")}
                alt=""
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </header>

        <header>
          <div className="container">
            <div className="row no-gutter d-flex d flex-row-reverse">
              <div className="col-md-6 d-flex ">
                <div className="align-self-center py-5 my-5">
                  <h2 className="display-5 font-weight-bold">Mission</h2>
                  <p className="mb-4 mt-3">
                    Through our technological innovation & service excellence,
                    be the preferred partner of choice in cold-chain solutions.
                  </p>
                </div>
              </div>

              <img
                className="col-md-6 margin-top"
                src={require("../../img/landing/AerisGroupTeamMobile.png")}
                alt=""
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </header>

        <header className="mb-5">
          <div className="container">
            <div className="row no-gutter">
              <div className="col-md-6 d-flex">
                <div className="align-self-center py-5 my-5 ml-4">
                  <h2 className="display-5 font-weight-bold">Values</h2>
                  <ul class="list-group">
                    <li class="list-group-item">
                      Strive for excellence in Customer Satisfaction through
                      providing reliable products and timely services.
                    </li>
                    <li class="list-group-item">
                      Invest in R&D and develop quality innovative products that
                      exceed market expectations.
                    </li>
                    <li class="list-group-item">
                      With our agility and ability in customization, to provide
                      creative and flexible solutions for our customers.
                    </li>
                    <li class="list-group-item">
                      Empower our employees with the right skills set and
                      motivate them to perform with a passionate attitude.
                    </li>
                  </ul>
                </div>
              </div>

              <img
                className="col-md-6 "
                src={require("../../img/landing/ourService/AerisGroupResearchAndDevelopment.jpg")}
                alt=""
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </header>
      </section>
    </Fragment>
  );
};

export default AboutUs;
