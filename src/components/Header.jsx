import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  function HandleMenuDisplay() {
    const mnTl = gsap.timeline({
      defaults: { ease: Expo.easeInOut },
    });
    mnTl.reversed(!mnTl.reversed());

    mnTl
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
      )

      .reversed(true);
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
    <div>
      <header className="hdr-ctnr">
        <div className="lgo-ctnr">
          {/* onClick={() => navigate("/") */}
          <img src={logoImg} alt="" className="logoImg" />
        </div>
        <div
          className="mn-ctnr"
          onClick={HandleMenuDisplay}
          /* id="HandleMenuDisplay" */
        >
          <HiOutlineMenuAlt3 className="icon" />
        </div>
        <nav className="nv-wrppr">
          <ul className="nv-ctnr">
            <li className="nv-itm" onClick={() => navigate("/")}>
              <MdHomeFilled className="icon" />
              <span>Home</span>
            </li>
            <li className="nv-itm">
              <MdShoppingCart className="icon" />
              <span>Products</span>
            </li>

            <li className="nv-itm" onClick={() => navigate("/services")}>
              <GiWeightLiftingUp className="icon" />
              <span>Services</span>
            </li>

            <li className="nv-itm">
              <FaBlogger className="icon" />
              <span>Blog</span>
            </li>
            <li className="nv-itm">
              <MdPhone className="icon" />
              <span>Contact</span>
            </li>

            <li
              className="nv-itm HandleMenuDisplayButton"
              onClick={() => navigate("/aboutme")}
            >
              <MdPerson className="icon" />
              <span>About me</span>
            </li>

            <li className="nv-itm">
              Blue Diamond Studio <br /> 2022
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
