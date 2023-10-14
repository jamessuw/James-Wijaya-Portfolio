import './App.css';
import NavMenu from "./components/Nav/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
// import ParticleComp from './components/Particle/ParticleComp';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Lab from './components/Lab/Lab';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState,CSSProperties } from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  marginTop:"25%",
  borderRadius:"0%",
  width:"200px"
  


};




function App() {
 
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    // Simulate loading for 5 seconds
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
 gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
   
    const mediaQueryHandler = () => {
      const sections = gsap.utils.toArray('.panel');
  
      ScrollTrigger.config({
        ignoreMobileResize: true,
      });
  
      sections.forEach((panel, i) => {
        const panelHeight = panel.clientHeight;
  
        gsap.to(panel, {
          scrollTrigger: {
            trigger: panel,
            scrub: 2,
            pin: true,
            pinSpacing: false,
            start: "top top",
            end: () => `+=${panelHeight + window.innerHeight}`, // Adjust the end point
            onUpdate: self => console.log("progress:", self.progress),
          },
        });
      });
    };
  
    const mm = window.matchMedia('(min-width: 800px)');

    if (mm.matches) {
      mediaQueryHandler();
    }

    const mediaQueryListener = (event) => {
      if (event.matches) {
        mediaQueryHandler();
      } else {
        // Optional: Custom cleanup code here (runs when it stops matching)
      }
    };

    mm.addListener(mediaQueryListener);

    return () => {
      mm.removeListener(mediaQueryListener);
    };
  }, []);


  

  ScrollTrigger.config({ 
    ignoreMobileResize: true
  });
  


  return (

  <div className="smooth-scroll-target">
        <>
          <NavMenu />
          <section className="panel">
            <Landing />
          </section>
          <section className="panel">
            <About />
          </section>
          <section className='panel'>
            <Project />
          </section>
          <section className="panel">
            <Lab />
          </section>
          <section className="panel">
            <Contact />
          </section>
        </>
   
    </div>
  );
}

export default App;
