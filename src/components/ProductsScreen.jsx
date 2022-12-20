import { useEffect } from "react";
import BookA from "../assets/BookA.png";
import BookB from "../assets/BookB.png";
import BookC from "../assets/BookC.png";
import BioFit from "../assets/Biofit3.png";
import Resvatone from "../assets/3-bottles.png";

function ProductsScreen() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <section className="ctnr prd-ctnr">
        {/* <div className="lnr-prd"></div> */}
        <h2 className="main-ttl">The change starts in you</h2>
        <p className="txt">
          Living a healthier lifestyle is not ALL about exercise, but also about
          our eating habits. That’s why nutrition is always as important in
          order to achieve our fitness goals and keep our bodies in the best
          shape.
        </p>
      </section>

      {/*  <section className="ctnr wgh-ls">
        <h2 className="main-ttl">Effective Weight Loss</h2>
        <p className="txt">
          If you’re looking for an effective way to lose weight and maintain
          your new figure, you need to start thinking about your eating habits.
          You can find ALL the information you’re going to need on each of my
          books, based on decades of experience in fitness and Liset’s knowledge
          as a scientist.
        </p>
      </section> */}
      <section className="ctnr prd-itm-ctnr">
        <h3 className="main-ttl">Books</h3>
        <div className="itm-ctnr">
          <div className="prd-img-ctnr">
            <img src={BookA} alt="" />
          </div>
          <div className="prd-dsc">
            <h4>
              Leaner & Stronger. Nutrition Tips: Train Your Brain to Stay in
              Shape.
            </h4>
            <p>
              Based on sound science, this book offers nutrition tips designed
              to adapt your diet and the most valuable information you need
              before starting a weight loss program.
            </p>
            <button className="bttn bttn-try">
              Buy Here {/* <FaLongArrowAltRight className="icon" /> */}
            </button>
          </div>
        </div>
        <div className="itm-ctnr">
          <div className="prd-img-ctnr">
            <img src={BookB} alt="" />
          </div>
          <div className="prd-dsc">
            <h4>Eat, Drink. Be Mindful - Food Journal and activity book.</h4>
            <p>
              It’s the simplest way to track your eating and exercising habits
              that will help you maintain focus on reaching your fitness goals.
            </p>
            <button className="bttn bttn-try">
              Buy Here {/* <FaLongArrowAltRight className="icon" /> */}
            </button>
          </div>
        </div>
        <div className="itm-ctnr">
          <div className="prd-img-ctnr">
            <img src={BookC} alt="" />
          </div>
          <div className="prd-dsc">
            <h4>My 120 Day Meal Planner</h4>
            <p>
              Diets don’t need to be boring, and with this meal planner we’re
              thinking long-term to help you organize your food, add variety,
              and help you eat the right portions at the right time.
            </p>
            <button className="bttn bttn-try">
              Buy here {/* <FaLongArrowAltRight className="icon" /> */}
            </button>
          </div>
        </div>
      </section>
      <section className="ctnr skn-prd-ctnr">
        <h4 className="main-ttl">Skin/Weight Loss Products</h4>
        <div className="skn-ctnr">
          <div className="prd-img">
            <img src={Resvatone} alt="" />
          </div>
          <h5 className="main-ttl">Resvatone</h5>
          <div className="skn-prd-txt">
            <p className="txt">
              Resveratone revolves around the main ingredient of Resveratrol,
              sourced from a traditional Japanese herb.
              <br />
              <br />
              This wonderpill targets the root cause of weight gain using the
              most powerful team of ingredients to burn away all of your excess
              belly fat, help you fight anxiety and cognitive decay, help you
              lower your cholesterol and blood pressure, and eliminate
              debilitating joint pain.
              <br />
              <br />
              Secure Your Package While Stock Lasts
              <br />
              *Doctor Recommended*
            </p>
            <button className="bttn bttn-try">Buy Here</button>
          </div>
        </div>
        <div className="skn-ctnr">
          <div className="prd-img">
            <img src={BioFit} alt="" />
          </div>
          <h5 className="main-ttl">BioFit</h5>
          <div className="skn-prd-txt">
            <p className="txt">
              BioFit represents the next generation of fat-burning science. This
              formula provides the purest, highest grade of 7 “Miracle Microbes”
              that will balance your gut flora and improve your overall health.
              <br />
              <br />
              Scientific research and trials show that the natural blend of all
              good “microbes” will help significantly boost weight loss without
              giving up the foods you love. It will supercharge your energy, and
              make you feel and look better.
            </p>
            <button className="bttn bttn-try">Buy Here</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsScreen;
