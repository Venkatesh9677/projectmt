import React from "react";

const Newsletter = () =>{
    return(<section class="container newsletter">
    <div class="newsletter-card">
      <h3 class="newsletter-title">Subscribe Our Newsletter</h3>
      <p class="newsletter-subtitle">Get the latest information</p>
      <form action="">
        <div class="form-group">
          <input
            type="email"
            class="form-input"
            placeholder="Enter your email address"
          />
          <button class="newsletter-button">Subscribe</button>
        </div>
      </form>
    </div>
  </section>
        
    )
}


export default Newsletter;