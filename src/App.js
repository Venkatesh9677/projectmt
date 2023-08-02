import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Program from "./components/Program";
import Membership from "./components/Membership";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import Loginpage from "./components/Loginpage";
import Signup from "./components/Signup";
import Registration from "./components/Registration";
import Adminpage from "./components/Adminpage";
import Dashboard from "./components/Dashboard";



function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Program />
      <Membership />
      <Newsletter />
      <Adminpage/>
      <Loginpage />
      <Signup />
      <Registration/>
      <Dashboard/>
     
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
