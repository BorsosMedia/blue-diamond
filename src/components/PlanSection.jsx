import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";

function PlanSection({ PlanToggler, PlanDropdown }) {
  console.log(PlanToggler);
  return (
    <div className="plans-ctnr">
      {PlanToggler === "1" && (
        <>
          <ul className={PlanToggler ? "membrsh-card crd-act" : "membrsh-card"}>
            <li className="plan--ttl">
              <span>
                <AiFillStar className="icon" />
              </span>
              Gold
            </li>
            <li className="mbr-dsc">
              Custom programming in the most afforable way possible
            </li>
            <li className="crd-prc">
              $100 <span className="abbr-">/month</span>
            </li>
            <li className="lst-dsc">Custom workout regimen and diet</li>
            <li className="lst-dsc">Bi-weekly programming tweaks</li>
            <li className="lst-dsc">E-mail and text me directly </li>
            <a className="bttn">
              <HiShoppingCart className="icon" />
              Purchase
            </a>
          </ul>
          <ul className={PlanToggler ? "membrsh-card crd-act" : "membrsh-card"}>
            <li className="plan--ttl">
              <span>
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
              </span>
              Platinum
            </li>
            <li className="mbr-dsc">
              Custom programming with constant feedback and more tweaks
            </li>
            <li className="crd-prc">
              $200 <span className="abbr-">/month</span>
            </li>
            <li className="lst-dsc">Custom workout regimen and diet</li>
            <li className="lst-dsc">Weekly programming tweaks</li>
            <li className="lst-dsc">E-mail and text me directly</li>
            <a className="bttn">
              <HiShoppingCart className="icon" />
              Purchase
            </a>
          </ul>
          <ul className={PlanToggler ? "membrsh-card crd-act" : "membrsh-card"}>
            <li className="plan--ttl">
              <span>
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
              </span>
              Diamond
            </li>
            <li className="mbr-dsc">
              Custom programming with constant feedback and prep secrets
            </li>
            <li className="crd-prc">
              $250 <span className="abbr-">/month</span>
            </li>
            <li className="lst-dsc">Custom workout regimen and diet</li>
            <li className="lst-dsc">Unlimited programming tweaks</li>
            <li className="lst-dsc">Posing lessons and prep tips</li>
            <a className="bttn">
              <HiShoppingCart className="icon" />
              Purchase
            </a>
          </ul>
        </>
      )}
      {PlanToggler === "2" && (
        <>
          <ul className={PlanToggler ? "membrsh-card crd-act" : "membrsh-card"}>
            <li className="plan--ttl">
              <span>
                <AiFillStar className="icon" />
              </span>
              Gold
            </li>
            <li className="mbr-dsc">
              Custom programming in the most afforable way possible
            </li>
            <li className="crd-prc">
              $300 <span className="abbr-">/3 months</span>
            </li>
            <li className="lst-dsc">Custom workout regimen and diet </li>
            <li className="lst-dsc">Bi-weekly programming tweaks</li>
            <li className="lst-dsc">E-mail and text me directly</li>
            <a className="bttn">
              <HiShoppingCart className="icon" />
              Purchase
            </a>
          </ul>
          <ul className={PlanToggler ? "membrsh-card crd-act" : "membrsh-card"}>
            <li className="plan--ttl">
              <span>
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
              </span>
              Platinum
            </li>
            <li className="mbr-dsc">
              Custom programming with constant feedback and more tweaks
            </li>
            <li className="crd-prc">
              $550 <span className="abbr-">/3 months</span>
            </li>
            <li className="lst-dsc">Custom workout regimen and diet</li>
            <li className="lst-dsc">Weekly programming tweaks</li>
            <li className="lst-dsc">E-mail and text me directly</li>
            <a className="bttn">
              <HiShoppingCart className="icon" />
              Purchase
            </a>
          </ul>
          <ul className={PlanToggler ? "membrsh-card crd-act" : "membrsh-card"}>
            <li className="plan--ttl">
              <span>
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
              </span>
              Diamond
            </li>
            <li className="mbr-dsc">
              Custom programming with constant feedback and prep secrets
            </li>
            <li className="crd-prc">
              $680 <span className="abbr-">/3 months</span>
            </li>
            <li className="lst-dsc">Custom workout regimen and diet</li>
            <li className="lst-dsc">Unlimited programming tweaks</li>
            <li className="lst-dsc">Posing lessons and prep tips</li>
            <a className="bttn">
              <HiShoppingCart className="icon" />
              Purchase
            </a>
          </ul>
        </>
      )}
      {PlanToggler === "3" && (
        <>
          <ul className={PlanToggler ? "membrsh-card crd-act" : "membrsh-card"}>
            <li className="plan--ttl">
              <span>
                <AiFillStar className="icon" />
              </span>
              Gold
            </li>
            <li className="mbr-dsc">
              Custom programming in the most afforable way possible
            </li>
            <li className="crd-prc">
              $600 <span className="abbr-">/6 months</span>
            </li>
            <li className="lst-dsc">Custom workout regimen and diet</li>
            <li className="lst-dsc">Bi-weekly programming tweaks</li>
            <li className="lst-dsc">E-mail and text me directly</li>
            <a className="bttn">
              <HiShoppingCart className="icon" />
              Purchase
            </a>
          </ul>
          <ul className={PlanToggler ? "membrsh-card crd-act" : "membrsh-card"}>
            <li className="plan--ttl">
              <span>
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
              </span>
              Platinum
            </li>
            <li className="mbr-dsc">
              Custom programming with constant feedback and more tweaks
            </li>
            <li className="crd-prc">
              $1000 <span className="abbr-">/6 months</span>
            </li>
            <li className="lst-dsc">Custom workout regimen and diet</li>
            <li className="lst-dsc">Weekly programming tweaks</li>
            <li className="lst-dsc">E-mail and text me directly</li>
            <a className="bttn">
              <HiShoppingCart className="icon" />
              Purchase
            </a>
          </ul>
          <ul className={PlanToggler ? "membrsh-card crd-act" : "membrsh-card"}>
            <li className="plan--ttl">
              <span>
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
              </span>
              Diamond
            </li>
            <li className="mbr-dsc">
              Custom programming with constant feedback and prep secrets
            </li>
            <li className="crd-prc">
              $1300 <span className="abbr-">/6 months</span>
            </li>
            <li className="lst-dsc">Custom workout regimen and diet</li>
            <li className="lst-dsc">Unlimited programming tweaks</li>
            <li className="lst-dsc">Posing lessons and prep tips</li>
            <a className="bttn">
              <HiShoppingCart className="icon" />
              Purchase
            </a>
          </ul>
        </>
      )}
      {PlanToggler === "4" && (
        <>
          <ul className={PlanToggler ? "membrsh-card crd-act" : "membrsh-card"}>
            <li className="plan--ttl">
              <span>
                <AiFillStar className="icon" />
              </span>
              Gold
            </li>
            <li className="mbr-dsc">
              Custom programming in the most afforable way possible
            </li>
            <li className="crd-prc">
              $1200 <span className="abbr-">/per year</span>
            </li>
            <li className="lst-dsc">Custom workout regimen and diet</li>
            <li className="lst-dsc">Bi-weekly programming tweaks</li>
            <li className="lst-dsc">E-mail and text me directly</li>
            <a className="bttn">
              <HiShoppingCart className="icon" />
              Purchase
            </a>
          </ul>
          <ul className={PlanToggler ? "membrsh-card crd-act" : "membrsh-card"}>
            <li className="plan--ttl">
              <span>
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
              </span>
              Platinum
            </li>
            <li className="mbr-dsc">
              Custom programming with constant feedback and more tweaks
            </li>
            <li className="crd-prc">
              $1950 <span className="abbr-">/per year</span>
            </li>
            <li className="lst-dsc">Custom workout regimen and diet</li>
            <li className="lst-dsc">Weekly programming tweaks</li>
            <li className="lst-dsc">E-mail and text me directly</li>
            <a className="bttn">
              <HiShoppingCart className="icon" />
              Purchase
            </a>
          </ul>
          <ul className={PlanToggler ? "membrsh-card crd-act" : "membrsh-card"}>
            <li className="plan--ttl">
              <span>
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
              </span>
              Diamond
            </li>
            <li className="mbr-dsc">
              Custom programming with constant feedback and prep secrets
            </li>
            <li className="crd-prc">
              $2250 <span className="abbr-">/per year</span>
            </li>
            <li className="lst-dsc">Custom workout regimen and diet</li>
            <li className="lst-dsc">Unlimited programming tweaks</li>
            <li className="lst-dsc">Posing lessons and prep tips</li>
            <a
              className="bttn"
              /* href={(() => {
                switch (PlanToggler) {
                  case "1":
                    return "$100 ";
                  case "2":
                    return "$300 ";
                  case "3":
                    return "$600 ";
                  case "4":
                    return "$600 ";
                }
              })()} */
            >
              <HiShoppingCart className="icon" />
              Purchase
            </a>
          </ul>
        </>
      )}
    </div>
  );
}

export default PlanSection;