
import './nav.css'


import {
  Collapse,
  Navbar,
  NavbarToggler,
// NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import React,{useState } from 'react';
// sample with useState

const NavMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="container" dark expand="md">
        <div className="container" id="Nav-container">

        <div className='circle-nav'></div><span className='tag-nav'><h6><br></br>DEVELOP IN JUNE 1, 2023<br></br>CURRENTLY BASE IN MELBOURNE <br></br> 37.8136° S, 144.9631° E</h6></span>
        </div>

        <NavbarToggler onClick={toggle} />
        <Collapse className="justify-content-end" isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className='Nav-Link' href="/">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='Nav-Link'  href="/desktop">
                Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='Nav-Link'  href="/login">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='Nav-Link'  href="/register">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavMenu;