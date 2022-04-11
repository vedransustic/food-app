import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className={"container"}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
