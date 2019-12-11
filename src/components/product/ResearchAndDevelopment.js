import React from "react";

const ResearchAndDevelopment = () => {
  return (
    <div>
      <div className="content">
        <div className="content my-5">
          <div className="container">
            <h2 className="text-center">Research And Development</h2>

            <p>
              Our packaging solutions have been tested in the ultra demanding
              Asian continent, resulting in cost effective solutions and
              innovations that are proven to maintain temperatures of sensitive
              payloads well within the specified ranges in spite of the harsh
              and fluctuating temperatures outside.
            </p>
            <p>
              Our success is based on innovations in R&D, stringent Testing and
              Validation regime using our own in-house ESPEC Test Equipment
              Chamber and backed by independent third-party validation by TÜV
              SÜD PSB (Singapore and China). Our packaging solutions also meet
              international IATA & ISTA (PI602 & PI650 for Infectious &
              Diagnostic Substances) Compliance.
            </p>
            <img
              src={require("../../img/landing/ourService/AerisGroupResearchAndDevelopment.jpg")}
              alt=""
              width="90%"
              className="mx-auto d-block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchAndDevelopment;
