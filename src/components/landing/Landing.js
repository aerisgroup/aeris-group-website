import React from "react";
import { Desktop, TechLowerThanDesktop } from "../util/MediaComponent";
import LandingDesktop from "./LandingDesktop";
import LandingMobile from "./LandingMobile";
import MissionStatement from "./MissionStatement";
import Services from "./Services";
import OurService from "./OurService";
import Credential from "./Credential";
import Testimonial from "./Testimonial";
import LandingContactUs from "./LandingContactUs";

const Landing = () => {
  return (
    <div id="landing">
      <Desktop>
        <LandingDesktop />
      </Desktop>
      <TechLowerThanDesktop>
        <LandingMobile />
      </TechLowerThanDesktop>
      <MissionStatement />
      <Services />
      <OurService />
      <Credential />
      <Testimonial />
      <LandingContactUs />
    </div>
  );
};

export default Landing;
