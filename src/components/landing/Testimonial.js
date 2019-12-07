import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Partnership = () => {
  const responsive = {
    mobile: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
  };
  return (
    <div id="partnership">
      <h2 className="mt-5">
        What Our <span className="main-blue-color">Clients </span>Say About Us
      </h2>
      <Carousel responsive={responsive} className="my-5">
        <div className="testimonial">
          <div className="container">
            <h3 className="main-blue-color">Price & Value</h3>
            <p className="lead">
              "Aeris' pricing is competitive, and I found the value offered by
              Aeris outstanding"
            </p>
            <p className="author">
              - Voo Jiunn Horng, AP Distribution Manager of a world leading
              pharmaceutical company
            </p>
          </div>
        </div>
        <div className="testimonial">
          <div className="container">
            <h3 className="main-blue-color">Responsiveness</h3>
            <p className="lead">
              "You can count on Aeris to provide quick response for emergency
              requests"
            </p>
            <p className="author">
              - Ms Priscilla Teo Wyn, Industry Development Manager (Global DHL
              Express)
            </p>
          </div>
        </div>
        <div className="testimonial">
          <div className="container">
            <h3 className="main-blue-color">Service</h3>
            <p className="lead">
              "Aeris service is excellent, it does not end when they sell us the
              goods."
            </p>
            <p className="author">
              - Teresa Tan, Logistics Specialist, ABBOTT Laboratories (China)
            </p>
          </div>
        </div>
        <div className="testimonial">
          <div className="container">
            <h3 className="main-blue-color">Expertise</h3>
            <p className="lead">
              "Aeris is a willing partner in sharing their knowledge and
              expertise"
            </p>
            <p className="author">
              - Derek Ang, Academic Manager, Republic Polytechnic
            </p>
          </div>
        </div>
        <div className="testimonial">
          <div className="container">
            <h3 className="main-blue-color">Product Feedback</h3>
            <p className="lead">
              "temperature ...... very stable and within the required range."
            </p>
            <p className="author">- Cheong, Pharmacist, Medi-Link Pte Ltd</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Partnership;
