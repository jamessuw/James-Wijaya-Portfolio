import "./contact.css";
import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import Model from "../Lab/Model"; /* highlight-line */
import gsap from "gsap";
import RevealAnimation from "../Animation/RevealAnimation";

function Contact() {
  const modelSrc = "https://models.readyplayer.me/64c7b1af067a35dfd8b3de7f.glb";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wmblofu",
        "template_fn5pf0l",
        form.current,
        "G8Hlr2zdNdDizyDKT"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert(
            "Thank you. Message has been sent! James will be in touch soon :)"
          ); // Display an alert window
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact-section">
      <span className="heading-project">
        {" "}
        <div className="singleLine">
          <RevealAnimation>
            <h2>
              LET'S CONNECT & GET TO KNOW<br></br> EACH OTHER
            </h2>
          </RevealAnimation>
        </div>
      </span>

      <div className="container">
        <div className="container-1">
          <div className="container-abstracts">
            <div class="blob"></div>
            <RevealAnimation>
              <p className="tag-contact reveal">
                IM CURRENTLY OPEN FOR PROJETC <br></br>
                FEEL FREE TO REACH OUT ILL CONTACT<br></br>AS SOON AS I CAN
                THANK YOU
              </p>
            </RevealAnimation>

            <div className="ball" id="ball-1"></div>
            <div className="abstracts"></div>
            <div className="ball"></div>
          </div>
        </div>

        <div className="container-1">
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="--form-control--crad"
            >
              <input
                type="text"
                placeholder="Full name"
                name="user_name"
                required
              />
              <input
                type="text"
                placeholder="Email"
                name="user_email"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                name="user_subject"
                required
              />

              <textarea
                className="text-area-form"
                name="message"
                placeholder="Messages"
                cols="30"
                rows="10"
              ></textarea>

              <button className="button-contactForm" type="submit">
                Send massages
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
