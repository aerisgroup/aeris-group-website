import React from "react";

const Credential = () => {
  return (
    <section id="credential">
      <div className="container">
        <h2 className="text-weight-bold m-5 pt-5">
          You Can <span className="main-blue-color">Trust </span>Us
        </h2>

        <h3 className="lead m-5">
          We have been audited by several leading{" "}
          <span className="font-weight-bold">GDP/GMP</span> pharmaceutical
          companies and have <span className="font-weight-bold">UN/DG</span>{" "}
          certified products that meet stringent shipping regulations by{" "}
          <span className="font-weight-bold">IMDG</span>,{" "}
          <span className="font-weight-bold">ICAO</span> and{" "}
          <span className="font-weight-bold">IATA</span>.
        </h3>
        <div className="d-flex flex-wrap justify-content-around my-5">
          <img
            src={require("../../img/landing/credential/iso-certification.jpg")}
            alt=""
            width="300"
            height="245"
          />
        </div>
      </div>
      <div className="coldChainSolutionParallax"></div>
    </section>
  );
};

export default Credential;
