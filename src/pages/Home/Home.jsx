import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Overview from "../../components/Overview/Overview";
import Facilities from "../../components/Facilities/Facilities";
import Achievements from "../../components/Achievements/Achievements";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <Facilities />
      <Achievements />
      <Footer />
    </>
  );
};

export default Home;
