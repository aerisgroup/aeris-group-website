import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import AmbientShipper from "./aeris-product/AmbientShippers";
import ChilledShippers from "./aeris-product/ChilledShippers";
import DataLoggers from "./aeris-product/DataLoggers";
import FrozenShippers from "./aeris-product/FrozenShippers";
import SecondaryPackaging from "./aeris-product/SecondaryPackaging";
import ProductSlider from "./ProductSlider";
import Charterpod from "./aeris-product/Charterpod";

//import products

const ProductAndSolution = props => {
  return (
    <Fragment>
      <ProductSlider />
      <Switch>
        <Route
          path={`${props.match.path}/ambient-shippers`}
          component={AmbientShipper}
        />
        <Route
          path={`${props.match.path}/chilled-shippers`}
          component={ChilledShippers}
        />
        <Route
          path={`${props.match.path}/data-loggers`}
          component={DataLoggers}
        />
        <Route
          path={`${props.match.path}/frozen-shippers`}
          component={FrozenShippers}
        />
        <Route
          path={`${props.match.path}/secondary-packaging`}
          component={SecondaryPackaging}
        />
        <Route path={`${props.match.path}/charterpod`} component={Charterpod} />
      </Switch>
    </Fragment>
  );
};

export default ProductAndSolution;
