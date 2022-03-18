import React, { useEffect } from "react";
import GSAP from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialButton from "../socialButton";
import SocialButtonTwo from "../socialButtonTwo";
import {
  DiscordIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../../Assets/index";
import "./index.css";

const SocialButtons = ({ no }) => {
  useEffect(() => {
    GSAP.registerPlugin(ScrollTrigger);

    GSAP.to(`.SocialButtonsContainer__one__${no}`, {
      scrollTrigger: {
        trigger: `.SocialButtonsContainer${no}`,
        toggleActions: "restart none none none",
        onLeaveBack: () => {
          GSAP.to(`.SocialButtonsContainer__one__${no}`, {
            marginRight: 0,
          });
        },
        invalidateOnRefresh: true,
      },
      marginRight: () => {
        let width = window.innerWidth;
        if (width <= 800) {
          if (width <= 550) {
            if (width <= 400) {
              return "0%";
            }
            return "0%";
          }
          return "10%";
        }
        return "43%";
      },
      y: () => {
        if (window.innerWidth <= 400) {
          return -50;
        }
        return 0;
      },
      x: () => {
        if (window.innerWidth <= 400) {
          return 50;
        }
        return 0;
      },
    });

    GSAP.to(`.SocialButtonsContainer__two__${no}`, {
      scrollTrigger: {
        trigger: `.SocialButtonsContainer${no}`,
        toggleActions: "restart none none none",
        invalidateOnRefresh: true,
      },
      x: () => {
        if (window.innerWidth <= 400) {
          return -45;
        }
        return 0;
      },
      y: () => {
        if (window.innerWidth <= 400) {
          return 35;
        }
        return 0;
      },
      skewY: () => {
        if (window.innerWidth <= 400) {
          return 14;
        }
        return 0;
      },
      repeatRefresh: true,
    });
  }, [no]);
  return (
    <>
      <div className={`SocialButtonsContainer SocialButtonsContainer${no}`}>
        <div
          className={`SocialButtonsContainer__one SocialButtonsContainer__one__${no}`}
        >
          <SocialButton
            icon={no === 0 ? <GithubIcon /> : <DiscordIcon />}
            color={no === 0 ? "#272b33" : "#7289da"}
            txt={no === 0 ? "Github" : "Discord"}
            link={
              no === 0
                ? "https://github.com/BimalPandeyCode"
                : "https://discordapp.com/users/697021523592085525"
            }
          />
        </div>
        <div
          className={`SocialButtonsContainer__two SocialButtonsContainer__two__${no}`}
        >
          <SocialButtonTwo
            icon={no === 0 ? <LinkedinIcon /> : <TwitterIcon />}
            txt={no === 0 ? "Linkedin" : "Twitter"}
            color={no === 0 ? "#0a66c2" : "#1da1f2"}
            link={
              no === 0
                ? "https://linkedin.com/in/bimal-pandey-740104208"
                : "https://discordapp.com/users/697021523592085525"
            }
          />
        </div>
      </div>
    </>
  );
};
export default SocialButtons;
