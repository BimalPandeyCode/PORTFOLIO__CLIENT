import React, { useEffect } from "react";

import GSAP from "gsap";
import { ScrollTrigger } from "gsap/all";

import { useDispatch } from "react-redux";
import { changeIndex } from "../../REDUX/currentPosition";

import Home from "../Home";
import Me from "../Me";
import Skills from "../Skills";
import Contact from "../Contact";

const MAIN = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    GSAP.registerPlugin(ScrollTrigger);
    GSAP.to("#ifYouInspectedYouCouldHireMe", {
      scrollTrigger: {
        trigger: "#ifYouInspectedYouCouldHireMe",
        onEnter: () => dispatch(changeIndex({ index: 1, scroll: false })),
        onLeave: () => dispatch(changeIndex({ index: 2, scroll: false })),
        onEnterBack: () => dispatch(changeIndex({ index: 1, scroll: false })),
        onLeaveBack: () => dispatch(changeIndex({ index: 0, scroll: false })),
        start: "50% 100%",
        end: "50% 0%",
      },
    });
  });
  return (
    <>
      <div id="heyInspector">
        <Home />
        <Me />
      </div>
      <div id="ifYouInspectedYouCouldHireMe">
        <Skills />
      </div>
      <div id="pleaseDontHackItToPieces">
        <Contact />
      </div>
    </>
  );
};

export default MAIN;
