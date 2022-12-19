import { useEffect, useRef, useState } from "react";
import { useScrollLock } from "../hooks/useScrollLock";
import { useNavigate, useLocation } from "react-router-dom";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logoImg from "../assets/BlueDiamond_Logo.png";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GrFacebookOption } from "react-icons/gr";
import { RxInstagramLogo } from "react-icons/rx";
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
  const initialSection = localStorage.getItem("HandleSection") ?? "1";
  const [handleMobileMenu, setHandleMobileMenu] = useState(false);
  const [HandleMenuSection, setHandleMenuSection] = useState(initialSection);
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    anmRef.current = gsap.timeline({
      defaults: { ease: Expo.easeInOut },
    });

    anmRef.current.to(".nv-wrppr", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",

      duration: 0.6,

      stagger: 0.3,
      top: "0",
    });
    /* .fromTo(
        ".nv-itm",
        {
          y: 20,
          opacity: 0,
        },
        { stagger: 0.04, y: 20, opacity: 1 }
      ); */

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

  /*  useEffect(() => { */
  function handleNavRoute(nav) {
    switch (nav) {
      case "/":
        localStorage.setItem("HandleSection", "1");
        navigate("/");
        window.location.reload(true);
        setHandleMobileMenu(false);

        break;
      case "/products":
        localStorage.setItem("HandleSection", "2");
        navigate("/products");
        window.location.reload(true);
        setHandleMobileMenu(false);

        break;
      case "/services":
        localStorage.setItem("HandleSection", "3");
        navigate("/services");
        window.location.reload(true);
        setHandleMobileMenu(false);

        break;
      /*  case "/blog":
        navigate("/blog");
        setHandleMobileMenu(false);
        setHandleMenuSection("d");

        break; */
      case "/about":
        localStorage.setItem("HandleSection", "4");
        navigate("/about");
        window.location.reload(true);
        setHandleMobileMenu(false);
        setHandleMenuSection("e");
        break;

      case "/contact":
        localStorage.setItem("HandleSection", "5");
        navigate("/contact");
        window.location.reload(true);
        setHandleMobileMenu(!handleMobileMenu);
        setHandleMenuSection("f");
        break;
    }
  }
  /* }, [location.pathname]); */

  return (
    <div className="hdr-ctnr">
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
          <li className="nv-itm" onClick={() => handleNavRoute("/")}>
            <MdHomeFilled
              className={
                localStorage.getItem("HandleSection") === "1"
                  ? "icon icon-act"
                  : "icon"
              }
            />
            <span
              className={
                localStorage.getItem("HandleSection") === "1"
                  ? "nv-itm-act"
                  : undefined
              }
            >
              Home
            </span>
          </li>
          <li className="nv-itm" onClick={() => handleNavRoute("/products")}>
            <MdShoppingCart
              className={
                localStorage.getItem("HandleSection") === "2"
                  ? "icon icon-act"
                  : "icon"
              }
            />
            <span
              className={
                localStorage.getItem("HandleSection") === "2"
                  ? "nv-itm-act"
                  : undefined
              }
            >
              Products
            </span>
          </li>

          <li className="nv-itm" onClick={() => handleNavRoute("/services")}>
            <GiWeightLiftingUp
              className={
                localStorage.getItem("HandleSection") === "3"
                  ? "icon icon-act"
                  : "icon"
              }
            />
            <span
              className={
                localStorage.getItem("HandleSection") === "3"
                  ? "nv-itm-act"
                  : undefined
              }
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

          <li className="nv-itm" onClick={() => handleNavRoute("/about")}>
            <MdPerson
              className={
                localStorage.getItem("HandleSection") === "4"
                  ? "icon icon-act"
                  : "icon"
              }
            />
            <span
              className={
                localStorage.getItem("HandleSection") === "4"
                  ? "nv-itm-act"
                  : undefined
              }
            >
              About us
            </span>
          </li>
          <li className="nv-itm" onClick={() => handleNavRoute("/contact")}>
            <MdPhone
              className={
                localStorage.getItem("HandleSection") === "5"
                  ? "icon icon-act"
                  : "icon"
              }
            />
            <span
              className={
                localStorage.getItem("HandleSection") === "5"
                  ? "nv-itm-act"
                  : undefined
              }
            >
              Contact
            </span>
          </li>
          <div className="lnk-ctnr">
            <a
              className="hdr-lnk"
              href="https://www.facebook.com/people/Bluediamond-Studio/100063626148311/"
              target="_blank"
            >
              <GrFacebookOption className="icon" />
            </a>

            <a
              className="hdr-lnk"
              target="_blank"
              href="https://www.instagram.com/bluediamond.estudio/"
            >
              <RxInstagramLogo className="icon" />
            </a>
          </div>

          <li className="nv-itm">
            Blue Diamond Studio <br /> 2022
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
