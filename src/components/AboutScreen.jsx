import React from "react";
import Nelvis from "../assets/Nelvis-str.png";
import Irma from "../assets/Irma-str.png";
import { useEffect } from "react";

function AboutScreen() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <section className="ctnr abt-m-ctnr">
        <div>
          <h2 className="main-ttl">About Our Founder</h2>
          <p className="txt">
            With a strong background in science, specifically Chemistry,{" "}
            <strong style={{ color: "black", fontFamily: "NexaBold" }}>
              Liset Maldonado Alvarez
            </strong>{" "}
            has been involved in the fitness industry for decades.
            <br />
            <br />
            She spent years as an award-winning figure competitor, and has
            decades of experience as a personal trainer, using her scientific
            knowledge to deliver fitness and nutrition programs.
          </p>
        </div>
        <div className="abt-m-img"></div>
      </section>
      <section className="ctnr abt-m-sc2">
        <h2 className="main-ttl">Blue Diamond Studio</h2>
        <p className="txt">
          Blue Diamond Studio is a Fitness Company located in Hamilton, ON. We
          specialize in personalized workouts, nutritional coaching, strength
          coaching, fitness coaching, and personal training.
          <br />
          <br />
          We feel that individual health is extremely important and needs to
          constantly be maintained, because personal health and liveliness are
          the cornerstones to a long, healthy, and fruitful life.
          <br />
          <br />
          Our approach is being with you every step of the way along your
          journey to self refinement, and helping you reach and maintain your
          fitness and nutritional goals.
          <br />
          <br />
          Blue Diamond was born out of Liset’s goal of helping people become the
          fittest and healthiest versions of themselves at any age. We combine
          personalized workouts with nutrition tips to change your eating habits
          and transform your lifestyle.
        </p>
        {/* <div className="abt-m-lg-ctnr">
          <img src={bluediamondLogo} alt="" />
        </div> */}
        <button className="bttn bttn-try">Contact us</button>
      </section>
      <section className="ctnr scss-scrn">
        <h2 className="main-ttl">Success Stories</h2>
        <p className="txt">
          Read more about our clients and how we've helped them achieve their
          dream bodies
        </p>
        <div className="scss scss-1">
          <img src={Nelvis} alt="" />
          <p className="scss-tstm">
            “Thank you so much for helping me to gain my confidence back. After
            having my precious son, I was overweight, and I lost confidence.
            There are numerous gyms and fitness facilities in Hamilton but if
            someone asked me the difference between those gyms and yours, I
            would say without a doubt that it is your dedication and the love
            that you put in each of your clients.” <br />
            <br />
          </p>
        </div>
        <div className="scss scss-2">
          <img src={Irma} alt="" />
          <p className="scss-tstm">
            “Liset incorporates nutrition and a customized workout tailored to
            the individual without breaking the bank. She provides a comfortable
            atmosphere with women and men of all ages and makes it very
            enjoyable to train. I am so happy to have met her. She is highly
            knowledgeable and has the education to back it up. She provides
            specialized & diverse training; I love our sessions and she is an
            excellent role model.”
            <br />
            <br />
          </p>
        </div>
        <button className="bttn bttn-pmr">Join the program</button>
      </section>
    </>
  );
}

export default AboutScreen;
