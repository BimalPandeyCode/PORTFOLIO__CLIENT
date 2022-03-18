import React from "react";
import GSAP from "gsap";
import "./index.css";
import clipboard from "../../Assets/clipboard.png";

const GmailCopy = () => {
  return (
    <div
      className="GmailCopy"
      onClick={() => {
        navigator.clipboard.writeText("bimalpandey32@gmail.com");
        GSAP.to(".GmailCopy", {
          scale: 0.95,
          duration: 0.2,
          onComplete: () => {
            GSAP.to(".GmailCopy", {
              scale: 1,
              duration: 0.2,
              onComplete: () => {},
            });
          },
        });
      }}
    >
      <div className="GmailCopy__mail">bimalpandey32@gmail.com</div>

      <div className="GmailCopy__button">
        <img className="GmailCopy__button__img" src={clipboard} alt="copy" />
      </div>
    </div>
  );
};

export default GmailCopy;
