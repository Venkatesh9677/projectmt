import React from "react";
import Teader from "./components/Teader";
import Hero from "./components/Hero";
import About from "./components/About";
import Program from "./components/Program";
import Membership from "./components/Membership";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import Loginpage from "./components/Loginpage";


function App() {
  return (
  <> 
 <Teader />
 
 <main>
 
 <Hero />
 <About />
 <Program />
 <Membership />
 <Newsletter />
 </main> 


<div>
<Loginpage/>
</div>
  



<Footer /> 
 
<ScrollUp /> 
 
  </>
  );
}




export default App;
