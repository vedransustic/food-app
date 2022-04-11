import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Menu from "./container/Menu";
import Footer from "./components/Footer";
import { menuItemData } from "./const";

const shuffledItems = menuItemData.sort(() => 0.5 - Math.random());
const menuItems = shuffledItems.slice(0, 3);

const App = () => {
  return (
    <div className="container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home list={menuItems} />} />
        <Route path="/menu" element={<Menu list={menuItemData} />} />
        <Route path="/cart" element={<Cart list={[]} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
