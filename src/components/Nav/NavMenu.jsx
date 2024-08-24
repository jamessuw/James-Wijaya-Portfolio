import "./nav.css";
import RevealAnimation from "../Animation/RevealAnimation";
import logo from '../../assets/logo-port.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import React, { useState } from "react";
import { motion } from "framer-motion";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleLabClick = (e) => {
    e.preventDefault(); // Prevent the default behavior of the link
    window.alert("Coming soon! :)");
  };

  return (
    <div>
      <RevealAnimation>  
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Navbar className="container" dark expand="md">
            <div className="container" id="Nav-container">
              <div className="circle-nav">
                <img src={logo} alt="Logo" />
              </div>
              <span className="tag-nav">
                <span className="heading block-reveal">
                  <span className="block-reveal">
                    <h6>
                      <br /> DEVELOP IN JUNE 1, 2023
                      <br /> CURRENTLY BASED IN MELBOURNE
                      <br /> 37.8136° S, 144.9631° E
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
                  {/* Lab link with click handler */}
                  <NavLink className="Nav-Link" href="#lab-section" onClick={handleLabClick}>
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
