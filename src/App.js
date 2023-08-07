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
import Weeklyreport from "./components/Weeklyreport";
import Dashboard from  "./components/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
     <Router>
    
      <Routes>
        <Route
          path="/"element={
            <>
              <Header />
              <Hero />
              <About />
              <Program />
              <Membership />
              <Newsletter />
             <Weeklyreport />
              <Dashboard />
              <Footer />
            </>
          }
        />
        <Route path="/admin" element={<Adminpage/>} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Loginpage/>} />
        <Route path="/signup" element={<Signup/>} />

      
      
      
      </Routes>
      <ScrollUp />
    </Router>
  );
}

export default App;
