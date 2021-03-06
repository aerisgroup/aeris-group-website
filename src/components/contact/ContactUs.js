import React, { Fragment } from "react";

import MapContact from "../util/MapContact";
import ScrollRestoration from "../util/scrollRestoration";

class ContactUs extends React.Component {
  render() {
    return (
      <Fragment>
        <ScrollRestoration />
        <section id="contactUs" className="my-5">
          <section className="page contact-us-page m-5 ">
            <section className="clean-block clean-form dark">
              <div className="container">
                <div className="block-heading text-center">
                  <h2 className="text-info mt-5 pt-5">Contact Us</h2>
                  <p>
                    Our team is happy to answer your sales questions. Contact
                    the email address below and we will keep touch as soon as
                    possible
                  </p>
                </div>
              </div>
            </section>
          </section>

          <MapContact
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.04710842575!2d103.86832099999998!3d1.3186037046012853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xba544206b07f1108!2sAeris%20Dynamics%20Pte%20Ltd!5e0!3m2!1sen!2sus!4v1575903726776!5m2!1sen!2sus"
            description={
              <div>
                <h3>Singapore</h3>
                <p>Aeris Dynamics Pte Ltd</p>
                <p>Office : Blk 11 #07-05 Kallang Place</p>
                <p>Mailing : Blk 11 #07-01 Kallang Place</p>
                <p>Tel: 65-6296 8368</p>
                <p>Singapore 339155</p>
                <a
                  href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#115;&#97;&#108;&#101;&#115;&#64;&#97;&#101;&#114;&#105;&#115;&#46;&#99;&#111;&#109;&#46;&#115;&#103;?Subject=Sales Question"
                  target="_top"
                >
                  &#115;&#97;&#108;&#101;&#115;&#64;&#97;&#101;&#114;&#105;&#115;&#46;&#99;&#111;&#109;&#46;&#115;&#103;
                </a>
              </div>
            }
          />
          <MapContact
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13640.777452561371!2d121.37573722466016!3d31.270718543730602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b26f1b95858817%3A0x6fdd50ce4dda4a99!2sPutuo%2C%20China%2C%20200331!5e0!3m2!1sen!2sus!4v1575904549993!5m2!1sen!2sus"
            description={
              <div>
                <h3>China</h3>
                <p>Aeris Trading (Shanghai) Co.Ltd</p>
                <p>West Half Floor 1, No.13 Suide Road</p>
                <p>Lane 2, Putuo</p>
                <p>Shanghai China 200331</p>

                <a
                  href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#67;&#78;&#115;&#97;&#108;&#101;&#115;&#64;&#97;&#101;&#114;&#105;&#115;&#46;&#99;&#111;&#109;&#46;&#115;&#103;?Subject=Sales Question"
                  target="_top"
                >
                  &#67;&#78;&#115;&#97;&#108;&#101;&#115;&#64;&#97;&#101;&#114;&#105;&#115;&#46;&#99;&#111;&#109;&#46;&#115;&#103;
                </a>
              </div>
            }
          />
          <MapContact
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1166434638826!2d72.88376211437722!3d19.102538156102998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c86e0e038efd%3A0x3546528e032d9354!2sAERIS%20DYNAMICS%20INDIA!5e0!3m2!1sen!2sus!4v1575904675813!5m2!1sen!2sus"
            description={
              <div>
                <h3>India</h3>
                <p>Aeris Dynamics Packaging India Pvt Ltd</p>
                <p>A-124, First Floor, Sagar Tech Plaza, A K Road</p>
                <p>Sakinaka Junction, Andheri East. Mumbai 400072</p>
                <p>Tel: 7303257692</p>

                <a
                  href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#73;&#78;&#115;&#97;&#108;&#101;&#115;&#64;&#97;&#101;&#114;&#105;&#115;&#46;&#99;&#111;&#109;&#46;&#115;&#103;?Subject=Sales Question"
                  target="_top"
                >
                  &#73;&#78;&#115;&#97;&#108;&#101;&#115;&#64;&#97;&#101;&#114;&#105;&#115;&#46;&#99;&#111;&#109;&#46;&#115;&#103;
                </a>
              </div>
            }
          />
          <MapContact
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.448008801357!2d127.05098451480019!3d37.47375293719505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca6c79c91e9fb%3A0xde464ab29de612db!2s1166-2%20Gaepo-dong%2C%20Gangnam-gu%2C%20Seoul%2C%20South%20Korea!5e0!3m2!1sen!2sus!4v1575904811035!5m2!1sen!2sus"
            description={
              <div>
                <h3>Korea</h3>
                <p>Aeris Korea Co., Ltd</p>
                <p>1166-2 Gaepo 4-dong</p>
                <p>Gangnam-gu</p>
                <p>Tel: (82) 7086700535</p>

                <a
                  href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#75;&#82;&#115;&#97;&#108;&#101;&#115;&#64;&#97;&#101;&#114;&#105;&#115;&#46;&#99;&#111;&#109;&#46;&#115;&#103;?Subject=Sales Question"
                  target="_top"
                >
                  &#75;&#82;&#115;&#97;&#108;&#101;&#115;&#64;&#97;&#101;&#114;&#105;&#115;&#46;&#99;&#111;&#109;&#46;&#115;&#103;
                </a>
              </div>
            }
          />
          <MapContact
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15937.38070832849!2d101.75787576885502!3d3.0014363433874243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdcb0e52b2a3a9%3A0x15a57ee6261d4c6f!2sBukit%20Angkat%2C%2043000%20Cheras%2C%20Selangor%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1575912563428!5m2!1sen!2sus"
            description={
              <div>
                <h3>Malaysia</h3>
                <p>Aeris Malaysia Sdn Bhd</p>
                <p>No 23 , Jalan BA 2/1 ,</p>
                <p>Kawasan Perindustrian Bukit Angkat</p>
                <p>43000 Kajang </p>
                <p>Selangor Darul Ehsan, Malaysia</p>
                <a
                  href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#77;&#89;&#115;&#97;&#108;&#101;&#115;&#64;&#97;&#101;&#114;&#105;&#115;&#46;&#99;&#111;&#109;&#46;&#115;&#103;?Subject=Sales Question"
                  target="_top"
                >
                  &#77;&#89;&#115;&#97;&#108;&#101;&#115;&#64;&#97;&#101;&#114;&#105;&#115;&#46;&#99;&#111;&#109;&#46;&#115;&#103;
                </a>
              </div>
            }
          />
        </section>
      </Fragment>
    );
  }
}

export default ContactUs;
