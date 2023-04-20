import "./index.css";
import React, { useEffect } from "react";
import GSAP from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import me from "../../Assets/photos/one.jpeg";
const Me = () => {
  useEffect(() => {
    GSAP.registerPlugin(ScrollTrigger);
    GSAP.to(".MeContainer__div1__me", {
      scrollTrigger: {
        trigger: ".MeContainer",
        start: "20% 30%",
        end: "100% 50%",
        scrub: 1.5,

        toggleActions: "play reverse resume reset",

        onEnter: () => {
          GSAP.to(".Me__top__div__imageContainer__img", {
            filter: "none",
            duration: 0.1,
            // scale: 1.1,
            width: 320,
          });
        },
        onLeave: () => {
          GSAP.to(".Me__top__div__imageContainer__img", {
            filter: "grayscale(100%)",
            // scale: 1,
            width: 300,
          });
        },
        onEnterBack: () => {
          GSAP.to(".Me__top__div__imageContainer__img", {
            filter: "none",
            duration: 0.1,
            // scale: 1.1,
            width: 320,
          });
        },
        onLeaveBack: () => {
          GSAP.to(".Me__top__div__imageContainer__img", {
            filter: "grayscale(100%)",
            // scale: 1,
            width: 300,
          });
        },
      },
      x: -300,
      skewX: 10,
    });
    GSAP.to(".MeContainer__div2__me", {
      scrollTrigger: {
        trigger: ".MeContainer",
        start: "20% 30%",
        end: "100% 50%",
        scrub: 2,
        toggleActions: "play reverse resume reset",
      },
      x: 300,
      skewX: -10,
    });
  });
  return (
    <>
      <div className="Me">
        <div className="MeContainer">
          <div className="MeContainer__div1">
            <h1
              className="MeContainer__div1__me"
              style={{ userSelect: "none" }}
            >
              M
            </h1>
          </div>
          <div className="MeContainer__div2">
            <h1
              className="MeContainer__div2__me"
              style={{ userSelect: "none" }}
            >
              E
            </h1>
          </div>
        </div>
        <div className="Me__top">
          <div className="Me__top__div">
            <div className="Me__top__div__imageContainer">
              <img
                style={{ userSelect: "none" }}
                src={me}
                alt=""
                className="Me__top__div__imageContainer__img"
              />
            </div>
            <div className="Me__top__div__textContainer">
              <p className="Me__top__div__textContainer__text">
                Namaste, I'm Bimal, a web developer based here in Nepal. The web
                now seems like it's magic, but I have the skills and the
                patience required to make just about anything. (*with few
                exceptions of course 😉)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Me;
