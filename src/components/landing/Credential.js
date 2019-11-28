import React from "react";

const Credential = () => {
  return (
    <section id="credential">
      <div className="container">
        <h2 className="text-weight-bold m-5 pt-5">
          You Can <span className="text-primary">Trust </span>Us
        </h2>

        <h3 className="lead m-5 pb-5">
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
            src={require("../../img/landing/credential/certificationOne.png")}
            alt=""
            width="265"
            height="249"
          />
          <img
            src={require("../../img/landing/credential/certificationTwo.png")}
            alt=""
            width="265"
            height="190"
          />
          <img
            src={require("../../img/landing/credential/PromisingSME.png")}
            alt=""
            width="265"
            height="249"
          />
        </div>
      </div>
      <div className="coldChainSolutionParallax"></div>
    </section>
  );
};

export default Credential;
