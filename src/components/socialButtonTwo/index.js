import React from "react";
import GSAP from "gsap";
import "./index.css";
const SocialButtonTwo = ({ icon, color, txt, link }) => {
  return (
    <>
      <div
        className={`SocialButtonTwo socialButton__${txt}`}
        onClick={() => {
          setTimeout(() => {
            window.open(link);
          }, 800);
        }}
        onMouseEnter={() => {
          GSAP.to(`.socialButton__${txt}`, {
            backgroundColor: color,
            color: "white",
          });
        }}
        onMouseLeave={() => {
          GSAP.to(`.socialButton__${txt}`, {
            backgroundColor: "white",
            color: "black",
          });
        }}
      >
        <div className="SocialButonTwo__button">
          <div className="SocialButonTwo__button__iconContainer">{icon}</div>
          <div className="SocialButonTwo__button__textContanier">
            <div className="SocialButonTwo__button__textContanier__text">
              {"-" + txt}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SocialButtonTwo;
