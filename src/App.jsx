import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Menu } from "./container";
import { Navigation, Footer } from "./components";
import { Routes, Route } from "react-router-dom";
import { menuItemData } from "./const";
import "./App.css";

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
