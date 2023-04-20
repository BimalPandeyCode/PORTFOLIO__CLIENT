import React, { useEffect, useState } from "react";
import GSAP from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { useDispatch } from "react-redux";
import { changeIndex } from "../../REDUX/currentPosition";
import "./index.css";
const NavbarTwo = () => {
  const dispatch = useDispatch();
  const [hoverIndex, setHoverIndex] = useState(null);
  useEffect(() => {
    GSAP.registerPlugin(ScrollToPlugin);
  }, []);
  return (
    <>
      <nav className="NavbarTwo">
        <div className="NavbarTwo__container">
          <div
            className="NavbarTwo__container__0"
            onMouseEnter={() => {
              setHoverIndex(0);
            }}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={() => {
              dispatch(changeIndex({ index: 0, scroll: true }));
            }}
          >
            <div style={hoverIndex === 0 ? { fontSize: "20px" } : {}}>
              .me();
            </div>
          </div>
          <div
            className="NavbarTwo__container__1"
            onMouseEnter={() => {
              setHoverIndex(1);
            }}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={() => {
              dispatch(changeIndex({ index: 1, scroll: true }));
            }}
          >
            <div style={hoverIndex === 1 ? { fontSize: "20px" } : {}}>
              .skills();
            </div>
          </div>
          <div
            className="NavbarTwo__container__2"
            onMouseEnter={() => {
              setHoverIndex(2);
            }}
            onMouseLeave={() => setHoverIndex(null)}
            onClick={() => {
              dispatch(changeIndex({ index: 2, scroll: true }));
            }}
          >
            <div style={hoverIndex === 2 ? { fontSize: "20px" } : {}}>
              .contact();
            </div>
          </div>
        </div>
        <div className="NavbarTwo__indicator"></div>
      </nav>
    </>
  );
};
export default NavbarTwo;
