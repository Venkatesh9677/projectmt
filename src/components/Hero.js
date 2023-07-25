import React from "react";

import HeroImage from '../assets/images/img-3mt.jpg'
const Hero = () =>{
    return(
        <section class="hero" style={{ backgroundImage: `url(${HeroImage })`}}>
        <h1 class="hero-title">
        FITNESS IS NOT A DESTINATION.<br />
        IT IS A WAY OF YOUR LIFE.
        </h1>

        <a href="#program" class="hero-btn-get-started">GET STARTED</a>
      </section>
    )
}

export default Hero;