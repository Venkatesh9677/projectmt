import React from "react";
import AboutImage from '../assets/images/about.jpg';

const About = () => {
  return (
    <section className="about container" id="about">
      <div className="about-wrapper row">
        <div className="col-md-6">
          <img className="about-image img-fluid" src={AboutImage} alt="" />
        </div>
        <div className="col-md-6">
          <h3 className="about-title">STORY ABOUT US</h3>
          <p className="about-description">
            <p className="about-title1">Muscle Trainer Gym in Virugambakkam, Chennai</p>

            All scientific evidence and studies prove that being physically active enables you to lead a healthier life. Not just your physical health, but even your emotional and mental well-being is impacted positively when your body is hale and hearty. In the pursuit of holistic wellness, there has been an overall increase across all demographics in the number of people who wish to exercise.
            Several Gyms have mushroomed in and around Chennai. Muscle Trainer Gym in Virugambakkam, Chennai, is a popular choice among fitness enthusiasts in the area. This gym has existed since 2018 and has received an average 4.8 rating. Of course, a gym may help you build muscles and look fabulous, but remember that people who regularly exercise have a lower risk of developing several health concerns, so you might want to check out this place.
          </p>
          <a href="#read-more" className="btn btn-primary nav-button about-btn">READ MORE</a>
        </div>
      </div>
    </section>
  );
}

export default About;
