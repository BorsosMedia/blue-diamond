import { FaLongArrowAltRight } from "react-icons/fa";
function ServicesScreen() {
  return (
    <>
      <section className="ctnr srv-ctnr">
        <h2 className="main-ttl">Weight lost program</h2>
        <p className="txt">
          Every great journey needs a great companion. Take the first step to
          get started.
        </p>
        <button className="bttn bttn-try">
          Join the program <FaLongArrowAltRight className="icon" />
        </button>
      </section>
    </>
  );
}

export default ServicesScreen;
