import React from "react";
import { Link } from "react-router-dom";

const ServiceBox = ({ image, title, description, callToAction, link }) => {
  return (
    <div className="service-card card my-3 mx-auto" style={{ width: "300px" }}>
      <img className="card-img-top" src={image} alt={title} />
      <div className="card-body">
        <h5 className="card-title font-weight-bold">{title}</h5>
        {/* */}
        <p className="">{description}</p>
        {!callToAction ? (
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        ) : (
          <Link to={`/${callToAction}`} className="btn btn-primary">
            Learn More
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceBox;
