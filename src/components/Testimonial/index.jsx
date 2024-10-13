import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch the testimonials data from the data.json file
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setTestimonials(data.testimonials))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          loopedSlides={1}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="review-wrap-slider"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="review-wrap-card">
                <ul className="rating">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <li key={index}>
                      <i className="flaticon-star"></i>
                    </li>
                  ))}
                </ul>
                <p>{testimonial.quote}</p>
                <div className="info">
                  <div className="title">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <h5>{testimonial.name}</h5>
                  </div>
                  <div className="quote">
                    <i className="flaticon-quote"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="review-wrap-pagination"></div>
      </div>
    </div>
  );
};

export default Testimonial;
