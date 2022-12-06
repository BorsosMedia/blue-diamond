import { useEffect, useContext, useState } from "react";
import useLocoScroll from "./hooks/useLocoScroll";
import Cursor from "./features/Cursor";
import { MouseContext } from "./context/mouse-context";
import { FaLongArrowAltRight } from "react-icons/fa";

import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logoImg from "./assets/BlueDiamond_Logo.png";
import heroImg from "./assets/heroImg.jpg";
import gridImg from "./assets/gridImg.jpg";
import gridImg2 from "./assets/gridImg2.jpg";
import gridImg3 from "./assets/gridImg3.jpg";
gsap.registerPlugin(ScrollTrigger);
function App() {
  useLocoScroll();
  /*   const { cursorChangeHandler } = useContext(MouseContext); */

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: Expo.easeInOut } });
    tl.to(".anm", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      y: 0,
      duration: 1,
      stagger: 0.3,
      delay: 0.5,
    })
      .to(".bttn-lnk", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      })
      .to(".prgph", { opacity: 0, duration: 1, delay: 2 })
      .to(".anm", {
        xPercent: "60",
        duration: 7,
        stagger: 0.2,

        scrollTrigger: {
          trigger: ".anm",
          scroller: "#app-ctnr",
          start: "center center",

          scrub: 7,
        },
      })
      .to(".bttn-lnk", {
        xPercent: "60",
        duration: 10,

        scrollTrigger: {
          trigger: ".anm",
          scroller: "#app-ctnr",
          start: "center top",

          scrub: 7,
        },
      });

    gsap.to("#Aitm", {
      y: 45,
      scrollTrigger: {
        trigger: ".imgs-ctnr",
        scroller: "#app-ctnr",
        start: "top center",
        scrub: 1,
      },
    });
    gsap.to("#Bitm", {
      y: 30,
      scrollTrigger: {
        trigger: ".imgs-ctnr",
        scroller: "#app-ctnr",
        start: "top center",
        scrub: 5,
      },
    });
    gsap.to("#Citm", {
      y: 50,
      scrollTrigger: {
        trigger: ".imgs-ctnr",
        scroller: "#app-ctnr",
        start: "top center",
        scrub: 2,
      },
    });

    /*   gsap.fromTo(
      "#ttl-a",
      {
        yPercent: 100,
      },
      { yPercent: 0, duration: 1, delay: 1 }
    ); */

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
    );
  }, []);

  return (
    <main className="App" id="app-ctnr" data-scroll-container>
      <Cursor />

      <div data-scroll-section className="ctnr-wrppr">
        <header className="hdr-ctnr">
          <div className="lgo-ctnr">
            <img src={logoImg} alt="" className="logoImg" />
          </div>
        </header>
        <section className="ctnr fst-ctnr">
          {/*   <p className="prgph prgphA">
            "A perfect book to lose weight and exercise without the pressure of
            too many demands."
            <br />
            <br />
            -Helen de la Paz
          </p> */}
          <p className="prgph prgphB">
            "Magnificent for people like me who are not so responsible but who
            love the fitness body. Thank you for this wonderful proposal of
            healthy life."
            <br />
            <br />
            -Helen de la Paz
          </p>
          <div className="flex-col-ctnr">
            {/*   <p className="dsc-txt">"Magnificent"</p> */}
            <h1 className="main-ttl anm" id="ttl-a">
              Reshape
            </h1>
            <h1 className="main-ttl anm" id="ttl-a">
              your
            </h1>
            <h1 className="main-ttl anm" id="ttl-a">
              brain
            </h1>
            {/* <p className="dsc-txt">Only for you and your health</p> */}
            <a
              href="https://www.google.com"
              target="_blank"
              className="bttn-lnk"
            >
              Buy my book
              <FaLongArrowAltRight className="icon" />
            </a>
          </div>
          {/* <div className="column2">
            <div className="img-ctnr">
              <img src={heroImg} alt="" />
            </div>
          </div> */}
        </section>
        <section className="ctnr scnd-ctnr">
          <div
            className="scnd-ctnr--wrppr"
            /*       onMouseEnter={() => cursorChangeHandler("changed")}
            onMouseLeave={() => cursorChangeHandler("")} */
          >
            <div className="ctnr-hidden">
              <h1 id="ttl" className="main-ttl">
                I'm Liset Maldonado
              </h1>
            </div>
            <div className="imgs-ctnr">
              <div id="Aitm">
                <img src={gridImg2} alt="" className="grid-img" />
              </div>
              <div id="Bitm">
                <img src={gridImg} alt="" className="grid-img" />
              </div>
              <div id="Citm">
                <img src={gridImg3} alt="" className="grid-img" />
              </div>
            </div>
          </div>
        </section>

        <section className="ctnr thrd-ctnr">
          <h1 className="main-ttl">
            From a past life <br />
            Tame Imapala
          </h1>
        </section>

        <section className="ctnr thrd-ctnr">
          <h1 className="main-ttl">A little bit more about me</h1>
          <p className="copy">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            suscipit similique officiis voluptate ipsam soluta animi laboriosam
            tenetur itaque quae voluptatem quaerat, optio iusto dolore maiores
            inventore ad sapiente fuga?
          </p>
          <div className="a">
            <img src={heroImg} alt="" />
          </div>
          <div className="b">
            <img src={heroImg} alt="" />
          </div>
          <div className="c">
            <img src={heroImg} alt="" />
          </div>
        </section>
      </div>
      {/* <div className="ctnr-wrppr scnd-ctnr" data-scroll-section>
  
      </div> */}

      {/* <div
        className="ctnr-wrppr thrd-ctnr"
        style={{ backgroundColor: "lightblue" }}
        data-scroll-section
      >
  
      </div> */}
    </main>
  );
}

export default App;
