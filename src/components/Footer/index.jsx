import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div
            className="row justify-content-center align-items-center"
            data-cue="slideInUp"
          >
            <div className="col-xl-5 col-md-12">
              <div className="single-footer-widget pe-5">
                <ul className="info-list">
                  <li>
                    <span>Location:</span> 2nd Floor, Shop no. 2032, JMS
                    Crosswalk, Sector 93, Gurugram, Haryana 122505
                  </li>
                  <li>
                    <span>Phone:</span>
                    <a href="tel:+91 08447482899">+91 08447482899</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 col-md-12">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-4">
                  <div className="single-footer-widget ps-5">
                    <h3>Quick Link</h3>
                    <ul className="custom-links">
                      <li>
                        <a href="about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="services-style-one.html">Our Services</a>
                      </li>
                      <li>
                        <a href="membership-plan.html">Pricing & Plan</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <div className="single-footer-widget ps-5">
                    <h3>Legal</h3>
                    <ul className="custom-links">
                      <li>
                        <a href="terms-conditions.html">Terms & Conditions</a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Help Center</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <div className="single-footer-widget ps-5">
                    <h3>Follow Us</h3>
                    <ul className="custom-links">
                      <li>
                        <a href="#" target="_blank">
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          Linkedin
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <p>@ ALPS Dental Care. All Rights Reserved</p>
          </div>
        </div>
      </footer>
      <button
        type="button"
        id="back-to-top"
        className="position-fixed text-center border-0 p-0"
      >
        <FontAwesomeIcon icon={faChevronUp} fade />
      </button>
    </>
  );
};

export default Footer;
