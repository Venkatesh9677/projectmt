import React from "react";
import Logo from "../assets/images/Logo.jpg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <header className="Header" id="home">
      <nav className="navbar navbar-expand-lg navbar-light bg-light container">
        <NavLink to={'/'} className="navbar-brand">
          MUSCLE<span>TRAINER</span>
          <img className="mtlogo" src={Logo} alt="" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setShow(!show)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${show ? "show" : ""}`}
          id="nav-menu"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to={'/'}
                href="#home"
                className="btn1 btn-primary nav-button"
                onClick={() => setShow(!show)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className="btn1 btn-primary nav-button"
                onClick={() => setShow(!show)}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#program"
                className="btn1 btn-primary nav-button"
                onClick={() => setShow(!show)}
              >
                Program
              </a>
            </li>
            <li className="nav-item ">
              <a
                href="#pricing"
                className="btn1 btn-primary nav-button"
                onClick={() => setShow(!show)}
              >
                Plans
              </a>
            </li>
            <li className="nav-item">
              <NavLink
               to={'login'}
                className="btn1 btn-primary nav-button"
                onClick={() => setShow(!show)}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
               to={'admin'}
                className="btn1 btn-primary nav-button"
                onClick={() => setShow(!show)}
              >
                Admin
              </NavLink>
            </li>

            <li>
              <NavLink to={'signup'} className="btn btn-primary nav-button">
                Signup
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
