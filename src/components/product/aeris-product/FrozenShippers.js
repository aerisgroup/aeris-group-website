import React from "react";
import CardFlip from "../../util/CardFlip";

const FrozenShippers = () => {
  return (
    <div>
      <div className="content">
        <div className="content my-5">
          <div className="container">
            <h2 className="text-center">Frozen Shippers</h2>
            <p className="text-justify">
              Aeris frozen shippers are available in wide range of sizes, and
              they have been tested to searing summer temperatures of up to 40°C
              and pre-qualified form 72 hours to more than 120 hours. All
              shippers supplied with pre-printed labels that complies with IATA
              Packing Instruction like PI 650 and PI 620. They have classified
              into four groups based on temperature range
            </p>
            <div className="d-flex justify-content-around flex-wrap">
              <CardFlip
                image="frozenShippers/standardDryIceShippers.png"
                title="Standard Dry Ice Shippers"
                description="General EPS shippers with wide range of product volume from 2.4 Litres to 148 Litres using dry ice to immerse products to be shipped under frozen stage during shipment."
              />
              <CardFlip
                image="frozenShippers/PCM-Frozen-Shippers.png"
                title="PCM Frozen Shippers"
                description="Shippers with Phase Change Material (PCM) that completely encloses the temperature-sensitive payload without the need for ice, dry ice or cool packs — ensuring stable, consistent temperature performance within -15oC to -25oC,  available products volume  4.8 L, 21.1 and  46.8 Litres. "
              />
              <CardFlip
                image="frozenShippers/active-shippers.jpg"
                title="Active Shippers"
                description="Frozen active shippers also reusable containers with compressors able to operate under 5°C or more up to 45°C ambient temperature with advanced set-point temperature control of -20°C or less with the power supply of DC12V; which can be supplied from car battery as well. Shippers undergone for actuation test, humidly test, low and high temperature storage test, vibration test and drop test to guarantee no compromise in function and appearance change even in adverse environmental issues."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrozenShippers;
