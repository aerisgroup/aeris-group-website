import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

const ModalCard = props => {
  const sectionStyle = {
    backgroundImage: `url(${require(`../../img/products/${props.image}`)})`
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div class="wrapper">
      <div class="card-flip card">
        <input type="checkbox" id="hi" class="more" aria-hidden="true" />
        <div class="content">
          <div class="front" style={sectionStyle}>
            <div class="inner">
              <h2>{props.title}</h2>

              <button className="button" onClick={handleShow}>
                Learn More
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.description}</Modal.Body>
                <Modal.Footer>
                  <Link to="/contact" className="btn btn-primary mx-auto">
                    Contact Us
                  </Link>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
