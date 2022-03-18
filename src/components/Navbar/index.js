import "./index.css";
import React, { useEffect } from "react";
import GSAP from "gsap";
const Navbar = () => {
  useEffect(() => {});
  return (
    <>
      <nav className="Navbar">
        <div
          className="Navbar__meContainer"
          onMouseEnter={() => mouseOverAnimation("me")}
          onMouseLeave={() => mouseLeaveAnimation("me")}
        >
          <div className="Navbar__meContainer__txt">.me()</div>
          <span className="Navbar__meContainer__span"></span>
        </div>
        <div
          className="Navbar__skillsContainer"
          onMouseEnter={() => mouseOverAnimation("skills")}
          onMouseLeave={() => mouseLeaveAnimation("skills")}
        >
          <div className="Navbar__skillsContainer__txt">.skills()</div>
          <span className="Navbar__skillsContainer__span"></span>
        </div>
        <div
          className="Navbar__contactContainer"
          onMouseEnter={() => mouseOverAnimation("contact")}
          onMouseLeave={() => mouseLeaveAnimation("contact")}
        >
          <div className="Navbar__contactContainer__txt">.contact()</div>
          <span className="Navbar__contactContainer__span"></span>
        </div>
      </nav>
    </>
  );
};

const mouseOverAnimation = (txt) => {
  // GSAP.to(`.Navbar__${txt}Container__txt`, {
  //   color: "black",
  // });
  GSAP.to(`.Navbar__${txt}Container__span`, {
    scaleX: 0,
  });
  // GSAP.fromTo(
  //   `.Navbar__${txt}Container__span`,
  //   {
  //     scaleY: 1,
  //     onComplete: () => {
  //       GSAP.to(`.Navbar__${txt}Container__span`, {
  //         borderRadius: "75%",
  //       });
  //     },
  //   },
  //   {
  //     scaleY: 25,
  //     duration: 0.5,
  //     delay: 0.1,
  //   }
  // );
};
const mouseLeaveAnimation = (txt) => {
  // GSAP.to(`.Navbar__${txt}Container__txt`, {
  //   color: "white",
  // });
  GSAP.to(`.Navbar__${txt}Container__span`, {
    scaleX: 1,
  });
  // GSAP.fromTo(
  //   `.Navbar__${txt}Container__span`,
  //   {
  //     scaleY: 25,
  //     onComplete: () => {
  //       GSAP.to(`.Navbar__${txt}Container__span`, {
  //         borderRadius: "0%",
  //       });
  //     },
  //   },
  //   { scaleY: 1, backgroundColor: "cyan" }
  // );
};
export default Navbar;
