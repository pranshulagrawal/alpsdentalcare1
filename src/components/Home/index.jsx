import React from "react";
import Testimonial from "../Testimonial";

const Home = () => {
  return (
    <>
      {/* <!-- Start Dental Treatment Banner Area --> */}
      <div class="dental-treatment-banner-area bgImageParallax">
        <div class="container-fluid">
          <div class="dental-treatment-banner-content" data-cue="slideInLeft">
            <span class="sub">
              Bright Smiles, Trusted Care: Your Journey To Dental Wellness
            </span>
            <h1>
              <span>Oral</span> Health Redefined Excellence in
              <span>Dental</span> <span>Care</span>
            </h1>
            <div class="banner-btn">
              <a href="appointment.html" class="default-btn">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
        <div class="swiper dental-treatment-review-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="dental-treatment-review-card">
                <div class="user">
                  <img src="/assets/images/user/img1.jpg" alt="main-image" />
                  <h5>Allison Hayes</h5>
                </div>
                <div class="content">
                  <p>
                    “I've been a patient at Doral for several years now, & the
                    exceptional care.”
                  </p>
                  <div class="quote">
                    <i class="flaticon-quote"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="dental-treatment-review-card">
                <div class="user">
                  <img src="/assets/images/user/img2.jpg" alt="hero-image" />
                  <h5>Sarah Johnson</h5>
                </div>
                <div class="content wrap2">
                  <p>
                    “ From the moment I walked in, I was greeted by a warm and
                    welcoming staff.”
                  </p>
                  <div class="quote">
                    <i class="flaticon-quote"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="dental-treatment-review-card">
                <div class="user">
                  <img src="/assets/images/user/img3.jpg" alt="hero-image" />
                  <h5>Jessica Taylor</h5>
                </div>
                <div class="content wrap3">
                  <p>
                    “The facilities & equipment at Doral were impressive,
                    further enhancing doral.”
                  </p>
                  <div class="quote">
                    <i class="flaticon-quote"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dental-treatment-review-pagination"></div>
        </div>
        <div class="dental-treatment-ratings">
          <h5>
            4.98 <span>Rated 4.9 Stars Based On 1200+ Reviews</span>
          </h5>
          <div class="dot"></div>
        </div>
      </div>
      {/* <!-- End Dental Treatment Banner Area -->

    <!-- Start Boxes Area --> */}
      <div class="boxes-area pt-150 pb-125">
        <div class="container">
          <div class="row justify-content-center" data-cues="slideInUp">
            <div class="col-xl-3 col-sm-6">
              <div class="boxes-card">
                <div class="icon">
                  <i data-feather="calendar"></i>
                </div>
                <h3>Night And Weekend Appointment</h3>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6">
              <div class="boxes-card">
                <div class="icon">
                  <i data-feather="sunrise"></i>
                </div>
                <h3>Routine And Emergency Services</h3>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6">
              <div class="boxes-card">
                <div class="icon">
                  <i data-feather="clock"></i>
                </div>
                <h3>Short Time Wait And Luxury Amenities</h3>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6">
              <div class="boxes-card">
                <div class="icon">
                  <i data-feather="feather"></i>
                </div>
                <h3>Decades Of Experience, Science-Based Care</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Boxes Area -->

    <!-- Start Category Area --> */}
      <div class="category-area pb-125">
        <div class="container-fluid">
          <div class="row justify-content-center" data-cues="slideInUp">
            <div class="col-xxl-4 col-md-6">
              <div class="category-card">
                <img src="/assets/images/category/category1.jpg" alt="image" />
                <ul class="list">
                  <li>
                    Hours <strong>1.3 - 2</strong>
                  </li>
                  <li>
                    Start at <strong>$50</strong>
                  </li>
                </ul>
                <div class="content">
                  <h3>
                    <a href="service-details.html">General Dentistry</a>
                  </h3>
                  <a href="service-details.html" class="category-btn">
                    <i class="flaticon-up-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-md-6">
              <div class="category-card">
                <img src="/assets/images/category/category2.jpg" alt="image" />
                <ul class="list">
                  <li>
                    Hours <strong>1 - 2</strong>
                  </li>
                  <li>
                    Start at <strong>$99</strong>
                  </li>
                </ul>
                <div class="content">
                  <h3>
                    <a href="service-details.html">Surgical Treatment</a>
                  </h3>
                  <a href="service-details.html" class="category-btn">
                    <i class="flaticon-up-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-md-6">
              <div class="category-card">
                <img src="/assets/images/category/category3.jpg" alt="image" />
                <ul class="list">
                  <li>
                    Hours <strong>1 - 1.4</strong>
                  </li>
                  <li>
                    Start at <strong>$60</strong>
                  </li>
                </ul>
                <div class="content">
                  <h3>
                    <a href="service-details.html">Prosthodontics</a>
                  </h3>
                  <a href="service-details.html" class="category-btn">
                    <i class="flaticon-up-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Category Area -->

    <!-- Start Advertise Area --> */}
      <div class="advertise-area">
        <div class="container-fluid">
          <div class="advertise-view-content">
            <h1>
              <span>REAL PEOPLE. REAL RESULTS</span>
              <span class="slash">/</span>
              <span>REAL PEOPLE. REAL RESULTS</span>
              <span class="slash">/</span>
              <span>REAL PEOPLE. REAL RESULTS</span>
              <span class="slash">/</span>
              <span>REAL PEOPLE. REAL RESULTS</span>
              <span class="slash">/</span>
              <span>REAL PEOPLE. REAL RESULTS</span>
              <span class="slash">/</span>
              <span>REAL PEOPLE. REAL RESULTS</span>
            </h1>
          </div>
        </div>
      </div>
      {/* <!-- End Advertise Area -->

    <!-- Start Overview Area --> */}
      <div class="overview-area ptb-150">
        <div class="container">
          <div class="row justify-content-center" data-cues="slideInUp">
            <div class="col-xl-6 col-md-12">
              <div class="overview-image"></div>
            </div>
            <div class="col-xl-6 col-md-12">
              <div class="overview-content">
                <h2>
                  <span>Compassionate</span> Patient-Focused Oral And
                  Maxillofacial Care
                </h2>
                <div class="inner">
                  <div class="icon">
                    <img src="/assets/images/overview/icon1.jpg" alt="image" />
                  </div>
                  <div class="title">
                    <h3>Safety First</h3>
                    <p>
                      We take pride in offering comprehensive general dentistry
                      services to ensure the overall.
                    </p>
                  </div>
                </div>
                <div class="inner">
                  <div class="icon">
                    <img src="/assets/images/overview/icon2.jpg" alt="image" />
                  </div>
                  <div class="title">
                    <h3>Insurance Accepted</h3>
                    <p>
                      We take pride in offering comprehensive general dentistry
                      services to ensure the overall.
                    </p>
                  </div>
                </div>
                <div class="inner">
                  <div class="icon">
                    <img src="/assets/images/overview/icon3.jpg" alt="image" />
                  </div>
                  <div class="title">
                    <h3>Full Service Dentistry</h3>
                    <p>
                      We take pride in offering comprehensive general dentistry
                      services to ensure the overall.
                    </p>
                  </div>
                </div>
                <ul class="list">
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
      <div class="services-wrap-area ptb-150">
        <div class="container-fluid">
          <div class="section-title" data-cues="slideInUp">
            <h2>Dental Services We Provide</h2>
          </div>
          <div class="row justify-content-center" data-cues="slideInUp">
            <div class="col-xxl-4 col-md-6">
              <div class="services-wrap-card">
                <div class="icon">
                  <i class="flaticon-orthodontic"></i>
                </div>
                <h3>
                  <a href="service-details.html">General Dentistry</a>
                </h3>
                <p>
                  We specialize in helping patients with general treatments and
                  making their smiles look great.
                </p>
                <div class="row justify-content-center">
                  <div class="col-lg-6 col-sm-12">
                    <ul class="list">
                      <li>
                        <img src="/assets/images/services/dot.jpg" alt="dot" />
                        Dental Hygiene
                      </li>
                      <li>
                        <img src="/assets/images/services/dot.jpg" alt="dot" />
                        Dental Fillings
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6 col-sm-12">
                    <ul class="list">
                      <li>
                        <img src="/assets/images/services/dot.jpg" alt="dot" />
                        Dental Crowns
                      </li>
                      <li>
                        <img src="/assets/images/services/dot.jpg" alt="dot" />
                        Dental Bridge
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="services-btn">
                  <a href="service-details.html" class="default-btn">
                    General Dentistry
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-md-6">
              <div class="services-wrap-card">
                <div class="icon">
                  <i class="flaticon-dentistry"></i>
                </div>
                <h3>
                  <a href="service-details.html">Cosmetic Dentistry</a>
                </h3>
                <p>
                  Our dental cosmetic clinic helps patients get a beautiful
                  smile with healthy teeth.
                </p>
                <div class="row justify-content-center">
                  <div class="col-lg-6 col-sm-12">
                    <ul class="list">
                      <li>
                        <img src="/assets/images/services/dot.jpg" alt="dot" />
                        Teeth Whitening
                      </li>
                      <li>
                        <img src="/assets/images/services/dot.jpg" alt="dot" />
                        Cosmetic Dentures
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6 col-sm-12">
                    <ul class="list">
                      <li>
                        <img src="/assets/images/services/dot.jpg" alt="dot" />
                        White Fillings
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="services-btn">
                  <a href="service-details.html" class="default-btn">
                    Cosmetic Dentistry
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-md-6">
              <div class="services-wrap-card">
                <div class="icon">
                  <i class="flaticon-dental-care-6"></i>
                </div>
                <h3>
                  <a href="service-details.html">Teeth Straightening</a>
                </h3>
                <p>
                  We specialize in helping patients with teeth straightening and
                  making their smiles look great.
                </p>
                <div class="row justify-content-center">
                  <div class="col-lg-6 col-sm-12">
                    <ul class="list">
                      <li>
                        <img src="/assets/images/services/dot.jpg" alt="dot" />
                        Fixed Braces
                      </li>
                      <li>
                        <img src="/assets/images/services/dot.jpg" alt="dot" />
                        Invisible Braces
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6 col-sm-12">
                    <ul class="list">
                      <li>
                        <img src="/assets/images/services/dot.jpg" alt="dot" />
                        Lingual Braces
                      </li>
                      <li>
                        <img src="/assets/images/services/dot.jpg" alt="dot" />
                        Dental Bridge
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="services-btn">
                  <a href="service-details.html" class="default-btn">
                    Teeth Straightening
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-md-6">
              <div class="services-wrap-card">
                <div class="icon">
                  <i class="flaticon-x-rays"></i>
                </div>
                <h3>
                  <a href="service-details.html">Invisalign</a>
                </h3>
                <p>
                  Getting Invisalign treatment involves a consultation with an
                  orthodontist or dentist trained in Invisalign.
                </p>
                <div class="row justify-content-center">
                  <div class="col-lg-6 col-sm-12">
                    <ul class="list">
                      <li>
                        <img src="/assets/images/services/dot.jpg" alt="dot" />
                        Dental Examination
                      </li>
                      <li>
                        <img src="/assets/images/services/dot.jpg" alt="dot" />
                        Fabrication of Aligners
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6 col-sm-12">
                    <ul class="list">
                      <li>
                        <img src="/assets/images/services/dot.jpg" alt="dot" />
                        Wearing Aligners
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="services-btn">
                  <a href="service-details.html" class="default-btn">
                    Invisalign
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-md-6">
              <div class="services-wrap-card">
                <div class="icon">
                  <i class="flaticon-teeth-1"></i>
                </div>
                <h3>
                  <a href="service-details.html">Dental Veneers</a>
                </h3>
                <p>
                  It's cover the front surface of teeth to improve their
                  appearance.
                </p>
                <div class="row justify-content-center">
                  <div class="col-lg-6 col-sm-12">
                    <ul class="list">
                      <li>
                        <img src="/assets/images/services/dot.jpg" alt="dot" />
                        Initial Consultation
                      </li>
                      <li>
                        <img src="/assets/images/services/dot.jpg" alt="dot" />
                        Final Adjustments
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6 col-sm-12">
                    <ul class="list">
                      <li>
                        <img src="/assets/images/services/dot.jpg" alt="dot" />
                        Fabrication of Veneers
                      </li>
                      <li>
                        <img src="/assets/images/services/dot.jpg" alt="dot" />
                        Temporary Veneers
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="services-btn">
                  <a href="service-details.html" class="default-btn">
                    Dental Veneers
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-md-6">
              <div class="services-wrap-card">
                <div class="icon">
                  <i class="flaticon-tooth-extraction"></i>
                </div>
                <h3>
                  <a href="service-details.html">Oral Surgery</a>
                </h3>
                <p>
                  Oral surgery encompasses a variety of procedures aimed at
                  addressing issues related to the mouth.
                </p>
                <div class="row justify-content-center">
                  <div class="col-lg-6 col-sm-12">
                    <ul class="list">
                      <li>
                        <img src="/assets/images/services/dot.jpg" alt="dot" />
                        Dental Implant
                      </li>
                      <li>
                        <img src="/assets/images/services/dot.jpg" alt="dot" />
                        Apicoectomy
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6 col-sm-12">
                    <ul class="list">
                      <li>
                        <img src="/assets/images/services/dot.jpg" alt="dot" />
                        Orthognathic Surgery
                      </li>
                      <li>
                        <img src="/assets/images/services/dot.jpg" alt="dot" />
                        Pre-Prosthetic Surgery
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="services-btn">
                  <a href="service-details.html" class="default-btn">
                    Oral Surgery
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="view-all-services-btn little-gap">
                <a href="services-style-two.html" class="default-btn">
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Services Wrap Area -->

    <!-- Start Video Area --> */}
      <div class="video-area bg-wrap-two bgImageParallax">
        <div class="container">
          <div class="video-content" data-cues="slideInUp">
            <div class="video-btn">
              <a
                data-fslightbox="video"
                href="../../../www.youtube.com/watchbcfe.html?si=8aVtXL3GZXr3t5wn"
              >
                <i class="flaticon-play-button-arrowhead"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Video Area -->

    <!-- Start Appointment Area --> */}
      <div class="appointment-without-bg-area">
        <div class="container">
          <div
            class="row justify-content-center align-items-end"
            data-cues="slideInUp"
          >
            <div class="col-lg-5 col-md-12">
              <div class="appointment-content">
                <h2>Schedule Your Appointment Now And Take The First Step</h2>
              </div>
            </div>
            <div class="col-lg-7 col-md-12">
              <div class="appointment-form">
                <h3>Book For Consultation</h3>
                <form>
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
        </div>
      </div>
      {/* <!-- End Appointment Area -->

    <!-- Start Real Results Wrap Area --> */}
      <div class="real-results-wrap-area pt-150 pb-125">
        <div class="container">
          <div class="section-title" data-cues="slideInUp">
            <h2>Real People, Real Results.</h2>
          </div>
          <div class="swiper real-results-card-slider">
            <div class="swiper-wrapper" data-cues="slideInUp">
              <div class="swiper-slide">
                <div class="real-results-wrap-card">
                  <img
                    src="/assets/images/real-results/large1.jpg"
                    alt="image"
                  />
                  <h3>Tooth Extraction</h3>
                  <a href="real-result.html" class="real-result-btn">
                    <i class="flaticon-up-right-arrow"></i>
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="real-results-wrap-card">
                  <img
                    src="/assets/images/real-results/large2.jpg"
                    alt="image"
                  />
                  <h3>Teeth Whitening</h3>
                  <a href="real-result.html" class="real-result-btn">
                    <i class="flaticon-up-right-arrow"></i>
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="real-results-wrap-card">
                  <img
                    src="/assets/images/real-results/large3.jpg"
                    alt="image"
                  />
                  <h3>Dental Implants</h3>
                  <a href="real-result.html" class="real-result-btn">
                    <i class="flaticon-up-right-arrow"></i>
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="real-results-wrap-card">
                  <img
                    src="/assets/images/real-results/large1.jpg"
                    alt="image"
                  />
                  <h3>Tooth Extraction</h3>
                  <a href="real-result.html" class="real-result-btn">
                    <i class="flaticon-up-right-arrow"></i>
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="real-results-wrap-card">
                  <img
                    src="/assets/images/real-results/large2.jpg"
                    alt="image"
                  />
                  <h3>Teeth Whitening</h3>
                  <a href="real-result.html" class="real-result-btn">
                    <i class="flaticon-up-right-arrow"></i>
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="real-results-wrap-card">
                  <img
                    src="/assets/images/real-results/large3.jpg"
                    alt="image"
                  />
                  <h3>Dental Implants</h3>
                  <a href="real-result.html" class="real-result-btn">
                    <i class="flaticon-up-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Real Results Wrap Area -->

    <!-- Start Review Wrap Area --> */}
      <Testimonial />
      {/* <!-- End Review Wrap Area -->

    <!-- Start Doctors Area --> */}
      <div class="doctors-area with-bg-transparent pt-150">
        <div class="container">
          <div
            class="row justify-content-center align-items-center"
            data-cues="slideInUp"
          >
            <div class="col-xl-6 col-md-12">
              <div class="doctors-inner">
                <h2>Our Expert Dentist</h2>
                <div class="row justify-content-center" data-cues="slideInUp">
                  <div class="col-lg-6 col-md-6">
                    <div class="doctors-circle-card">
                      <div class="doctor-image">
                        <a href="dentist-profile.html">
                          <img
                            src="/assets/images/doctors/circle1.jpg"
                            alt="image"
                          />
                        </a>
                        <ul class="social">
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
                      <div class="doctor-content">
                        <h3>
                          <a href="dentist-profile.html">
                            Dr. Lauren Mitchell, DMD
                          </a>
                        </h3>
                        <span>Dentist-Surgeon</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="doctors-circle-card">
                      <div class="doctor-image">
                        <a href="dentist-profile.html">
                          <img
                            src="/assets/images/doctors/circle2.jpg"
                            alt="image"
                          />
                        </a>
                        <ul class="social">
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
                      <div class="doctor-content">
                        <h3>
                          <a href="dentist-profile.html">
                            Dr. Ethan Reynolds, DDS
                          </a>
                        </h3>
                        <span>Dentist-Consultant</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="doctors-circle-card">
                      <div class="doctor-image">
                        <a href="dentist-profile.html">
                          <img
                            src="/assets/images/doctors/circle3.jpg"
                            alt="image"
                          />
                        </a>
                        <ul class="social">
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
                      <div class="doctor-content">
                        <h3>
                          <a href="dentist-profile.html">
                            Dr. Garrett Hughes, DDS
                          </a>
                        </h3>
                        <span>Dental Technician</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="doctors-circle-card">
                      <div class="doctor-image">
                        <a href="dentist-profile.html">
                          <img
                            src="/assets/images/doctors/circle4.jpg"
                            alt="image"
                          />
                        </a>
                        <ul class="social">
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
                      <div class="doctor-content">
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
            <div class="col-xl-6 col-md-12">
              <div class="doctors-faq-content">
                <h2>Frequently Asked Questions</h2>
                <div class="doctors-accordion">
                  <div class="accordion" id="faqAccordion">
                    <div class="accordion-item">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-1"
                        aria-expanded="false"
                        aria-controls="collapse-1"
                      >
                        Do you accept walk-ins?
                        <div class="plus">
                          <i data-feather="plus"></i>
                        </div>
                        <div class="minus">
                          <i data-feather="minus"></i>
                        </div>
                      </button>
                      <div
                        id="collapse-1"
                        class="accordion-collapse collapse show"
                        data-bs-parent="#faqAccordion"
                      >
                        <div class="accordion-body">
                          <p>
                            Dr. Vanessa Harper, DMD, our esteemed dentist, was
                            awarded the top dentist award by dental association,
                            recognizing his expertise, skill, and contributions
                            to the field of dentistry.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-2"
                        aria-expanded="false"
                        aria-controls="collapse-2"
                      >
                        How can I schedule an appointment for emergency
                        services?
                        <div class="plus">
                          <i data-feather="plus"></i>
                        </div>
                        <div class="minus">
                          <i data-feather="minus"></i>
                        </div>
                      </button>
                      <div
                        id="collapse-2"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div class="accordion-body">
                          <p>
                            Dr. Vanessa Harper, DMD, our esteemed dentist, was
                            awarded the top dentist award by dental association,
                            recognizing his expertise, skill, and contributions
                            to the field of dentistry.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-3"
                        aria-expanded="false"
                        aria-controls="collapse-3"
                      >
                        Do you accept dental insurance?
                        <div class="plus">
                          <i data-feather="plus"></i>
                        </div>
                        <div class="minus">
                          <i data-feather="minus"></i>
                        </div>
                      </button>
                      <div
                        id="collapse-3"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div class="accordion-body">
                          <p>
                            Dr. Vanessa Harper, DMD, our esteemed dentist, was
                            awarded the top dentist award by dental association,
                            recognizing his expertise, skill, and contributions
                            to the field of dentistry.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-4"
                        aria-expanded="false"
                        aria-controls="collapse-4"
                      >
                        Do you offer emergency dental services?
                        <div class="plus">
                          <i data-feather="plus"></i>
                        </div>
                        <div class="minus">
                          <i data-feather="minus"></i>
                        </div>
                      </button>
                      <div
                        id="collapse-4"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div class="accordion-body">
                          <p>
                            Dr. Vanessa Harper, DMD, our esteemed dentist, was
                            awarded the top dentist award by dental association,
                            recognizing his expertise, skill, and contributions
                            to the field of dentistry.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-5"
                        aria-expanded="false"
                        aria-controls="collapse-5"
                      >
                        How can I finance my dental treatment if I don't have
                        insurance?
                        <div class="plus">
                          <i data-feather="plus"></i>
                        </div>
                        <div class="minus">
                          <i data-feather="minus"></i>
                        </div>
                      </button>
                      <div
                        id="collapse-5"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div class="accordion-body">
                          <p>
                            Dr. Vanessa Harper, DMD, our esteemed dentist, was
                            awarded the top dentist award by dental association,
                            recognizing his expertise, skill, and contributions
                            to the field of dentistry.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-6"
                        aria-expanded="false"
                        aria-controls="collapse-6"
                      >
                        How can I improve my oral hygiene routine?
                        <div class="plus">
                          <i data-feather="plus"></i>
                        </div>
                        <div class="minus">
                          <i data-feather="minus"></i>
                        </div>
                      </button>
                      <div
                        id="collapse-6"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                      >
                        <div class="accordion-body">
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
      <div class="blog-area pt-150 pb-125">
        <div class="container">
          <div class="section-title" data-cues="slideInUp">
            <h2>Find Our Latest Articles</h2>
          </div>
          <div
            class="row justify-content-center align-items-center"
            data-cues="slideInUp"
          >
            <div class="col-lg-6 col-md-12">
              <div class="blog-item">
                <a href="blog-details.html">
                  <img src="/assets/images/blog/large1.jpg" alt="image" />
                </a>
                <div class="content">
                  <h3>
                    <a href="blog-details.html">
                      Unlocking Your Best Smile: Tips from best Dentistry.
                    </a>
                  </h3>
                  <ul class="meta">
                    <li>5 Feb, 2024</li>
                    <li>
                      <a href="blog-style-two.html">DENTAL</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="row justify-content-center">
                <div class="col-lg-6 col-md-6">
                  <div class="blog-item">
                    <a href="blog-details.html">
                      <img src="/assets/images/blog/large2.jpg" alt="image" />
                    </a>
                    <div class="content little-wrap">
                      <h3>
                        <a href="blog-details.html">
                          From Check-ups To Smile, Exploring Our Services
                        </a>
                      </h3>
                      <a href="blog-style-two.html" class="tag-btn">
                        DENTAL
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="blog-item">
                    <a href="blog-details.html">
                      <img src="/assets/images/blog/large3.jpg" alt="image" />
                    </a>
                    <div class="content little-wrap">
                      <h3>
                        <a href="blog-details.html">
                          The Road To A Brighter Smile Your dental Experience
                        </a>
                      </h3>
                      <a href="blog-style-two.html" class="tag-btn">
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
      {/* <!-- End Blog Area --> */}

      {/* <!-- Start Subscribe Area --> */}
      <div class="subscribe-area">
        <div class="container">
          <div class="subscribe-inner-area">
            <div
              class="row justify-content-center align-items-end"
              data-cues="slideInUp"
            >
              <div class="col-lg-7 col-md-12">
                <div class="subscribe-content">
                  <span class="sub">Healthy News And Solutions</span>
                  <h3>Book your appointment</h3>
                </div>
              </div>
              <div class="col-lg-5 col-md-12">
                <a href="appointment.html" class="default-btn">
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Subscribe Area  */}
    </>
  );
};

export default Home;
