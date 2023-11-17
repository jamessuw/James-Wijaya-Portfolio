import "./about.css";
// import aboutJamesImage from '../src/assets/images/about-james.jpg';
// import { Avatar } from '@readyplayerme/visage';
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model.jsx"; /* highlight-line */
import gsap from "gsap";
import { useInView } from "react-intersection-observer";
import styled, { keyframes } from "styled-components";
import RevealAnimation from "./RevealAnimation";
import html5Logo from '../../assets/html-5.png';
import cssLogo from '../../assets/css.png'; // Adjust the path based on your project structure
import jsLogo from '../../assets/js.png';
import typescript from '../../assets/typescript.png';
import reactjs from '../../assets/science.png';
import github from '../../assets/github.png';
import gitlab from '../../assets/gitlab.png';
import figma from '../../assets/figma.png';



const modelSrc = "https://models.readyplayer.me/64c7b1af067a35dfd8b3de7f.glb";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const revealIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const revealOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(101%);
  }
`;

const RevealContainer = styled.div`
  position: relative;
  overflow: hidden;
  & > * {
    animation: ${fadeIn} 0s 0.6s;
    animation-fill-mode: backwards;
  }
  &.animate::after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    transform: translateX(-100%);
    animation: ${revealIn} 0.6s 0s, ${revealOut} 0.6s 0.6s;
    animation-fill-mode: forwards;
  }
`;

function About() {
  const aboutRef = useRef(null); // Create a ref for the ABOUT-ME section
  const paragraphRef = useRef(null); // Create a ref for the paragraph

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === aboutRef.current) {
            aboutRef.current.classList.add("animate");
          } else if (entry.target === paragraphRef.current) {
            paragraphRef.current.classList.add("animate");
          }
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
      if (paragraphRef.current) {
        observer.unobserve(paragraphRef.current);
      }
    };
  }, []);

  const canvas3DRef = useRef(null); // Create a ref for the 3D canvas

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
    };

    if (canvas3DRef.current) {
      canvas3DRef.current.addEventListener("wheel", handleWheel);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      if (canvas3DRef.current) {
        canvas3DRef.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);
  return (
    <section id="About-section">
      <div className="container">
        <div className="container-1">
          <div className="avatar-3D">
            <div className="icon-container-profile">
              <div className="icon-profile">
                <a href="https://github.com/jamessuw">
                  <img
                    className="github-logo-icon"
                    src="github-logo-icon.png"
                  ></img>
                </a>
              </div>
              <div className="icon-profile">
                <a href="https://www.linkedin.com/in/jamessuryawijaya/">
                  <img
                    className="linkedin-logo-icon"
                    src="linkedin-logo-icon.png"
                  ></img>
                </a>
              </div>
            </div>

            <Canvas
              camera={{ position: [2, 0, 12.25], fov: 15 }}
              style={{
                backgroundColor: "transparent",
                width: "100%",
                height: "100vh",
                id: "canvaId",
                pointerEvents: "none", // Allow scroll events to pass through the canvas
              }}
              ref={canvas3DRef} // Add the canvas3DRef here
            >
              <ambientLight intensity={0.8} />
              <ambientLight intensity={1.1} />
              <directionalLight
                intensity={1.2}
                shadow-camera-far={30}
                shadow-camera-bottom={10}
                shadow-camrea={true}
                color="#FFFFFF"
                shadow-radius={5}
                castShadow
                shadow-mapSize-height={512}
                shadow-mapSize-width={512}
              />
              <Suspense fallback={null}>
                <pointLight
                  castShadow
                  intensity={0.2}
                  args={[0xff0000, 1, 100]}
                  position={[1, 1, 1]}
                />
                <spotLight
                  castShadow
                  intensity={5.5}
                  args={["pink", 1, 100]}
                  position={[-1, 1, 1]}
                  distance={10}
                />
                <Model position={[0.025, -0.9, 0]} /> /* highlight-line */
              </Suspense>
              <OrbitControls autoRotate={false} enableZoom={false} />
            </Canvas>
          </div>
        </div>
        <div className="container-1">
          <div className="text-container">
            <span className="about-text">
              <RevealContainer ref={aboutRef}>
                <h1>ABOUT-ME</h1>
              </RevealContainer>
              <div>
                <img src="varified.png"></img>
              </div>
            </span>

            <RevealContainer ref={paragraphRef}>
              <p>
                Hi, Thank you for visiting my profile! I'm a Front-end Developer
                that passionate about Innovative technology. I always
                Incorporate my creativity into my work. For the past few years,
                I have helped businesses and individuals to achieve functional
                aesthetic websites. I'm fortunate to be able to work with
                amazing clients and companies that use Innovative technology.
              </p>
            </RevealContainer>

            <div className="skills-container">
            
              <span className="skills-pill"><img src={html5Logo} alt="HTML5 Logo" /></span>{" "}
              <span className="skills-pill">  <img src={cssLogo} alt="CSS Logo" /></span>{" "}
              <span className="skills-pill"> <img src={jsLogo} alt="JS Logo" /></span>{" "}
              <span className="skills-pill"> <img src={typescript} alt="Typescript Logo" /></span>{" "}
              <span className="skills-pill"> <img src={reactjs} alt="react Logo" /></span>{" "}
              <span className="skills-pill"> <img src={github} alt="github Logo" /></span>{" "}
              <span className="skills-pill"> <img src={gitlab} alt="git lab Logo" /></span>{" "}
              <span className="skills-pill"> <img src={figma} alt="figma Logo" /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
