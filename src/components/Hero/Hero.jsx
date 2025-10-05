import React, { useEffect, useState } from "react";
import "./Hero.css";
import heroImage from "../../assets/heroBg.jpg";

const Hero = () => {
  const fullText = "Federal University of Technology Akure";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setText(fullText.slice(0, i));
      if (i >= fullText.length) {
        clearInterval(id);
      }
    }, 80);

    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
      aria-label="Hero section"
    >
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="typed">{text}</span>
          <span className="cursor" aria-hidden="true">|</span>
        </h1>

        <p className="hero-text">
          Advancing technology for the growth of the nation — fostering excellence,
          driving innovation, nurturing future leaders, and creating lasting impact
          through science and engineering.
        </p>
      </div>
    </section>
  );
};

export default Hero;
