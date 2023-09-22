import React, { useEffect, useRef } from "react";

const RevealAnimation = ({ children }) => {
  const revealElements = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal__content");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    revealElements.current.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <div className="reveal" ref={(el) => revealElements.current.push(el)}>
      {children}
    </div>
  );
};

export default RevealAnimation;
