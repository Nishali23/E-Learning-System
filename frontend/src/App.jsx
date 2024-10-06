import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import Home from "./pages/home";
import Navigation from "./components/navigation";

const App = () => {
  return (
    <div>
      <Navigation />
      <Home />
    </div>
  );
};

export default App;
