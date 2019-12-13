import React from "react";

import ModalCard from "../../util/ModalCard";
import ScrollRestoration from "../../util/scrollRestoration";

const FrozenShippers = () => {
  return (
    <div>
      <ScrollRestoration />
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
              <ModalCard
                image="frozenShippers/standardDryIceShippers.png"
                title="Standard Dry Ice Shippers"
                description={
                  <div>
                    <p>
                      General EPS shippers with wide range of product volume
                      from 2.4 Litres to 148 Litres using dry ice to immerse
                      products to be shipped under frozen stage during shipment.
                    </p>
                  </div>
                }
              />
              <ModalCard
                image="frozenShippers/PCM-Frozen-Shippers.png"
                title="PCM Frozen Shippers"
                description={
                  <div>
                    <p>
                      Shippers with Phase Change Material (PCM) that completely
                      encloses the temperature-sensitive payload without the
                      need for ice, dry ice or cool packs — ensuring stable,
                      consistent temperature performance within -15&#176;C to
                      -25&#176;C, available products volume 4.8 L, 21.1 and 46.8
                      Litres.
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
                      This shipping system specially designed as a pallet
                      shipper for huge bulk shipments ensure safe transport of
                      your large, pallet-size loads of temperature-controlled
                      goods and solutions available for below -20&#176;C. This
                      system has been validated for 96-120 hours duration. There
                      are different sizes of packaging available from 290 to 420
                      Litres.
                    </p>
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

export default FrozenShippers;
