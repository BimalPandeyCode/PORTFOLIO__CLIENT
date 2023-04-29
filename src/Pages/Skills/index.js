import "./index.css";
import React, { useEffect, useState } from "react";
import GSAP from "gsap";
import Sphere from "../../components/Sphere";

const Skills = () => {
  useEffect(() => {
    let mousePosX = 0;
    let mousePosY = 0;
    const mouseCircle = document.getElementById("cursor");

    const handleMouseMove = (e) => {
      mousePosX = e.pageX;
      mousePosY = e.pageY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    let delay = 10;
    let revisedMousePosX = 0;
    let revisedMousePosY = 0;

    function delayMouseFollow() {
      requestAnimationFrame(delayMouseFollow);

      revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
      revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

      mouseCircle.style.top = revisedMousePosY + "px";
      mouseCircle.style.left = revisedMousePosX + "px";
    }
    delayMouseFollow();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div id="cursor" className="cursor"></div>
      <div id="blur"></div>
      <div className="skills">
        <div
          className="skills__text"
          onMouseEnter={() => {
            GSAP.to(
              [
                `.skills__text__container__Main__langs`,
                ".skills__text__container__languages__text",
              ],
              {
                duration: 5,
                textShadow:
                  " 2px 2px 0 #4074b5, 2px -2px 0 #4074b5,-2px 2px 0 #4074b5, -2px -2px 0 #4074b5, 2px 0px 0 #4074b5,0px 2px 0 #4074b5, -2px 0px 0 #4074b5, 0px -2px 0 #4074b5",
                color: "white",
              }
            );

            GSAP.to(".cursor", {
              width: 100,
              height: 100,
            });
          }}
          onMouseLeave={() => {
            GSAP.to(".cursor", {
              width: 0,
              height: 0,
            });
          }}
        >
          <div className="skills__text__container">
            <div className="skills__text__container__title">.skills();</div>
            <div className="skills__text__container__experience">
              {"//"} &nbsp; 4+ years of experience
            </div>
            <div className="skills__text__container__Main">
              <div className="skills__text__container__Main__text">
                #Main Skills/years
              </div>
              <div className="skills__text__container__Main__langs">
                <div className="skills__text__container__Main__langs__1">
                  <div className="a00">HTML~+4</div>
                  <div className="a10">Nodejs~+2</div>
                  <div className="a20">GSAP~+2</div>
                  <div className="a30">SASS~+2</div>
                </div>
                <div className="skills__text__container__Main__langs__2">
                  <div className="a01">JavaScript~+4</div>
                  <div className="a11">ExpressJs~+2</div>
                  <div className="a21">UNITY/C#~+2</div>
                  <div className="a31">{"SocketIO~+1"}</div>
                </div>
                <div className="skills__text__container__Main__langs__3">
                  <div className="a02">CSS~+4</div>
                  <div className="a12">SQL~+2</div>
                  <div className="a22">THREEJS~+2</div>
                  <div className="a32">{"TypeScript~<1"}</div>
                </div>
                <div className="skills__text__container__Main__langs__4">
                  <div className="a03">React~+2</div>
                  <div className="a13">MongoDB~+2</div>
                  <div className="a23">{"Redux~+1"}</div>
                  <div className="a33">{"GLSL~<1"}</div>
                </div>
              </div>
            </div>
            <div className="skills__text__container__Main">
              <div className="skills__text__container__Main__text">
                #Tools I Use
              </div>
              <div className="skills__text__container__Main__langs">
                <div className="skills__text__container__Main__langs__1">
                  <div className="a00">VScode</div>
                  <div className="a10">GIMP</div>
                  <div className="a21">Illustrator</div>
                </div>
                <div className="skills__text__container__Main__langs__2">
                  <div className="a31">Blender</div>
                  <div className="a01">Firefox||Chromium</div>
                  <div className="a11">Photoshop</div>
                </div>
                <div className="skills__text__container__Main__langs__3">
                  <div className="a02">Heroku</div>
                  <div className="a12">Netlify</div>
                </div>
                <div className="skills__text__container__Main__langs__4">
                  <div className="a20">FIGMA</div>
                  <div className="a30">Github</div>
                </div>
              </div>
            </div>

            <div className="skills__text__container__languages">
              <div className="skills__text__container__languages__title">
                #Languages/Fluency
              </div>
              <div className="skills__text__container__languages__text">
                <div className="skills__text__container__languages__text__1">
                  Nepali~Native
                </div>
                <div className="skills__text__container__languages__text__2">
                  English~Fluent
                </div>
                <div className="skills__text__container__languages__text__3">
                  Hindi~Conversational
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills__sphere">
          <div className="skills__sphere__container">
            <Sphere />
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
