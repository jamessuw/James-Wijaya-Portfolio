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
          
          <div className="tagline-landing">
            <h1>James Wijaya</h1>
            <h4>Develop  and design with purposed</h4>
            <TypeAnimation
                sequence={[
                  "Hi, welcome to my portfolio! Feel free to browse around and dont be shy to reach out.\nMore update are comming soon!",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "0.9em", fontWeight: 400, display:"block", }}
                repeat={Infinity}
              ></TypeAnimation>
          
          
          </div>   
          
            <RevealAnimation>
              <div className="binary-cube">
            <div className="blob-container">
            
              <Canvas  camera={{ position: [0.0, 0.0, 8.0] }} shadow
        
              >
                <Blob />
              </Canvas >
           <span className="hover-text">HOVER ME</span>
            </div>
          </div>
          
          
          </RevealAnimation>

          <div className="container-text">
            <div className="landing-text">
              {/* <h1>{text}</h1> */}
              {/* <span className="pill-design">
                Send Massages
              </span>
              <span className="pill-design">
                <a href="#" title="LinkedIn">
                  <i class="fa fa-linkedin fa-fw"></i> LinkedIn
                </a>{" "}
                |{" "}
                <a href="#" title="LinkedIn">
                  <i class="fa fa-linkedin fa-fw"></i> GitHub
                </a>
              </span> */}
            </div>
      
            <div className="landing-catalog">
              {/* <div className="circle" id="catalog-circle"></div>
              <TypeAnimation
                sequence={[
                  "HI, IM A FRONT-END ENGINNERS! WELCOME TO MY PORTFOLIO FEEL FREE TO BROWSE. MORE UPDATE ARE COMMING SOON!",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "0.8em", width: "70%" }}
                repeat={Infinity}
              ></TypeAnimation> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
