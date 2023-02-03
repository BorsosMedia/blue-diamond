import React from "react";
import { useEffect } from "react";
import adressIcon from "../assets/icons/adress1.png";
import phoneIcon from "../assets/icons/phone1.png";
import emailIcon from "../assets/icons/email1.png";
import { AiOutlineArrowRight } from "react-icons/ai";

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
            <img src={phoneIcon} alt="" />
            <p className="ctc-label">Phone</p>
            <p className="txt">+1 905-929-1635</p>
            <a
              href="tel:+19059291635

"
              target="_blank"
              className="bttn bttn-try"
            >
              Give us a call
            </a>
          </div>
          <div>
            <img src={adressIcon} alt="" />
            <p className="ctc-label">Address</p>
            <p className="txt">
              556 Upper Wentworth St. <br />
              Hamilton, ON L9A 4T9, Canada
              <br />
              <br />
              5:00 PM - 8:00 PM
            </p>
            <a
              href="https://www.google.com/maps/place/556+Upper+Wentworth+St,+Hamilton,+ON+L9A+4V2,+Canada/@43.2344776,-79.8571593,17z/data=!4m5!3m4!1s0x882c9bb753a5c789:0x8958bf6e426f1d01!8m2!3d43.234522!4d-79.8574958"
              target="_blank"
              className="bttn bttn-try"
            >
              Open On Google Maps
            </a>
          </div>
          <div>
            <img src={emailIcon} alt="" />
            <p className="ctc-label">Email</p>
            <p className="txt">maldonl630@gmail.com</p>
            <a
              href="mailto:maldonl630@gmail.com"
              target="_blank"
              className="bttn bttn-try"
            >
              Send us an email
              {/*  <AiOutlineArrowRight className="icon" /> */}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
