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
                <a href="index.html">HOME</a>
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
                  <i data-feather="map-pin"></i>
                </div>
                <h3>Our Location</h3>
                <p>354 Oakridge, Camden NJ 08102 - USA</p>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="contact-info-card">
                <div class="icon bg2">
                  <i data-feather="mail"></i>
                </div>
                <h3>Email Address</h3>
                <p>
                  <a href="maitlto:contactinfo@demo.com">
                    <span
                      class="__cf_email__"
                      data-cfemail="1a7975746e7b796e73747c755a7e7f777534797577"
                    >
                      [email&#160;protected]
                    </span>
                  </a>
                  <a href="maitlto:support@demo.com">
                    <span
                      class="__cf_email__"
                      data-cfemail="e794929797889593a783828a88c984888a"
                    >
                      [email&#160;protected]
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="contact-info-card">
                <div class="icon bg3">
                  <i data-feather="phone-call"></i>
                </div>
                <h3>Urgent Call</h3>
                <p>
                  <a href="tel:01234567899">+012 (345) 678 99</a>
                  <a href="tel:01234569987">+012 (345) 699 87</a>
                </p>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="contact-info-card">
                <div class="icon bg4">
                  <i data-feather="printer"></i>
                </div>
                <h3>Our Fax</h3>
                <p>
                  <a href="tel:012345678998563214">+012 (345) 678 99 8563214</a>
                  <a href="tel:01234567899856">+012 (345) 678 99 856</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Contact Info Area -->

    <!-- Start Map Area --> */}
      <div class="map-area">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.3649964919105!2d-75.11883742361537!3d39.95559148357617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c857aaaaaaab%3A0xd14ec287d1602f9f!2sPrinter!5e0!3m2!1sen!2sbd!4v1710133722561!5m2!1sen!2sbd"></iframe>
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
                    <i data-feather="phone"></i>
                  </div>
                  <span>
                    Call: <a href="tel:0053194215">(005) 319-4215</a>
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
