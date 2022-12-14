import { FaLongArrowAltRight } from "react-icons/fa";
function ServicesScreen() {
  return (
    <>
      <section className="ctnr prm-ctnr">
        <h2 className="main-ttl">How to Get the Body of Your Dreams</h2>
        <p className="txt">
          Controlling what we eat is a key part of any weight loss program, but
          beyond starting a diet, it’s about understanding how our body
          chemistry works, organizing our meal schedules and regulating our meal
          portions.
        </p>
        <button className="bttn bttn-try">
          Join the program <FaLongArrowAltRight className="icon" />
        </button>
      </section>
      <section className="ctnr srv-ctnr">
        <h2 className="main-ttl">Weight loss program</h2>
        <p className="txt">
          Every great journey needs a great companion. Take the first step to
          get started
        </p>
        <button className="bttn bttn-try">
          Join the program <FaLongArrowAltRight className="icon" />
        </button>
      </section>
      <section className="ctnr pgrm-srv">
        <div>
          <h4 className="main-ttl">Change your life in only 6 weeks</h4>
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
          <h4 className="main-ttl">Our program is divided into four modules</h4>
          <div className="mdl">
            <h5 className="mdl-nm">
              <span>1</span>st Module: Goal Setting
            </h5>
            <ul>
              <li>Learn why you are embarking upon this journey</li>
              <li>
                Learn how to set specific, measurable, and attainable goals with
                specific timelines
              </li>
              <li>
                Identify courses of weight gain and develop strategies to avoid
                weight-gain related stress
              </li>
            </ul>
          </div>
          <div className="mdl">
            <h5 className="mdl-nm">
              <span>2</span>nd Module: Brain Chemistry
            </h5>
            <ul>
              <li>
                Learn how to avoid/control cravings, food addiction and
                emotional eating by fixing your brain chemistry and choosing the
                right types of food
              </li>
              <li>
                Learn the best times to eat certain foods to support your weight
                loss journey
              </li>
            </ul>
          </div>
          <div className="mdl">
            <h5 className="mdl-nm">
              <span>3</span>rd module: Nutrition & Metabolism
            </h5>
            <ul>
              <li>
                Learn about portion control (meal plans and portion sizes
                customized to your needs)
              </li>
              <li>Learn which types of food can boost your metabolism</li>
              <li>Learn hot to lose and maintain a healthy weight</li>
              <li>
                Get nutrition tips for breakfast, lunch, and dinner examples
              </li>
            </ul>
          </div>
          <div className="mdl">
            <h5 className="mdl-nm">
              <span>4</span>th Module: Scientific Knowledge
            </h5>
            <ul>
              <li>
                Learn scientifically supported ways to improve gut microbiome to
                enhance overall health, digestion, hormones, sleep, and mood
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="main-ttl">
            Our 6-Week Weight Loss Program Will Teach How To:
          </h3>
          <ul>
            <li>Lose weight and control your hunger forever</li>
            <li>Avoid/control food addiction</li>
            <li>
              Change your brain chemistry and regulate your neurotransmitters to
              stay focused and motivated by selecting the right types of food
            </li>
            <li>Portion control. Boost your metabolism.</li>
            <li>Reset your gut flora</li>
            <li>Organize your meals</li>
            <li>Stress reducing tools to avoid stress related weight gain</li>
            <li>
              Activate your ability to make good choices that support your
              weight loss journey
            </li>
            <li>
              Incorporate healthy habits and practices daily in your routine
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default ServicesScreen;
