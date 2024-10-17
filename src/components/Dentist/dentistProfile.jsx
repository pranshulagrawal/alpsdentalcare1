import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DentistProfile = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    // Fetch data based on the doctor ID
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedDoctor = data.doctors.find(
          (doc) => doc.id === parseInt(id)
        );
        setDoctor(selectedDoctor);
      });
  }, [id]);
  const navigate = useNavigate();

  if (!doctor) return <p>Loading doctor profile...</p>;

  return (
    <div>
      <div className="page-banner-area">
        <div className="container">
          <div className="page-banner-content" data-cues="slideInUp">
            <h2>{doctor.name} Profile</h2>
            <ul className="list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>{doctor.name}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="dentist-profile-area ptb-150">
        <div className="container">
          <div className="row justify-content-center" data-cues="slideInUp">
            <div className="col-lg-4 col-md-12">
              <div className="dentist-profile-sidebar">
                <div className="doctors-card">
                  <div className="doctor-image">
                    <img src={doctor.image} alt={doctor.name} />
                  </div>
                  <div className="doctor-content">
                    <h3>{doctor.name}</h3>
                    <span>{doctor.specialty}</span>
                    <ul className="list">
                      <li>
                        <a href={`mailto:${doctor.email}`}>{doctor.email}</a>
                      </li>
                      <li>
                        <a href={doctor.social.linkedin}>LinkedIn</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="appointment-btn">
                  <a
                    onClick={() => {
                      navigate("/appointment");
                    }}
                    className="default-btn"
                  >
                    Book Appointment
                  </a>
                </div>
                <div className="profile-info">
                  <h3>Qualifications</h3>
                  <p>{doctor.qualifications}</p>
                </div>
                <div className="profile-info">
                  <h3>Memberships</h3>
                  <ul className="list">
                    {doctor.memberships.map((membership, index) => (
                      <li key={index}>{membership}</li>
                    ))}
                  </ul>
                </div>
                <div className="profile-info">
                  <h3>Working Time</h3>
                  <ul className="working-list">
                    {doctor.workingTime.map((time, index) => (
                      <li key={index}>
                        <span>{time.day}</span>
                        <span>{time.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="dentist-profile-desc">
                <h2>Introduction</h2>
                <p>{doctor.introduction}</p>

                <h3>Qualifications of {doctor.name}</h3>
                <ul className="list">
                  {doctor.qualificationsDetails.map((qual, index) => (
                    <li key={index}>{qual}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentistProfile;
