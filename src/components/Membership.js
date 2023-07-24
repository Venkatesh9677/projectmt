import React from "react";


const Membership = () =>{
    return( <section class="membership container" id="pricing">
    <h3 class="section-title">MEMBERSHIP PLANS</h3>
    <span class="section-subtitle">no matter what your fitness level is, let's find the fitnessmembership<br />
      options that works best for you</span>
    
    <div class="row membership">
      

    <div class="col membership-card">
        <div>
          <span class="membership-plan">Yearly Plan</span>
          <h4 class="card-title membership-title">₹11999</h4>
          <p class="card-description membership-description"></p>
        </div>
       <ul class="membership-feature">
        <li class="membership-list"><i class="ri-checkbox-circle-fill membership-checklist"></i>Unlimited gym access</li>
        <li class="membership-list"><i class="ri-checkbox-circle-fill membership-checklist"></i>All Training program</li>
        <li class="membership-list"><i class="ri-checkbox-circle-fill membership-checklist"></i>Free diet plan consultation</li>
        <li class="membership-list"><i class="ri-checkbox-circle-fill membership-checklist"></i>Personalised Weight training plan </li>
        <li class="membership-list"><i class="ri-checkbox-circle-fill membership-checklist"></i>Free Gym Bag & shaker</li>
        <li class="membership-list"><i class="ri-checkbox-circle-fill membership-checklist"></i>10% off on supplements</li>
        </ul>

<a href="#get-started" class="membership-btn">GET STARTED</a></div>

<div class="col membership-card">
        <div>
          <span class="membership-plan">Halfyearly Plan</span>
          <h4 class="card-title membership-title">₹6999</h4>
          <p class="card-description membership-description"></p>
        </div>
       <ul class="membership-feature">
        <li class="membership-list"><i class="ri-checkbox-circle-fill membership-checklist"></i>Unlimited gym access</li>
        <li class="membership-list"><i class="ri-checkbox-circle-fill membership-checklist"></i>All Training program</li>
        <li class="membership-list"><i class="ri-checkbox-circle-fill membership-checklist"></i>Free diet plan consultation</li>
        <li class="membership-list"><i class="ri-checkbox-circle-fill membership-checklist"></i>Personalised Weight training plan </li>
        </ul>

<a href="#get-started" class="membership-btn">GET STARTED</a></div>
 


<div class="col membership-card active">
        <div>
          <span class="membership-plan">Quarterly Plan</span>
          <h4 class="card-title membership-title">₹3499</h4>
          <p class="card-description membership-description"></p>
        </div>
        <ul class="membership-feature">
          <li class="membership-list"><i class="ri-checkbox-circle-fill membership-checklist"></i>Unlimited gym access</li>
          <li class="membership-list"><i class="ri-checkbox-circle-fill membership-checklist"></i>2 Training program</li>
          <li class="membership-list"><i class="ri-checkbox-circle-fill membership-checklist"></i>Free diet plan consultation</li>
          </ul>
        <a href="#get-started" class="membership-btn">GET STARTED</a>
      </div>

    
{/* <div class="col membership-card">
        <div>
          <span class="membership-plan">Monthly Plan</span>
          <h4 class="card-title membership-title">₹1499</h4>
          <p class="card-description membership-description"></p>
       </div>
        <ul class="membership-feature">
          <li class="membership-list"><i class="ri-checkbox-circle-fill membership-checklist"></i>Unlimited gym access</li>
          <li class="membership-list"><i class="ri-checkbox-circle-fill membership-checklist"></i>1 Training program</li>
          <li class="membership-list"><i class="ri-checkbox-circle-fill membership-checklist"></i>Free diet plan consultation</li>
        </ul>
        <a href="#get-started" class="membership-btn">GET STARTED</a>
     </div> */}
     
    
    
    
    
    </div>
</section>
)}


export default Membership;