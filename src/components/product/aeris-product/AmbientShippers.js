import React from "react";

import ModalCard from "../../util/ModalCard";

import ScrollRestoration from "../../util/scrollRestoration";

const AmbientShippers = () => {
  return (
    <div>
      <ScrollRestoration />
      <div className="content">
        <div className="content my-5">
          <div className="container">
            <h2 className="text-center">Ambient Shippers</h2>
            <p className="text-justify">
              Aeris Ambient shippers are pre-validated containers that can be
              maintained product temperature within 2°C to 25°C or 15°C to 25°C
              from 24 to 120 hours of transit duration both in summer and winter
              shipments with different conventional cool pack configurations.
            </p>
            <div className="d-flex justify-content-around flex-wrap">
              <ModalCard
                image="ambientShippers/standardShippers.png"
                title="Standard Shippers"
                description={
                  <div>
                    <p>
                      Aeris Ambient shippers are pre-qualified +15°C to +25°C
                      shipper series validated from 48 to 96 hours of shipping
                      duration using conventional cool packs to be conditioned
                      at room temperature.
                    </p>
                  </div>
                }
              />
              <ModalCard
                image="ambientShippers/bulk-shipping-solution.png"
                title="Bulk Shipping Solutions"
                description={
                  <div>
                    <p>
                      The cargo system specially designed for huge bulk
                      shipments ensure safe transport of your large, pallet-size
                      loads of temperature-controlled goods and solutions
                      available for 15°C to 25°C and 2°C to 25°C. This system
                      has been validated for summer and winter and targeted for
                      120 hours duration.
                    </p>
                  </div>
                }
              />
              <ModalCard
                image="ambientShippers/AerisGroupThermalBlanket.jpg"
                title="Thermal Blanket"
                description={
                  <div>
                    <p>
                      Thermal blanket is a validated specialized insulated
                      shipping solution to combat pelleted pharmaceutical cargo
                      to maintain a comfortable temperature of product at 15°C
                      to 25°C.
                    </p>
                    <p>
                      It cut off the high temperature band experience by cargo
                      and shielding it from extreme weather and temperature
                      fluctuation during transport of your freight, ultimately
                      to maintain product integrity.
                    </p>
                    <p>
                      The blanket comes in full and half pallet sizes to fit
                      your need. It uses “wrap concept” to assemble which make
                      the packing ultra friendly.
                    </p>
                    <ul>
                      <li>Tear resistant</li>
                      <li>Protective Cover</li>
                      <li>Non-Toxic/non-carcinogenic</li>
                      <li>Reliable and Cost - effective</li>
                    </ul>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbientShippers;
