/* eslint-disable jsx-a11y/anchor-is-valid */
import { faCancel, faX } from "@fortawesome/free-solid-svg-icons";
import { faCross } from "@fortawesome/free-solid-svg-icons/faCross";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Nabar = () => {
  const [sticky, setSticky] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); // State to track the active link
  const [quickLinks, setQuickLinks] = useState([]); // State to hold quick links
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

  // Fetch quickLinks data from data.json
  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Return the parsed JSON
      })
      .then((data) => {
        setQuickLinks(data.quickLinks); // Set quickLinks from the fetched data
      })
      .catch((error) => console.error("Error fetching data:", error));
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
              {quickLinks.map((link, index) => (
                <li className="nav-item" key={index}>
                  <a
                    onClick={() => handleLinkClick(link.url)}
                    className={`nav-link ${
                      activeLink === link.url ? "active" : ""
                    }`}
                  >
                    {link.title.toUpperCase()}
                  </a>
                </li>
              ))}
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
            <FontAwesomeIcon icon={faX} spin />
          </button>
        </div>
        <div className="offcanvas-body">
          <div className="accordion" id="navbarAccordion">
            {quickLinks.map((link, index) => (
              <div className="accordion-item" key={index}>
                <button
                  className={`accordion-button without-icon ${
                    activeLink === link.url ? "active" : ""
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded={activeLink === link.url}
                  aria-controls={`collapse${index}`}
                  onClick={() => handleLinkClick(link.url)}
                >
                  <a className="accordion-link">{link.title.toUpperCase()}</a>
                </button>
              </div>
            ))}
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
