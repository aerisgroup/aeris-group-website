import React from "react";
import { Link } from "react-router-dom";

const LandingContactUs = () => {
  return (
    <div id="landingContactUs" className="">
      <div className="row align-items-center h-100">
        <div className="col-6 mx-auto">
          <h2 className="pt-5">A Cold Chain Solution you can Trust</h2>
          <Link to="/contact" className="btn btn-primary ">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingContactUs;
