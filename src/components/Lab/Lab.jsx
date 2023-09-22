import React from "react";

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
                <h1>" THE LAB "</h1>
              <h2> COMMING SOON!</h2>
            </RevealAnimation>

            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lab;
