import React, { useState, useEffect } from "react";
import "./landing.css";
import Blob from "../Landing/Blob.jsx";
import { Canvas } from "@react-three/fiber";
import { TypeAnimation } from "react-type-animation";
import RevealAnimation from "../Animation/RevealAnimation";


function Landing() {
  return (
    <section id="sct-landing-mobile" className="Landing-section">
      <div className="container" id="landing-container">
        <div className="container-1" id="landing-page">
            <RevealAnimation><div className="binary-cube">
            <div className="blob-container">
            
              <Canvas  camera={{ position: [0.0, 0.0, 8.0] }} shadow
        
              >
                <Blob />
              </Canvas>
            </div>
          </div></RevealAnimation>

          <div className="container-text">
            <div className="landing-text">
              {/* <h1>{text}</h1> */}
              <span className="pill-design">
                James Wijaya
              </span>
              <span className="pill-design">
                <a href="#" title="LinkedIn">
                  <i class="fa fa-linkedin fa-fw"></i> LinkedIn
                </a>{" "}
                |{" "}
                <a href="#" title="LinkedIn">
                  <i class="fa fa-linkedin fa-fw"></i> GitHub
                </a>
              </span>
            </div>
            <div className="spacing">
              <p>SCROLL ME</p>
              <div className="mouse-container">
                <div class="mouse">
                  <span class="scroller"></span>
                </div>
              </div>
            </div>

            <div className="landing-catalog">
              <div className="circle" id="catalog-circle"></div>
              <TypeAnimation
                sequence={[
                  "HI, IM A FRONT-END ENGINNERS! WELCOME TO MY PORTFOLIO FEEL FREE TO BROWSE. MORE UPDATE ARE COMMING SOON!",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "0.8em", width: "70%" }}
                repeat={Infinity}
              ></TypeAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
