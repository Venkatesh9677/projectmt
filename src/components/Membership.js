import React from "react";

const Membership = () => {
  return (
    <section className="membership container" id="pricing">
      <h3 className="section-title">MEMBERSHIP PLANS</h3>
      <span className="section-subtitle">
        No matter what your fitness level is, let's find the fitness membership
        <br />
        Options that work best for you
      </span>

      <div className="row membership-row">
        <div className="col-md-4 membership-card">
          <div>
            <span className="membership-plan">Yearly Plan</span>
            <h4 className="card-title membership-title">₹11999</h4>
            <p className="card-description membership-description">
              {/* Add description for Yearly Plan */}
            </p>
          </div>
          <ul className="membership-feature">
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              Unlimited gym access
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              All Training program
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              Free diet plan consultation
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              Personalised Weight training plan
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              Free Gym Bag & shaker
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              10% off on supplements
            </li>
          </ul>
          <a href="#get-started" className="membership-btn">GET STARTED</a>
        </div>

        <div className="col-md-4 membership-card">
          <div>
            <span className="membership-plan">Halfyearly Plan</span>
            <h4 className="card-title membership-title">₹6999</h4>
            <p className="card-description membership-description">
              {/* Add description for Halfyearly Plan */}
            </p>
          </div>
          <ul className="membership-feature">
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              Unlimited gym access
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              All Training program
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              Free diet plan consultation
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              Personalised Weight training plan
            </li>
          </ul>
          <a href="#get-started" className="membership-btn">GET STARTED</a>
        </div>

        <div className="col-md-4 membership-card active">
          <div>
            <span className="membership-plan">Quarterly Plan</span>
            <h4 className="card-title membership-title">₹3499</h4>
            <p className="card-description membership-description">
              {/* Add description for Quarterly Plan */}
            </p>
          </div>
          <ul className="membership-feature">
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              Unlimited gym access
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              2 Training program
            </li>
            <li className="membership-list">
              <i className="ri-checkbox-circle-fill membership-checklist"></i>
              Free diet plan consultation
            </li>
          </ul>
          <a href="#get-started" className="membership-btn">GET STARTED</a>
        </div>
      </div>
    </section>
  );
};

export default Membership;
