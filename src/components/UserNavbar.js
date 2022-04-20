
import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function UserNavbar() {
  return (
    <div>
    <Navbar bg="light" variant="light">
  <Container>
  <Navbar.Brand href="#home">FootBallLeauge</Navbar.Brand>
  <Nav className="mr-auto">
  <Link to="/home" className='nav-link'>Home</Link> 
    <Link to="/Event" className='nav-link'>Event</Link>
    <Link to="/ViewEvent" className='nav-link'>ViewEvents</Link>
    <Link to="/About" className='nav-link'>About</Link>
    <Link to="/logout" className='nav-link'>Logout</Link>
  </Nav>
  </Container>
</Navbar>
</div>
  )
}

export default UserNavbar;