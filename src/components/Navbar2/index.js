import React, { useEffect } from "react";
import GSAP from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { useDispatch } from "react-redux";
import { changeIndex } from "../../REDUX/currentPosition";
import "./index.css";
const NavbarTwo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    GSAP.registerPlugin(ScrollToPlugin);
  }, []);
  return (
    <>
      <nav className="NavbarTwo">
        <div className="NavbarTwo__container">
          <div
            className="NavbarTwo__container__0"
            onClick={() => {
              dispatch(changeIndex({ index: 0, scroll: true }));
            }}
          >
            <div>.me();</div>
          </div>
          <div
            className="NavbarTwo__container__1"
            onClick={() => {
              dispatch(changeIndex({ index: 1, scroll: true }));
            }}
          >
            <div>.skills();</div>
          </div>
          <div
            className="NavbarTwo__container__2"
            onClick={() => {
              dispatch(changeIndex({ index: 2, scroll: true }));
            }}
          >
            <div>.contact();</div>
          </div>
        </div>
        <div className="NavbarTwo__indicator"></div>
      </nav>
    </>
  );
};
export default NavbarTwo;
