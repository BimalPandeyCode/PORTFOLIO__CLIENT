import "./index.css";
import React from "react";
import axios from "axios";
import ContactInput from "../../components/input";
import GSAP from "gsap";
import { useDispatch, useSelector } from "react-redux";
import SocialButtons from "../../components/socialButtonContainer";
import GmailCopy from "../../components/gmailCopy";
import { Notification } from "../../components/Notification";
import SubmitButton from "../../components/submitButton";
import {
  handleNameChange,
  handleEmailChange,
  handleReasonChange,
  handleMessageChange,
  handleClear,
} from "../../REDUX/contactForm";
import { notify, revokeNotify } from "../../REDUX/notificationSlice";

// const herokuURL = "https://portfolio-fullstack.herokuapp.com/";
// const herokuURL = "https://portfoliobackend-production-89c7.up.railway.app";
// const herokuURL = "https://portfolio-v4vg.onrender.com/";
const herokuURL = "http://localhost:5000/";

const Contact = () => {
  let dispatch = useDispatch();
  let contactValues = useSelector((state) => state.contactReducer);
  const animateInputBoxes = () => {
    GSAP.to(
      [
        ".ContactInputArea__spanContainer__animation__Message",
        ".ContactInput__spanContainer__animation__Reason",
        ".ContactInput__spanContainer__animation__Email",
        ".ContactInput__spanContainer__animation__Name",
      ],
      {
        width: "0%",
      }
    );
  };
  const animateNotification = (msg) => {
    let duration = 0.3;
    dispatch(
      notify({
        message: msg,
      })
    );
    setTimeout(() => {
      dispatch(revokeNotify());
    }, 5000);
    setTimeout(() => {
      GSAP.to(".NotificationDiv__msgContainer", {
        x: 300,
        duration: duration,
      });
    }, 5000 - duration * 1000);
  };
  const sendMessage = (e) => {
    e.preventDefault();
    if (contactValues.email.value === "bimalpandey32@gmail.com") {
      animateNotification("That is just my email, come on haha");
      return;
    }
    if (!contactValues.allValid) {
      animateNotification(
        "Please fill all the input boxes with correct values"
      );
      return;
    }
    axios
      .post(`${herokuURL}msg/`, {
        name: contactValues.name.value,
        email: contactValues.email.value,
        reason: contactValues.reason.value,
        message: contactValues.message.value,
      })
      .then((res) => {
        if (res.data.response === "Successful") {
          animateNotification("Message sent");
          dispatch(handleClear());
          animateInputBoxes();
        } else if (res.data.response === "INVALID") {
          animateNotification(
            "Please fill all the input boxes with correct values.If you think this is an error, please reach me at bimalpandey32@gmail.com"
          );
        } else if (res.data.response === "BANNED") {
          animateNotification(
            "I'm sorry but you've been temporarily banned for " + res.data.cause
          );
        } else if (res.data.response === "Unuccessful") {
          animateNotification(
            "I'm sorry but I couldn't process your request at the moment, would you mind telling me about it at bimalpandey32@gmail.com"
          );
        }
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
        if (e.response.status === 429) {
          animateNotification(
            `Too many requests, please try again in 15 minutes or reach me at bimalpandey32@gmail.com`
          );
        } else {
          animateNotification(
            "Something went wrong, please try again or reach me at bimalpandey32@gmail.com"
          );
        }
      });
  };
  return (
    <>
      <Notification />
      <div className="socialButtonDiv">
        <div className="socialButtonDiv__container">
          <SocialButtons no={0} />
          <SocialButtons no={1} />
        </div>
      </div>
      <form className="contact">
        <div className="contact__container">
          <div className="contact__container__title">
            <div className="contact__container__title__txt">Get in touch</div>
            <div className="contact__container__title__gmailContainer">
              <GmailCopy />
            </div>
          </div>
          <div className="contact__container__name">
            <ContactInput type="Name" handleChange={handleNameChange} />
          </div>
          <div className="contact__container__email">
            <ContactInput type="Email" handleChange={handleEmailChange} />
          </div>
          <div className="contact__container__reason">
            <ContactInput type="Reason" handleChange={handleReasonChange} />
          </div>
          <div className="contact__container__message">
            <ContactInput type="Message" handleChange={handleMessageChange} />
          </div>
          <div className="contact__container__sumitContainer">
            <SubmitButton msgFtcn={sendMessage} />
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
