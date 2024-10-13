/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Nabar = () => {
  const [sticky, setSticky] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); // State to track the active link
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link); // Update the active link state
    navigate(link); // Navigate to the clicked link
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-xl navbar-style-three-area ${
          sticky ? "sticky-navbar" : ""
        }`}
        id="navbar"
      >
        <div className="container-fluid">
          <a className="navbar-brand" onClick={() => handleLinkClick("/")}>
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
                <a
                  onClick={() => handleLinkClick("/")}
                  className={`nav-link ${activeLink === "/" ? "active" : ""}`}
                >
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => handleLinkClick("/services")}
                  className={`nav-link ${
                    activeLink === "/services" ? "active" : ""
                  }`}
                >
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => handleLinkClick("/about-us")}
                  className={`nav-link ${
                    activeLink === "/about-us" ? "active" : ""
                  }`}
                >
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => handleLinkClick("/blog")}
                  className={`nav-link ${
                    activeLink === "/blog" ? "active" : ""
                  }`}
                >
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => handleLinkClick("/contact-us")}
                  className={`nav-link ${
                    activeLink === "/contact-us" ? "active" : ""
                  }`}
                >
                  CONTACT US
                </a>
              </li>
            </ul>
            <div className="others-option d-flex align-items-center">
              <div className="option-item">
                <a
                  onClick={() => handleLinkClick("/appointment")}
                  className="default-btn"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="responsive-navbar offcanvas offcanvas-end"
        tabIndex="-1"
        id="navbarOffcanvas"
      >
        <div className="offcanvas-header">
          <a
            onClick={() => handleLinkClick("/")}
            className="logo d-inline-block"
            href="#"
          >
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
                className={`accordion-button without-icon ${
                  activeLink === "/" ? "active" : ""
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded={activeLink === "/"}
                aria-controls="collapseOne"
                onClick={() => handleLinkClick("/")}
              >
                <a className="accordion-link">HOME</a>
              </button>
            </div>
            <div className="accordion-item">
              <button
                className={`accordion-button without-icon ${
                  activeLink === "/services" ? "active" : ""
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded={activeLink === "/services"}
                aria-controls="collapseTwo"
                onClick={() => handleLinkClick("/services")}
              >
                <a className="accordion-link">SERVICES</a>
              </button>
            </div>
            <div className="accordion-item">
              <button
                className={`accordion-button without-icon ${
                  activeLink === "/about-us" ? "active" : ""
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded={activeLink === "/about-us"}
                aria-controls="collapseThree"
                onClick={() => handleLinkClick("/about-us")}
              >
                <a className="accordion-link">ABOUT US</a>
              </button>
            </div>
            <div className="accordion-item">
              <a
                className={`accordion-button without-icon ${
                  activeLink === "/contact-us" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("/contact-us")}
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div className="others-option d-flex align-items-center justify-content-center">
            <div className="option-item">
              <a
                onClick={() => handleLinkClick("/appointment")}
                className="default-btn"
              >
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
