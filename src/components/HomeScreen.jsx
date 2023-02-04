import { useState, useEffect } from "react";

import gridImg from "../assets/3-bottles.png";
import gridImg2 from "../assets/BookA.png";
import gridImg3 from "../assets/BookC.png";
import gridImg4 from "../assets/Biofit3.png";
import gridImg5 from "../assets/BookB.png";
import bookImg from "../assets/Book2.png";
import { useNavigate } from "react-router-dom";
import svgH from "../assets/hero-section-helper.svg";
import PlanSection from "../components/PlanSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BiChevronDown } from "react-icons/bi";

import { FaAmazon } from "react-icons/fa";

/* import mobileMenuImg from "./assets/mobile-menu-background.png"; */

gsap.registerPlugin(ScrollTrigger);

function HomeScreen() {
  /*   const { cursorChangeHandler } = useContext(MouseContext); */
  const navigate = useNavigate();
  const [PlanToggler, setPlanToggler] = useState("1");
  const [UpdatePlans, setUpdatePlans] = useState(true);
  const [PlanDropdown, setPlanDropdown] = useState(false);

  function HandleWeightProgram() {
    navigate("/services");
    setTimeout(() => {
      document.querySelector("#srv-id").scrollIntoView({
        behavior: "smooth",
      });
    }, 50);
  }
  function HandleProductItm() {
    navigate("/products");
    setTimeout(() => {
      document.querySelector(".prd-itm-ctnr").scrollIntoView({
        behavior: "smooth",
      });
    }, 50);
  }
  function HandleSuccessB() {
    navigate("/about");
    setTimeout(() => {
      document.querySelector(".scss-scrn").scrollIntoView({
        behavior: "smooth",
      });
    }, 50);
  }

  return (
    <>
      <section className="ctnr fst-ctnr">
        <div className="flex-col-ctnr">
          <h1 className="main-ttl anm" id="ttl-a">
            Change your body
          </h1>
          <h1 className="main-ttl anm" id="ttl-a" style={{ color: "#ffd731" }}>
            Change your mind
          </h1>

          <p className="hr-txt hr-txt-anm">
            A REAL change starts with a lifestyle transformation.
            <br />
            We can help you start that change TODAY!
          </p>
          <button
            onClick={() => navigate("/services")}
            className="bttn bttn-lnk"
          >
            Start today {/* <FaLongArrowAltRight className="icon" /> */}
          </button>
        </div>
        <div className="column2">
          <div className="img-ctnr">{/* <img src={heroImg} alt="" /> */}</div>
        </div>
      </section>
      <section className="ctnr scnd-ctnr">
        <div className="hr-hl">
          <img src={svgH} alt="" />
        </div>
        <h2 className="ttl">Membership Plans</h2>

        <div className="toggle-ctnr">
          <button
            className="toggle-drop"
            onClick={() => setPlanDropdown(!PlanDropdown)}
          >
            Choose your type of plan{" "}
            <BiChevronDown
              className={PlanDropdown ? "icon dropdown-icon-act" : "icon"}
            />
          </button>
          <div
            className={
              PlanDropdown ? "dropdown-ctnr dropdown-ctnr-act" : "dropdown-ctnr"
            }
          >
            <button
              className={
                PlanToggler == "1"
                  ? "toggle-bttn toggle-bttn-act"
                  : "toggle-bttn"
              }
              onClick={() => setPlanToggler("1")}
            >
              Monthly
            </button>
            <button
              className={
                PlanToggler == "2"
                  ? "toggle-bttn toggle-bttn-act"
                  : "toggle-bttn"
              }
              onClick={() => setPlanToggler("2")}
            >
              3 Months
            </button>
            <button
              className={
                PlanToggler == "3"
                  ? "toggle-bttn toggle-bttn-act"
                  : "toggle-bttn"
              }
              onClick={() => setPlanToggler("3")}
            >
              6 Months
            </button>
            <button
              className={
                PlanToggler == "4"
                  ? "toggle-bttn toggle-bttn-act"
                  : "toggle-bttn"
              }
              onClick={() => setPlanToggler("4")}
            >
              Annual
            </button>
          </div>
        </div>
        <PlanSection PlanToggler={PlanToggler} PlanDropdown={PlanDropdown} />
      </section>

      <section className="ctnr scnd-ctnr">
        {/* <div className="hr-hl">
          <img src={svgH} alt="" />
        </div> */}
        <div className="bk-hr">
          <img src={bookImg} className="img-bk" alt="" />
        </div>
        <div className="bk-txt">
          <h2 id="ttl" className="main-ttl">
            We Can Help You Get
            <br />
            “Leaner & Stronger”
          </h2>
          <p className="hr-txt">
            Find the most valuable nutrition tips based on sound science to help
            you lose weight and transform your body.
          </p>
          <a
            href="https://www.amazon.com/-/es/PhD-Liset-Maldonado/dp/B09WHQCQ8N/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr="
            target="_blank"
            className="bttn bttn-sdy"
          >
            <FaAmazon className="icon" />
            Get yours here
          </a>
        </div>
      </section>

      <section className="ctnr thrd-ctnr">
        <div>
          <h2 id="ttlB" className="main-ttl">
            Join our weight
            <br />
            Loss program
          </h2>
          <p className="txt">
            Every great journey needs a great companion. Take the first step to
            get started.
          </p>
          <button className="bttn bttn-pmr" onClick={HandleWeightProgram}>
            {/* Redigirira a la pagina de servicios  */}
            {/* <FaLongArrowAltRight className="icon" /> */}
            Join the program
          </button>
        </div>
      </section>
      <section className="ctnr fth-ctnr">
        <h1 className="main-ttl">Find The Best Products Here!</h1>
        <p className="txt">
          If you need help to lose weight, increase your performance or take
          better care of yourself, we have something for you!
        </p>
        <div className="imgs-ctnr">
          <div id="Aitm">
            <img src={gridImg} alt="" className="grid-img" />
          </div>
          <div id="Bitm">
            <img src={gridImg2} alt="" className="grid-img" />
          </div>
          <div id="Bitm">
            <img src={gridImg5} alt="" className="grid-img" />
          </div>
          <div id="Citm">
            <img src={gridImg3} alt="" className="grid-img" />
          </div>
          <div id="Bitm">
            <img src={gridImg4} alt="" className="grid-img" />
          </div>
        </div>
        <button onClick={HandleProductItm} className="bttn bttn-try">
          Go to Products{/* <FaLongArrowAltRight className="icon" /> */}
        </button>
      </section>
      <section className="ctnr frth-ctnr">
        <div className="scss-strs" id="scss-img"></div>
        <div className="scss-text">
          <h1 className="main-ttl">Success stories</h1>
          <p className="hr-txt">
            Read more about our clients and how we’ve helped them achieve their
            dream bodies.
          </p>
          <button onClick={HandleSuccessB} className="bttn bttn-pmr">
            Join the Program{/*  <FaLongArrowAltRight className="icon" /> */}
          </button>
        </div>
      </section>
    </>
  );
}

export default HomeScreen;
