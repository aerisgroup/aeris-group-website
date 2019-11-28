import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
require("dotenv").config();

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ContactMap extends Component {
  static defaultProps = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 0
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        style={{ height: "400px", width: "400px" }}
        className="align-self-center m-auto"
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBHfXx7O4-UYPPGYIske97yhi24YHfi9Q4" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
          <AnyReactComponent lat={23.955413} lng={34.337844} text="My Marker" />
          <AnyReactComponent lat={59.955413} lng={36.337844} text="My Marker" />
          <AnyReactComponent lat={90.955413} lng={39.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default ContactMap;
