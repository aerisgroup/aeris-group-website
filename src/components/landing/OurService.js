import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ServiceBox from "../util/ServiceBox";

const OurService = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 769 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 769, min: 0 },
      items: 1
    }
  };
  return (
    <div id="ourService" className="">
      <div className="container">
        <h2 className="m-5 pt-5">
          Our <span className="main-blue-color">Services</span> and{" "}
          <span className="main-blue-color">Product</span>
        </h2>
        <p className="lead pb-5 mb-5">
          We Cover Temperature and Time Sensitive Solutions. To ensure your
          product is in perfect shape, we go through rigorous testing.
        </p>
      </div>

      <Carousel
        responsive={responsive}
        infinite={true}
        dotListClass="custom-dot-list-style"
      >
        <ServiceBox
          image={require("../../img/products/frozenShippers/active-shippers.jpg")}
          title="Products"
          description="Cost effective solution and innovations that are proven to maintain temperatures of sensitive payloads well within the specified ranges"
          callToAction="product"
        />
        <ServiceBox
          image={require("../../img/landing/ourService/AerisGroupResearchAndDevelopment.jpg")}
          title="Testing and Validation"
          description="Our success is based on innovations in R&D, stringent Testing and Validation regime using our own in-house ESPEC Test Equipment Chamber and backed by independent third-party validation by TÜV SÜD PSB Compliance"
          callToAction="productandsolution/research-and-development"
        />
        <ServiceBox
          image={require("../../img/landing/AerisGroupDeliveryService.jpg")}
          title="Pickup and Delivery"
          description="At AerisGroup, we have our own pick up and delivery service, so will make sure your product get there safe and sound"
        />
        <ServiceBox
          image={require("../../img/landing/ourService/ColdChainSolutionDisplay.jpg")}
          title="Leasing Service"
          description="Users like the pay-per-use features, which mean they do not need to worry about managing and disposing of inventory since it is a subscription service"
          callToAction="productandsolution/charterpod"
        />
        {/*<ServiceBox
          image={require("../../img/landing/ourService/ColdChainSolutionDisplay.jpg")}
          title="Conditioning"
          description="Engineering R&D spearheads the latest packaging solution for the APAC changing market needs."
        /> */}
      </Carousel>
      <div className="bigColdChainSolutionBox mt-5"></div>
    </div>
  );
};

export default OurService;
