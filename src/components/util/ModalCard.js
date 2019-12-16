import React, { useState } from "react";

import { Modal } from "react-bootstrap";

const ModalCard = props => {
  const sectionStyle = {
    backgroundImage: `url(${require(`../../img/products/${props.image}`)})`
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="wrapper">
      <div className="card-flip card">
        <input type="checkbox" id="hi" className="more" aria-hidden="true" />
        <div className="content">
          <div className="front" style={sectionStyle}>
            <div className="inner">
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
                  <a
                    className="btn btn-primary mx-auto"
                    href="https://aemail.cfom/BBBk"
                  >
                    Contact Us
                  </a>
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
