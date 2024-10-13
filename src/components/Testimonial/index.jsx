import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className="review-wrap-area bg-with-primary-color pt-150">
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
              Convenient hours to suit any lifestyle
            </li>
            <li>
              <i data-feather="check"></i>
              Modern treatment and equipment
            </li>
          </ul>
          <div className="review-btn">
            <a href="appointment.html" className="default-btn">
              Book Appointment
            </a>
          </div>
        </div>

        {/* Swiper Slider Section */}
        <Swiper
          modules={[Autoplay, Pagination]} // Add autoplay module
          spaceBetween={30}
          slidesPerView={2} // Change to 1 for centered effect
          loop={true}
          loopedSlides={1} // Ensure to loop all slides
          autoplay={{
            delay: 1500, // Adjust the delay as needed
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="review-wrap-slider"
        >
          <SwiperSlide>
            <div className="review-wrap-card">
              <ul className="rating">
                {[...Array(5)].map((_, index) => (
                  <li key={index}>
                    <i className="flaticon-star"></i>
                  </li>
                ))}
              </ul>
              <p>
                “I recently had the pleasure of visiting Doral for a dental
                check-up, and I couldn't be more impressed. From the moment I
                walked in, the friendly and welcoming staff set the tone for a
                positive experience.”
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
          </SwiperSlide>

          <SwiperSlide>
            <div className="review-wrap-card">
              <ul className="rating">
                {[...Array(5)].map((_, index) => (
                  <li key={index}>
                    <i className="flaticon-star"></i>
                  </li>
                ))}
              </ul>
              <p>
                “I must recommend Doral enough! From the moment I walked in, I
                felt welcomed and cared for. The staff was incredibly friendly
                and professional, and my dentist was thorough and attentive.”
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
          </SwiperSlide>

          <SwiperSlide>
            <div className="review-wrap-card">
              <ul className="rating">
                {[...Array(5)].map((_, index) => (
                  <li key={index}>
                    <i className="flaticon-star"></i>
                  </li>
                ))}
              </ul>
              <p>
                “Five stars for Doral Service! I recently had a dental emergency
                and was able to get an appointment right away. They took the
                time to listen to my concerns and address them with care.”
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
          </SwiperSlide>

          {/* Add more SwiperSlide components for other reviews */}
        </Swiper>

        <div className="review-wrap-pagination"></div>
      </div>
    </div>
  );
};

export default Testimonial;
