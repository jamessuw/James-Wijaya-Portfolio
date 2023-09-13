import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

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
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    transform: translateX(-100%);
    animation: ${({ animationIn, animationOut }) => animationIn} 0.6s 0s,
      ${({ animationIn, animationOut }) => animationOut} 0.6s 0.6s;
    animation-fill-mode: forwards;
  }
`;

const RevealAnimation = ({ animationIn, animationOut }) => {
  const revealRef = useRef(null);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        revealRef.current.classList.add('animate');
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (revealRef.current) {
      observer.observe(revealRef.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (revealRef.current) {
        observer.unobserve(revealRef.current);
      }
    };
  }, []);

  return (
    <RevealContainer ref={revealRef} animationIn={animationIn} animationOut={animationOut}>
   <p>
                Hi, Thank you for visiting my profile! I'm a Front-end Developer
                that passionate about Innovative technology. I always
                Incorporate my creativity into my work. For the past few years,
                I have helped businesses and individuals to achieve functional
                aesthetic websites. I'm fortunate to be able to work with
                amazing clients and companies that use Innovative technology.
              </p>
    </RevealContainer>
  );
};

export default RevealAnimation;
