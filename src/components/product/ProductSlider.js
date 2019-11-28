import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const ProductSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  return (
    <div id="productAndSolution">
      <Carousel responsive={responsive}>
        <div className={`product-items frozen-shippers `}>
          <Link
            to="/productandsolution/frozen-shippers"
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              src={require("../../img/icons/frozen.gif")}
              alt="frozen"
              width="150"
              height="66"
            />
            <p className="">Frozen Shippers</p>
          </Link>
        </div>

        <div className="product-items chilled-shippers">
          <Link
            to="/productandsolution/chilled-shippers"
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              src={require("../../img/icons/chilled.gif")}
              alt="frozen"
              width="150"
              height="66"
            />
            <p className="">Chilled Shippers</p>
          </Link>
        </div>
        <div className="product-items ambient-shippers">
          <Link
            to="/productandsolution/ambient-shippers"
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              src={require("../../img/icons/ambient.gif")}
              alt="frozen"
              width="150"
              height="66"
            />
            <p className="">Ambient Shippers</p>
          </Link>
        </div>
        <div className="product-items secondary-packaging">
          <Link
            to="/productandsolution/secondary-packaging"
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              src={require("../../img/icons/secondary_packaging.png")}
              alt=""
              width="66"
              height="66"
            />
            <p className="">Secondary Packaging</p>
          </Link>
        </div>
        <div className="product-items data-loggers">
          <Link
            to="/productandsolution/data-loggers"
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              src={require("../../img/icons/datalogger.png")}
              alt=""
              width="66"
              height="66"
            />
            <p className="">Data Loggers</p>
          </Link>
        </div>
      </Carousel>
    </div>
  );
};

export default ProductSlider;
