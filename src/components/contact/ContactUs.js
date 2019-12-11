import React, { Fragment, useState } from "react";
import ContactMap from "./ContactMap";
import MapContact from "../util/MapContact";

const ContactUs = props => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mailSent, setMailSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    alert(`Submitting Name ${name}`);
  };

  return (
    <Fragment>
      <section id="contactUs" className="my-5">
        <section class="page contact-us-page m-5 ">
          <section class="clean-block clean-form dark">
            <div class="container">
              <div class="block-heading text-center">
                <h2 class="text-info mt-5 pt-5">Contact Us</h2>
                <p>
                  Our team is happy to answer your sales questions. Fill out the
                  form and we'll be in touch as soon as possible
                </p>
              </div>

              <form action="POST" data-netlify="true">
                <div class="form-group">
                  <label>Name</label>
                  <input
                    class="form-control"
                    type="text"
                    name="name"
                    placeholder="name"
                  />
                </div>

                <div class="form-group">
                  <label>Email</label>
                  <input
                    class="form-control"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                  />
                </div>
                <div class="form-group">
                  <label>Message</label>
                  <textarea
                    class="form-control"
                    name="message"
                    id="message"
                    placeholder="message"
                    rows="6"
                  ></textarea>
                </div>
                <div class="form-group">
                  <button class="btn btn-primary btn-block" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </section>
        </section>

        <MapContact
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.04710842575!2d103.86832099999998!3d1.3186037046012853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xba544206b07f1108!2sAeris%20Dynamics%20Pte%20Ltd!5e0!3m2!1sen!2sus!4v1575903726776!5m2!1sen!2sus"
          description={
            <div>
              <h3>Singpore</h3>
              <p>Aeris Dyanmic Pte Ltd</p>
              <p>Office : Blk 11 #07-05 Kallang Place</p>
              <p>Mailing : Blk 11 #07-01 Kallang Place</p>
              <p>Tel: 65-6296 8368</p>
              <p>Singapore 339155</p>
              <a
                href="mailto:sales@aeris.com.sg?Subject=Hello%20again"
                target="_top"
              >
                sales@aeris.com.sg
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
                href="mailto:CNsales@aeris.com.sg?Subject=Hello%20again"
                target="_top"
              >
                CNsales@aeris.com.sg
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
                href="mailto:INsales@aeris.com.sg?Subject=Hello%20again"
                target="_top"
              >
                INsales@aeris.com.sg
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
                href="mailto:KRsales@aeris.com.sg?Subject=Hello%20again"
                target="_top"
              >
                KRsales@aeris.com.sg
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
                href="mailto:MYsales@aeris.com.sg?Subject=Hello%20again"
                target="_top"
              >
                MYsales@aeris.com.sg
              </a>
            </div>
          }
        />
      </section>
    </Fragment>
  );
};

export default ContactUs;
