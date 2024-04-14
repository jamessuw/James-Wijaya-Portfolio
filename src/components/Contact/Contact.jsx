import "./contact.css";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import RevealAnimation from "../Animation/RevealAnimation";
import { Link as ScrollLink } from "react-scroll";
import Model from "./Corgifluffy.jsx";

function Contact() {
  const form = useRef();
  const [text, setText] = useState("");

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
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };



  return (
    <section id="contact-section">
      <span className="heading-project">
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
            <div className="fluffy-container">
              <Canvas
                camera={{ position: [0, 20, 50], fov: 50 }}
                style={{
                  backgroundColor: "transparent",
                  width: "100%",
                  height: "60vh",
                  id: "canvaId",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ambientLight intensity={0.2} castShadow receiveShadow />
                <ambientLight intensity={1.0} />
                <directionalLight
                  intensity={3}
                  shadow-camera={{ far: 30 }}
                  shadow-camera-bottom={80}
                  color="white"
                  shadow-radius={5}
                  castShadow
                  receiveShadow
                  shadow-mapSize-height={712}
                  shadow-mapSize-width={512}
                />
                <Model
                  position={[0, -5, 0]}
                  rotation={[0, Math.PI / 8, 0]}
                  castShadow
                  receiveShadow
                />
                <OrbitControls autoRotate={false} enableZoom={false} />
              
              </Canvas>
            </div>
            <RevealAnimation>
              <p className="tag-contact reveal">
                WOOOF WOOF WOOF!
                <br />
                Name: Fluffy
                <br />
                Gender: Male
                <br />
                Occupation: Being a good Boi
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
                Send messages
              </button>
            </form>
            <ScrollLink to="top" smooth={true} spy={true}>
              <button className="scroll-top-btn">
                Scroll to Top
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
    );
}

export default Contact;
