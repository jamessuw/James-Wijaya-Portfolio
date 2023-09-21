import "./contact.css";
import { useRef,useEffect } from "react";
import emailjs from "@emailjs/browser";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model"; /* highlight-line */
import gsap from "gsap";





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


  const revealElements = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal__content');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    revealElements.current.forEach(element => {
      observer.observe(element);
    });
  }, []);


  return (
    <section id="contact-section">
      <span className="heading-project">
        {" "}
        <div className="singleLine">
        <div className="reveal" ref={el => revealElements.current.push(el)}>
        <div className="reveal__content"> <h2>
          LET'S CONNECT & GET TO KNOW<br></br> EACH OTHER
        </h2>
        </div>
        </div>
       </div>
      </span>

      <div className="container">
        <div className="container-1">
          <div className="container-abstracts">
            <div class="blob"></div>

            <p className="tag-contact reveal" ref={el => revealElements.current.push(el)}>
              IM CURRENTLY OPEN FOR PROJETC <br></br>
              FEEL FREE TO REACH OUT ILL CONTACT<br></br>AS SOON AS I CAN THANK
              YOU
            </p>


            <div className="ball" id="ball-1"></div>
            <div className="abstracts"></div>
            <div className="ball"></div>
          </div>
        </div>

        <div className="container-1">
          <section>
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
          </section>
        </div>
      </div>
    </section>
  );
}

export default Contact;
