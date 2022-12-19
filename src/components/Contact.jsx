import React from "react";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <section className="ctnr">Contact Screen</section>
    </>
  );
}

export default Contact;
