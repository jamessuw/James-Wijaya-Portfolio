import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";



import "./lab.css";
import { useRef, useEffect } from "react";
import RevealAnimation from "../Animation/RevealAnimation";

function Lab() {
  return (
    <section className="lab-section">
      <div className="container">
        <div className="container-1">
          <div className="comming-soon-container">
            <RevealAnimation>
              <div className="lab-section">
                <h1>THE LAB</h1>
              <h2> COMMING SOON!</h2></div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lab;
