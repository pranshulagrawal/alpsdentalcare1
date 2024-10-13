import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faFeather, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSuitcaseMedical } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Testimonial from "../Testimonial";

const Home = () => {
  return (
    <>
      {/* <!-- Start Dental Treatment Banner Area --> */}
      <div className="dental-treatment-banner-area bgImageParallax">
        <div className="container-fluid">
          <div
            className="dental-treatment-banner-content"
            data-cue="slideInLeft"
          >
            <span className="sub">
              Bright Smiles, Trusted Care: Your Journey To Dental Wellness
            </span>
            <h1>
              <span>Oral</span> Health Redefined Excellence in
              <span>Dental</span> <span>Care</span>
            </h1>
            <div className="banner-btn">
              <a href="appointment.html" className="default-btn">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
        {/* <div className="swiper dental-treatment-review-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="dental-treatment-review-card">
                <div className="user">
                  <img src="assets/images/user/img1.png" alt="image" />
                  <h5>Allison Hayes</h5>
                </div>
                <div className="content">
                  <p>
                    “I've been a patient at Doral for several years now, & the
                    exceptional care.”
                  </p>
                  <div className="quote">
                    <i className="flaticon-quote"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="dental-treatment-review-card">
                <div className="user">
                  <img src="assets/images/user/img2.png" alt="image" />
                  <h5>Sarah Johnson</h5>
                </div>
                <div className="content wrap2">
                  <p>
                    “ From the moment I walked in, I was greeted by a warm and
                    welcoming staff.”
                  </p>
                  <div className="quote">
                    <i className="flaticon-quote"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="dental-treatment-review-card">
                <div className="user">
                  <img src="assets/images/user/img3.png" alt="image" />
                  <h5>Jessica Taylor</h5>
                </div>
                <div className="content wrap3">
                  <p>
                    “The facilities & equipment at Doral were impressive,
                    further enhancing doral.”
                  </p>
                  <div className="quote">
                    <i className="flaticon-quote"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dental-treatment-review-pagination"></div>
        </div> */}

        <Swiper
          modules={[Autoplay, Pagination]} // Add autoplay module
          spaceBetween={50} // Adjust space between slides
          slidesPerView={1} // One slide per view
          loop={true} // Enable loop for continuous scrolling
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000, // Delay between slides in milliseconds (3 seconds here)
            disableOnInteraction: false, // Keep autoplay running after interaction
          }}
          className="swiper dental-treatment-review-slider"
          style={{ marginRight: 0 }}
        >
          <SwiperSlide className="swiper-slide">
            <div className="dental-treatment-review-card">
              <div className="user">
                <img src="assets/images/user/img1.png" alt="Allison Hayes" />
                <h5>Allison Hayes</h5>
              </div>
              <div className="content">
                <p>
                  “I've been a patient at Doral for several years now, & the
                  exceptional care.”
                </p>
                <div className="quote">
                  <i className="flaticon-quote"></i>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="dental-treatment-review-card">
              <div className="user">
                <img src="assets/images/user/img2.png" alt="Sarah Johnson" />
                <h5>Sarah Johnson</h5>
              </div>
              <div className="content wrap2">
                <p>
                  “From the moment I walked in, I was greeted by a warm and
                  welcoming staff.”
                </p>
                <div className="quote">
                  <i className="flaticon-quote"></i>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="dental-treatment-review-card">
              <div className="user">
                <img src="assets/images/user/img3.png" alt="Jessica Taylor" />
                <h5>Jessica Taylor</h5>
              </div>
              <div className="content wrap3">
                <p>
                  “The facilities & equipment at Doral were impressive, further
                  enhancing doral.”
                </p>
                <div className="quote">
                  <i className="flaticon-quote"></i>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="dental-treatment-ratings">
          <h5>
            4.98 <span>Rated 4.9 Stars Based On 1200+ Reviews</span>
          </h5>
          <div className="dot"></div>
        </div>
      </div>
      {/* <!-- End Dental Treatment Banner Area -->

    <!-- Start Boxes Area --> */}
      <div className="boxes-area pt-150 pb-125">
        <div className="container">
          <div className="row justify-content-center" data-cues="slideInUp">
            <div className="col-xl-3 col-sm-6">
              <div className="boxes-card">
                <div className="icon">
                  <FontAwesomeIcon icon={faCalendar} fade />
                </div>
                <h3>Night And Weekend Appointment</h3>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="boxes-card">
                <div className="icon">
                  <FontAwesomeIcon icon={faSuitcaseMedical} fade />
                </div>
                <h3>Routine And Emergency Services</h3>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="boxes-card">
                <div className="icon">
                  <FontAwesomeIcon icon={faClock} fade />
                </div>
                <h3>Short Time Wait And Luxury Amenities</h3>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="boxes-card">
                <div className="icon">
                  <FontAwesomeIcon icon={faFeather} fade />
                </div>
                <h3>Decades Of Experience, Science-Based Care</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Boxes Area -->

    <!-- Start Category Area --> */}
      <div className="category-area pb-125">
        <div className="container-fluid">
          <div className="row justify-content-center" data-cues="slideInUp">
            <div className="col-xxl-4 col-md-6">
              <div className="category-card">
                <img src="assets/images/category/category1.jpg" alt="image" />
                <ul className="list">
                  <li>
                    Hours <strong>1.3 - 2</strong>
                  </li>
                  <li>
                    Start at <strong>$50</strong>
                  </li>
                </ul>
                <div className="content">
                  <h3>
                    <a href="service-details.html">General Dentistry</a>
                  </h3>
                  <a href="service-details.html" className="category-btn">
                    <i className="flaticon-up-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="category-card">
                <img src="assets/images/category/category2.jpg" alt="image" />
                <ul className="list">
                  <li>
                    Hours <strong>1 - 2</strong>
                  </li>
                  <li>
                    Start at <strong>$99</strong>
                  </li>
                </ul>
                <div className="content">
                  <h3>
                    <a href="service-details.html">Surgical Treatment</a>
                  </h3>
                  <a href="service-details.html" className="category-btn">
                    <i className="flaticon-up-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="category-card">
                <img src="assets/images/category/category3.jpg" alt="image" />
                <ul className="list">
                  <li>
                    Hours <strong>1 - 1.4</strong>
                  </li>
                  <li>
                    Start at <strong>$60</strong>
                  </li>
                </ul>
                <div className="content">
                  <h3>
                    <a href="service-details.html">Prosthodontics</a>
                  </h3>
                  <a href="service-details.html" className="category-btn">
                    <i className="flaticon-up-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Category Area -->

    <!-- Start Advertise Area --> */}
      <div className="advertise-area">
        <div className="container-fluid">
          <div className="advertise-view-content">
            <h1>
              <span>REAL PEOPLE. REAL RESULTS</span>
              <span className="slash">/</span>
              <span>REAL PEOPLE. REAL RESULTS</span>
              <span className="slash">/</span>
              <span>REAL PEOPLE. REAL RESULTS</span>
              <span className="slash">/</span>
              <span>REAL PEOPLE. REAL RESULTS</span>
              <span className="slash">/</span>
              <span>REAL PEOPLE. REAL RESULTS</span>
              <span className="slash">/</span>
              <span>REAL PEOPLE. REAL RESULTS</span>
            </h1>
          </div>
        </div>
      </div>
      {/* <!-- End Advertise Area -->

    <!-- Start Overview Area --> */}
      <div className="overview-area ptb-150">
        <div className="container">
          <div className="row justify-content-center" data-cues="slideInUp">
            <div className="col-xl-6 col-md-12">
              <div className="overview-image"></div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="overview-content">
                <h2>
                  <span>Compassionate</span> Patient-Focused Oral And
                  Maxillofacial Care
                </h2>
                <div className="inner">
                  <div className="icon">
                    <img src="assets/images/overview/icon1.png" alt="image" />
                  </div>
                  <div className="title">
                    <h3>Safety First</h3>
                    <p>
                      We take pride in offering comprehensive general dentistry
                      services to ensure the overall.
                    </p>
                  </div>
                </div>
                <div className="inner">
                  <div className="icon">
                    <img src="assets/images/overview/icon2.png" alt="image" />
                  </div>
                  <div className="title">
                    <h3>Insurance Accepted</h3>
                    <p>
                      We take pride in offering comprehensive general dentistry
                      services to ensure the overall.
                    </p>
                  </div>
                </div>
                <div className="inner">
                  <div className="icon">
                    <img src="assets/images/overview/icon3.png" alt="image" />
                  </div>
                  <div className="title">
                    <h3>Full Service Dentistry</h3>
                    <p>
                      We take pride in offering comprehensive general dentistry
                      services to ensure the overall.
                    </p>
                  </div>
                </div>
                <ul className="list">
                  <li>
                    <i data-feather="check"></i>
                    Led By Trust And Transparency
                  </li>
                  <li>
                    <i data-feather="check"></i>
                    Anxiety-Free Dentistry
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Overview Area -->

    <!-- Start Services Wrap Area --> */}
      <div className="services-wrap-area ptb-150">
        <div className="container-fluid">
          <div className="section-title" data-cues="slideInUp">
            <h2>Dental Services We Provide</h2>
          </div>
          <div className="row justify-content-center" data-cues="slideInUp">
            <div className="col-xxl-4 col-md-6">
              <div className="services-wrap-card">
                <div className="icon">
                  <i className="flaticon-orthodontic"></i>
                </div>
                <h3>
                  <a href="service-details.html">General Dentistry</a>
                </h3>
                <p>
                  We specialize in helping patients with general treatments and
                  making their smiles look great.
                </p>
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-12">
                    <ul className="list">
                      <li>
                        <img src="assets/images/services/dot.png" alt="dot" />
                        Dental Hygiene
                      </li>
                      <li>
                        <img src="assets/images/services/dot.png" alt="dot" />
                        Dental Fillings
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <ul className="list">
                      <li>
                        <img src="assets/images/services/dot.png" alt="dot" />
                        Dental Crowns
                      </li>
                      <li>
                        <img src="assets/images/services/dot.png" alt="dot" />
                        Dental Bridge
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="services-btn">
                  <a href="service-details.html" className="default-btn">
                    General Dentistry
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="services-wrap-card">
                <div className="icon">
                  <i className="flaticon-dentistry"></i>
                </div>
                <h3>
                  <a href="service-details.html">Cosmetic Dentistry</a>
                </h3>
                <p>
                  Our dental cosmetic clinic helps patients get a beautiful
                  smile with healthy teeth.
                </p>
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-12">
                    <ul className="list">
                      <li>
                        <img src="assets/images/services/dot.png" alt="dot" />
                        Teeth Whitening
                      </li>
                      <li>
                        <img src="assets/images/services/dot.png" alt="dot" />
                        Cosmetic Dentures
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <ul className="list">
                      <li>
                        <img src="assets/images/services/dot.png" alt="dot" />
                        White Fillings
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="services-btn">
                  <a href="service-details.html" className="default-btn">
                    Cosmetic Dentistry
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="services-wrap-card">
                <div className="icon">
                  <i className="flaticon-dental-care-6"></i>
                </div>
                <h3>
                  <a href="service-details.html">Teeth Straightening</a>
                </h3>
                <p>
                  We specialize in helping patients with teeth straightening and
                  making their smiles look great.
                </p>
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-12">
                    <ul className="list">
                      <li>
                        <img src="assets/images/services/dot.png" alt="dot" />
                        Fixed Braces
                      </li>
                      <li>
                        <img src="assets/images/services/dot.png" alt="dot" />
                        Invisible Braces
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <ul className="list">
                      <li>
                        <img src="assets/images/services/dot.png" alt="dot" />
                        Lingual Braces
                      </li>
                      <li>
                        <img src="assets/images/services/dot.png" alt="dot" />
                        Dental Bridge
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="services-btn">
                  <a href="service-details.html" className="default-btn">
                    Teeth Straightening
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="services-wrap-card">
                <div className="icon">
                  <i className="flaticon-x-rays"></i>
                </div>
                <h3>
                  <a href="service-details.html">Invisalign</a>
                </h3>
                <p>
                  Getting Invisalign treatment involves a consultation with an
                  orthodontist or dentist trained in Invisalign.
                </p>
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-12">
                    <ul className="list">
                      <li>
                        <img src="assets/images/services/dot.png" alt="dot" />
                        Dental Examination
                      </li>
                      <li>
                        <img src="assets/images/services/dot.png" alt="dot" />
                        Fabrication of Aligners
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <ul className="list">
                      <li>
                        <img src="assets/images/services/dot.png" alt="dot" />
                        Wearing Aligners
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="services-btn">
                  <a href="service-details.html" className="default-btn">
                    Invisalign
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="services-wrap-card">
                <div className="icon">
                  <i className="flaticon-teeth-1"></i>
                </div>
                <h3>
                  <a href="service-details.html">Dental Veneers</a>
                </h3>
                <p>
                  It's cover the front surface of teeth to improve their
                  appearance.
                </p>
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-12">
                    <ul className="list">
                      <li>
                        <img src="assets/images/services/dot.png" alt="dot" />
                        Initial Consultation
                      </li>
                      <li>
                        <img src="assets/images/services/dot.png" alt="dot" />
                        Final Adjustments
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <ul className="list">
                      <li>
                        <img src="assets/images/services/dot.png" alt="dot" />
                        Fabrication of Veneers
                      </li>
                      <li>
                        <img src="assets/images/services/dot.png" alt="dot" />
                        Temporary Veneers
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="services-btn">
                  <a href="service-details.html" className="default-btn">
                    Dental Veneers
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="services-wrap-card">
                <div className="icon">
                  <i className="flaticon-tooth-extraction"></i>
                </div>
                <h3>
                  <a href="service-details.html">Oral Surgery</a>
                </h3>
                <p>
                  Oral surgery encompasses a variety of procedures aimed at
                  addressing issues related to the mouth.
                </p>
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-12">
                    <ul className="list">
                      <li>
                        <img src="assets/images/services/dot.png" alt="dot" />
                        Dental Implant
                      </li>
                      <li>
                        <img src="assets/images/services/dot.png" alt="dot" />
                        Apicoectomy
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <ul className="list">
                      <li>
                        <img src="assets/images/services/dot.png" alt="dot" />
                        Orthognathic Surgery
                      </li>
                      <li>
                        <img src="assets/images/services/dot.png" alt="dot" />
                        Pre-Prosthetic Surgery
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="services-btn">
                  <a href="service-details.html" className="default-btn">
                    Oral Surgery
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="view-all-services-btn little-gap">
                <a href="services-style-two.html" className="default-btn">
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Services Wrap Area -->

    <!-- Start Video Area --> */}
      <div className="video-area bg-wrap-two bgImageParallax">
        <div className="container">
          <div className="video-content" data-cues="slideInUp">
            <div className="video-btn">
              <a
                data-fslightbox="video"
                href="../../../www.youtube.com/watchbcfe.html?si=8aVtXL3GZXr3t5wn"
              >
                <i className="flaticon-play-button-arrowhead"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Video Area -->

    <!-- Start Appointment Area --> */}
      <div className="appointment-without-bg-area">
        <div className="container">
          <div
            className="row justify-content-center align-items-end"
            data-cues="slideInUp"
          >
            <div className="col-lg-5 col-md-12">
              <div className="appointment-content">
                <h2>Schedule Your Appointment Now And Take The First Step</h2>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="appointment-form">
                <h3>Book For Consultation</h3>
                <form>
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Patient Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter contact no."
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Enter Date</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your visit date"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Choose Service</label>
                        <select className="form-select form-control">
                          <option selected>Choose services</option>
                          <option value="1">General Dentistry</option>
                          <option value="2">Oral Surgery</option>
                          <option value="3">Teeth Whitening</option>
                          <option value="4">Cosmetic Dentistry</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="default-btn">
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Appointment Area -->

    <!-- Start Real Results Wrap Area --> */}
      <div className="real-results-wrap-area pt-150 pb-125">
        <div className="container">
          <div className="section-title" data-cues="slideInUp">
            <h2>Real People, Real Results.</h2>
          </div>
          <div className="swiper real-results-card-slider">
            <div className="swiper-wrapper" data-cues="slideInUp">
              <div className="swiper-slide">
                <div className="real-results-wrap-card">
                  <img
                    src="assets/images/real-results/large1.jpg"
                    alt="image"
                  />
                  <h3>Tooth Extraction</h3>
                  <a href="real-result.html" className="real-result-btn">
                    <i className="flaticon-up-right-arrow"></i>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="real-results-wrap-card">
                  <img
                    src="assets/images/real-results/large2.jpg"
                    alt="image"
                  />
                  <h3>Teeth Whitening</h3>
                  <a href="real-result.html" className="real-result-btn">
                    <i className="flaticon-up-right-arrow"></i>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="real-results-wrap-card">
                  <img
                    src="assets/images/real-results/large3.jpg"
                    alt="image"
                  />
                  <h3>Dental Implants</h3>
                  <a href="real-result.html" className="real-result-btn">
                    <i className="flaticon-up-right-arrow"></i>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="real-results-wrap-card">
                  <img
                    src="assets/images/real-results/large1.jpg"
                    alt="image"
                  />
                  <h3>Tooth Extraction</h3>
                  <a href="real-result.html" className="real-result-btn">
                    <i className="flaticon-up-right-arrow"></i>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="real-results-wrap-card">
                  <img
                    src="assets/images/real-results/large2.jpg"
                    alt="image"
                  />
                  <h3>Teeth Whitening</h3>
                  <a href="real-result.html" className="real-result-btn">
                    <i className="flaticon-up-right-arrow"></i>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="real-results-wrap-card">
                  <img
                    src="assets/images/real-results/large3.jpg"
                    alt="image"
                  />
                  <h3>Dental Implants</h3>
                  <a href="real-result.html" className="real-result-btn">
                    <i className="flaticon-up-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Real Results Wrap Area -->

    <!-- Start Review Wrap Area --> */}
      {/* <div className="review-wrap-area bg-with-primary-color pt-150">
        <div className="container-fluid">
          <div className="review-wrap-content" data-cues="slideInUp">
            <h2>Compassionate Patient-Focused Oral And Maxillofacial Care</h2>
            <p>
              We take great pride in providing exceptional dental care and
              ensuring a positive experience for each of our valued patients.
            </p>
            <ul className="list">
              <li>
                <i data-feather="check"></i>
                Complimentary initial consultation
              </li>
              <li>
                <i data-feather="check"></i>
                Convenient hours to suit any life style
              </li>
              <li>
                <i data-feather="check"></i>
                Modern treatment and equipment's
              </li>
            </ul>
            <div className="review-btn">
              <a href="appointment.html" className="default-btn">
                Book Appointment
              </a>
            </div>
          </div>
          <div className="swiper review-wrap-slider">
            <div className="swiper-wrapper" data-cues="slideInUp">
              <div className="swiper-slide">
                <div className="review-wrap-card">
                  <ul className="rating">
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                  </ul>
                  <p>
                    “I recently had the pleasure of visiting Doral for a dental
                    check-up, and I couldn't be more impressed. From the moment
                    I walked in, the friendly and welcoming staff set the tone
                    for a positive experience.”
                  </p>
                  <div className="info">
                    <div className="title">
                      <img src="assets/images/user/img1.png" alt="image" />
                      <h5>Allison Hayes</h5>
                    </div>
                    <div className="quote">
                      <i className="flaticon-quote"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="review-wrap-card">
                  <ul className="rating">
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                  </ul>
                  <p>
                    “I must recommend Doral enough! From the moment I walked in,
                    I felt welcomed and cared for. The staff was incredibly
                    friendly and professional, and my dentist was thorough and
                    attentive.”
                  </p>
                  <div className="info">
                    <div className="title">
                      <img src="assets/images/user/img2.png" alt="image" />
                      <h5>Samantha Hernandez</h5>
                    </div>
                    <div className="quote">
                      <i className="flaticon-quote"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="review-wrap-card">
                  <ul className="rating">
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                  </ul>
                  <p>
                    “Five stars for Doral Service! I recently had a dental
                    emergency and was able to get an appointment right away.
                    They took the time to listen to my concerns and address them
                    with care.”
                  </p>
                  <div className="info">
                    <div className="title">
                      <img src="assets/images/user/img3.png" alt="image" />
                      <h5>Christopher Taylor</h5>
                    </div>
                    <div className="quote">
                      <i className="flaticon-quote"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="review-wrap-card">
                  <ul className="rating">
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                  </ul>
                  <p>
                    “I recently had the pleasure of visiting Doral for a dental
                    check-up, and I couldn't be more impressed. From the moment
                    I walked in, the friendly and welcoming staff set the tone
                    for a positive experience.”
                  </p>
                  <div className="info">
                    <div className="title">
                      <img src="assets/images/user/img1.png" alt="image" />
                      <h5>Allison Hayes</h5>
                    </div>
                    <div className="quote">
                      <i className="flaticon-quote"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="review-wrap-card">
                  <ul className="rating">
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                  </ul>
                  <p>
                    “I must recommend Doral enough! From the moment I walked in,
                    I felt welcomed and cared for. The staff was incredibly
                    friendly and professional, and my dentist was thorough and
                    attentive.”
                  </p>
                  <div className="info">
                    <div className="title">
                      <img src="assets/images/user/img2.png" alt="image" />
                      <h5>Samantha Hernandez</h5>
                    </div>
                    <div className="quote">
                      <i className="flaticon-quote"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="review-wrap-card">
                  <ul className="rating">
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                    <li>
                      <i className="flaticon-star"></i>
                    </li>
                  </ul>
                  <p>
                    “Five stars for Doral Service! I recently had a dental
                    emergency and was able to get an appointment right away.
                    They took the time to listen to my concerns and address them
                    with care.”
                  </p>
                  <div className="info">
                    <div className="title">
                      <img src="assets/images/user/img3.png" alt="image" />
                      <h5>Christopher Taylor</h5>
                    </div>
                    <div className="quote">
                      <i className="flaticon-quote"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-wrap-pagination"></div>
          </div>
        </div>
      </div> */}
      <Testimonial />
      {/* <!-- End Review Wrap Area -->

    <!-- Start Doctors Area --> */}
      <div className="doctors-area with-bg-transparent pt-150">
        <div className="container">
          <div
            className="row justify-content-center align-items-center"
            data-cues="slideInUp"
          >
            <div className="col-xl-6 col-md-12">
              <div className="doctors-inner">
                <h2>Our Expert Dentist</h2>
                <div
                  className="row justify-content-center"
                  data-cues="slideInUp"
                >
                  <div className="col-lg-6 col-md-6">
                    <div className="doctors-circle-card">
                      <div className="doctor-image">
                        <a href="dentist-profile.html">
                          <img
                            src="assets/images/doctors/circle1.png"
                            alt="image"
                          />
                        </a>
                        <ul className="social">
                          <li>
                            <a
                              href="../../../www.facebook.com/index.html"
                              target="_blank"
                            >
                              <i data-feather="facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="../../../twitter.com/index.html"
                              target="_blank"
                            >
                              <i data-feather="twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="../../../www.instagram.com/index.html"
                              target="_blank"
                            >
                              <i data-feather="instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://bd.linkedin.com/" target="_blank">
                              <i data-feather="linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="doctor-content">
                        <h3>
                          <a href="dentist-profile.html">
                            Dr. Lauren Mitchell, DMD
                          </a>
                        </h3>
                        <span>Dentist-Surgeon</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="doctors-circle-card">
                      <div className="doctor-image">
                        <a href="dentist-profile.html">
                          <img
                            src="assets/images/doctors/circle2.png"
                            alt="image"
                          />
                        </a>
                        <ul className="social">
                          <li>
                            <a
                              href="../../../www.facebook.com/index.html"
                              target="_blank"
                            >
                              <i data-feather="facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="../../../twitter.com/index.html"
                              target="_blank"
                            >
                              <i data-feather="twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="../../../www.instagram.com/index.html"
                              target="_blank"
                            >
                              <i data-feather="instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://bd.linkedin.com/" target="_blank">
                              <i data-feather="linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="doctor-content">
                        <h3>
                          <a href="dentist-profile.html">
                            Dr. Ethan Reynolds, DDS
                          </a>
                        </h3>
                        <span>Dentist-Consultant</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="doctors-circle-card">
                      <div className="doctor-image">
                        <a href="dentist-profile.html">
                          <img
                            src="assets/images/doctors/circle3.png"
                            alt="image"
                          />
                        </a>
                        <ul className="social">
                          <li>
                            <a
                              href="../../../www.facebook.com/index.html"
                              target="_blank"
                            >
                              <i data-feather="facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="../../../twitter.com/index.html"
                              target="_blank"
                            >
                              <i data-feather="twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="../../../www.instagram.com/index.html"
                              target="_blank"
                            >
                              <i data-feather="instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://bd.linkedin.com/" target="_blank">
                              <i data-feather="linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="doctor-content">
                        <h3>
                          <a href="dentist-profile.html">
                            Dr. Garrett Hughes, DDS
                          </a>
                        </h3>
                        <span>Dental Technician</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="doctors-circle-card">
                      <div className="doctor-image">
                        <a href="dentist-profile.html">
                          <img
                            src="assets/images/doctors/circle4.png"
                            alt="image"
                          />
                        </a>
                        <ul className="social">
                          <li>
                            <a
                              href="../../../www.facebook.com/index.html"
                              target="_blank"
                            >
                              <i data-feather="facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="../../../twitter.com/index.html"
                              target="_blank"
                            >
                              <i data-feather="twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="../../../www.instagram.com/index.html"
                              target="_blank"
                            >
                              <i data-feather="instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://bd.linkedin.com/" target="_blank">
                              <i data-feather="linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="doctor-content">
                        <h3>
                          <a href="dentist-profile.html">
                            Dr. Bradley Foster, DDS
                          </a>
                        </h3>
                        <span>Maxillofacial Surgeon</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="doctors-faq-content">
                <h2>Frequently Asked Questions</h2>
                <div className="doctors-accordion">
                  <div className="accordion" id="faqAccordion">
                    <div className="accordion-item">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-1"
                        aria-expanded="false"
                        aria-controls="collapse-1"
                      >
                        Do you accept walk-ins?
                        <div className="plus">
                          <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <div className="minus">
                          <FontAwesomeIcon icon={faMinus} />
                        </div>
                      </button>
                      <div
                        id="collapse-1"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Dr. Vanessa Harper, DMD, our esteemed dentist, was
                            awarded the top dentist award by dental association,
                            recognizing his expertise, skill, and contributions
                            to the field of dentistry.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-2"
                        aria-expanded="false"
                        aria-controls="collapse-2"
                      >
                        How can I schedule an appointment for emergency
                        services?
                        <div className="plus">
                          <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <div className="minus">
                          <FontAwesomeIcon icon={faMinus} />
                        </div>
                      </button>
                      <div
                        id="collapse-2"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Dr. Vanessa Harper, DMD, our esteemed dentist, was
                            awarded the top dentist award by dental association,
                            recognizing his expertise, skill, and contributions
                            to the field of dentistry.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-3"
                        aria-expanded="false"
                        aria-controls="collapse-3"
                      >
                        Do you accept dental insurance?
                        <div className="plus">
                          <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <div className="minus">
                          <FontAwesomeIcon icon={faMinus} />
                        </div>
                      </button>
                      <div
                        id="collapse-3"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Dr. Vanessa Harper, DMD, our esteemed dentist, was
                            awarded the top dentist award by dental association,
                            recognizing his expertise, skill, and contributions
                            to the field of dentistry.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-4"
                        aria-expanded="false"
                        aria-controls="collapse-4"
                      >
                        Do you offer emergency dental services?
                        <div className="plus">
                          <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <div className="minus">
                          <FontAwesomeIcon icon={faMinus} />
                        </div>
                      </button>
                      <div
                        id="collapse-4"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Dr. Vanessa Harper, DMD, our esteemed dentist, was
                            awarded the top dentist award by dental association,
                            recognizing his expertise, skill, and contributions
                            to the field of dentistry.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-5"
                        aria-expanded="false"
                        aria-controls="collapse-5"
                      >
                        How can I finance my dental treatment if I don't have
                        insurance?
                        <div className="plus">
                          <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <div className="minus">
                          <FontAwesomeIcon icon={faMinus} />
                        </div>
                      </button>
                      <div
                        id="collapse-5"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Dr. Vanessa Harper, DMD, our esteemed dentist, was
                            awarded the top dentist award by dental association,
                            recognizing his expertise, skill, and contributions
                            to the field of dentistry.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-6"
                        aria-expanded="false"
                        aria-controls="collapse-6"
                      >
                        How can I improve my oral hygiene routine?
                        <div className="plus">
                          <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <div className="minus">
                          <FontAwesomeIcon icon={faMinus} />
                        </div>
                      </button>
                      <div
                        id="collapse-6"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Dr. Vanessa Harper, DMD, our esteemed dentist, was
                            awarded the top dentist award by dental association,
                            recognizing his expertise, skill, and contributions
                            to the field of dentistry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Doctors Area -->

    <!-- Start Blog Area --> */}
      <div className="blog-area pt-150 pb-125">
        <div className="container">
          <div className="section-title" data-cues="slideInUp">
            <h2>Find Our Latest Articles</h2>
          </div>
          <div
            className="row justify-content-center align-items-center"
            data-cues="slideInUp"
          >
            <div className="col-lg-6 col-md-12">
              <div className="blog-item">
                <a href="blog-details.html">
                  <img src="assets/images/blog/large1.jpg" alt="image" />
                </a>
                <div className="content">
                  <h3>
                    <a href="blog-details.html">
                      Unlocking Your Best Smile: Tips from best Dentistry.
                    </a>
                  </h3>
                  <ul className="meta">
                    <li>5 Feb, 2024</li>
                    <li>
                      <a href="blog-style-two.html">DENTAL</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6">
                  <div className="blog-item">
                    <a href="blog-details.html">
                      <img src="assets/images/blog/large2.jpg" alt="image" />
                    </a>
                    <div className="content little-wrap">
                      <h3>
                        <a href="blog-details.html">
                          From Check-ups To Smile, Exploring Our Services
                        </a>
                      </h3>
                      <a href="blog-style-two.html" className="tag-btn">
                        DENTAL
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="blog-item">
                    <a href="blog-details.html">
                      <img src="assets/images/blog/large3.jpg" alt="image" />
                    </a>
                    <div className="content little-wrap">
                      <h3>
                        <a href="blog-details.html">
                          The Road To A Brighter Smile Your dental Experience
                        </a>
                      </h3>
                      <a href="blog-style-two.html" className="tag-btn">
                        DENTAL
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Blog Area -->

    <!-- Start Subscribe Area --> */}
      <div className="subscribe-area">
        <div className="container">
          <div className="subscribe-inner-area">
            <div
              className="row justify-content-center align-items-end"
              data-cues="slideInUp"
            >
              <div className="col-lg-7 col-md-12">
                <div className="subscribe-content">
                  <span className="sub">Healthy News And Solutions</span>
                  <h3>Book your appointment</h3>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <a href="appointment.html" className="default-btn">
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
