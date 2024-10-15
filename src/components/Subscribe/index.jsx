/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";

const Subscribe = () => {
  const navigate = useNavigate();
  return (
    <div className="subscribe-area">
      <div className="container">
        <div className="subscribe-inner-area">
          <div
            className="row justify-content-center align-items-end"
            data-cues="slideInUp"
          >
            <div className="col-lg-8 col-md-12">
              <div className="subscribe-content">
                <span className="sub">Healthy News And Solutions</span>
                <h3>Book your appointment</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <a
                href="#"
                onClick={() => navigate("/appointment")}
                className="default-btn"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
