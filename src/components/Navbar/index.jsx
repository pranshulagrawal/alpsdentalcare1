import React from "react";

const Nabar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-xl navbar-style-three-area" id="navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="index-3.html">
            <img src="assets/images/logo.png" alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarOffcanvas"
          >
            <span class="burger-menu">
              <span class="top-bar"></span>
              <span class="middle-bar"></span>
              <span class="bottom-bar"></span>
            </span>
          </button>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav m-auto">
              <li class="nav-item">
                <a href="index.html" class="nav-link active">
                  {" "}
                  HOME{" "}
                </a>
              </li>
              <li class="nav-item">
                <a href="services-style-two.html" class="nav-link">
                  {" "}
                  SERVICES{" "}
                </a>
              </li>
              <li class="nav-item">
                <a href="about-us.html" class="nav-link">
                  {" "}
                  ABOUT US{" "}
                </a>
              </li>
              <li class="nav-item">
                <a href="contact-us.html" class="nav-link">
                  CONTACT US
                </a>
              </li>
            </ul>
            <div class="others-option d-flex align-items-center">
              <div class="option-item">
                <a href="appointment.html" class="default-btn">
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- End Navbar Area -->

    <!-- Start Responsive Navbar Area --> */}
      <div
        class="responsive-navbar offcanvas offcanvas-end"
        tabindex="-1"
        id="navbarOffcanvas"
      >
        <div class="offcanvas-header">
          <a href="index-3.html" class="logo d-inline-block">
            <img src="assets/images/logo2.png" alt="logo" />
          </a>
          <button
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            class="close-btn"
          >
            <i data-feather="x"></i>
          </button>
        </div>
        <div class="offcanvas-body">
          <div class="accordion" id="navbarAccordion">
            <div class="accordion-item">
              <button
                class="accordion-button without-icon active"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <a class="accordion-link" href="index.html">
                  {" "}
                  HOME{" "}
                </a>
              </button>
            </div>
            <div class="accordion-item">
              <button
                class="accordion-button without-icon"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <a href="services-style-two.html" class="accordion-link">
                  SERVICES
                </a>
              </button>
            </div>
            <div class="accordion-item">
              <button
                class="accordion-button without-icon"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <a href="about-us.html" class="accordion-link">
                  {" "}
                  ABOUT US{" "}
                </a>
              </button>
            </div>
            <div class="accordion-item">
              <a class="accordion-button without-icon" href="contact-us.html">
                CONTACT US
              </a>
            </div>
          </div>
          <div class="others-option d-flex align-items-center justify-content-center">
            <div class="option-item">
              <a href="appointment.html" class="default-btn">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nabar;
