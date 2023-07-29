import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container footer-container">
    <div className="footer-row">
    
    <div className="footer-identity">
   <a href="#home" className="navbar-brand nav-logo1">
     <span className="section-subtitle"> MUSCLETRAINER</span></a>
    
     <p className="footer-description"></p>
    
    </div>

    <div className="footer-feature">
    
    <div className="col">
    <h4 className="footer-feature-title">About</h4>
    <ul className="footer-feature-list">
     <li><a href="#about">About Us</a></li>
     <li><a href="#features">Features</a></li>
     <li><a href="#term-condition">Terms & Agreements</a></li>
    </ul>
    </div>

     
  <div className="col">
   <h4 className="footer-feature-title">Support</h4>
     <ul className="footer-feature-list">
      <li><a href="#faq">Faq</a></li>
      <li><a href="#support">Support Center</a></li>
      <li><a href="#privacy-policy">Privacy Policy</a></li>
    </ul>
    </div>

  <div className="col">
   <h4 className="footer-feature-title">Contact Us</h4>
    <ul className="footer-feature-list">
     <li><a href="#gmail"><i className="ri-mail-line"></i> mt@gmail.com</a></li>
     <li><a href="#address"><i className="ri-map-pin-line"></i> Virugambakkam</a></li>
    </ul>
  </div>
  
   
   </div>
   </div>
        
        <br />
  <div className="footer-copyright">@No-copywrites fair to use</div>
      
        
    </div>
    
    </footer>
  );
};

export default Footer;
