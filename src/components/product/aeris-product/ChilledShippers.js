import React from "react";

import ModalCard from "../../util/ModalCard";
import ScrollRestoration from "../../util/scrollRestoration";

const ChilledShippers = () => {
  return (
    <div>
      <ScrollRestoration />
      <div className="content my-5">
        <div className="container">
          <h2 className="text-center">Chilled Shippers</h2>

          <p className="text-justify">
            Aeris Chill shippers are a complete line of pre-validated containers
            that can be maintained product temperature within 2°C to 8°C from 24
            to 120 hours of transit duration both in summer and winter shipments
            with different cool pack configurations. Chill shippers have been
            classified into three category namely,
          </p>
          <div className="d-flex justify-content-around flex-wrap">
            <ModalCard
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
                </div>
              }
            />
            <ModalCard
              image="chilledShippers/premiumShippers.png"
              title="Premium Shippers/ VIP Shippers"
              description={
                <div>
                  <p>
                    The VIP shippers provide great stability performance for
                    longer duration at an extreme weather condition. This system
                    is able to withstand adverse temperature condition.
                  </p>
                  <p>
                    The VIP provides a good option for reusable purpose with
                    high return on investment whilst ensuring your critical
                    payload reaches its destination safely.
                  </p>
                  <div>
                    <img
                      src={require("../../../img/products/chilledShippers/premiumShippersDetail.png")}
                      alt="premiumShippersDetail"
                      className="w-100"
                    />
                  </div>
                </div>
              }
            />
            <ModalCard
              image="ambientShippers/bulk-shipping-solution.png"
              title="Bulk Shipping Solutions"
              description={
                <div>
                  <p>
                    The cargo system specially designed for huge bulk shipments
                    ensure safe transport of your large, pallet-size loads of
                    temperature-controlled goods and solutions available for
                    +2°C to +8°C. This system has been validated for summer and
                    winter and targeted form 72 to 120 hours duration.
                  </p>

                  <div></div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChilledShippers;
