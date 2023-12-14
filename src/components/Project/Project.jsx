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
      xPercent: -70,
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
    date: '2022',
    description:
      'KumalaJingga is an esteemed industrial supply company headquartered in Indonesia. The organization sought to enhance its digital footprint and online presence. I successfully revamped their website, ensuring effortless maintenance by leveraging WordPress as the core platform. The website was meticulously crafted using cutting-edge technologies including HTML5, CSS, JavaScript, and PHP.',
      service:'WebDev',
      location:'Indonesia',
      tech:'Wordpress'
  },
  {
    imgSrc: '/CD.png',
    projectName: 'ClearDynamics',
    date: '2021-2022',
    description:'Clear Dynamics stands as a pioneering software company renowned for delivering unparalleled business solutions through state-of-the-art technology integration, including advanced AI implementations. I had the privilege of serving as their Frontend Developer, overseeing a multitude of projects, including the development of their \'About Us\' website page.',
      service:'Professionals',
      location:'Australia',
      tech:'Front-end',
  },
  {
    imgSrc: '/meetbowl.png',
    projectName: 'MeetBowl',
    date: '2021',
    description:'MEETBOWL is an Indonesian restaurant located in Melbourne, Australia, aiming to introduce authentic Indonesian cuisine to the local community. I was tasked with enhancing their online presence. Through the strategic integration of JavaScript, HTML, and CSS code, I created a tailored user interface Squarespace and implemented a seamless system connecting the restaurant with a food delivery application. Additionally, I implemented fundamental SEO practices to optimize their \'website\'s  visibility and ranking on Google.',
      service:'WebDev',
      location:'Australia',
      tech:'SquareSpace'
    },
  {
    imgSrc: '/etome.png',
    projectName: 'Etome',
    date: '2020',
    description:'Etome is a distinguished clothing brand dedicated to utilizing sustainable materials sourced from Indonesia. I had the privilege of working closely with the \'brand\'s owner, who envisioned a website emphasizing unique designs and showcasing their environmentally conscious materials. Employing Shopify as the foundation, I meticulously developed the website, utilizing custom code implemented through Liquid, CSS, HTML, and Ruby. I tailored their theme and crafted a bespoke user interface, enhancing the overall aesthetic and functionality of their online platform.',
      service:'WebDev',
      location:'Indonesia',
      tech:'Shopify'

    },
];

  return (
    <section id="project-section-container">
      
        <div data-speed="0.5" className="box1">
        <h1>PROJECT</h1>
      </div>
      <div data-speed="0.5" className="box2">
        <h2>ARC`HIVE</h2>
      </div>
    <span className="text-project"><p>This project section showcases my dedication to creating a solution<br></br> that simplifies the complexities of projects. The following project that ive <br></br>showcases are selected</p></span>
      <div className="container-pro">

<div className="container-1"> 
<div className="list-container">
  <ul>
    <li><h2>MEETBOWL</h2></li>
    <li><h2>ETOME</h2></li>
  </ul>
</div>

</div>

<div className="container-1">
  <div className="image-container">
<img></img>
</div>
</div>


</div>
    </section>
  );
}

export default Project;
