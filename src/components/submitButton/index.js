import React from "react";
import GSAP from "gsap";
import "./index.css";
import send from "../../Assets/send2.png";
const SubmitButton = ({ msgFtcn }) => {
  return (
    <>
      <div
        className="SubmitButton"
        onClick={msgFtcn}
        onMouseEnter={() => {
          GSAP.to(".SubmitButton__imgContainer__img", {
            opacity: 1,
            x: 48,
            scale: 1.3,
          });
        }}
        onMouseLeave={() => {
          GSAP.to(".SubmitButton__imgContainer__img", {
            opacity: 0,
            x: 0,
            scale: 1,
          });
        }}
      >
        <div className="SubmitButton__imgContainer">
          <img
            src={send}
            alt="send"
            className="SubmitButton__imgContainer__img"
          />
        </div>
        <div className="SubmitButton__textContainer">
          <button type="submit" className="SubmitButton__textContainer__txt">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
export default SubmitButton;
