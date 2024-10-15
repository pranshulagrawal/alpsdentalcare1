/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate;
  return (
    <>
      <div class="page-banner-area">
        <div class="container">
          <div class="page-banner-content" data-cues="slideInUp">
            <h2>404 Error Page</h2>
            <ul class="list">
              <li>
                <a href="#" onClick={navigate("/")}>
                  HOME
                </a>
              </li>
              <li>404 ERROR PAGE</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Page Banner Area -->
        
        <!-- Start Not Found Area --> */}
      <div class="not-found-area ptb-150">
        <div class="container" data-cues="slideInUp">
          <div class="not-found-content text-center">
            <img src="assets/images/error.png" alt="error-image" />
            <h3>Oops! That page can't be found</h3>
            <a href="#" onClick={navigate("/")} class="default-btn">
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
