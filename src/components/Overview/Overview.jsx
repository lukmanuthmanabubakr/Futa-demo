import React from 'react'
import './Overview.css'
import campusImg from '../../assets/About.jpg' // make sure to have this image

const Overview = () => {
  return (
    <section className="overview" id="overview">
      <div className="overview-content">
        <div className="overview-text">
          <h2 className="overview-title">About Federal University of Technology, Akure (FUTA)</h2>
          <p className="overview-intro">
            The Federal University of Technology, Akure (FUTA) stands as a leading institution of higher learning in Nigeria,
            committed to advancing technological education, scientific research, and innovative development.
            FUTA fosters excellence in learning, discovery, and community service—shaping future leaders who drive progress across the globe.
          </p>

          <div className="overview-mission">
            <h3>Our Mission</h3>
            <p>
              To promote technological advancement by providing a conducive environment for research, teaching, and learning,
              that engenders the development of products and services that are technologically oriented.
            </p>
          </div>

          <div className="overview-vision">
            <h3>Our Vision</h3>
            <p>
              To be a world-class University of Technology and a centre of excellence in training, research, and innovation for global impact.
            </p>
          </div>
        </div>

        <div className="overview-image">
          <img src={campusImg} alt="FUTA campus" />
        </div>
      </div>
    </section>
  )
}

export default Overview
