import React from 'react';
import './project.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import etome from '../../assets/1.png';
import meetbowl from '../../assets/4.png';
import unleashhealth from '../../assets/2.png';
import ClearDynamics from '../../assets/3.png';
import kumala from '../../assets/5.png';

function Project() {
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
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
      xPercent: -70,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.box2',
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
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const cardsData = [
    {
      id: 1,
      title: 'Card 1',
      description: 'This is the description for Card 1.',
      image: etome,
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'This is the description for Card 2.',
      image: unleashhealth,
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'This is the description for Card 3.',
      image: ClearDynamics,
    },
    {
      id: 4,
      title: 'Card 4',
      description: 'This is the description for Card 3.',
      image: meetbowl,
    },
    {
      id: 5,
      title: 'Card 5',
      description: 'This is the description for Card 3.',
      image: kumala,
    },
  ];

  const Card = ({ title, description, image }) => {
    return (
      <div className="card">
        <img src={image} alt={title} />
        <div className="card-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="project-section-container">
      <div data-speed="0.5" className="box1">
        <h1>PROJECT</h1>
      </div>
      <div data-speed="0.5" className="box2">
        <h2>ARCHIVE</h2>
      </div>
      <span className="text-project">
        <p>
          This project section showcases my dedication to creating a solution
          <br></br> that simplifies the complexities of projects. The following
          project that ive <br></br>showcases are selected
        </p>
      </span>
      <div className="container-pro">
        <div className="container-1">
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="transform 300ms ease-in-out"
            transitionDuration={300}
            containerClass="carousel-container"
           
            deviceType="desktop"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            
          >
            {cardsData.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Project;