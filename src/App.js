import React from "react";
import AppRoutes from "./routes";
import { HashRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      {" "}
      <AppRoutes />
    </Router>
  );
};

export default App;
