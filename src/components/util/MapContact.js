import React from "react";

const MapContact = props => {
  return (
    <div className="d-flex justify-content-around flex-wrap">
      <iframe
        title={props.src}
        src={props.src}
        width="450"
        height="300"
        frameBorder="0"
        style={{ border: "0" }}
        allowFullScreen=""
        className="mb-5"
      ></iframe>
      <div className="mb-5 p-5" style={{ width: "400px" }}>
        {props.description}
      </div>
    </div>
  );
};

export default MapContact;
