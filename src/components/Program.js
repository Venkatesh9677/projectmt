import React from "react";
import ProgramImage1 from '../assets/images/runner.png';
import ProgramImage2 from '../assets/images/strong.png';
import ProgramImage3 from '../assets/images/yoga.png';

const Program = () => {
  return (
    <section className="program container" id="program">
      <h3 className="section-title">OUR PROGRAM</h3>
      <span className="section-subtitle">Build your best body</span>
      <div className="row program-row">
        <div className="col-md-4 program-card">
          <img className="program-card-image" src={ProgramImage1} alt="" />
          <h4 className="card-title">Cardio & Strength</h4>
          <p className="card-description">
            {/* Add description for Cardio & Strength program */}
          </p>
        </div>

        <div className="col-md-4 program-card">
          <img className="program-card-image" src={ProgramImage2} alt="" />
          <h4 className="card-title">Muscle Building</h4>
          <p className="card-description">
            {/* Add description for Muscle Building program */}
          </p>
        </div>

        <div className="col-md-4 program-card">
          <img className="program-card-image" src={ProgramImage3} alt="" />
          <h4 className="card-title">Stretch & Yoga</h4>
          <p className="card-description">
            {/* Add description for Stretch & Yoga program */}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Program;
