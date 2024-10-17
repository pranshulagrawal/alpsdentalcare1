/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Subscribe from "../Subscribe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json"); // Adjust the path as needed
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data.faqs); // Log the fetched data
        setFaqData(data.faqs);
      } catch (error) {
        console.error("Failed to fetch FAQ data:", error);
      }
    };

    fetchData();
  }, []);

  const splitIndex = Math.ceil(faqData.length / 2); // Split index for two columns

  return (
    <>
      <div className="page-banner-area">
        <div className="container">
          <div className="page-banner-content" data-cues="slideInUp">
            <h2>FAQ</h2>
            <ul className="list">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="faq-area ptb-150">
        <div className="container">
          <div className="row justify-content-center g-5" data-cues="slideInUp">
            <div className="col-lg-6 col-md-12">
              <div className="faq-accordion">
                <div className="accordion" id="faqAccordion">
                  {Array.isArray(faqData) && faqData.length > 0 ? (
                    faqData.slice(0, splitIndex).map((item, index) => (
                      <div className="accordion-item" key={index + 1}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse-${index + 1}`}
                          aria-expanded="false"
                          aria-controls={`collapse-${index + 1}`}
                        >
                          {item.question}
                          <div className="plus">
                            <FontAwesomeIcon icon={faPlus} />
                          </div>
                          <div className="minus">
                            <FontAwesomeIcon icon={faMinus} />
                          </div>
                        </button>
                        <div
                          id={`collapse-${index + 1}`}
                          className="accordion-collapse collapse"
                          data-bs-parent="#faqAccordion2"
                        >
                          <div className="accordion-body">
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No FAQs available.</p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="faq-accordion">
                <div className="accordion" id="faqAccordion2">
                  {Array.isArray(faqData) && faqData.length > 0 ? (
                    faqData.slice(splitIndex).map((item, index) => (
                      <div
                        className="accordion-item"
                        key={index + 1 + splitIndex}
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse-${index + 1 + splitIndex}`}
                          aria-expanded="false"
                          aria-controls={`collapse-${index + 1 + splitIndex}`}
                        >
                          {item.question}
                          <div className="plus">
                            <FontAwesomeIcon icon={faPlus} />
                          </div>
                          <div className="minus">
                            <FontAwesomeIcon icon={faMinus} />
                          </div>
                        </button>
                        <div
                          id={`collapse-${index + 1 + splitIndex}`}
                          className="accordion-collapse collapse"
                          data-bs-parent="#faqAccordion2"
                        >
                          <div className="accordion-body">
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No FAQs available.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export default FAQ;
