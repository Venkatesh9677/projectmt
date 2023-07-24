import React from "react";

import { useState } from "react";
const ScrollUp = () => {
  const[showScroll,setShowScroll] = useState(false);  
  
  const ScrollUpHandler =  () => {
    if(window.scrollY >= 380){setShowScroll(true)}
else{setShowScroll(false);}  
 }
 
 window.addEventListener('scroll',ScrollUpHandler);
return(
        <div class={`scroll-up ${showScroll ? 'show-scroll':''}`} id="scroll-up">
      <a href="#home"><i class="ri-arrow-up-line arrow-up"></i></a>
    </div>
    )
}

export default ScrollUp;