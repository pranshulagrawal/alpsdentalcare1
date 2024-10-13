import React, { useState, useEffect } from "react";
import "./App.css";
import AppRoutes from "./routes";
import Preloader from "./components/Preloader"; // Assuming Preloader is in components folder

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000); // Delay for 2 seconds (2000ms)

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <>
      {!isLoaded && <Preloader />} {/* Show Preloader while not loaded */}
      {isLoaded && <AppRoutes />} {/* Show AppRoutes after loading */}
    </>
  );
};

export default App;
