import React from "react";

const Membership = () => {
  return (
  <section className="membership container" id="pricing">
  <h3 className="section-title">MEMBERSHIP PLANS</h3>
  <span className="section-subtitle">NO MATTER WHAT YOUR FITNESS LEVEL IS, LET'S FIND THE FITTNESS MEMBERSHIP OPTIONS THAT WORKS BEST FOR YOU</span>
<br /><br />
      <div className="row membership-row">
      <div className="col-md-4 membership-card">
      <div><span className="membership-plan">Yearly Plan</span>
      
      <h4 className="card-title membership-title">₹11999</h4>
      <p className="card-description membership-description"> {/* Add description for Yearly Plan */}</p></div>

<ul className="membership-feature">
  
  <li className="membership-list"><i className="ri-checkbox-circle-fill membership-checklist"></i>Unlimited gym access</li>
  <li className="membership-list"><i className="ri-checkbox-circle-fill membership-checklist"></i>All Training program</li>
  <li className="membership-list"><i className="ri-checkbox-circle-fill membership-checklist"></i>Free diet plan consultation</li>
  <li className="membership-list"><i className="ri-checkbox-circle-fill membership-checklist"></i>Personalised Weight training plan</li>
  <li className="membership-list"><i className="ri-checkbox-circle-fill membership-checklist"></i>Free Gym Bag & shaker</li>
  <li className="membership-list"><i className="ri-checkbox-circle-fill membership-checklist"></i>10% off on supplements</li>

</ul>
  
  </div>


<div className="col-md-4 membership-card">

<div><span className="membership-plan">Halfyearly Plan</span>
 <h4 className="card-title membership-title">₹6999</h4>
  <p className="card-description membership-description">{/* Add description for Halfyearly Plan */}</p></div>
          
<ul className="membership-feature">
  
  <li className="membership-list"><i className="ri-checkbox-circle-fill membership-checklist"></i>Unlimited gym access</li>
  <li className="membership-list"><i className="ri-checkbox-circle-fill membership-checklist"></i>All Training program</li>
  <li className="membership-list"><i className="ri-checkbox-circle-fill membership-checklist"></i>Free diet plan consultation</li>
  <li className="membership-list"><i className="ri-checkbox-circle-fill membership-checklist"></i> Personalised Weight training plan</li>
  
  </ul>
          
  
  </div>

  <div className="col-md-4 membership-card active">
   
   <div><span className="membership-plan">Quarterly Plan</span>
   <h4 className="card-title membership-title">₹3499</h4>
   
   <p className="card-description membership-description">{/* Add description for Quarterly Plan */}</p></div>

 <ul className="membership-feature">
  <li className="membership-list"><i className="ri-checkbox-circle-fill membership-checklist"></i>Unlimited gym access</li>
  <li className="membership-list"><i className="ri-checkbox-circle-fill membership-checklist"></i>2 Training program</li>
  <li className="membership-list"><i className="ri-checkbox-circle-fill membership-checklist"></i>Free diet plan consultation</li>
 </ul>
  
 </div>
  
  </div>
    </section>
  );
};

export default Membership;
