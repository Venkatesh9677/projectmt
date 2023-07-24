import React from "react";

import HeroImage from '../assets/images/img-3mt.jpg'
const Hero = () =>{
    return(
        <section class="hero" style={{ backgroundImage: `url(${HeroImage })`}}>
        <h1 class="hero-title">
        FITNESS IS NOT a destination.<br />
        It is a way of LIFE.
        </h1>

        <a href="#program" class="hero-btn-get-started">GET STARTED</a>
      </section>
    )
}

export default Hero;