import "./nav.css";
import RevealAnimation from "../Animation/RevealAnimation";


import {
  Collapse,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import React, { useState, useEffect } from "react";
// sample with useState
import { motion, AnimatePresence } from "framer-motion";






const NavMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  


  

  return (

 <div>
     <RevealAnimation>  
     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

      <Navbar className="container" dark expand="md">

        
        <div className="container" id="Nav-container">
               
  <div className="circle-nav"></div>
          <span className="tag-nav">


            <span class="heading block-reveal">
              <span className="block-reveal">
                <h6>
                  <br></br>DEVELOP IN JUNE 1, 2023<br></br>CURRENTLY BASE IN
                  MELBOURNE <br></br> 37.8136° S, 144.9631° E
                </h6>
              </span>
            </span>
          </span>
        </div>
        

      

       <NavbarToggler onClick={toggle} />
       <Collapse className="justify-content-end nav-collapse" isOpen={isOpen} navbar>

       <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="Nav-Link" href="#About-section">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Nav-Link" href="#project-section-container">
                Project
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Nav-Link" href="#lab-section">
                Lab
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Nav-Link" href="#contact-section">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </motion.div>
    </RevealAnimation>  
    </div>
  );
};

export default NavMenu;
