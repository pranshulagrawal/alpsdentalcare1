/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [socialLinks, setSocialLinks] = useState([]);
  const [quickLinks, setQuickLinks] = useState([]);
  const [legalLinks, setLegalLinks] = useState([]);
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the data from the data.json file
    fetch("data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Return the parsed JSON
      })
      .then((data) => {
        setSocialLinks(data?.socialLinks || []);
        setQuickLinks(data?.quickLinks || []);
        setLegalLinks(data?.legalLinks || []);
        setLocation(data?.location || "");
        setPhone(data?.phone || "");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Handle navigation on link click
  const handleNavigate = (url) => {
    return (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      navigate(url);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  };

  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-5 col-md-12">
              <div className="single-footer-widget pe-5">
                <ul className="info-list">
                  <li>
                    <span>Location:</span> {location}
                  </li>
                  <li>
                    <span>Phone:</span>
                    <a href={`tel:${phone}`}>{phone}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 col-md-12">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-4">
                  <div className="single-footer-widget ps-5">
                    <h3>Quick Links</h3>
                    <ul className="custom-links">
                      {quickLinks?.map((link, index) => (
                        <li key={index}>
                          <a href="#" onClick={handleNavigate(link?.url)}>
                            {link?.title}
                          </a>
                        </li>
                      ))}
                      <li key="appointment">
                        <a href="#" onClick={handleNavigate("/appointment")}>
                          Book Appointment
                        </a>
                      </li>
                      <li key="faq">
                        <a href="#" onClick={handleNavigate("/faq")}>
                          Frequently Asked Questions
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <div className="single-footer-widget ps-5">
                    <h3>Legal</h3>
                    <ul className="custom-links">
                      {legalLinks?.map((link, index) => (
                        <li key={index}>
                          <a href={link?.url}>{link?.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <div className="single-footer-widget ps-5">
                    <h3>Follow Us</h3>
                    <ul className="custom-links">
                      {socialLinks?.map((social, index) => (
                        <li key={index}>
                          <a
                            href={social?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {social?.platform}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area"></div>
        </div>
      </footer>
      <button
        type="button"
        id="back-to-top"
        className="position-fixed text-center border-0 p-0"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </>
  );
};

export default Footer;
