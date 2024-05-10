import React, { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import etome from '../../assets/1.png';
import meetbowl from '../../assets/4.png';
import unleashhealth from '../../assets/2.png';
import ClearDynamics from '../../assets/3.png';
import kumala from '../../assets/5.png';
import './project.css';

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    id: 1,
    title: 'Etome',
    description: '',
    image: etome,
  },
  {
    id: 2,
    title: 'Unleash Health',
    description: '',
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
    description: 'Website, custom coded Themes',
    image: meetbowl,
  },
  {
    id: 5,
    title: 'PT.KumalaJingga',
    description: 'Web Dev, Company portfolio',
    image: kumala,
  },
];

const Card = ({ title, description, image, onMouseEnter }) => (
  <div className="card" onMouseEnter={onMouseEnter}>
    <div className="card-content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

function Project() {
  const [hoveredImage, setHoveredImage] = useState(null);

  React.useEffect(() => {
    gsap.to('.box1', {
      xPercent: 30,
      ease: 'power1.inOut',
      scrollTrigger: { trigger: '.box1', pin: false, scrub: 1, snap: false },
    });

    gsap.to('.box2', {
      xPercent: -70,
      ease: 'power1.inOut',
      scrollTrigger: { trigger: '.box2', pin: false, scrub: 1, snap: false },
    });
  }, []);

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
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
          <br /> that simplifies the complexities of projects. The following
          projects that I've
          <br /> showcased are selected.
        </p>
      </span>
      <div className="container-pro">
        <div className="container-1">
          {cardsData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
              onMouseEnter={() => handleMouseEnter(card.image)}
            />
          ))}
        </div>
        <div className="container-2">
          {hoveredImage && <img src={hoveredImage} alt="Hovered Image" style={{ maxWidth: '100%' }} />}
        </div>
      </div>
    </section>
  );
}

export default Project;
