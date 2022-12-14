import React from "react";
import logoImg from "../assets/BlueDiamond_Logo.png";
import { GrFacebookOption } from "react-icons/gr";
import { RxInstagramLogo } from "react-icons/rx";

function Footer() {
  return (
    <footer className="ftr-ctnr">
      <div className="ctc-ctnr">
        <img src={logoImg} alt="" className="ftr-lg-img" />

        <p>
          Blue Diamond Studio
          <br />
          <br /> 556 Upper Wentworth St. <br />
          Hamilton, ON L9A 4T9, Canada.{" "}
        </p>
      </div>
      <ul className="ftr-lst">
        <h4 className="ftr-hdr">Quick Links</h4>
        <li className="ftr-lst-itm">Home</li>
        <li className="ftr-lst-itm">Products</li>
        <li className="ftr-lst-itm">Services</li>
        <li className="ftr-lst-itm">About me</li>
        <li className="ftr-lst-itm">Blog</li>
        <li className="ftr-lst-itm">Contact</li>
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
    </footer>
  );
}

export default Footer;
