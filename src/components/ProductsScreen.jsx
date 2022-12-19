import BookA from "../assets/BookA.png";
import BookB from "../assets/BookB.png";
import BookC from "../assets/BookC.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect } from "react";

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

      <section className="ctnr wgh-ls">
        <h2 className="main-ttl">Effective Weight Loss</h2>
        <p className="txt">
          If you’re looking for an effective way to lose weight and maintain
          your new figure, you need to start thinking about your eating habits.
          You can find ALL the information you’re going to need on each of my
          books, based on decades of experience in fitness and Liset’s knowledge
          as a scientist.
        </p>
      </section>
      <section className="ctnr prd-itm-ctnr">
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
              It’s the simplest way to track your eating and exercise habits
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
    </>
  );
}

export default ProductsScreen;
