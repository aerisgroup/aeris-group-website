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
                    href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#115;&#97;&#108;&#101;&#115;&#64;&#97;&#101;&#114;&#105;&#115;&#46;&#99;&#111;&#109;&#46;&#115;&#103;?Subject=Sales Question"
                    target="_top"
                    className="btn btn-primary mx-auto"
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
