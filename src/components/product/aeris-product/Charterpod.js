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

            <div class="videoWrapper">
              <iframe
                title="charterpod"
                width="560"
                height="349"
                src="https://youtube.com/embed/ck7aFcq7e9c"
                frameborder="0"
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charterpod;
