import React from "react";
import { Link } from "react-router-dom";

const CardFlip = props => {
  // var sectionStyle = {
  //   backgroundImage: `url(${require("../../img/products/ambientShippers/standardShippers.png")})`
  // };

  var sectionStyle = {
    backgroundImage: `url(${require(`../../img/products/${props.image}`)})`
  };

  return (
    <div class="wrapper">
      <div class="card-flip card">
        <input
          type="checkbox"
          id={props.title}
          class="more"
          aria-hidden="true"
        />
        <div class="content">
          <div class="front" style={sectionStyle}>
            <div class="inner">
              <h2>{props.title}</h2>

              <label for={props.title} class="button" aria-hidden="true">
                Details
              </label>
            </div>
          </div>
          <div class="back container">
            <div class="inner p-5">
              <div class="description">
                {props.description}

                <ul>
                  {props.list ? (
                    props.list.map(item => <li>{item}</li>)
                  ) : (
                    <div className="filler"></div>
                  )}
                </ul>
              </div>
              <div class="location">{props.title}</div>

              <label
                for={props.title}
                class="button button-left return mt-4"
                aria-hidden="true"
              >
                <i class="fas fa-arrow-left"></i>
              </label>

              <Link
                to="/contact"
                className="button-right button return mt-4"
                style={{ textDecoration: "none" }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
