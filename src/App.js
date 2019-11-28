import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/landing/Landing";
import AboutUs from "./components/about/AboutUs";
import ProductAndSolution from "./components/product/ProductAndSolution";
import ContactUs from "./components/contact/ContactUs";

//import products

import FrozenShippers from "./components/product/aeris-product/FrozenShippers";
import ChilledShippers from "./components/product/aeris-product/ChilledShippers";
import AmbientShippers from "./components/product/aeris-product/AmbientShippers";
import SecondaryPackaging from "./components/product/aeris-product/SecondaryPackaging";
import DataLoggers from "./components/product/aeris-product/DataLoggers";

import "./App.css";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={ContactUs} />
          <Route path="/productandsolution" component={ProductAndSolution} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
