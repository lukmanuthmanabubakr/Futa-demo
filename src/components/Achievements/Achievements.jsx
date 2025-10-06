import React from "react";
import "./Achievements.css";
import { FaUniversity, FaGlobeAfrica, FaHandshake } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const Achievements = () => {
  const data = [
    {
      title: "Top 5 in West Africa",
      description:
        "Ranked among the top five universities in West Africa for academic excellence and research innovation.",
      icon: <FaUniversity />,
    },
    {
      title: "25,000+ Graduates",
      description:
        "Our alumni network spans across industries and continents, making a global impact.",
      icon: <FaGlobeAfrica />,
    },
    {
      title: "NUC Accredited",
      description:
        "All our programs are fully accredited by the National Universities Commission (NUC).",
      icon: <MdVerified />,
    },
    {
      title: "Global Partnerships",
      description:
        "Collaborations with top international universities for exchange and research programs.",
      icon: <FaHandshake />,
    },
  ];

  return (
    <section className="achievements-section" id="achievements">
      <div className="achievements-container">
        <div className="achievements-header">
          <h2>Our Achievements & Recognition</h2>
          <p>
            Celebrating excellence, innovation, and global impact through years
            of dedication to quality education.
          </p>
        </div>

        <div className="achievements-grid">
          {data.map((item, index) => (
            <div className="achievement-card" key={index}>
              <div className="achievement-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
