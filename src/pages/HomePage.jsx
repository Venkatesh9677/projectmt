import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Program from "../components/Program";
import Membership from "../components/Membership";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Program />
      <Membership />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
