import React, { useEffect } from "react";
import GSAP from "gsap";
import "./index.css";
import { useSelector } from "react-redux";
const Notification = () => {
  let notification = useSelector((state) => state.notificationReducer);
  if (notification.isActive)
    return <NotificationDiv msg={notification.message} />;
  else return <></>;
};
const NotificationDiv = ({ msg }) => {
  useEffect(() => {
    GSAP.to(".NotificationDiv__msgContainer", {
      x: -300,
      duration: 0.3,
    });
  });
  return (
    <>
      <div className="NotificationDiv">
        <div
          className="NotificationDiv__msgContainer"
          style={
            msg === "Message sent"
              ? { backgroundColor: "green", color: "black" }
              : { backgroundColor: "red", color: "white" }
          }
        >
          <div className="NotificationDiv__msgContainer__msg">{msg}</div>
        </div>
      </div>
    </>
  );
};
export { Notification };
