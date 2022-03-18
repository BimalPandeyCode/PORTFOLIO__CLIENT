import React from "react";
import "./index.css";
import GSAP from "gsap";

import { useDispatch } from "react-redux";
import { changeIndex } from "../../REDUX/currentPosition";
const ContactButton = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="ContactButtonContainer">
      <div
        className="ContactButton"
        onMouseEnter={() => buttonHoverAnimation()}
        onMouseLeave={() => buttonLeaveAnimation()}
        onClick={() => dispatch(changeIndex({ index: 2, scroll: true }))}
      >
        <div className="ContactButton__txtContainer">
          <p className="ContactButton__txtContainer__txt">
            {props.txt ? props.txt : "Contact Me"}
          </p>
        </div>
        <span className="ContactButton__span"></span>
      </div>
    </div>
  );
};
const buttonHoverAnimation = () => {
  GSAP.to(".ContactButton__span", {
    duration: 0.3,
    x: 25,
    y: 8,
    width: 20,
    height: 20,
    borderRadius: 50,
    onComplete: () => {
      GSAP.to(".ContactButton__span", {
        scaleX: 20,
        scaleY: 20,
        duration: 0.4,
      });
      GSAP.to(".ContactButton__txtContainer__txt", {
        color: "white",
        duration: 0.3,
      });
    },
  });
};
const buttonLeaveAnimation = () => {
  GSAP.to(".ContactButton__span", {
    scaleX: 1,
    scaleY: 1,
    duration: 0.3,
    onComplete: () => {
      GSAP.to(".ContactButton__span", {
        duration: 0.1,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        borderRadius: 50,
      });
      GSAP.to(".ContactButton__txtContainer__txt", {
        color: "black",
        duration: 0.3,
      });
    },
  });
};

export default ContactButton;
