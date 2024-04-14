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
      title: 'Etome',
      description: 'Etome is an Clothing brand that focused on the sustainable Material. Throught this project I have a chance to work with incradable brand that need of e-commerce website. So, me and the etome team collborate for the web design. After it being finished Ive build e-commerce Website for etome and althred and custome their web theme.Using Technologies such as SCSS, HTML, Liquid, and Javascript.',
      image: etome,
    },
    {
      id: 2,
      title: 'Unleash Health',
      description: 'Unleash Health is a Global Heath Prevention. In this project i have a chance to work with amazing people and high skilled teams. I work closely with Ramin and Sebatian, To develop an app that would introduce World golbal helath prevention. I responsibility is to develop and maintain their software and Website. The technology that i used is HTML, CSS, Ruby.js, Tailwind, Git, and Wordpress ',
      image: unleashhealth,
    },
    {
      id: 3,
      title: 'Clear Dynamics',
      description: 'This is the description for Card 3.',
      image: ClearDynamics,
    },
    {
      id: 4,
      title: 'Meetbowl',
      description: 'Meetbowl is an Indonesia Restaurant that located in South Melbourne. The Idea is to introduce Melbourne to one of the famouse Indonesian Cuisin called Bakso to Melbourne. I came out the Idea to develop a Webiste to expose their brand to digital World. I develop their Web Prototyped and work closely with their owner to ensure that the brand and the website are align. The Technology that I used are HTML, CSS, and Javascript. Furtheremore, to extend my service I do some basic SEO To make thair website rank nuber 1 on google.',
      image: meetbowl,
    },
    {
      id: 5,
      title: 'PT.KumalaJingga',
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