import React, { Fragment } from "react";
import ContactMap from "./ContactMap";

const ContactUs = props => {
  console.log(props);
  return (
    <Fragment>
      <section id="contactUs" className="my-5">
        <div class="d-flex flex-wrap">
          <section class="page contact-us-page m-5 col-lg-6">
            <section class="clean-block clean-form dark">
              <div class="container">
                <div class="block-heading text-center">
                  <h2 class="text-info">Contact Us</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc quam urna, dignissim nec auctor in, mattis vitae leo.
                  </p>
                </div>
                <form>
                  <div class="form-group">
                    <label>Name</label>
                    <input class="form-control" type="text" />
                  </div>
                  <div class="form-group">
                    <label>Subject</label>
                    <input class="form-control" type="text" />
                  </div>
                  <div class="form-group">
                    <label>Email</label>
                    <input class="form-control" type="email" />
                  </div>
                  <div class="form-group">
                    <label>Message</label>
                    <textarea class="form-control"></textarea>
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

          <ContactMap />
        </div>
      </section>
    </Fragment>
  );
};

export default ContactUs;
