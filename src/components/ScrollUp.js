import React, { useState, useEffect } from "react";

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  const ScrollUpHandler = () => {
    if (window.scrollY >= 380) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ScrollUpHandler);
    return () => window.removeEventListener("scroll", ScrollUpHandler);
  }, []);

  return (
    <div className={`scroll-up ${showScroll ? "show-scroll" : ""}`} id="scroll-up">
      <a href="#home" className="btn btn-primary">
        <i className="ri-arrow-up-line arrow-up"></i>
      </a>
    </div>
  );
};

export default ScrollUp;
