import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useLocoScroll from "./hooks/useLocoScroll";
import Cursor from "./features/Cursor";

import HomeScreen from "./components/HomeScreen";
import AboutMeScreen from "./components/AboutMeScreen";
import Header from "./components/Header";

/* import mobileMenuImg from "./assets/mobile-menu-background.png"; */

gsap.registerPlugin(ScrollTrigger);
function App() {
  useLocoScroll();

  return (
    <main className="App" id="app-ctnr" data-scroll-container>
      <Cursor />
      <Header />
      <div data-scroll-section className="ctnr-wrppr">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/aboutme" element={<AboutMeScreen />} />
        </Routes>
      </div>
      {/* <div className="ctnr-wrppr scnd-ctnr" data-scroll-section>
  
      </div> */}

      {/* <div
        className="ctnr-wrppr thrd-ctnr"
        style={{ backgroundColor: "lightblue" }}
        data-scroll-section
      >
  
      </div> */}
    </main>
  );
}

export default App;
