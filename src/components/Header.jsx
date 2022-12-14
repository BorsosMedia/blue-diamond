import { useEffect, useRef, useState } from "react";
import { useScrollLock } from "../hooks/useScrollLock";
import { useNavigate, useLocation } from "react-router-dom";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logoImg from "../assets/BlueDiamond_Logo.png";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaBlogger } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import {
  MdHomeFilled,
  MdShoppingCart,
  MdPhone,
  MdPerson,
} from "react-icons/md";
gsap.registerPlugin(ScrollTrigger);

function Header() {
  const navigate = useNavigate();

  const anmRef = useRef(null);
  const [handleMobileMenu, setHandleMobileMenu] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    anmRef.current = gsap.timeline({
      defaults: { ease: Expo.easeInOut },
    });

    anmRef.current
      .to(".nv-wrppr", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",

        duration: 0.6,

        stagger: 0.3,
        top: "0",
      })
      .fromTo(
        ".nv-itm",
        {
          y: 20,
          opacity: 0,
        },
        { stagger: 0.04, y: 20, opacity: 1 }
      );

    return () => {
      anmRef.current.kill();
    };
  }, []);

  useEffect(() => {
    if (handleMobileMenu) {
      anmRef.current.play();
      setTimeout(() => {
        lockScroll();
      }, 200);
    } else {
      anmRef.current.reverse();
      unlockScroll();
    }
  }, [handleMobileMenu]);

  function handleNavigation(nav) {
    switch (nav) {
      case "home":
        navigate("/");
        setHandleMobileMenu(!handleMobileMenu);
        break;
      case "services":
        navigate("/services");
        setHandleMobileMenu(!handleMobileMenu);
        break;
      case "about":
        navigate("/aboutme");
        setHandleMobileMenu(!handleMobileMenu);
        break;
      case "products":
        navigate("/products");
        setHandleMobileMenu(!handleMobileMenu);
        break;
      case "contact":
        navigate("/contact");
        setHandleMobileMenu(!handleMobileMenu);
    }
  }
  /* 
  useEffect(() => {
    document
      .querySelector("#HandleMenuDisplay")
      .addEventListener("click", animateIt);
    document
      .querySelector(".HandleMenuDisplayButton")
      .addEventListener("click", closeMenu);

    function animateIt() {
      mnTl.reversed(!mnTl.reversed());
    }
    function closeMenu() {
      mnTl.reversed(!mnTl.reversed());
    }

    const mnTl = gsap.timeline({
      defaults: { ease: Expo.easeInOut },
    });

  }, []); */

  return (
    <header className="hdr-ctnr">
      <div className="lgo-ctnr" onClick={() => navigate("/")}>
        <img src={logoImg} alt="" className="logoImg" />
      </div>
      <div
        className="mn-ctnr"
        onClick={() => setHandleMobileMenu(!handleMobileMenu)}
        /* id="HandleMenuDisplay" */
      >
        <HiOutlineMenuAlt3 className="icon" />
      </div>
      <nav className="nv-wrppr">
        <ul className="nv-ctnr">
          <li className="nv-itm" onClick={() => handleNavigation("home")}>
            <MdHomeFilled className="icon" />
            <span>Home</span>
          </li>
          <li className="nv-itm" onClick={() => handleNavigation("products")}>
            <MdShoppingCart className="icon" />
            <span>Products</span>
          </li>

          <li className="nv-itm" onClick={() => handleNavigation("services")}>
            <GiWeightLiftingUp className="icon" />
            <span>Services</span>
          </li>

          <li className="nv-itm">
            <FaBlogger className="icon" />
            <span>Blog</span>
          </li>
          <li className="nv-itm" onClick={() => handleNavigation("contact")}>
            <MdPhone className="icon" />
            <span>Contact</span>
          </li>

          <li className="nv-itm" onClick={() => handleNavigation("about")}>
            <MdPerson className="icon" />
            <span>About me</span>
          </li>

          <li className="nv-itm">
            Blue Diamond Studio <br /> 2022
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
