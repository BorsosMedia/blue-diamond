import { Routes, Route } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useLocoScroll from "./hooks/useLocoScroll";
import Cursor from "./features/Cursor.jsx";

import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import AboutMeScreen from "./components/AboutMeScreen";
import ServicesScreen from "./components/ServicesScreen";
import Footer from "./components/Footer";
import ProductsScreen from "./components/ProductsScreen";
import Contact from "./components/Contact";
import BlogScreen from "./components/BlogScreen";

/* import mobileMenuImg from "./assets/mobile-menu-background.png"; */

gsap.registerPlugin(ScrollTrigger);
function App() {
  useLocoScroll();

  return (
    <main className="App" id="app-ctnr" data-scroll-container>
      {/* <Cursor /> */}
      <Cursor />
      <div className="ctnr-wrppr" data-scroll-section>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/products" element={<ProductsScreen />} />
          <Route path="/services" element={<ServicesScreen />} />
          <Route path="/blog" element={<BlogScreen />} />
          <Route path="/aboutme" element={<AboutMeScreen />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </main>
  );
}

export default App;
