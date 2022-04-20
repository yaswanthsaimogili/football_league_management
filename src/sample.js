import React, { useState,useEffect } from 'react'
import {Card,Row,Container,Button} from'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSearch, faTrash ,faUserPlus} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import hoc from './hoc';

function Teams() {
  const [data,setData]=useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  

  useEffect(()=>{
    axios.get("http://localhost:8080/getall").then(response => setData(response.data))
    console.log(data);
    
  },[])

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
        const filteredData = data.filter((item) => {
            console.log(Object.values(item).join('').toLowerCase());
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(data)
    }
}

  const deleteTeam = (teamName,teamId) =>
  {
    axios.delete("http://localhost:8080/delete/"+teamId).then(response => {
          alert("Team "+ teamName+" is deleted successfully"); 
          setData(data.filter(data => data.teamId !== teamId));
  }
  )

}

    return (
      <Container style={{marginBottom:"100px"}}>
         <div class="input-group" style={{  margin: '15px 10px 10px'}}>
         
                <input type="search"  class="form-control rounded" placeholder="Search Teams" icon={faSearch}  aria-label="Search" aria-describedby="search-addon"  onChange={(e) => searchItems(e.target.value)}/>
                <Button id= "addTeam" style={{marginLeft:"20px"}}><FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>AddTeam</Button>
            </div>
    

      <>
      <div style={{marginBottom:"100px"}}>
      <Row xs={1} md={4} className="g-2" > 
      
{searchInput.length > 1 ? (
    filteredResults.map((item) => {
        return (
          <Card style={{ width: '23rem' ,  margin: '15px 10px 10px' }} key={item.id}>
          <Card.Img variant="top" src={item.teamImage} />
          <Card.Body>
          <h5 className="card-text"> TeamName: {item.teamName} </h5>
          <h5 className="card-text"> TeamLocation: {item.teamLocation} </h5>
          <h5 className="card-text"> TeamMeMembers: {item.teamSize} </h5>
            <button type="button" className="btn btn-primary" style={{marginRight:"20px"}}><FontAwesomeIcon icon={faEdit} />Edit</button>
          <button type="button" className="btn btn-primary" onClick={() => deleteTeam(item.teamName,item.teamId)}><FontAwesomeIcon icon={faTrash} />Delete</button>
          </Card.Body>
        </Card>
        )
    })
) : (
      data.map( item => 
  <Card style={{ width: '23rem' ,  margin: '15px 10px 10px' }} key={item.id}>
    <Card.Img variant="top" src={item.teamImage} />
    <Card.Body>
    <h5 className="card-text"> TeamName: {item.teamName} </h5>
    <h5 className="card-text"> TeamLocation: {item.teamLocation} </h5>
    <h5 className="card-text"> TeamMeMembers: {item.teamSize} </h5>
      <button type="button" className="btn btn-primary" style={{marginRight:"20px"}}><FontAwesomeIcon icon={faEdit} />Edit</button>
    <button type="button" className="btn btn-primary" onClick={() => deleteTeam(item.teamName,item.teamId)}><FontAwesomeIcon icon={faTrash} />Delete</button>
    </Card.Body>
  </Card>
      ))}

      </Row>
  </div>
  </>    
  </Container> 
    );
}
export default hoc(Teams) ;













import React from 'react'
import {Card,Row,Col,Container,Button} from'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash ,faUserPlus } from '@fortawesome/free-solid-svg-icons'

function AvailableVenue() {
  const mystyle={
    width:'20rem',
    marginRight:'25px'
  };
  return (

   <Container style={{marginBottom:"100px"}}>
       <div  align="Right" style={{  margin: '15px 50px 10px'}}>
          <Button id= "addTeam" ><FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>AddTeam</Button>
</div>
    <center>

   <Row xs={1} md={2} className="g-2" >
  {Array.from({ length: 6  }).map((_, idx) => (
    <Col>
<Card style={mystyle} >
  <Card.Img variant="top" src="https://gumlet.assettype.com/freepressjournal/2021-02/d03dfb9a-ed05-4519-9202-c3a9b0f9c476/21Mumbia.JPG?format=webp&w=300&dpr=2.6" />
  <Card.Body>
  <h5 class="card-text"> VenueName: Wankhade Stadium </h5>
	<h5 class="card-title"> Location: Mumbai -420004 </h5>
	<h5 class="card-title"> Venue Capacity: 5000  </h5>
	<h5 class="card-title">Venue description:<h6>The stadium now has a  capacity of 33,108 following renovations for the 2011 Cricket World Cup.Before the upgrade, the capacity was approximately 45,000. 
  </h6></h5>
    <button type="button" class="btn btn-primary" style={{marginRight:"20px"}}><FontAwesomeIcon icon={faEdit} />Edit</button>
	<button type="button" class="btn btn-primary"><FontAwesomeIcon icon={faTrash} />Delete</button>
  </Card.Body>
</Card>
</Col>
  ))}
</Row>
</center>
</Container>
      
  )

}

export default AvailableVenue;