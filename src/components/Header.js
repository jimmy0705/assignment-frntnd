import React,{useState} from 'react';


import { Button,Navbar,Form,InputGroup,FormControl,Nav,NavDropdown,Container } from 'react-bootstrap';

import './common.css'


function Header() {
 
 
  

  return (
    <div className="header-area ">
      <Navbar expand="lg" >
  <Container>
    <Navbar.Brand href="#"><img className="fluid" src={require('./logo1.svg')}/></Navbar.Brand>

    <nav className="mr-auto">
    <Nav.Link style={{color:"black"}} href="#">Browse Room Designs</Nav.Link>
    </nav>

    <div>
    <Nav className="ml-auto">
     
      {/* <Nav.Link href="#link">How to</Nav.Link> */}
      <NavDropdown title="How To" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      </NavDropdown>
       
      <Nav.Link href="#home">My Home</Nav.Link>

    </Nav>
    </div>
  </Container>
</Navbar>


    </div>
  );
}

export default Header;
