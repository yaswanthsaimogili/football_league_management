import React, { useState,useEffect ,useContext} from 'react'
import {Card,Row,Container} from'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSearch, faTrash ,faUserPlus} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import {store} from "./components/Urls"
import {  Link } from "react-router-dom";




function Refree() {
  const[url,setUrl]=useContext(store);
  const [data,setData]=useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
    

  useEffect(()=>{
    axios.get(url+"/getRefrees").then(response => setData(response.data)).catch(function (error) {
      if (error.response) 
      {

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
  
    
  },[])


  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
        const filteredData = data.filter((item) => {
            console.log(Object.values([item.refreeLocation,item.refreeName,item.refreeExperience]).join('').toLowerCase());
            return Object.values([item.refreeLocation,item.refreeName,item.refreeExperience]).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(data)
    }
}
  const deleterefree = async (refreeName,refreeId) =>
  {
    await axios.delete(url+"/deleteRefree/"+refreeId).then(response => {
          alert("Refree "+ refreeName+" is deleted successfully"); 
          setData(data.filter(data => data.refreeId !== refreeId));
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
  
        
                <input type="search"  class="form-control rounded" placeholder="Search refrees" icon={faSearch}  aria-label="Search" aria-describedby="search-addon"  onChange={(e) => searchItems(e.target.value)}/>
                <Link to="/addRefree" className="btn btn-primary" style={{marginLeft:"20px"}}><FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>Addrefree</Link>
            </div>
    

      <>
      
      <div style={{marginBottom:"100px"}}>
      <Row xs={1} md={4} className="g-2" > 
{searchInput.length > 1 ? (
    filteredResults.map((item) => {
        return (
          <Card style={{ width: '23rem' ,  margin: '15px 10px 10px' }} key={item.id}>
          <Card.Img variant="top" src={item.refreeImage} />
          <Card.Body>
          
          <h5 className="card-text"> refreeName: {item.refreeName} </h5>
          <h5 className="card-text"> refreeLocation: {item.refreeLocation} </h5>
          <h5 className="card-text"> refreeExperience: {item.refreeExperience} </h5>
            <button type="button" className="btn btn-primary" style={{marginRight:"20px"}}><FontAwesomeIcon icon={faEdit} />Edit</button>
          <button type="button" className="btn btn-primary" onClick={() => deleterefree(item.refreeName,item.refreeId)}><FontAwesomeIcon icon={faTrash} />Delete</button>
          </Card.Body>
        </Card>
        )
    })
) : (
      data.map( item => 
  <Card style={{ width: '23rem' ,  margin: '15px 10px 10px' }} key={item.id}>
    <Card.Img variant="top" src={item.refreeImage} />
    <Card.Body>
  
    <h5 className="card-text"> refreeName: {item.refreeName} </h5>
    <h5 className="card-text"> refreeLocation: {item.refreeLocation} </h5>
    <h5 className="card-text"> refreeExperience: {item.refreeExperience} </h5>
    <Link to={"/editRefree/"+item.refreeId} className="btn btn-primary" style={{marginRight:"20px"}} ><FontAwesomeIcon icon={faEdit} />Edit</Link>
    <button type="button" className="btn btn-primary" onClick={() => deleterefree(item.refreeName,item.refreeId)}><FontAwesomeIcon icon={faTrash} />Delete</button>
    </Card.Body>
  </Card>
      ))}

      </Row>
  </div>
  </>    
  </Container> 
   
  )
}

export default Refree