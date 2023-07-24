import React from "react";
import AboutImage from '../assets/images/about.jpg';

const About = () => {
    return (
        <section class="about container" id="about">
        <div class="about-wrapper">
          <img class="about-image" src={AboutImage} alt="" />
          <div class="about-data">
            <h3 class="about-title">STORY ABOUT US</h3>
            <p class="about-description">
            <p class="about-title1">Muscel Trainer Gym in Virugambakkam, Chennai</p>

All scientific evidence and studies prove that being physically active enables you to lead a healthier life. Not just your physical health, but even your emotional and mental well-being is impacted positively when your body is hail and hearty. In the pursuit of holistic wellness, there has been an overall increase across all demographics in the number of people who wish to exercise.
Several Gyms have mushroomed in and around Chennai. Muscle Trainer Gym in Virugambakkam, Chennai is a popular choice among fitness enthusiasts in the area. This gym has existed since 2018. It has received an average 4.8 rating. Of course, a gym may help you build muscles and look fab. But remember people who regularly exercise have a lower risk of developing several health concerns, so you might want to checkout this place.
            </p>
            <a href="#read-more" class="about-btn">READ MORE</a>
          </div>
        </div>
      </section>
    )
}

export default About;