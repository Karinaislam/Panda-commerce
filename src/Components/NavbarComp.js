import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import {  Nav} from 'react-bootstrap';
import logo from "../logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function NavbarComp() {
  return (
    <div>
     
      <div className="container">
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">
  <img  src={logo}  alt="fireSpot"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Shoe</Nav.Link>
      <Nav.Link href="#link">Backpack</Nav.Link>
      <Nav.Link href="#link">Contact Us</Nav.Link>
      <Nav.Link href="#link">
      <FontAwesomeIcon className="cartIcon" icon={faShoppingCart} />
      </Nav.Link>
      
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
      </div>
    </div>
  )
}
