import { useEffect } from "react";
import poly1 from "../assets/poly1.png";
import poly2 from "../assets/poly2.png";
import poly3 from "../assets/poly3.png";
import poly4 from "../assets/poly4.png";
function ServicesScreen() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <section className="ctnr prm-ctnr">
        <div>
          <h2 className="main-ttl">
            How to Get the Body <br /> of Your Dreams
          </h2>
          <p className="txt">
            Controlling what we eat is a key part of any weight loss program,
            but beyond starting a diet, it’s about understanding how our body
            chemistry works, organizing our meal schedules, and regulating our
            meal portions.
          </p>
        </div>
      </section>
      <section className="ctnr srv-ctnr">
        <div>
          <h2 className="main-ttl">Weight loss program</h2>
          <p className="txt">
            Our weight loss program is designed to help you eat the right
            portions at the right time, stay motivated to eat the right food,
            and incorporate healthier habits in only 6 weeks.
          </p>
          <button className="bttn bttn-try">
            Join the program {/* <FaLongArrowAltRight className="icon" /> */}
          </button>
        </div>
      </section>
      <section className="ctnr pgrm-srv">
        <div className="mdl-txt bx-shdw">
          <h4 className="main-ttl">
            Change your life in only <br />
            <span className="amithen">6 weeks</span>
          </h4>
          <ul>
            <li>
              Two weekly coaching sessions via Zoom, Whatsapp, Messenger,
              FaceTime, etc.
            </li>
            <li>
              Free copy of our step-by-step guide to support your weight loss
              and document your journey.
            </li>
            <li>
              Includes goal, workout and meal planners, along with a measurement
              journal to keep track of progress, and adjustments made on each
              session.
            </li>
          </ul>
        </div>
        <div className="grd-mdl">
          <h4 className="main-ttl">Our Program Is Divided Into Four Modules</h4>
          <div className="mdl">
            <div className="mdl-txt">
              <div className="fst-dvv">
                <div className="mdl-poly-tp">
                  <img src={poly1} alt="" />
                </div>
                <h5 className="mdl-nm">
                  <span>1</span>st Module: Goal Setting
                </h5>
              </div>

              <ul>
                <li>Learn why you are embarking upon this journey.</li>
                <li>
                  Learn how to set specific, measurable, and attainable goals
                  with specific timelines.
                </li>
                <li>
                  Identify causes of weight gain and develop strategies to avoid
                  weight-gain related stress.
                </li>
              </ul>
            </div>

            <div className="mdl-poly">
              <img src={poly1} alt="" />
            </div>
          </div>

          <div className="mdl">
            <div className="mdl-poly">
              <img src={poly2} alt="" />
            </div>

            <div className="mdl-txt">
              <div className="fst-dvv">
                <div className="mdl-poly-tp">
                  <img src={poly2} alt="" />
                </div>
                <h5 className="mdl-nm">
                  <span>2</span>nd Module: Brain Chemistry
                </h5>
              </div>
              <ul>
                <li>
                  Learn how to avoid/control cravings, food addiction and
                  emotional eating by fixing your brain chemistry and choosing
                  the right types of food.
                </li>
                <li>
                  Learn the best times to eat certain foods to support your
                  weight loss journey.
                </li>
              </ul>
            </div>
          </div>
          <div className="mdl">
            <div className="mdl-txt">
              <div className="fst-dvv">
                <div className="mdl-poly-tp">
                  <img src={poly3} alt="" />
                </div>
                <h5 className="mdl-nm">
                  <span>3</span>rd Module: Nutrition & Metabolism
                </h5>
              </div>
              <ul>
                <li>
                  Learn about portion control (meal plans and portion sizes
                  customized to the client’s needs)
                </li>
                <li>Learn which types of food can boost your metabolism.</li>
                <li>Learn how to lose and maintain a healthy weight.</li>
                <li>
                  Get nutrition tips for breakfast, lunch, and dinner examples.
                </li>
              </ul>
            </div>
            <div className="mdl-poly">
              <img src={poly3} alt="" />
            </div>
          </div>
          <div className="mdl">
            <div className="mdl-poly">
              <img src={poly4} alt="" />
            </div>
            <div className="mdl-txt">
              <div className="fst-dvv">
                <div className="mdl-poly-tp">
                  <img src={poly4} alt="" />
                </div>
                <h5 className="mdl-nm">
                  <span>4</span>th Module: Scientific Knowledge
                </h5>
              </div>
              <ul>
                <li>
                  Learn scientifically supported ways to improve gut microbiome
                  to enhance overall health, digestion, hormones, sleep, and
                  mood.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="ctnr tch-ctnr">
        <h3 className="main-ttl">
          Our 6-Week Weight Loss Program Will Teach How To:
        </h3>
        <ul>
          <li>Lose weight and control your hunger forever.</li>
          <li>Avoid/control food addiction.</li>
          <li>
            Change your brain chemistry and regulate your neurotransmitters to
            stay focused and motivated by selecting the right types of foods.
          </li>
          <li>Portion control. Boost your metabolism.</li>
          <li>Reset your gut flora.</li>
          <li>Organize your meals.</li>
          <li>Stress reducing tools to avoid stress related weight gain.</li>
          <li>
            Activate your ability to make good choices that support your weight
            loss journey.
          </li>
          <li>
            Incorporate healthy habits and practices daily in your routine.
          </li>
        </ul>
      </section>
    </>
  );
}

export default ServicesScreen;
