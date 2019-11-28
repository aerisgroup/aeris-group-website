import React from "react";

const Services = () => {
  return (
    <div id="services">
      <div className="container d-flex justify-content-around items">
        <div className="pharmaceutical mb-5">
          <i className="fas fa-briefcase-medical text-danger"></i>
        </div>
        <div className="pharmaceutical">
          <i className="fas fa-syringe"></i>
        </div>
        <div className="pharmaceutical">
          <i className="fas fa-flask"></i>
        </div>
      </div>

      {/* Next parallax picture*/}
      <div className="pharmaceuticals-good"></div>
    </div>
  );
};

export default Services;
