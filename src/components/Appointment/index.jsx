import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Appointment = () => {
  return (
    <>
      <div class="page-banner-area">
        <div class="container">
          <div class="page-banner-content" data-cues="slideInUp">
            <h2>Appointment</h2>
            <ul class="list">
              <li>
                <a href="">HOME</a>
              </li>
              <li>APPOINTMENT</li>
              <li>NEW PATIENT</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Page Banner Area -->

    <!-- Start Appointment Wrap Area --> */}
      <div class="appointment-wrap-area ptb-150">
        <div class="container">
          <form
            name="appointment"
            method="post"
            data-netlify="true"
            onSubmit="submit"
            netlify
          >
            <div class="appointment-wrap-inner" data-cues="slideInUp">
              <h3>Your Contact Information:</h3>
              <div class="row justify-content-center">
                <div class="col-lg-6 col-md-12">
                  <div class="form-group">
                    <label>Patient Name</label>
                    <input
                      required
                      type="text"
                      class="form-control"
                      name="patient-name"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-12">
                  <div class="form-group">
                    <label>Phone Number</label>
                    <input
                      required
                      type="number"
                      class="form-control"
                      name="phone number"
                      placeholder="___-___-____"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-12">
                  <div class="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="appointment-wrap-inner" data-cues="slideInUp">
              <h3>Appointment Information:</h3>
              <div class="row justify-content-center">
                <div class="col-lg-6 col-md-12">
                  <div class="form-group">
                    <label>Dental Service</label>
                    <select class="form-select form-control">
                      <option selected>Choose services</option>
                      <option value="1">General Dentistry</option>
                      <option value="2">Oral Surgery</option>
                      <option value="3">Teeth Whitening</option>
                      <option value="4">Cosmetic Dentistry</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12">
                  <div class="form-group">
                    <label>Date Of Appointment</label>
                    <input
                      type="date"
                      class="form-control"
                      name="date"
                      placeholder="DD/MM/YYYY"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-md-12">
                  <div class="form-group">
                    <div class="form-group">
                      <label>Time</label>
                      <input
                        name="time"
                        type="time"
                        class="form-control"
                        placeholder="Enter your time"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12">
                  <div class="form-group">
                    <label>Notes:</label>
                    <textarea
                      class="form-control"
                      name="notes"
                      placeholder="Notes"
                    ></textarea>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12">
                  <div class="form-group">
                    <button type="submit" class="default-btn">
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- End Appointment Wrap Area -->

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

export default Appointment;
