import React, { useState,useEffect } from 'react'
import './project.css'
// import Popup from 'reactjs-popup';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";




function Project() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [unhoveredItemImage, setUnhoveredItemImage] = useState(null);


  const handleMouseEnter = (itemName) => {
    setHoveredItem(itemName);
    setUnhoveredItemImage(null);
  };

  const handleMouseLeave = (itemName) => {
    setHoveredItem(null);
    if (itemName === '') {
      // Keep "KumalaJingga" image displayed when unhovered
    } else {
      setUnhoveredItemImage(itemName);
      console.log(`${itemName} unhovered`);
    }
  };


  const projectItems = [
    {
      name: "KumalaJingga",
      imageSrc: "kumalajingga.png",
      text: "KumalaJingga is an Industrial supply company that supplied industry needs. The service that I collaborate with them are developing a website using Wordpress, This also include injecting custome code and custom plugin to the website for optimisations needs",
      tech:"Wordpress",
      service:"Web Development",
      location:"Indonesia",

    },
    {
      name:"ClearDynamics",
      imageSrc:"CD.png",
      text:"",
      service:"Contract",
      location:"Melbourne",
      tech:"Professionals"
  },
    {
      name: "Meetbowl",
      imageSrc: "meetbowl.png",
      text: "",
      tech:"SquareSpace",
      service:"Web Development",
      location:"Melbourne"
    },
    {
      name: "etome",
      imageSrc: "etome.png",
      text: "",
      tech:"Shopify",
      service:"Web Development",
      location:"Indonesia",
     

    },

    // Add more project items here

    
  ];
  useEffect(() => {
    setUnhoveredItemImage(projectItems[0].imageSrc);
  }, []);

  

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


  return (
  

    
    <section id='project-section-container'>

      <div data-speed="0.5" className='box1'><h1>PROJECT</h1></div>
     <div data-speed="0.5" className='box2'><h2>ARC`HIVE</h2></div> 

      <div className='container' id='project-section'>
      {/* list container descriptions*/}
      <div className='container-1'>

        {projectItems.map((item) => (
          <div
            key={item.name}
            className='project-container'
            onMouseEnter={() => handleMouseEnter(item.name)}
            onMouseLeave={() => handleMouseLeave (item.name)}
          >
            <div className='list-text'>
              <h4>{item.name}</h4>   
              
            </div>
          </div>
        ))}
        </div>

    {/* Image container -project */}
    

    <div className='container-1'>
      
        {projectItems.map((item) => (
          <div
            key={item.name}
            className='image-container'
          >
            {(hoveredItem === item.name || unhoveredItemImage === item.name) && (
              <div className='hovered-item'>
            <img
                    className='img-project'
                    src={
                      hoveredItem === item.name
                        ? item.hoverImageSrc || item.imageSrc
                        : unhoveredItemImage === item.name
                        ? item.imageSrc
                        : null
                    }
                    alt={item.name}
                  />

               <span className=''><p>{item.text}</p></span> 
              </div>
            )}
          </div>
          
        ))}
      </div>
      
      {/* ... */}
      
      
      </div>
      
    </section>



    
  )
}

export default Project
