import React, { useState,useEffect } from 'react'
import './project.css'
// import Popup from 'reactjs-popup';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



function Project() {


  gsap.registerPlugin(ScrollTrigger);

  let container = document.getElementById("project-section-container");

  useEffect(() => {
    gsap.to('.box1', {
      xPercent: 30,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.box1',
        pin: false,
        scrub: 1,
        snap: false,
      },
    });

    gsap.to('.box2', {
      xPercent: -65,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.box2', // Change trigger to '.box2'
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
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  return (
  

    
    <section id='project-section-container'>

      <div data-speed="0.5" className='box1'><h1>PROJECT</h1></div>
     <div data-speed="0.5" className='box2'><h2>ARC`HIVE</h2></div> 

     <Carousel responsive={responsive} containerClass="carousel-container"  infinite={true}>
  <div><div><img src='/KumalaJingga.png'></img></div><div><h3>KumalaJingga</h3><h4>2019-2020</h4><p>Web Development service that provide Industrial needs</p></div></div>
  <div><div><img src='/CD.png'></img></div><div><h3>KumalaJingga</h3><h4>2019-2020</h4><p>Web Development service that provide Industrial needs</p></div></div>
  <div><div><img src='/meetbowl.png'></img></div><div><h3>KumalaJingga</h3><h4>2019-2020</h4><p>Web Development service that provide Industrial needs</p></div></div>
  <div><div><img src='/etome.png'></img></div><div><h3>KumalaJingga</h3><h4>2019-2020</h4><p>Web Development service that provide Industrial needs</p></div></div>
</Carousel>;

   
      
    </section>



    
  )
}

export default Project
