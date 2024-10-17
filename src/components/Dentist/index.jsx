/* eslint-disable react/jsx-no-target-blank */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FacebookOutlined } from "@ant-design/icons";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch the doctors data from JSON or API
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setDoctors(data.doctors));
  }, []);

  return (
    <div className="doctors-area with-bg-transparent pb-125">
      <div className="container">
        <div className="section-title" data-cues="slideInUp">
          <h2>Our Experienced Dentists</h2>
        </div>
        <div className="row justify-content-center" data-cues="slideInUp">
          {doctors.map((doctor) => (
            <div class="col-xl-4 col-md-6">
              <div class="doctors-card">
                <div class="doctor-image">
                  <Link to={`/dentist-profile/${doctor.id}`}>
                    <img src={doctor.image} alt={doctor.name} />
                  </Link>
                </div>
                <div class="doctor-content">
                  <h3>
                    <Link to={`/dentist-profile/${doctor.id}`}>
                      {doctor.name}
                    </Link>
                  </h3>
                  <span>{doctor.specialty}</span>
                  <ul class="list">
                    <li>
                      <a href="https://templates.hibotheme.com/cdn-cgi/l/email-protection#35525447475041416a5d40525d5046755c5b535a1b565a58">
                        <span
                          class="__cf_email__"
                          data-cfemail="bbdcdac9c9decfcfe4d3cedcd3dec8fbd2d5ddd495d8d4d6"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="../../../www.linkedin.com/login.html"
                        target="_blank"
                      >
                        Linkedin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
