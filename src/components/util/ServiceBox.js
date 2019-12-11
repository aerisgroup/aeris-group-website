import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const ServiceBox = ({ image, title, description, callToAction, link }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="service-card card my-3 mx-auto" style={{ width: "300px" }}>
      <img className="card-img-top" src={image} alt="Card image" />
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
