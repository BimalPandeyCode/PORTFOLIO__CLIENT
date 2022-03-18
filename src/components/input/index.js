import React, { useEffect } from "react";
import GSAP from "gsap";
import "./index.css";

import { useSelector, useDispatch } from "react-redux";
const ContactInput = (props) => {
  const input = useSelector((state) => state.contactReducer);
  let dispatch = useDispatch();
  useEffect(() => {});
  let current = props.type;
  let currentState = input[current.toLowerCase()];
  if (props.type === "Message") {
    return (
      <div className="ContactInputArea">
        <div className="ContactInputArea__container">
          <textarea
            onFocus={() => {
              GSAP.to(
                `.ContactInputArea__spanContainer__animation__${props.type}`,
                {
                  width: "100%",
                }
              );
            }}
            onBlur={() => {
              if (currentState.value.length <= 0) {
                GSAP.to(
                  `.ContactInputArea__spanContainer__animation__${props.type}`,
                  {
                    width: "0%",
                  }
                );
              }
            }}
            onChange={(e) => {
              dispatch(props.handleChange(e.target.value));
            }}
            value={currentState.value}
            placeholder={props.type}
            className="ContactInputArea__container__inputArea"
            rows={4}
          />
        </div>
        <div className="ContactInputArea__spanContainer">
          <span
            style={
              currentState.valid
                ? { backgroundColor: "rgb(0, 255, 0)" }
                : { backgroundColor: "red" }
            }
            className={`ContactInputArea__spanContainer__animation__${props.type} ContactInputArea__spanContainer__animation`}
          ></span>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="ContactInput">
          <div className="ContactInput__container">
            <input
              type="text"
              placeholder={props.type}
              value={currentState.value}
              onChange={(e) => {
                dispatch(props.handleChange(e.target.value));
              }}
              onFocus={() => {
                GSAP.to(
                  `.ContactInput__spanContainer__animation__${props.type}`,
                  {
                    width: "100%",
                  }
                );
              }}
              onBlur={() => {
                if (currentState.value.length <= 0) {
                  GSAP.to(
                    `.ContactInput__spanContainer__animation__${props.type}`,
                    {
                      width: "0%",
                    }
                  );
                }
              }}
              className="ContactInput__container__input"
            />
          </div>
          <div className="ContactInput__spanContainer">
            <span
              style={
                currentState.valid
                  ? { backgroundColor: "rgb(0, 255, 0)" }
                  : { backgroundColor: "red" }
              }
              className={`ContactInput__spanContainer__animation__${props.type} ContactInput__spanContainer__animation`}
            ></span>
          </div>
        </div>
      </>
    );
  }
};
export default ContactInput;
