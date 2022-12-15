import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll() {
  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#app-ctnr"),
      smooth: true,
      smoothMobile: false,
      scrollbarContainer: false,
      multiplier: 1,
    });

    new ResizeObserver(() => locoScroll.update()).observe(
      document.querySelector("#app-ctnr")
    );
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#app-ctnr", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      /* 
      pinType: document.querySelector("#app-ctnr").style.transform
        ? "transform"
        : "fixed", */
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

    /*   locoScroll.destroy();
  document.addEventListener("DOMContentLoaded", function (event) {
    locoScroll.init();
  }); */
  }, []);
}
