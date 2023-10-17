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
import Loading from './components/Loading/Loading';

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
    // Simulate an API call or any async operation
    setTimeout(() => {
      setLoading(false); // Set loading to false after the data is loaded
    }, 2000); // Simulated loading time: 2 seconds
  }, []); // Empty dependency array ensures useEffect runs once after initial render




useEffect(() => {
    if (!loading) {
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
              start: 'top top',
              end: () => `+=${panelHeight + window.innerHeight}`, // Adjust the end point
              onUpdate: self => console.log('progress:', self.progress),
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
    }
  }, [loading]);



  return (
    <div className={`App ${loading ? 'loading' : ''}`}>
    <Loading active={loading} />
    {!loading && (
      <>
        <NavMenu />
        <div className="panel">
          <Landing />
        </div>
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
    )}
  </div>
);
}

export default App;
