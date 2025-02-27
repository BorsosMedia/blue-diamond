import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import logoImg from "../assets/BlueDiamond_Logo.png";
import { GrFacebookOption } from "react-icons/gr";
import { RxInstagramLogo } from "react-icons/rx";

function Footer({ HandleMenuSection, setHandleMenuSection }) {
  const navigate = useNavigate();
  const location = useLocation();
  function handleFooterNav(nav) {
    switch (nav) {
      case "/":
        navigate("/");

        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        break;
      case "/products":
        navigate("/products");

        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        break;
      case "/services":
        navigate("/services");

        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        break;
      /*  case "/blog":
          navigate("/blog");
          setHandleMobileMenu(false);
          setHandleMenuSection("d");
  
          break; */
      case "/about":
        navigate("/about");

        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        break;

      case "/contact":
        navigate("/contact");

        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        break;
    }
  }

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setHandleMenuSection("a");

        break;
      case "/products":
        setHandleMenuSection("b");

        break;
      case "/services":
        setHandleMenuSection("c");

        break;

      case "/about":
        setHandleMenuSection("d");

        break;

      case "/contact":
        setHandleMenuSection("e");

        break;
    }
  }, [location.pathname]);
  /* 
  useEffect(() => {
    switch (location.pathname) {
      case "/home":
        setFooterLocation("a");
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        break;
      case "/products":
        setFooterLocation("b");
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        break;
      case "/services":
        setFooterLocation("c");
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        break;
      case "/about":
        setFooterLocation("d");
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        break;
      case "/contact":
        setFooterLocation("e");
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        break;
    }
  }, []);
 */
  return (
    <div className="ftr-ctnr">
      <div className="ctc-ctnr">
        <img src={logoImg} alt="" className="ftr-lg-img" />

        <p>
          Blue Diamond Studio
          <br />
          <br />{" "}
          <a
            href="https://www.google.com/maps/place/556+Upper+Wentworth+St,+Hamilton,+ON+L9A+4V2,+Canada/@43.2344776,-79.8571593,17z/data=!4m5!3m4!1s0x882c9bb753a5c789:0x8958bf6e426f1d01!8m2!3d43.234522!4d-79.8574958"
            target="_blank"
          >
            556 Upper Wentworth St. <br />
            Hamilton, ON L9A 4T9, Canada.
          </a>
        </p>
      </div>
      <ul className="ftr-lst">
        <h4 className="ftr-hdr">Quick Links</h4>
        <li
          className={
            HandleMenuSection === "a"
              ? "ftr-lst-itm ftr-lst-itm-act"
              : "ftr-lst-itm"
          }
          onClick={() => handleFooterNav("/")}
        >
          Home
        </li>
        <li
          className={
            HandleMenuSection === "b"
              ? "ftr-lst-itm ftr-lst-itm-act"
              : "ftr-lst-itm"
          }
          onClick={() => handleFooterNav("/products")}
        >
          Products
        </li>
        <li
          className={
            HandleMenuSection === "c"
              ? "ftr-lst-itm ftr-lst-itm-act"
              : "ftr-lst-itm"
          }
          onClick={() => handleFooterNav("/services")}
        >
          Services
        </li>
        <li
          className={
            HandleMenuSection === "d"
              ? "ftr-lst-itm ftr-lst-itm-act"
              : "ftr-lst-itm"
          }
          onClick={() => handleFooterNav("/about")}
        >
          About Us
        </li>
        {/*     <li className="ftr-lst-itm" onClick={() => handleFooterNav("/blog")}>
          Blog
        </li> */}
        <li
          className={
            HandleMenuSection === "e"
              ? "ftr-lst-itm ftr-lst-itm-act"
              : "ftr-lst-itm"
          }
          onClick={() => handleFooterNav("/contact")}
        >
          Contact
        </li>
      </ul>
      <div className="scl-md">
        <img src={logoImg} alt="" className="ftr-lg-img" />

        <a
          href="https://www.google.com/maps/place/556+Upper+Wentworth+St,+Hamilton,+ON+L9A+4V2,+Canada/@43.2344776,-79.8571593,17z/data=!4m5!3m4!1s0x882c9bb753a5c789:0x8958bf6e426f1d01!8m2!3d43.234522!4d-79.8574958"
          target="_blank"
          id="link--hidden"
        >
          556 Upper Wentworth St. <br />
          Hamilton, ON L9A 4T9, Canada.
        </a>

        <h4 className="ftr-hdr">Connect With Us</h4>
        <div className="sm-ctnr">
          <a
            className="ftr-lg-ctnr"
            href="https://www.facebook.com/people/Bluediamond-Studio/100063626148311/"
            target="_blank"
          >
            <GrFacebookOption className="icon" />
          </a>

          <a
            className="ftr-lg-ctnr"
            target="_blank"
            href="https://www.instagram.com/bluediamond.estudio/"
          >
            <RxInstagramLogo className="icon" />
          </a>
        </div>
        {/* <a
              href="tel:+19059291635

"
              target="_blank"
              className="bttn bttn-try"
            >
              Give us a call
            </a> */}
        <a href="tel:+19059291635" target="_blank">
          +1 905-929-1635
        </a>
      </div>
      <div className="txt-ftr-ctnr">
        <p className="ftr-txt">
          © Copyright 2025 - All Rights Reserved.
          <br /> Website designed and developed by
          <a href="https://www.borsosmedia.com/" target="_blank">
            Borsos Media
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
