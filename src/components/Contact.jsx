import React from "react";
import { useEffect } from "react";
import adressIcon from "../assets/icons/adress1.png";
import phoneIcon from "../assets/icons/phone1.png";
import emailIcon from "../assets/icons/email1.png";

function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <section className="ctnr ctc-scrn-ctnr">
        <h3 className="main-ttl">Get in touch</h3>
        <div className="mth-ctnr">
          <div>
            <img src={adressIcon} alt="" />
            <p className="ctc-label">Adress</p>
            <p className="txt">
              556 Upper Wentworth St. <br />
              Hamilton, ON L9A 4T9, Canada
              <br />
              <br />
              5:00 PM - 8:00 PM
            </p>
          </div>
          <div>
            <img src={phoneIcon} alt="" />
            <p className="ctc-label">Phone</p>
            <p className="txt">+1 905-929-1635</p>
          </div>
          <div>
            <img src={emailIcon} alt="" />
            <p className="ctc-label">Email</p>
            <p className="txt">maldonl630@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
