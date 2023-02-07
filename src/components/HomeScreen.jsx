import { useState, useEffect } from "react";
import PlanSection from "./PlanSection";

import gridImg from "../assets/3-bottles.png";
import gridImg2 from "../assets/BookA-min.webp";
import gridImg3 from "../assets/BookC-min.webp";
import gridImg4 from "../assets/Biofit3-min.webp";
import gridImg5 from "../assets/BookB-min.webp";
import bookImg from "../assets/Book2-min.webp";
import { useNavigate } from "react-router-dom";
import svgH from "../assets/hero-section-helper.svg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaAmazon } from "react-icons/fa";

/* import mobileMenuImg from "./assets/mobile-menu-background.png"; */

gsap.registerPlugin(ScrollTrigger);

function HomeScreen({
  PlanToggler,
  setPlanToggler,
  PlanDropdown,
  setPlanDropdown,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    setPlanDropdown(false);
  }, [PlanToggler]);
  useEffect(() => {
    setPlanToggler("1");
  }, []);
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
      <section className="ctnr membership-ctnr">
        <h2 className="ttl">Membership Plans</h2>

        <PlanSection
          PlanToggler={PlanToggler}
          setPlanToggler={setPlanToggler}
          PlanDropdown={PlanDropdown}
          setPlanDropdown={setPlanDropdown}
        />
      </section>

      <section className="ctnr thrd-ctnr">
        <div>
          <h2 id="ttlB" className="main-ttl">
            What Makes Our Weight
            <br />
            Loss Program Different?
          </h2>
          <p className="txt">
            Find out first hand how our program works and how it can be
            beneficial for you.
          </p>
          <button className="bttn bttn-pmr" onClick={HandleWeightProgram}>
            {/* Redigirira a la pagina de servicios  */}
            {/* <FaLongArrowAltRight className="icon" /> */}
            Learn More
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
