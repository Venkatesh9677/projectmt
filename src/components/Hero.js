import React from "react";
import HeroImage from '../assets/images/img-3mt.jpg';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${HeroImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', padding: '4rem 0' }}>
    <h1 className="hero-title text-center text-white" style={{ fontSize: '3rem' }}>
    FITNESS IS NOT A DESTINATION.<br />IT IS A WAY OF YOUR LIFE.</h1>
   
   <div className="text-center mt-4">
  <a href="#program" className="btn btn-primary nav-button ">GET STARTED</a>
  </div>
    
    </section>
  
  );
};

export default Hero;
