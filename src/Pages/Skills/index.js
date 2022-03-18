import "./index.css";
import React, { useEffect, useState } from "react";
import GSAP from "gsap";
import Sphere from "../../components/Sphere";

const Skills = () => {
  const [isHover, setIsHover] = useState(false);
  let currentOnesIndex = [];
  let skill = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  let mouse = [0, 0];
  const loop = (n) => {
    let copy = JSON.parse(JSON.stringify(skill));
    if (n === 0) {
      skill[mouse[0]][mouse[1]] = 1;
    }
    for (let i = 0; i < skill.length; i++) {
      for (let j = 0; j < skill[i].length; j++) {
        if (skill[i][j] === 0) {
          if (i - 1 >= 0) {
            if (j - 1 >= 0) {
              if (skill[i - 1][j - 1] >= 1) copy[i][j] = 1;
            }
            if (j + 1 < skill[i].length) {
              if (skill[i - 1][j + 1] >= 1) copy[i][j] = 1;
            }

            if (skill[i - 1][j] >= 1) copy[i][j] = 1;
          }

          if (j - 1 >= 0) {
            if (skill[i][j - 1] >= 1) copy[i][j] = 1;
          }
          if (j + 1 < skill[i].length) {
            if (skill[i][j + 1] >= 1) copy[i][j] = 1;
          }
          if (i + 1 < skill.length) {
            if (j - 1 >= 0) {
              if (skill[i + 1][j - 1] >= 1) copy[i][j] = 1;
            }
            if (skill[i + 1][j] >= 1) copy[i][j] = 1;
            if (j + 1 < skill[i].length) {
              if (skill[i + 1][j + 1] >= 1) copy[i][j] = 1;
            }
          }
        } else copy[i][j]++;
      }
    }
    n++;
    skill = JSON.parse(JSON.stringify(copy));
    skill[mouse[0]][mouse[1]] = n;
    currentOnesIndex = [];
    for (let i = 0; i < skill.length; i++) {
      for (let j = 0; j < skill[i].length; j++) {
        const e = skill[i][j];
        if (e === 1) {
          currentOnesIndex.push(`.a${j}${i}`);
        }
        GSAP.to(`.a${i}${j}`, {
          duration: 2,
          textShadow:
            "1px 1px 0 #ffffff, 2px 2px 0 #000000, 3px 3px #ff0000,4px 4px 0 #860000",
        });
      }
    }

    // *GSAP
    // for (let i = 0; i < currentOnesIndex.length; i++) {
    //   let c = currentOnesIndex[i];
    //   GSAP.to(c, {
    //     duration: 2,
    //     textShadow:
    //       "1px 1px 0 #ffffff, 2px 2px 0 #000000, 3px 3px #ff0000,4px 4px 0 #860000",
    //   });
    // }
    if (currentOnesIndex.length !== 0) {
      setTimeout(() => {
        loop(n);
      }, 500);
    }
  };
  const onHover = (a, b) => {
    skill = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    mouse = [a, b];
    loop(0);
  };
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.setAttribute(
        "style",
        `left:${e.pageX}px; top:${e.pageY}px; width:${
          isHover ? "75" : "0"
        }px; height:${isHover ? "75" : "0"}px;`
      );
    });
  });

  return (
    <>
      <div id="cursor" className="cursor"></div>
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

            setIsHover(true);
            GSAP.to(".cursor", {
              width: 75,
              height: 75,
            });
          }}
          onMouseLeave={() => {
            setIsHover(false);
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
/*
//!What is Micro Economics
economic theories are divided into two parts: they are micro economics and macro economics According to our curse we discuss
micro eco is derived from greek word 'mikros'. Micro eco is a study of small parts or individusl parts of economics
In other word micro eco is microscopic study. for eg earning or expenditure of a single person or farm etc.
It doesn't study on a macro level. 
Micro eco is also known as price theory because it explains the ways to determine price of a object.
Micro eco is a classical economics because micro eco was developed by classical economist Adam Smith(This guy can die).

In short micro eco divides whole econmical parts into tiny units, and it studies their relations, so some even call it slicing method. 


//  Scope of Micro Economics/use/importance
The areas covered by micro eco is called scope of micro eco lol
1. Production
-> Making of final goods
The transformation of raw materials or intermediary goods to final goods is called production. Micro eco answers questions like 
what to produce, how to produce, target demographics or for whom to produce
2. Consumption
-> Destruction/use of goods
3. Destribution
-> payment to the various factors of production for the use of their service (WTF)
4. Efficient allocation of resources
-> Economics doesn't misuse resources
Resouce should always be used to get maximum satisfaction. 
5. Public Finance
->Proper use of government's finance or income and expenditure is called public finance.
6. Pricing
-> The determination of price for a certain good by looking at demand and supply or cost is called pricing. 
7. Analysis of cost
-> Definition: In economics, the Cost Analysis refers to the measure of the cost – output relationship, i.e. the economists are concerned with determining the cost incurred in hiring the inputs and how well these can be re-arranged to increase the productivity (output) of the firm.(Google bata)

// How to use  resources ie optimal use of resources
// Social system
There are three types of it
1. Free economy/Capitalist economy
->In this economy, there is freedom for producers to produce goods, consumers are free to choose any goods, businessmen are free to sell goods.
There is no direct or indirect intervension of government. There is no welfare, business are motivated by profit.
Government doesn't own any business but only create environment for business, by creating poliicies, maintaining peace and security, issuing money etc.
The main principle "laissez faire" policy ie "freedom to all".
Features of Capitalist economy
1. Two class system i) rich 2) poor
2. There is profit motivation
3. role of gov is limited
4. Competitive economy
5. private ownership

For eg. America, UK, Japan
2. Socialist economy/Centrally planned economy
->There is no private companies, so all the production, distribution, is controled by government.
All people are equal, ie there is only one class.
for eg. China, Cube, Vietnam, North Korea
Feature of this
1. Public ownership
2. No class system
3. Welfare focused, rather than profit
4. Price control by state
5. Provision of basic needs.

3. Mixed econmy 
When socialism and capitalism work together it is called mixed economy. There is involvement of both private and state in production and distribution of goods.
Features
1. Co-existence of private and state sector.
2. Planned economy
3. Provision of socal security/ welfare
4. There is economic freedom.
For eg. Nepal, Bhutan, India etc

//  Resource allocation
Human wants are unlimited but resources are limited so there is requirement of choice. So the most important wants must be fullfillled first with the limited resources.
Due to the limited resource, we have to ask ourself these three questions.
1. What to produce?
2. How to produce?
3. For whom to produce?
For this we have to focus on production possibility curve/ Production funtair

or Oppertunity cost

*/
