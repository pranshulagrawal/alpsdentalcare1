import React, { useState, useEffect } from "react";
import "./App.css";
import AppRoutes from "./routes";
import Preloader from "./components/Preloader"; // Assuming Preloader is in components folder

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    const handleDOMContentLoaded = () => {
      console.log("DOM fully loaded and parsed");
      // Your initialization code here, e.g., load data or call functions
      // initializeYourApp();
    };

    // Call the function immediately in case the DOM is already loaded
    if (document.readyState === "complete") {
      handleDOMContentLoaded();
    } else {
      // Add event listener for DOMContentLoaded
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
    }

    // Cleanup event listener on unmount
    return () => {
      clearTimeout(timer);
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
    };
    // Delay for 2 seconds (2000ms)

    // Cleanup the timer on component unmount
  }, []);

  return (
    <>
      {!isLoaded && <Preloader />} {/* Show Preloader while not loaded */}
      {isLoaded && <AppRoutes />} {/* Show AppRoutes after loading */}
    </>
  );
};

export default App;
