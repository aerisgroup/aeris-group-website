import React from "react";
import CardFlip from "../../util/CardFlip";
import ModalCard from "../../util/ModalCard";

const ChilledShippers = () => {
  return (
    <div>
      <div className="content my-5">
        <div className="container">
          <h2 className="text-center">Chilled Shippers</h2>

          <p className="text-justify">
            Aeris Chill shippers are a complete line of pre-validated containers
            that can be maintained product temperature within 2°C to 8°C from 24
            to 120 hours of transit duration both in summer and winter shipments
            with different cool pack configurations. Chill shippers have been
            classified into four category namely,
          </p>
          <div className="d-flex justify-content-around flex-wrap">
            <CardFlip
              image="chilledShippers/standardShippers.png"
              title="Standard Shippers"
              description={
                <div>
                  <p>
                    Standard chill shippers available from 0.3 Litres to 90
                    Litres in-terms of obtainable product volume, shippers
                    utilizing a common bill of materials like Expanded Poly
                    styrene (EPS) and Extruded poly styrene (XPS) as thermal
                    barrier along with cool packs to ensure the thermal
                    steadiness of temperature sensitive products from outer
                    environment temperature.
                  </p>
                  <img
                    src={require("../../../img/products/chilledShippers/standardShippersDetail.png")}
                  />
                </div>
              }
            />
            <CardFlip
              image="chilledShippers/premiumShippers.png"
              title="Premium Shippers / VIP Shippers"
              description={
                <div>
                  <p>
                    Standard chill shippers available from 0.3 Litres to 90
                    Litres in-terms of obtainable product volume, shippers
                    utilizing a common bill of materials like Expanded Poly
                    styrene (EPS) and Extruded poly styrene (XPS) as thermal
                    barrier along with cool packs to ensure the thermal
                    steadiness of temperature sensitive products from outer
                    environment temperature.
                  </p>
                  <img
                    src={require("../../../img/products/chilledShippers/premiumShippersDetail.png")}
                    width="200"
                  />
                </div>
              }
            />
            <CardFlip
              image="chilledShippers/activeShippers.jpg"
              title="Active Shippers"
              description={
                <div>
                  <p>
                    Active shippers are usually reusable containers with
                    compressors able to operate under 5°C or more up to 45°C
                    ambient temperature with advanced set-point temperature
                    control of 3°C with the power supply of DC12V; which can be
                    supplied from car battery as well. Active shipper solutions
                    enables it to be plugged in during a delay to destination,
                    to keep product temperature safe through extreme conditions;
                    they acts as portable chillers. Shipper is also equipped
                    with automatic defrosting function after 24 hours of
                    operation. Shippers undergone for actuation test, humidly
                    test, low and high temperature storage test, vibration test
                    and drop test to guarantee no compromise in function and
                    appearance change even in adverse environmental issues.
                  </p>
                  <img
                    src={require("../../../img/products/chilledShippers/activeShippersDetail.png")}
                    width="200"
                  />
                </div>
              }
            />
            <ModalCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChilledShippers;
