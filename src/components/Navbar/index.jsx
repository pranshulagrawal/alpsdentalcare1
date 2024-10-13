import React, { useState, useEffect } from "react";

const Nabar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled past 100px, for example
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`navbar navbar-expand-xl navbar-style-three-area ${
          sticky ? "sticky-navbar" : ""
        }`}
        id="navbar"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="index-3.html">
            <img src="assets/images/logo.png" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarOffcanvas"
          >
            <span className="burger-menu">
              <span className="top-bar"></span>
              <span className="middle-bar"></span>
              <span className="bottom-bar"></span>
            </span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <a href="index.html" className="nav-link active">
                  {" "}
                  HOME{" "}
                </a>
              </li>
              <li className="nav-item">
                <a href="services-style-two.html" className="nav-link">
                  {" "}
                  SERVICES{" "}
                </a>
              </li>
              <li className="nav-item">
                <a href="about-us.html" className="nav-link">
                  {" "}
                  ABOUT US{" "}
                </a>
              </li>
              <li className="nav-item">
                <a href="contact-us.html" className="nav-link">
                  CONTACT US
                </a>
              </li>
            </ul>
            <div className="others-option d-flex align-items-center">
              <div className="option-item">
                <a href="appointment.html" className="default-btn">
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
        className="responsive-navbar offcanvas offcanvas-end"
        tabindex="-1"
        id="navbarOffcanvas"
      >
        <div className="offcanvas-header">
          <a href="index-3.html" className="logo d-inline-block">
            <img src="assets/images/logo2.png" alt="logo" />
          </a>
          <button
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            className="close-btn"
          >
            <i data-feather="x"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <div className="accordion" id="navbarAccordion">
            <div className="accordion-item">
              <button
                className="accordion-button without-icon active"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <a className="accordion-link" href="index.html">
                  {" "}
                  HOME{" "}
                </a>
              </button>
            </div>
            <div className="accordion-item">
              <button
                className="accordion-button without-icon"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <a href="services-style-two.html" className="accordion-link">
                  SERVICES
                </a>
              </button>
            </div>
            <div className="accordion-item">
              <button
                className="accordion-button without-icon"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <a href="about-us.html" className="accordion-link">
                  {" "}
                  ABOUT US{" "}
                </a>
              </button>
            </div>
            <div className="accordion-item">
              <a
                className="accordion-button without-icon"
                href="contact-us.html"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div className="others-option d-flex align-items-center justify-content-center">
            <div className="option-item">
              <a href="appointment.html" className="default-btn">
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
