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
  /* 
   
  Bullet point color black, last paragraph changed bg, product hero changed, first sentence changes,
  blue diamond about us changes, colorful thing on the services area mobile version change,
  products hero img gradient

  cambiar el color del texto en el about us (blue diamond studio),
  cambiar el texo de nexa light a nexa regular de products,
  hacer que la linea se rompa en 3 lineas para que no llegue tanto al medio,
  sombra a la caja de productos y ponerle el degradado al fondo,
  cambiar los botones a color azul, 


  Services, 
  how to get the body of your dreams, quitar el botton s
  cambiar las lineas que en vez de dos sean 3  s 


  about our founder, meet our founder  s


  about color text from yellow to blue, s
  change the button color hover to white s
  y de color azul


  Link the contact area to corresponding adress, phone, and email,



  THE LOGO ON THE HEADER DOESNT CLOSE THE MENU WHEN CLICKED, 
  but it changes the navigation.

  Cambiar los objectos en el nav menu, mover los iconos a la derecha, 
  Join our weight loss program hay que mover el fondo

  Our 6-week program que sean solo dos lineas

  Cambiar el Irma para negrita 
  Get in touch mas grande 


*/
  const [HandleMenuSection, setHandleMenuSection] = useState("a");

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
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<ProductsScreen />} />
        <Route path="/services" element={<ServicesScreen />} />
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
