import { useEffect, useRef, useState } from "react";
import { useScrollLock } from "../hooks/useScrollLock";
import { useNavigate, useLocation } from "react-router-dom";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logoImg from "../assets/BlueDiamond_Logo.png";
import { GiWeightLiftingUp } from "react-icons/gi";

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
  const location = useLocation();

  const anmRef = useRef(null);
  const [handleMobileMenu, setHandleMobileMenu] = useState(true);
  const [HandleMenuSection, setHandleMenuSection] = useState("a");
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

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        navigate("/");
        setHandleMobileMenu(false);
        setHandleMenuSection("a");
        break;
      case "/products":
        navigate("/products");
        setHandleMobileMenu(false);
        setHandleMenuSection("b");
        break;
      case "/services":
        navigate("/services");
        setHandleMobileMenu(false);
        setHandleMenuSection("c");
        break;
     /*  case "/blog":
        navigate("/blog");
        setHandleMobileMenu(false);
        setHandleMenuSection("d");

        break; */
      case "/about":
        navigate("/about");
        setHandleMobileMenu(false);
        setHandleMenuSection("e");
        break;

      case "/contact":
        navigate("/contact");
        setHandleMobileMenu(!handleMobileMenu);
        setHandleMenuSection("f");
        break;
    }
  }, [location.pathname]);

  return (
    <header className="hdr-ctnr">
      <div className="lgo-ctnr" onClick={() => navigate("/")}>
        <img src={logoImg} alt="" className="logoImg" />
      </div>

      <div
        className="mn-ctnr"
        onClick={() => setHandleMobileMenu(!handleMobileMenu)}
      >
        <HiOutlineMenuAlt3 className="icon" />
      </div>
      <nav className="nv-wrppr">
        <ul className="nv-ctnr">
          <li className="nv-itm" onClick={() => navigate("/")}>
            <MdHomeFilled
              className={HandleMenuSection === "a" ? "icon icon-act" : "icon"}
            />
            <span
              className={HandleMenuSection === "a" ? "nv-itm-act" : undefined}
            >
              Home
            </span>
          </li>
          <li className="nv-itm" onClick={() => navigate("products")}>
            <MdShoppingCart
              className={HandleMenuSection === "b" ? "icon icon-act" : "icon"}
            />
            <span
              className={HandleMenuSection === "b" ? "nv-itm-act" : undefined}
            >
              Products
            </span>
          </li>

          <li className="nv-itm" onClick={() => navigate("services")}>
            <GiWeightLiftingUp
              className={HandleMenuSection === "c" ? "icon icon-act" : "icon"}
            />
            <span
              className={HandleMenuSection === "c" ? "nv-itm-act" : undefined}
            >
              Services
            </span>
          </li>

        {/*   <li className="nv-itm" onClick={() => navigate("blog")}>
            <FaBlogger
              className={HandleMenuSection === "d" ? "icon icon-act" : "icon"}
            />
            <span
              className={HandleMenuSection === "d" ? "nv-itm-act" : undefined}
            >
              Blog
            </span>
          </li> */}

          <li className="nv-itm" onClick={() => navigate("about")}>
            <MdPerson
              className={HandleMenuSection === "e" ? "icon icon-act" : "icon"}
            />
            <span
              className={HandleMenuSection === "e" ? "nv-itm-act" : undefined}
            >
              About us
            </span>
          </li>
          <li className="nv-itm" onClick={() => navigate("contact")}>
            <MdPhone
              className={HandleMenuSection === "f" ? "icon icon-act" : "icon"}
            />
            <span
              className={HandleMenuSection === "f" ? "nv-itm-act" : undefined}
            >
              Contact
            </span>
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
