import React from "react";
import ModalCard from "../../util/ModalCard";

const DataLoggers = () => {
  return (
    <div>
      <div className="content my-5">
        <div className="container">
          <h2 className="text-center">Data Loggers</h2>
          <div className="d-flex justify-content-around flex-wrap">
            <ModalCard
              image="dataLoggers/tempod-series.png"
              title="Tempod Series"
              description={
                <div>
                  <p>
                    They are designed for the complex conditions in transport
                    and storage, with mark button for recording important
                    events, users would be fully aware of the all events which
                    need special attention, and multiple alarms could deliver
                    detailed statistic results in various alarm ranges, this
                    helps to offer more visibility for biopharmaceutical
                    products in cold chain and validation operations. Available
                    with Bluetooth options as well.
                  </p>
                </div>
              }
            />

            <ModalCard
              image="dataLoggers/pro-temperature-label.jpg"
              title="ITAG3 Pro Temperature Label"
              description={
                <div>
                  <p>
                    It is specially designed for temperature monitoring in cold
                    chain logistics, whose thin and flat packaging design makes
                    it well suited for any applications limited in space, like
                    pharmaceutical containers.
                  </p>
                </div>
              }
            />
            <ModalCard
              image="dataLoggers/alpha-td80.png"
              title="Alpha TD80"
              description={
                <div>
                  <p>Dry Ice Probeless USB PDF Data Logger</p>
                  <p>
                    A new probeless Dry Ice logger with the capability to
                    automatically generating encrypted PDF format report, no
                    software required to obtain data, embedded raw data allows
                    analyzing report via TempCentre and Cold Chain Cloud. It
                    comes with a repeat start function enables quick start on
                    site without re-configuration. Alpha TD80 is factory 3-point
                    calibrated, each logger comes with calibration certificate
                    with accurate calibration results. It comes with 5 alarm
                    ranges offer precise and intuitive statistics for each
                    configured alarm range.
                  </p>
                  <p>
                    It complies with EN12830:1999 for transport, storage and
                    distribution of chilled, frozen, deep frozen, quick-frozen
                    food and others.{" "}
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

export default DataLoggers;
