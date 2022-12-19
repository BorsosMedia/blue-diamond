import { Routes, Route } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useLocoScroll from "./hooks/useLocoScroll";
import Cursor from "./features/Cursor.jsx";

import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";
import ServicesScreen from "./components/ServicesScreen";
import Footer from "./components/Footer";
import ProductsScreen from "./components/ProductsScreen";
import Contact from "./components/Contact";
import BlogScreen from "./components/BlogScreen";
import { useEffect } from "react";

/* import mobileMenuImg from "./assets/mobile-menu-background.png"; */

gsap.registerPlugin(ScrollTrigger);
function App() {
  /* 
    El texto es NexaRegular, y la fuente deberia ser Nexa Light


*/

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="App" id="app-ctnr">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<ProductsScreen />} />
        <Route path="/services" element={<ServicesScreen />} />
        <Route path="/blog" element={<BlogScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
