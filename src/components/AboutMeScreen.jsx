import React from "react";
import bluediamondLogo from "../assets/BlueDiamond_Logo.png";

function AboutMeScreen() {
  return (
    <div className="abt-m-scrn">
      <section className="ctnr abt-m-ctnr">
        <div>
          <h2 className="main-ttl">About me</h2>
          <p className="txt">
            With a strong background in science, specifically Chemistry, Liset
            Maldonado Alvarez has been involved in the fitness industry for
            decades.
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
          Blue Diamond was born out of Liset’s goal of helping people become the
          fittest and healthiest versions of themselves at any age. She combines
          personalized workouts with nutrition tips to change your eating habits
          and transform your lifestyle.
        </p>
        <div className="abt-m-lg-ctnr">
          <img src={bluediamondLogo} alt="" />
        </div>
      </section>
    </div>
  );
}

export default AboutMeScreen;
