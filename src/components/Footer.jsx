import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import logoImg from "../assets/BlueDiamond_Logo.png";
import { GrFacebookOption } from "react-icons/gr";
import { RxInstagramLogo } from "react-icons/rx";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [FooterLocation, setFooterLocation] = useState("a");
  function handleFooterNav(dest) {
    navigate(`${dest}`);
    window.location.reload(true);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  useEffect(() => {
    switch (location.pathname) {
      case "/home":
        setFooterLocation("a");
        break;
      case "/products":
        setFooterLocation("b");
        break;
      case "/services":
        setFooterLocation("c");
        break;
      case "/about":
        setFooterLocation("d");
        break;
      case "/contact":
        setFooterLocation("e");
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
            FooterLocation === "a"
              ? "ftr-lst-itm ftr-lst-itm-act"
              : "ftr-lst-itm"
          }
          onClick={() => handleFooterNav("/")}
        >
          Home
        </li>
        <li
          className={
            FooterLocation === "b"
              ? "ftr-lst-itm ftr-lst-itm-act"
              : "ftr-lst-itm"
          }
          onClick={() => handleFooterNav("/products")}
        >
          Products
        </li>
        <li
          className={
            FooterLocation === "c"
              ? "ftr-lst-itm ftr-lst-itm-act"
              : "ftr-lst-itm"
          }
          onClick={() => handleFooterNav("/services")}
        >
          Services
        </li>
        <li
          className={
            FooterLocation === "d"
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
            FooterLocation === "e"
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
