import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Form,Button} from "react-bootstrap"
import Venues from "./Venue";
function AddVenue(props) {
    const initialValues = {
        venueId:"",
        venueName: "",
        venueLocation: "",
        venueCapacity: "",
        venueImage: "",
        venueDescription: ""
      };
    
    
      const [formValues, setFormValues] = useState(initialValues);
      const [formErrors, setFormErrors] = useState({});
      const [isSubmit, setIsSubmit] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    
      };
    
      const handleSubmit = (e) => {
    
        e.preventDefault();
        setFormErrors(validate(formValues));
       
        axios({
            method: 'POST',
            url: 'http://localhost:8080/add',
            headers: {
                'Content-Type': 'application/json',
                    },
            data:formValues,
        })
        .then(response => {
            if(response.data != null)
            {
               setIsSubmit(true);
               setFormValues(initialValues);
                alert("Venue Saved Successfully");
                VenueList(); 
            }
        })
      };
    const history = useNavigate();
    const  VenueList = () => {
        return history("/venues");
    };

      const venueId = useParams();
      useEffect(()=>{ 
            if(venueId)
            {
                findVenueById(venueId);
            }
            
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]) 
      

      const handleUpdate = (e) => {
       e.preventDefault();
       console.log(venueId)
        axios.put(
            'http://localhost:8080/edit/'+formValues.venueId,
           formValues
        )
        .then(response => {
            if(response.data != null)
            {
               setIsSubmit(true);
               setFormValues(initialValues);
                
               alert("Venue updated Successfully");
               VenueList(); 
            }
        })
      };


    const  findVenueById = (venueId) =>{
     
        axios.get("http://localhost:8080/get/"+venueId.id).then(response => setFormValues(response.data))


      }
      


      let venueNameCheck =/^[A-Za-z]{3,30}$/;
      let venueLocationCheck =/^[A-Za-z]{3,30}$/;
      const validate = (values) => {
        const errors = {};
        if (!(values.venueName && venueNameCheck.test(values.venueName))) {
          errors.venueName = "venue Name should be atleast 3 characters!";
        }
        if (!values.imageUrl) {
          errors.imageUrl = "Image Url is required!";
        }
        if (!values.venueLocation && !venueLocationCheck.test(values.venueLocation)) {
			errors.venueLocation = "venue Location should be atleast 3 characters!";
		}
		if (values.venueCapacity===0) {
          errors.venueCapacity = "venue Capacity is required ";
        }
      
    
        return errors;
      };
    
      return (
        
        <div className="container" style={{background:'#f5f5fa'}}>
          <>
          {props.y}
          </>
          <Form >
          <h1>Venue Form</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>VenueName</Form.Label>
            <Form.Control type="text"
                name="venueName"
                placeholder="Enter venue Name"
                value={formValues.venueName}
                onChange={handleChange}/>
          </Form.Group>
		  	<p style={{color:"red"}}>{formErrors.venueName}</p>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    {formValues.venueLocation}
    <Form.Label>VenueLocation</Form.Label>
    <Form.Control  type="text"
                  name="venueLocation"
                  placeholder="Enter venue Location"
                  value={formValues.venueLocation}
                  onChange={handleChange} />
   
  </Form.Group>
  <p style={{color:"red"}}>{formErrors.venueLocation}</p>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>VenueCapacity</Form.Label>
    <Form.Control type="number"
                  name="venueCapacity"
                  placeholder="Enter venue Capacity"
                  value={formValues.venueCapacity}
                  onChange={handleChange} />
   
  </Form.Group>
  <p style={{color:"red"}}>{formErrors.venueCapacity}</p>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>venueImage</Form.Label>
    <Form.Control type="text"
                  name="venueImage"
                  placeholder="Enter venue URL"
                  value={formValues.venueImage}
                  onChange={handleChange} />
  
  </Form.Group>
  <p style={{color:"red"}} >{formErrors.imageUrl}</p>
    
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>venueDescription</Form.Label>
    <Form.Control type="text"
                  name="venueDescription"
                  placeholder="Enter venue Description"
                  value={formValues.venueDescription}
                  onChange={handleChange} />
  
  </Form.Group>
  <p style={{color:"red"}} >{formErrors.venueDescription}</p>
             
              <button type="button" className="btn btn-primary" onClick={formValues.venueId ? handleUpdate : handleSubmit} >Submit</button>
          
          </Form>
        </div>
);
      }
export default AddVenue;