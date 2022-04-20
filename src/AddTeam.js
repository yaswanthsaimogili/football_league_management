import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Form,Button} from "react-bootstrap"

function AddTeam() {
    const initialValues = {
        teamId:"",
        teamName: "",
        teamLocation: "",
        teamSize: "",
        teamImage: "",
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
                alert("Team Saved Successfully");
                TeamList(); 
            }
        })
      };
    const history = useNavigate();
    const  TeamList = () => {
        return history("/teams");
    };

      const teamId = useParams();
      useEffect(()=>{ 
            if(teamId)
            {
                findTeamById(teamId);
            }
            
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]) 
      

      const handleUpdate = (e) => {
       e.preventDefault();
       console.log(teamId)
        axios.put(
            'http://localhost:8080/edit/'+formValues.teamId,
           formValues
        )
        .then(response => {
            if(response.data != null)
            {
               setIsSubmit(true);
               setFormValues(initialValues);
                
               alert("Team updated Successfully");
               TeamList(); 
            }
        })
      };


    const  findTeamById = (teamId) =>{
     
        axios.get("http://localhost:8080/get/"+teamId.id).then(response => setFormValues(response.data))


      }
      


      let teamNameCheck =/^[A-Za-z]{3,30}$/;
      let teamLocationCheck =/^[A-Za-z]{3,30}$/;
      
      const validate = (values) => {
        const errors = {};
        if (!(values.teamName && teamNameCheck.test(values.teamName))) {
          errors.teamName = "team Name should be atleast 3 characters!";
        }
        if (!values.imageUrl) {
          errors.imageUrl = "Image Url is required!";
        }
        if (!values.teamLocation && !teamLocationCheck.test(values.teamLocation)) {
          errors.teamLocation = "team Location should be atleast 3 characters!";
        }
        if (values.teamCapacity===0) {
          errors.teamCapacity = "team Capacity is required ";
        }
      
    
        return errors;
      };
    
      return (
        
        <div className="container" style={{background:'#f5f5fa'}}>
          <Form >
          <h1>Team Form</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>TeamName</Form.Label>
    <Form.Control type="text"
                  name="teamName"
                  placeholder="Enter team Name"
                  value={formValues.teamName}
                  onChange={handleChange}/>
    
  </Form.Group>
  <p style={{color:"red"}}>{formErrors.teamName}</p>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    {formValues.teamLocation}
    <Form.Label>TeamLocation</Form.Label>
    <Form.Control  type="text"
                  name="teamLocation"
                  placeholder="Enter team Location"
                  value={formValues.teamLocation}
                  onChange={handleChange} />
   
  </Form.Group>
  <p style={{color:"red"}}>{formErrors.teamLocation}</p>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>TeamSize</Form.Label>
    <Form.Control type="number"
                  name="teamSize"
                  placeholder="Enter team Capacity"
                  value={formValues.teamSize}
                  onChange={handleChange} />
   
  </Form.Group>
  <p style={{color:"red"}}>{formErrors.teamCapacity}</p>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>TeamImage</Form.Label>
    <Form.Control type="text"
                  name="teamImage"
                  placeholder="Enter team URL"
                  value={formValues.teamImage}
                  onChange={handleChange} />
  
  </Form.Group>
  <p style={{color:"red"}} >{formErrors.imageUrl}</p>
    
             
              <button type="button" className="btn btn-primary" onClick={formValues.teamId ? handleUpdate : handleSubmit} >Submit</button>
          
          </Form>
        </div>
);
      }
export default AddTeam;



/*{Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="ui message success">Signed in successfully</div>
          ) : (
            <div></div>
          )}
          
          <form >
            <h1>team Form</h1>
            <div className="ui divider"></div>
            <div className="ui form">
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  name="teamName"
                  placeholder="Enter team Name"
                  value={formValues.teamName}
                  onChange={handleChange}
                ></input>
              </div>
              <p>{formErrors.teamName}</p>
    
              <div className="field">
                <label>Image URL</label>
                <input
                  type="text"
                  name="teamImage"
                  placeholder="Enter team URL"
                  value={formValues.teamImage}
                  onChange={handleChange}
                ></input>
              </div>
              <p>{formErrors.imageUrl}</p>
    
              <div className="field">
                <label>Location</label>
                <input
                  type="text"
                  name="teamLocation"
                  placeholder="Enter team Location"
                  value={formValues.teamLocation}
                  onChange={handleChange}
                ></input>
              </div>
              <p>{formErrors.teamLocation}</p>
    
              <div className="field">
                <label>Capacity</label>
                <input
                  type="text"
                  name="teamSize"
                  placeholder="Enter team Capacity"
                  value={formValues.teamSize}
                  onChange={handleChange}
                ></input>
              </div>
              <p>{formErrors.teamCapacity}</p>
    
             
              <button className="fluid ui button blue" >Submit</button>
            </div>
          </form>
        </div>
    
           <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>TeamName</Form.Label>
    <Form.Control type="text"
                  name="teamName"
                  placeholder="Enter team Name"
                  value={formValues.teamName}
                  onChange={handleChange}/>
    
  </Form.Group>
  <p>{formErrors.teamName}</p>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    {formValues.teamLocation}
    <Form.Label>TeamLocation</Form.Label>
    <Form.Control  type="text"
                  name="teamLocation"
                  placeholder="Enter team Location"
                  value={formValues.teamLocation}
                  onChange={handleChange} />
   
  </Form.Group>
  <p>{formErrors.teamLocation}</p>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>TeamSize</Form.Label>
    <Form.Control type="text"
                  name="teamSize"
                  placeholder="Enter team Capacity"
                  value={formValues.teamSize}
                  onChange={handleChange} />
   
  </Form.Group>
  <p>{formErrors.teamCapacity}</p>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>TeamImage</Form.Label>
    <Form.Control type="text"
                  name="teamImage"
                  placeholder="Enter team URL"
                  value={formValues.teamImage}
                  onChange={handleChange} />
  
  </Form.Group>
  <p>{formErrors.imageUrl}</p>

<Button className="fluid ui button blue" >Submit</Button>
</Form>
          */