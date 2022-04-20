import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap';
import {  Link } from "react-router-dom";
import "./style.css"
function AdminNavbar() {
  return (
    <div>
      <Navbar bg="light" style={{background:"linear-gradient(90deg, rgba(12,237,26,1) 0%, rgba(115,223,10,1) 22%, rgba(39,249,5,1) 70%, rgba(0,212,255,1) 100%)"}}>
    <Container>
    <Navbar.Brand href="#home">FootBallLeauge</Navbar.Brand>
    <Nav className="mr-auto" >
    <Link to="/home" className='nav-link'>Home</Link> 
      <Link to="/teams" className='nav-link'>Teams</Link>
      <Link to="/venue" className='nav-link'>Venues</Link>
      <Link to="/refree" className='nav-link'>Refrees</Link>
      <Link to="/About" className='nav-link'>About</Link>
      <Link to="/logout" className='nav-link'>Logout</Link>
    </Nav>
    </Container>
  </Navbar>
  </div>
  )
}

export default AdminNavbar