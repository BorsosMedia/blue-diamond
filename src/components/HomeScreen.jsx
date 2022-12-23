import { useEffect } from "react";

import gridImg from "../assets/3-bottles.png";
import gridImg2 from "../assets/BookA.png";
import gridImg3 from "../assets/BookC.png";
import gridImg4 from "../assets/Biofit3.png";
import gridImg5 from "../assets/BookB.png";
import bookImg from "../assets/Book2.png";
import { useNavigate } from "react-router-dom";
import svgH from "../assets/hero-section-helper.svg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaAmazon, FaShoppingCart } from "react-icons/fa";

/* import mobileMenuImg from "./assets/mobile-menu-background.png"; */

gsap.registerPlugin(ScrollTrigger);

function HomeScreen() {
  /*   const { cursorChangeHandler } = useContext(MouseContext); */
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    /*   const tl = gsap.timeline({ defaults: { ease: Expo.easeInOut } });
    tl.to(".anm", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      y: 0,
      duration: 1,
      stagger: 0.3,
      delay: 0.5,
    })
      .to(".hr-txt-anm", {
        y: 0,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      })
      .to(
        ".bttn-lnk",
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1,
        },
        "1.5"
      ) */
    /*  .to(".prgph", { opacity: 0, duration: 1, delay: 2 }) */
    /*   .to(".bttn-lnk", {
        /*      x: "1000", */
    /*     xPercent: 100,
        duration: 5,

        scrollTrigger: {
          trigger: ".anm",
          scroller: "#app-ctnr",
          start: "center top",

          scrub: 4,
        },
      })

      .to("#scss-img", {
        y: 20,
        scrollTrigger: {
          trigger: "#scss-img",
          scroller: "#app-ctnr",
          start: "top center",
          scrub: 3,
        },
      }); */
    /* gsap.to(".column2", {
      y: 500,
      opacity: 0,
      scrollTrigger: {
        trigger: ".column2",
        scroller: "#app-ctnr",
        start: "center 40%",
        scrub: 4,
      },
    }); */
    /* gsap.to("#Aitm", {
      y: 38,
      scrollTrigger: {
        trigger: ".imgs-ctnr",
        scroller: "#app-ctnr",
        start: "top center",
        scrub: 1,
      },
    });
    gsap.to("#Bitm", {
      y: 35,
      scrollTrigger: {
        trigger: ".imgs-ctnr",
        scroller: "#app-ctnr",
        start: "top center",
        scrub: 5,
      },
    });
    gsap.to("#Citm", {
      y: 38,
      scrollTrigger: {
        trigger: ".imgs-ctnr",
        scroller: "#app-ctnr",
        start: "top center",
        scrub: 2,
      },
    });
    gsap.to("#ttl", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      y: 0,
      scrollTrigger: {
        trigger: "#ttl",
        scroller: "#app-ctnr",
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
    gsap.to("#ttlB", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      y: 0,
      scrollTrigger: {
        trigger: "#ttlB",
        scroller: "#app-ctnr",
        start: "top 90%",
      },
    }); */
    /* 
    gsap.fromTo(
      ".imgs-ctnr",
      { xPercent: 100 },
      {
        xPercent: 0,

        scrollTrigger: {
          trigger: ".scnd-ctnr--wrppr",
          scroller: "#app-ctnr",
          start: "top bottom",
          end: "bottom 60%",
          scrub: 3,
        },
      }
    ); */
  }, []);
  function HandleWeightProgram() {
    navigate("/services");
    setTimeout(() => {
      document.querySelector("#srv-id").scrollIntoView({
        behavior: "smooth",
      });
    }, 10);
  }
  function HandleProductItm() {
    navigate("/products");
    setTimeout(() => {
      document.querySelector(".prd-itm-ctnr").scrollIntoView({
        behavior: "smooth",
      });
    }, 10);
  }
  function HandleSuccessB() {
    navigate("/about");
    setTimeout(() => {
      document.querySelector(".scss-scrn").scrollIntoView({
        behavior: "smooth",
      });
    }, 10);
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
