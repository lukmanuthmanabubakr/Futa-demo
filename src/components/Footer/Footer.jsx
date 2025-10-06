import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div
          className="footer-about"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h3>About Us</h3>
          <p>
            We are committed to excellence in teaching, research, and community
            service, shaping future leaders through knowledge and innovation.
          </p>
        </div>

        <div
          className="footer-links"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/admissions">Admissions</a>
            </li>
            <li>
              <a href="/faculties">Faculties</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div
          className="footer-contact"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h3>Contact Info</h3>
          <p>123 University Avenue, Akure, Nigeria</p>
          <p>Email: info@futademo.edu.ng</p>
          <p>Phone: +234 800 123 4567</p>
          <div className="footer-socials">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div
        className="footer-bottom"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <p>
          &copy; {new Date().getFullYear()} FUTA Demo University. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
