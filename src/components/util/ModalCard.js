import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

const ModalCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div class="wrapper">
      <div class="card-flip card">
        <input type="checkbox" id="hi" class="more" aria-hidden="true" />
        <div class="content">
          <div class="front">
            <div class="inner">
              <h2>"hi"</h2>

              {/*<label class="button" aria-hidden="true">
                Details
              </label> */}

              <button className="button" onClick={handleShow}>
                Learn More
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Standard Shippers</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore eius enim laborum commodi tenetur saepe numquam a?
                    Possimus, assumenda alias.
                  </p>

                  <img
                    src={require("../../img/products/chilledShippers/activeShippers.jpg")}
                    width="400"
                    className="mx-auto d-block"
                  />
                </Modal.Body>
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
