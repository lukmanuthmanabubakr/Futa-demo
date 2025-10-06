import React from 'react'
import './Overview.css'
import campusImg from '../../assets/About.jpg'

const Overview = () => {
  return (
    <section className="overview" id="overview">
      <div className="overview-content">
        <div className="overview-text">
          <h2 className="overview-title">About Federal University of Technology, Akure (FUTA)</h2>
          <p className="overview-intro">
            The Federal University of Technology, Akure (FUTA) is a distinguished institution of higher learning in Nigeria,
            renowned for advancing technological education, research excellence, and innovation. 
            With a strong commitment to academic distinction and nation-building, FUTA provides a learning environment 
            that nurtures creativity, leadership, and global relevance in science and technology.
          </p>
        </div>

        <div className="overview-image">
          <img src={campusImg} alt="FUTA campus" />
          <div className="image-text">
            <div className="overview-mission">
              <h3>Our Mission</h3>
              <p>
                To promote technological advancement by creating an enabling environment for research, teaching, and learning 
                that fosters innovation and the development of technology-driven products and services.
              </p>
            </div>

            <div className="overview-vision">
              <h3>Our Vision</h3>
              <p>
                To be a world-class University of Technology, recognized for excellence in training, research, and innovation 
                that drives sustainable development across the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview
