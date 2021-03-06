import React from "react";
import ModalCard from "../../util/ModalCard";
import ScrollRestoration from "../../util/scrollRestoration";

const SecondaryPackaging = () => {
  return (
    <div>
      <ScrollRestoration />
      <div className="content my-5">
        <div className="container">
          <h2 className="text-center">Secondary Packaging</h2>
          <p className="text-justify">
            Our Biomedical Specimen Packaging Systems are designed for for safe
            transit and storage as per IATA Packing Instruction PI 650 and PI
            602. We also have a 95KPA specimen transport bag and bio-bottles
            that is compliant with IATA Dangerous Goods Regulations. All of the
            containers are available for +2°C to +8°C, +15°C to +25°C and below
            -20°C temperature ranges.
          </p>
          <div className="d-flex justify-content-around flex-wrap">
            <ModalCard
              image="SecondaryShippers/bio-pouch.jpg"
              title="Bio Pouch"
              description={
                <div>
                  <p>
                    Our Biomedical Specimen Packaging Systems are designed for
                    the safe shipment of specimen samples as per IATA Packing
                    Instruction PI 650 and PI 602. We also have a 95KPA specimen
                    transport bag that is compliant with IATA Dangerous Goods
                    Regulations. All of the containers are available for +2°C to
                    +8°C, +15°C to +25°C and below -20°C temperature ranges.
                  </p>
                </div>
              }
            />
            <ModalCard
              image="SecondaryShippers/DG-BioBottles.jpg"
              title="DG Bio-Bottles"
              description={
                <div>
                  <p>
                    Our Biomedical Specimen Packaging Systems are designed for
                    the safe shipment of specimen samples as per IATA Packing
                    Instruction PI 650 and PI 602. We also have a 95KPA specimen
                    transport bag that is compliant with IATA Dangerous Goods
                    Regulations. All of the containers are available for +2°C to
                    +8°C, +15°C to +25°C and below -20°C temperature ranges.
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryPackaging;
