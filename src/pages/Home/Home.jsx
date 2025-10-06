import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Overview from "../../components/Overview/Overview";
import Facilities from "../../components/Facilities/Facilities";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <Facilities />
    </>
  );
};

export default Home;
