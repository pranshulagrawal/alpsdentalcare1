/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Testimonial from "../Testimonial";
import { useNavigate } from "react-router-dom";
import Subscribe from "../Subscribe";

const Services = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json"); // Update the path accordingly
        const data = await response.json();
        setServices(data.services);
      } catch (error) {
        console.error("Error fetching the services data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div class="page-banner-area">
        <div class="container">
          <div class="page-banner-content" data-cues="slideInUp">
            <h2>Dental Services</h2>
            <ul class="list">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>SERVICES</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Page Banner Area -->
        
        <!-- Start Services Wrap Area --> */}
      {/* <div class="services-wrap-area without-bg-color ptb-150">
        <div class="container" data-cues="slideInUp">
          <div class="services-wrap-item" id="services-element1">
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-5 col-md-12">
                <div class="services-left">
                  <div class="number">1</div>
                  <h3>
                    <a href="#">Cosmetic Dentistry</a>
                  </h3>
                  <div class="arrow-btn">
                    <a href="#">
                      <i class="flaticon-up-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-md-12">
                <div class="services-middle">
                  <p>
                    Cosmetic dentistry mainly concerns improving the appearance
                    of your teeth, including whitening.
                  </p>
                </div>
              </div>
              <div class="col-lg-2 col-md-12">
                <div class="services-right">
                  <div class="arrow-btn">
                    <a href="#">
                      <i class="flaticon-up-right-arrow"></i>
                    </a>
                  </div>
                  <div class="services-image">
                    <a href="#">
                      <img
                        src="assets/images/services/services5.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="services-wrap-item active" id="services-element2">
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-5 col-md-12">
                <div class="services-left">
                  <div class="number">2</div>
                  <h3>
                    <a href="#">Pediatric Dentistry</a>
                  </h3>
                  <div class="arrow-btn">
                    <a href="#">
                      <i class="flaticon-up-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-md-12">
                <div class="services-middle">
                  <p>
                    Pediatric dentistry is tailored to ensure infants, children,
                    and teens can receive the best dental care.
                  </p>
                </div>
              </div>
              <div class="col-lg-2 col-md-12">
                <div class="services-right">
                  <div class="arrow-btn">
                    <a href="#">
                      <i class="flaticon-up-right-arrow"></i>
                    </a>
                  </div>
                  <div class="services-image">
                    <a href="#">
                      <img
                        src="assets/images/services/services6.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="services-wrap-item" id="services-element3">
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-5 col-md-12">
                <div class="services-left">
                  <div class="number">3</div>
                  <h3>
                    <a href="#">Dental Implants</a>
                  </h3>
                  <div class="arrow-btn">
                    <a href="#">
                      <i class="flaticon-up-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-md-12">
                <div class="services-middle">
                  <p>
                    Dental implants replace the missing tooth by implanting
                    artificial roots into the jaw under surgical.
                  </p>
                </div>
              </div>
              <div class="col-lg-2 col-md-12">
                <div class="services-right">
                  <div class="arrow-btn">
                    <a href="#">
                      <i class="flaticon-up-right-arrow"></i>
                    </a>
                  </div>
                  <div class="services-image">
                    <a href="#">
                      <img
                        src="assets/images/services/services7.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="services-wrap-item" id="services-element4">
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-5 col-md-12">
                <div class="services-left">
                  <div class="number">4</div>
                  <h3>
                    <a href="#">Periodontal Therapy</a>
                  </h3>
                  <div class="arrow-btn">
                    <a href="#">
                      <i class="flaticon-up-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-md-12">
                <div class="services-middle">
                  <p>
                    Periodontal therapy is technically all about restoring the
                    diseased or damaged tissues to an original
                  </p>
                </div>
              </div>
              <div class="col-lg-2 col-md-12">
                <div class="services-right">
                  <div class="arrow-btn">
                    <a href="#">
                      <i class="flaticon-up-right-arrow"></i>
                    </a>
                  </div>
                  <div class="services-image">
                    <a href="#">
                      <img
                        src="assets/images/services/services8.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="services-wrap-item" id="services-element4">
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-5 col-md-12">
                <div class="services-left">
                  <div class="number">5</div>
                  <h3>
                    <a href="#">Teeth Whitening</a>
                  </h3>
                  <div class="arrow-btn">
                    <a href="#">
                      <i class="flaticon-up-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-md-12">
                <div class="services-middle">
                  <p>
                    Our dentists will clean up your teeth, conduct a thorough
                    check before covering the teeth with a new.
                  </p>
                </div>
              </div>
              <div class="col-lg-2 col-md-12">
                <div class="services-right">
                  <div class="arrow-btn">
                    <a href="#">
                      <i class="flaticon-up-right-arrow"></i>
                    </a>
                  </div>
                  <div class="services-image">
                    <a href="#">
                      <img
                        src="assets/images/services/services9.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="services-wrap-item" id="services-element4">
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-5 col-md-12">
                <div class="services-left">
                  <div class="number">6</div>
                  <h3>
                    <a href="#">General Dentistry</a>
                  </h3>
                  <div class="arrow-btn">
                    <a href="#">
                      <i class="flaticon-up-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-md-12">
                <div class="services-middle">
                  <p>
                    Our dentists will clean up your teeth, conduct a thorough
                    check before covering the teeth with a new
                  </p>
                </div>
              </div>
              <div class="col-lg-2 col-md-12">
                <div class="services-right">
                  <div class="arrow-btn">
                    <a href="#">
                      <i class="flaticon-up-right-arrow"></i>
                    </a>
                  </div>
                  <div class="services-image">
                    <a href="#">
                      <img
                        src="assets/images/services/services14.jpg"
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="services-wrap-area without-bg-color ptb-150">
        <div className="container" data-cues="slideInUp">
          {services.map((service, index) => (
            <div className="services-wrap-item" key={service.id}>
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 col-md-12">
                  <div className="services-left">
                    <div className="number">{index + 1}</div>
                    <h3>
                      <a>{service.title}</a>
                    </h3>
                    <div className="arrow-btn">
                      <a>
                        <i className="flaticon-up-right-arrow"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="services-middle">
                    <p>{service.description}</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-12">
                  <div className="services-right">
                    <div className="arrow-btn">
                      <a>
                        <i className="flaticon-up-right-arrow"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <!-- End Services Wrap Area -->

        <!-- Start Appointment Area --> */}
      <div class="appointment-area bg-wrap-two bgImageParallax ptb-150">
        <div class="container">
          <div class="appointment-form" data-cues="slideInUp">
            <h3>Book For Consultation</h3>
            <form netlify>
              <div class="row justify-content-center">
                <div class="col-lg-6 col-md-12">
                  <div class="form-group">
                    <label>Patient Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-12">
                  <div class="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter contact no."
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-12">
                  <div class="form-group">
                    <label>Enter Date</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your visit date"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-md-12">
                  <div class="form-group">
                    <label>Choose Service</label>
                    <select class="form-select form-control">
                      <option selected>Choose services</option>
                      <option value="1">General Dentistry</option>
                      <option value="2">Oral Surgery</option>
                      <option value="3">Teeth Whitening</option>
                      <option value="4">Cosmetic Dentistry</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12">
                  <button type="submit" class="default-btn">
                    Book Appointment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- End Appointment Area -->

        <!-- Start Testimonials Area --> */}
      <Testimonial />
      {/* <!-- End Testimonials Area -->

        <!-- Start Subscribe Area --> */}
      <Subscribe />
    </>
  );
};

export default Services;
