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
import { useEffect } from 'react';
import Project2 from './components/Project2/Project2';



gsap.registerPlugin(ScrollTrigger);

function App() {
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
    <>
      {/* <ParticleComp/> */}
      <div className="smooth-scroll-target">
      <NavMenu/>
    <section class="panel">
    <Landing/>
    </section>
    <section class="panel">
     <About/>
    </section>
    <section className='panel'>
    <Project/>
    </section>
    <section className='panel'>
    <Project2/>
    </section>

    <section class="panel">
    <Lab/>
   </section>
    <section class="panel">
    <Contact/>
   </section>
   </div>
      </>

);
}

export default App;
