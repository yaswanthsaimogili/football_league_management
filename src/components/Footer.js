import React from 'react'
import {Row,Box} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding  ,faPhone ,faEnvelope, faLocationArrow} from '@fortawesome/free-solid-svg-icons'
function Footer() {
  return (
    <div className='footer'  style={{background:"linear-gradient(90deg, rgba(12,237,26,1) 0%, rgba(115,223,10,1) 22%, rgba(39,249,5,1) 70%, rgba(0,212,255,1) 100%)"}}>
    <nav >
    <Row xs={1}  md={4}>
     <div class="clm1" style={{paddingRight:"100px",paddingLeft:"100px"}} >
    <h3> About</h3> 
     <br/>
     <p>  This is the Admin portal of Football League Management .</p>
    </div>
    <div class="clm" style={{paddingRight:"100px"}}>
    <h3> Social Media</h3>
    <ul >
    <li  >Facebook</li>
    <li> Instagram</li>
    <li> Twitter</li>
    <li> LinkedIn</li>
    </ul> 
    </div>
    <div class="clm"  style={{paddingRight:"100px"}}>
<h3> Contact :</h3>
<p><FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon> FootBallLeauge.com <br/><FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon> Ayyappa Nagar ,Main Road <br/> Vijayawada-52007 <br/><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> +91 124567996 <br/><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> helpdesk@gmail.com</p> 
</div>
<div class="clm"  >
<h3>Company</h3>
</div>
</Row></nav>
</div>
  )
}

export default Footer;