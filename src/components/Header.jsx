import { useEffect, useRef, useState } from "react";
import { useScrollLock } from "../hooks/useScrollLock";
import { useNavigate } from "react-router-dom";
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

function Header({ HandleMenuSection, setHandleMenuSection }) {
  const navigate = useNavigate();

  const anmRef = useRef(null);
  const anmOvl = useRef(null);

  const [handleMobileMenu, setHandleMobileMenu] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    anmRef.current = gsap.timeline({
      defaults: { ease: Expo.easeInOut },
    });
    anmOvl.current = gsap.timeline({
      defaults: { ease: Expo.easeInOut },
    });

    anmOvl.current.to(".nv-ovrly", {
      duration: 0.8,
      backdropFilter: "blur(2rem)",
      webkitBackdropFilter: "blur(2rem)",
      visibility: "visible",
    });
    anmRef.current.to(".nv-wrppr", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 0.6,
      stagger: 0.3,
      right: "0",
    });

    return () => {
      anmRef.current.kill();
      anmOvl.current.kill();
    };
  }, []);

  useEffect(() => {
    if (handleMobileMenu) {
      anmRef.current.play();
      anmOvl.current.play();
      setTimeout(() => {
        lockScroll();
      }, 200);
    } else {
      anmRef.current.reverse();
      anmOvl.current.reverse();
      unlockScroll();
    }
  }, [handleMobileMenu]);

  function handleNavRoute(nav) {
    switch (nav) {
      case "/":
        navigate("/");
        setHandleMenuSection("a");
        setHandleMobileMenu(false);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        break;
      case "/products":
        navigate("/products");
        setHandleMenuSection("b");

        setHandleMobileMenu(false);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        break;
      case "/services":
        navigate("/services");
        setHandleMenuSection("c");

        setHandleMobileMenu(false);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        break;

      case "/about":
        navigate("/about");
        setHandleMenuSection("d");

        setHandleMobileMenu(false);

        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        break;

      case "/contact":
        navigate("/contact");

        setHandleMobileMenu(false);
        setHandleMenuSection("e");
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        break;
    }
  }
  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection);
      return () => {
        window.removeEventListener("scroll", updateScrollDirection);
      };
    }, [scrollDirection]);

    return scrollDirection;
  }

  const scrollDirection = useScrollDirection();
  return (
    <div
      className={scrollDirection === "down" ? "hdr-ctnr hdr-hddn" : "hdr-ctnr"}
    >
      <div className="lgo-ctnr" onClick={() => handleNavRoute("/")}>
        <img src={logoImg} alt="" className="logoImg" />
      </div>

      <div
        className="mn-ctnr"
        onClick={() => setHandleMobileMenu(!handleMobileMenu)}
      >
        <HiOutlineMenuAlt3 className="icon" />
      </div>
      <div className="nv-ovrly"> </div>
      <nav className="nv-wrppr">
        <ul className="nv-ctnr">
          <li className="nv-itm" onClick={() => handleNavRoute("/")}>
            <MdHomeFilled
              className={HandleMenuSection === "a" ? "icon icon-act" : "icon"}
            />
            <span
              className={HandleMenuSection === "a" ? "nv-itm-act" : undefined}
            >
              Home
            </span>
          </li>
          <li className="nv-itm" onClick={() => handleNavRoute("/products")}>
            <MdShoppingCart
              className={HandleMenuSection === "b" ? "icon icon-act" : "icon"}
            />
            <span
              className={HandleMenuSection === "b" ? "nv-itm-act" : undefined}
            >
              Products
            </span>
          </li>

          <li className="nv-itm" onClick={() => handleNavRoute("/services")}>
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

          <li className="nv-itm" onClick={() => handleNavRoute("/about")}>
            <MdPerson
              className={HandleMenuSection === "d" ? "icon icon-act" : "icon"}
            />
            <span
              className={HandleMenuSection === "d" ? "nv-itm-act" : undefined}
            >
              About Us
            </span>
          </li>
          <li className="nv-itm" onClick={() => handleNavRoute("/contact")}>
            <MdPhone
              className={HandleMenuSection === "e" ? "icon icon-act" : "icon"}
            />
            <span
              className={HandleMenuSection === "e" ? "nv-itm-act" : undefined}
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
