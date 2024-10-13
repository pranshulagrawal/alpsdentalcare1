import React from "react";
import AppRoutes from "./routes";
import { HashRouter as Router } from "react-router-dom";
import Preloader from "./components/Preloader";

const App = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  if (!isLoaded) return <Preloader />;
  return (
    <Router>
      {" "}
      <AppRoutes />
    </Router>
  );
};

export default App;
