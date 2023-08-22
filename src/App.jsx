import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
/* import useLocoScroll from "./hooks/useLocoScroll";
import Cursor from "./features/Cursor.jsx"; */

import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";
import ServicesScreen from "./components/ServicesScreen";
import Footer from "./components/Footer";
import ProductsScreen from "./components/ProductsScreen";
import Contact from "./components/Contact";
import BlogScreen from "./components/BlogScreen";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
function App() {
  const [HandleMenuSection, setHandleMenuSection] = useState("a");
  const [PlanToggler, setPlanToggler] = useState("1");
  const [PlanDropdown, setPlanDropdown] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="App" id="app-ctnr">
      <Header
        HandleMenuSection={HandleMenuSection}
        setHandleMenuSection={setHandleMenuSection}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomeScreen
              PlanToggler={PlanToggler}
              setPlanToggler={setPlanToggler}
              PlanDropdown={PlanDropdown}
              setPlanDropdown={setPlanDropdown}
            />
          }
        />
        <Route path="/products" element={<ProductsScreen />} />
        <Route
          path="/services"
          element={
            <ServicesScreen
              PlanToggler={PlanToggler}
              setPlanToggler={setPlanToggler}
              PlanDropdown={PlanDropdown}
              setPlanDropdown={setPlanDropdown}
            />
          }
        />
        <Route path="/blog" element={<BlogScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer
        HandleMenuSection={HandleMenuSection}
        setHandleMenuSection={setHandleMenuSection}
      />
    </main>
  );
}

export default App;
