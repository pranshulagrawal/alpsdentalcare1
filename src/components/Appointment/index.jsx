import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Appointment = () => {
  return (
    <>
      <div className="page-banner-area">
        <div className="container">
          <div className="page-banner-content" data-cues="slideInUp">
            <h2>Appointment</h2>
            <ul className="list">
              <li>
                <a href="/">HOME</a>
              </li>
              <li>APPOINTMENT</li>
              <li>NEW PATIENT</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="appointment-wrap-area ptb-150">
        <div className="container">
          <form
            name="appointment v1"
            method="post"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            {/* Hidden input to specify the form name */}
            <input type="hidden" name="form-name" value="appointment v1" />

            <div className="appointment-wrap-inner" data-cues="slideInUp">
              <h3>Your Contact Information:</h3>
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label>Patient Name</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      name="patient-name"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      required
                      type="tel"
                      className="form-control"
                      name="phone-number"
                      placeholder="___-___-____"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      required
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="appointment-wrap-inner" data-cues="slideInUp">
              <h3>Appointment Information:</h3>
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label>Dental Service</label>
                    <select
                      required
                      className="form-select form-control"
                      name="dental-service"
                    >
                      <option value="" disabled selected>
                        Choose services
                      </option>
                      <option value="General Dentistry">
                        General Dentistry
                      </option>
                      <option value="Oral Surgery">Oral Surgery</option>
                      <option value="Teeth Whitening">Teeth Whitening</option>
                      <option value="Cosmetic Dentistry">
                        Cosmetic Dentistry
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label>Date Of Appointment</label>
                    <input
                      required
                      type="date"
                      className="form-control"
                      name="appointment-date"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>Time</label>
                    <input
                      required
                      name="appointment-time"
                      type="time"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>Notes:</label>
                    <textarea
                      className="form-control"
                      name="notes"
                      placeholder="Notes"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <button type="submit" className="default-btn">
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="cta-area">
        <div className="container">
          <div className="cta-inner-area">
            <div
              className="row justify-content-center align-items-center"
              data-cues="slideInUp"
            >
              <div className="col-lg-8 col-md-12">
                <div className="cta-content">
                  <h3>Medical Emergency! Please Call 0-0-1.</h3>
                  <span>
                    Schedule your visit or if you don't find a time that works
                    for you? Give us a call
                  </span>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="cta-info">
                  <div className="icon">
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
