import React from "react";
import Logo from "../assets/images/Logo.jpg";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <header className="Header" id="home">
    <nav className="navbar navbar-expand-lg navbar-light bg-light container">
    <a href="#home" className="navbar-brand">MUSCLE<span>TRAINER</span><img className="mtlogo" src={Logo} alt="" /></a>
        
<button className="navbar-toggler" type="button"onClick={() => setShow(!show)}><span className="navbar-toggler-icon"></span></button>
  
  <div className={`collapse navbar-collapse ${show ? "show" : ""}`} id="nav-menu">
  <ul className="navbar-nav ml-auto">
  <li className="nav-item"><a href="#home" className="btn1 btn-primary nav-button" onClick={() => setShow(!show)}>Home</a></li>
  <li className="nav-item"><a href="#about" className="btn1 btn-primary nav-button" onClick={() => setShow(!show)}>About</a></li>
  <li className="nav-item"><a href="#program" className="btn1 btn-primary nav-button" onClick={() => setShow(!show)}>Program</a></li>
  <li className="nav-item "><a href="#pricing" className="btn1 btn-primary nav-button" onClick={() => setShow(!show)}>Plans</a></li> 
  <li className="nav-item"><a href="#login" className="btn1 btn-primary nav-button" onClick={() => setShow(!show)}>Login</a></li>
  <li className="nav-item"><a href="#login" className="btn1 btn-primary nav-button" onClick={() => setShow(!show)}>Admin</a></li>
 
  <li><a href="#program" className="btn btn-primary nav-button">Signup</a></li>
  </ul>


    </div>
    </nav>
  </header>
  );
};

export default Header;
