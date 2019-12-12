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

  const randomSubject = "hi";

  const email =
    "&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#115;&#97;&#108;&#101;&#115;&#64;&#97;&#101;&#114;&#105;&#115;&#46;&#99;&#111;&#109;&#46;&#115;&#103;";

  const subject = `?Subject${randomSubject}`;
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
                  <a
                    className="btn btn-primary mx-auto"
                    href="https://aemail.com/BBBk"
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
