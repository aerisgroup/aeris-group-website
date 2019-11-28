import React from "react";
import FlipCard from "../../util/FlipCard";
import CardFlip from "../../util/CardFlip";

const AmbientShippers = () => {
  return (
    <div>
      <div className="content">
        <div className="content my-5">
          <div className="container">
            <h2 className="text-center">Ambient Shippers</h2>
            <p className="text-justify">
              Aeris Ambient shippers are pre-validated containers that can be
              maintained product temperature within 2°C to 25°C or 15°C to 25°C
              from 24 to 120 hours of transit duration both in summer and winter
              shipments with different conventional cool packs configurations.
            </p>
            <div className="d-flex justify-content-around flex-wrap">
              <CardFlip
                title="Standard Shipper"
                description="Aeris Ambient shippers are pre-qualified +15°C to +25°C shipper series, available in wide range of product volume from 1 Litre to 90 Litres and validated from 48 to 96 hours of shipping duration using conventional cool packs to be conditioned at room temperature."
                image="ambientShippers/standardShippers.png"
              />
              <CardFlip
                title="Thermal Blanket"
                description="Thermal blanket is a validated specialized insulated shipping solution to combat pelleted pharmaceutical cargo to maintain a comfortable temperature of product at 15°C to 25°C.

It cut off the high temperature band experience by cargo and shielding it from extreme weather and temperature fluctuation during transport of your freight, ultimately to maintain product integrity.

The height of the blanket range from 0.3m to 2.1m and it’s fully customizable based on customer requirements.
It uses “wrap concept” to assemble which make the packing ultra friendly."
                list={[
                  "Tear resistant",
                  "Protective Cover",
                  "Non-Toxic/non-carcinogenic",
                  "Reliable and Cost - effective"
                ]}
                image="ambientShippers/AerisGroupThermalBlanket.jpg"
              />
              <CardFlip
                title="Bulk shipping solutions"
                description="The cargo system specially designed for huge bulk shipments ensure safe transport of your large, pallet-size loads of temperature-controlled goods and solutions available for 15°C to 25°C and 2°C to 25°C. This system has been validated for summer and winter and targeted for 120 hours duration."
                image="ambientShippers/bulk-shipping-solution.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbientShippers;
