import React, { useState,useEffect ,useContext} from 'react'
import {Card,Row,Container} from'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSearch, faTrash ,faUserPlus} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import {store} from "./components/Urls"
import {  Link } from "react-router-dom";



function Teams() {
  const[url,setUrl]=useContext(store);
  const [data,setData]=useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
    

  useEffect(()=>{
    axios.get(url+"/getTeams").then(response => setData(response.data)).catch(function (error) {
      if (error.response) {
        // Request made and server responded

        alert(error.response.data.message)
        
      } else if (error.request) {
        // The request was made but no response was received
        alert(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        alert('Error', error.message);
      }
  
  });
    console.log(data);
    
  },[])

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
        const filteredData = data.filter((item) => {
            console.log(Object.values([item.teamLocation,item.teamName,item.teamSize]).join('').toLowerCase());
            return Object.values([item.teamLocation,item.teamName,item.teamSize]).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(data)
    }
}
  const deleteTeam = async (teamName,teamId) =>
  {
    await axios.delete(url+"/deleteTeam/"+teamId).then(response => {
          alert("Team "+ teamName+" is deleted successfully"); 
          setData(data.filter(data => data.teamId !== teamId));
  }
  ).catch(function (error) {
    if (error.response) {
      // Request made and server responded

      alert(error.response.data.message)
      
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }

});

 

}

    return (
      <Container style={{marginBottom:"100px"}}>
         <div class="input-group" style={{  margin: '15px 10px 10px'}}>
        
                <input type="search"  class="form-control rounded" placeholder="Search Teams" icon={faSearch}  aria-label="Search" aria-describedby="search-addon"  onChange={(e) => searchItems(e.target.value)}/>
                <Link to="/addteam" className="btn btn-primary" style={{marginLeft:"20px"}}><FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>AddTeam</Link>
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
    <Link to={"/editTeam/"+item.teamId} className="btn btn-primary" style={{marginRight:"20px"}} ><FontAwesomeIcon icon={faEdit} />Edit</Link>
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
export default Teams ;