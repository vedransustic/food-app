import React from "react";
import Home from "./pages/Home";
import "./App.css";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div className={"container"}>
      <Navigation />
      <Home />
    </div>
  );
};

export default App;
