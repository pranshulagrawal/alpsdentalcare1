import React from "react";

const Footer = () => {
  return (
    <footer class="footer-area">
      <div class="container">
        <div
          class="row justify-content-center align-items-center"
          data-cue="slideInUp"
        >
          <div class="col-xl-5 col-md-12">
            <div class="single-footer-widget pe-5">
              <ul class="info-list">
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
          <div class="col-xl-7 col-md-12">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-sm-4">
                <div class="single-footer-widget ps-5">
                  <h3>Quick Link</h3>
                  <ul class="custom-links">
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
              <div class="col-lg-4 col-sm-4">
                <div class="single-footer-widget ps-5">
                  <h3>Legal</h3>
                  <ul class="custom-links">
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
              <div class="col-lg-4 col-sm-4">
                <div class="single-footer-widget ps-5">
                  <h3>Follow Us</h3>
                  <ul class="custom-links">
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
        <div class="copyright-area">
          <p>@ ALPS Dental Care. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
