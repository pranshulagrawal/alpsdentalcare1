import { faMap } from "@fortawesome/free-regular-svg-icons/faMap";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div class="page-banner-area">
        <div class="container">
          <div class="page-banner-content" data-cues="slideInUp">
            <h2>Contact Us</h2>
            <ul class="list">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>CONTACT US</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Page Banner Area -->

    <!-- Start Contact Info Area --> */}
      <div class="contact-info-area pt-150 pb-125">
        <div class="container">
          <div class="row justify-content-center" data-cues="slideInUp">
            <div class="col-xl-3 col-md-6">
              <div class="contact-info-card">
                <div class="icon">
                  <FontAwesomeIcon icon={faMap} />
                </div>
                <h3>Our Location</h3>
                <p>
                  2nd Floor, Shop no. 2032, JMS Crosswalk, Sector 93, Gurugram
                </p>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="contact-info-card">
                <div class="icon bg3">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <h3>Urgent Call</h3>
                <p>
                  <a href="tel:08447482899">08447482899</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Contact Info Area -->

    <!-- Start Map Area --> */}
      <div class="map-area">
        <iframe
          title="dentaladdress"
          src="https://www.google.com/maps/embed/v1/MAP_MODE?key=AIzaSyAfMVnaEwFlZ10pc9fyrHlBqX7a1Dgc2ZI&PARAMETERS"
          allowfullscreen
        ></iframe>
      </div>
      {/* <!-- End Map Area -->

    <!-- Start Contact US Area --> */}
      <div class="contact-us-area ptb-150">
        <div class="container">
          <form class="contact-us-form" data-cues="slideInUp" netlify>
            <h3>Get In Touch</h3>
            <div class="row justify-content-center">
              <div class="col-lg-6 col-md-12">
                <div class="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="form-group">
                  <div class="form-group">
                    <label>Phone Number</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="___-___-____"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="form-group">
                  <div class="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Your email address"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="form-group">
                  <div class="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your subject"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-12">
                <div class="form-group">
                  <label>Your Message:</label>
                  <textarea class="form-control" placeholder="Notes"></textarea>
                </div>
              </div>
              <div class="col-lg-12 col-md-12">
                <button type="submit" class="default-btn">
                  Submit Request
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- End Contact US Area -->

    <!-- Start CTA Area --> */}
      <div class="cta-area">
        <div class="container">
          <div class="cta-inner-area">
            <div
              class="row justify-content-center align-items-center"
              data-cues="slideInUp"
            >
              <div class="col-lg-8 col-md-12">
                <div class="cta-content">
                  <h3>Medical Emergency! Please Call 0-0-1.</h3>
                  <span>
                    Schedule your visit or if you don't find a time that works
                    for you? Give us a call
                  </span>
                </div>
              </div>
              <div class="col-lg-4 col-md-12">
                <div class="cta-info">
                  <div class="icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <span>
                    Call: <a href="tel:08447482899">08447482899</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
