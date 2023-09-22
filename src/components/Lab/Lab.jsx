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
              <h1> COMMING SOON!</h1>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lab;
