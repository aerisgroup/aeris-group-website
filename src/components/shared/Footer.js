import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer font-small blue-grey lighten-5">
      <div style={{ backgroundColor: "#035ea8" }}>
        <div className="container">
          <div className="row py-4 d-flex align-items-center">
            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0 text-white">
              <h6 className="mb-0">
                Get connected with us on social networks!
              </h6>
            </div>

            <div className="col-md-6 col-lg-7 text-center text-md-right text-white">
              <a className="fb-ic">
                <i className="fab fa-facebook-f white-text mr-4"> </i>
              </a>

              <a className="tw-ic">
                <i className="fab fa-twitter white-text mr-4"> </i>
              </a>

              <a className="gplus-ic">
                <i className="fab fa-google-plus-g white-text mr-4"> </i>
              </a>

              <a className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-4"> </i>
              </a>

              <a className="ins-ic">
                <i className="fab fa-instagram white-text"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center text-md-left mt-5">
        <div className="row mt-3 dark-grey-text">
          <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
            <h3 className="font-weight-bold">AerisGroup</h3>
            <hr
              className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              We are an innovative Pioneer in this industry, Providing
              End-To-End Services from manufacturing of temperature controlled
              solutions to logistical and warehousing support
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Products</h6>
            <hr
              className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <Link to="/productandsolution/frozen-shippers">
                Frozen Shippers
              </Link>
            </p>
            <p>
              <Link to="/productandsolution/chilled-shippers">
                Chilled Shippers
              </Link>
            </p>
            <p>
              <Link to="/productandsolution/ambient-shippers">
                Ambient Shippers
              </Link>
            </p>
            <p>
              <Link to="/productandsolution/secondary-packaging">
                Secondary Packaging
              </Link>
            </p>
            <p>
              <Link to="/productandsolution/data-loggers">Data Loggers</Link>
            </p>
            <p>
              <Link to="/productandsolution/charterpod">
                Charterpod Leasing
              </Link>
            </p>
          </div>
          {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Useful links</h6>
            <hr
              className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <a className="dark-grey-text" href="#!">
                Your Account
              </a>
            </p>
            <p>
              <a className="dark-grey-text" href="#!">
                Become an Affiliate
              </a>
            </p>
            <p>
              <a className="dark-grey-text" href="#!">
                Shipping Rates
              </a>
            </p>
            <p>
              <a className="dark-grey-text" href="#!">
                Help
              </a>
            </p>
          </div>*/}

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase font-weight-bold">Contact</h6>
            <hr
              className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <i className="fas fa-home mr-3"></i> New York, NY 10012, US
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> info@example.com
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print mr-3"></i> + 01 234 567 89
            </p>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center text-black-50 py-3">
        © 2019 Copyright:
        <a className="dark-grey-text" href="#">
          {" "}
          AerisGroup
        </a>
      </div>
    </footer>
  );
};

export default Footer;
