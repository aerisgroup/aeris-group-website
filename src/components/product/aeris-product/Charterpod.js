import React from "react";
import ScrollRestoration from "../../util/scrollRestoration";

const Charterpod = () => {
  return (
    <div>
      <ScrollRestoration />
      <div className="content">
        <div className="content my-5">
          <div className="container">
            <h2 className="text-center">Charterpod Leasing</h2>
            <p className="justify">
              An innovative solution that uses recyclable Vacuum Insulated Panel
              (VIP) as the core insulation technology.
            </p>
            <p>
              Users like the pay-per-use features, which mean they do not need
              to worry about managing and disposing of inventory since it is a
              subscription service. Most importantly, customers have full
              assurance that their products are better protected by VIP
              technology, compared with styrofoam boxes.
            </p>

            <iframe
              title="charterpod video"
              height="315"
              src="https://youtube.com/embed/ck7aFcq7e9c"
              className="mx-auto d-block w-100"
              my-5
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charterpod;
