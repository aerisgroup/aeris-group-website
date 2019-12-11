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
          <Button variant="primary" onClick={handleShow}>
            Contact Us
          </Button>
        ) : (
          <Link to={`/${callToAction}`} className="btn btn-primary">
            Learn More
          </Link>
        )}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Us</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea class="form-control"></textarea>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ServiceBox;
