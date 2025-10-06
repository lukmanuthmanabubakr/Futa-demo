import React from "react";
import "./Facilities.css";
import { FaBookReader, FaFlask, FaFootballBall, FaBuilding, FaLaptopCode, FaBusAlt } from "react-icons/fa";

const Facilities = () => {
  const facilities = [
    {
      icon: <FaBookReader />,
      title: "University Library",
      desc: "A world-class digital and physical library equipped with research resources for students and staff."
    },
    {
      icon: <FaFlask />,
      title: "Modern Laboratories",
      desc: "Cutting-edge laboratories for engineering, science, and technology innovations."
    },
    {
      icon: <FaFootballBall />,
      title: "Sports Complex",
      desc: "Fully equipped sports facilities promoting health, teamwork, and recreation."
    },
    {
      icon: <FaBuilding />,
      title: "Hostels & Accommodations",
      desc: "Safe, comfortable, and well-maintained hostels fostering student community life."
    },
    {
      icon: <FaLaptopCode />,
      title: "ICT Center",
      desc: "Advanced computing and networking facilities ensuring global digital competence."
    },
    {
      icon: <FaBusAlt />,
      title: "Transportation",
      desc: "University-owned transport system ensuring convenient mobility around campus."
    }
  ];

  return (
    <section className="facilities" id="facilities">
      <div className="facilities-container">
        <h2 className="facilities-title">Our Facilities</h2>
        <p className="facilities-subtitle">
          Providing students and staff with premium resources and environments that inspire learning and innovation.
        </p>

        <div className="facilities-grid">
          {facilities.map((item, index) => (
            <div key={index} className="facility-card">
              <div className="facility-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
