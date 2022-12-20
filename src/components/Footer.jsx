import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import logoImg from "../assets/BlueDiamond_Logo.png";
import { GrFacebookOption } from "react-icons/gr";
import { RxInstagramLogo } from "react-icons/rx";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialSection = localStorage.getItem("HandleSection") ?? "1";
  const [HandleMenuSection, setHandleMenuSection] = useState(initialSection);

  const [FooterLocation, setFooterLocation] = useState("a");
  function handleFooterNav(nav) {
    switch (nav) {
      case "/":
        localStorage.setItem("HandleSection", "1");
        navigate("/");

        setHandleMobileMenu(false);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        break;
      case "/products":
        localStorage.setItem("HandleSection", "2");
        navigate("/products");

        setHandleMobileMenu(false);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        break;
      case "/services":
        localStorage.setItem("HandleSection", "3");
        navigate("/services");
        setHandleMobileMenu(false);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        break;
      /*  case "/blog":
          navigate("/blog");
          setHandleMobileMenu(false);
          setHandleMenuSection("d");
  
          break; */
      case "/about":
        localStorage.setItem("HandleSection", "4");
        navigate("/about");
        setHandleMobileMenu(false);
        setHandleMenuSection("e");
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        break;

      case "/contact":
        localStorage.setItem("HandleSection", "5");
        navigate("/contact");
        setHandleMobileMenu(!handleMobileMenu);
        setHandleMenuSection("f");
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        break;
    }
    window.location.reload(true);
  }

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

  return (
    <div className="ftr-ctnr">
      <div className="ctc-ctnr">
        <img src={logoImg} alt="" className="ftr-lg-img" />

        <p>
          Blue Diamond Studio
          <br />
          <br /> 556 Upper Wentworth St. <br />
          Hamilton, ON L9A 4T9, Canada.
        </p>
      </div>
      <ul className="ftr-lst">
        <h4 className="ftr-hdr">Quick Links</h4>
        <li
          className={
            localStorage.getItem("HandleSection") === "1"
              ? "ftr-lst-itm ftr-lst-itm-act"
              : "ftr-lst-itm"
          }
          onClick={() => handleFooterNav("/")}
        >
          Home
        </li>
        <li
          className={
            localStorage.getItem("HandleSection") === "2"
              ? "ftr-lst-itm ftr-lst-itm-act"
              : "ftr-lst-itm"
          }
          onClick={() => handleFooterNav("/products")}
        >
          Products
        </li>
        <li
          className={
            localStorage.getItem("HandleSection") === "3"
              ? "ftr-lst-itm ftr-lst-itm-act"
              : "ftr-lst-itm"
          }
          onClick={() => handleFooterNav("/services")}
        >
          Services
        </li>
        <li
          className={
            localStorage.getItem("HandleSection") === "4"
              ? "ftr-lst-itm ftr-lst-itm-act"
              : "ftr-lst-itm"
          }
          onClick={() => handleFooterNav("/about")}
        >
          About me
        </li>
        {/*     <li className="ftr-lst-itm" onClick={() => handleFooterNav("/blog")}>
          Blog
        </li> */}
        <li
          className={
            localStorage.getItem("HandleSection") === "5"
              ? "ftr-lst-itm ftr-lst-itm-act"
              : "ftr-lst-itm"
          }
          onClick={() => handleFooterNav("/contact")}
        >
          Contact
        </li>
      </ul>
      <div className="scl-md">
        <h4 className="ftr-hdr">Connect with us</h4>
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
        <p>+1 905-929-1635</p>
      </div>
      <div className="txt-ftr-ctnr">
        <p className="ftr-txt">
          © Copyright 2022. All Rights Reserved.
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
