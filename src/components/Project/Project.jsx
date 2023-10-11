import React, { useState, useEffect } from "react";
import "./project.css";
// import Popup from 'reactjs-popup';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Project() {
  gsap.registerPlugin(ScrollTrigger);

  let container = document.getElementById("project-section-container");

  useEffect(() => {
    gsap.to(".box1", {
      xPercent: 30,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".box1",
        pin: false,
        scrub: 1,
        snap: false,
      },
    });

    gsap.to(".box2", {
      xPercent: -65,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".box2", // Change trigger to '.box2'
        pin: false,
        scrub: 1,
        snap: false,
      },
    });
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  
const projects = [
  {
    imgSrc: '/KumalaJingga.png',
    projectName: 'KumalaJingga',
    date: '2019-2020',
    description:
      'Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter.',
      service:'WebDev',
      location:'Indonesia',
      tech:'Wordpress'
  },
  {
    imgSrc: '/CD.png',
    projectName: 'ClearDynamics',
    date: '2019-2020',
    description:
      'Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter.',
      service:'Professionals',
      location:'Australia',
      tech:'Front-end',
  },
  {
    imgSrc: '/meetbowl.png',
    projectName: 'MeetBowl',
    date: '2019-2020',
    description:
      'Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter.',
      service:'WebDev',
      location:'Australia',
      tech:'SquareSpace'
    },
  {
    imgSrc: '/etome.png',
    projectName: 'Etome',
    date: '2019-2020',
    description:
      'Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter.',
      service:'WebDev',
      location:'Indonesia',
      tech:'Shopify'

    },
];

  return (
    <section id="project-section-container">
      <div className="container-1">
      <div data-speed="0.5" className="box1">
        <h1>PROJECT</h1>
      </div>
      <div data-speed="0.5" className="box2">
        <h2>ARC`HIVE</h2>
      </div>
      <Carousel responsive={responsive} containerClass="carousel-container" infinite={true}>
  {projects.map((project, index) => (
    <div key={index} className="project-list-container">
      {/* Wrap each project inside a separate div */}
      <div className="img-project-conatiner">
        <img className="img-project" src={project.imgSrc} alt={`Project ${index}`} />
      </div> 
      <span className="heading-project-ul"><h3>{project.projectName}</h3></span>
      <span className="line"></span>
      <div className="desc-container">
        <div className="pill-container">
       <div className="pill">{project.service}</div>
       <div className="pill">{project.location}</div>
       <div className="pill">{project.tech}</div>
       
       </div>
        <span className="project-date"><h4>{project.date}</h4></span>
        <p>{project.description}</p>
      </div>
    </div>
  ))}
</Carousel></div>
    </section>
  );
}

export default Project;
