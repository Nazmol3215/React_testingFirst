import React, { useState, useEffect } from "react";



const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle the scroll behavior
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Set up an event listener on scroll
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-button">
          ⬆️
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
