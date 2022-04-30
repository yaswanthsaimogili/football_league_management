import axios from "axios";
import React, { useState, useEffect ,useContext} from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Form,Button} from "react-bootstrap"
import {store} from "./components/Urls"


function AddRefree() {
 
    const initialValues = {
      refreeId:"",
      refreeName: "",
      refreeLocation: "",
      refreeExperience: "",
      refreeImage: "",
    };
  
    const[url,setUrl]=useContext(store);
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
  
    };
  
    const handleSubmit = (e) => {
  
      e.preventDefault();
      console.log(formValues);
      setFormErrors(validate(formValues));
      axios({
          method: 'POST',
          url: url+'/addRefree',
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
              alert("refree Saved Successfully");
              refreeList(); 
          }
          
      }).catch(function (error) {
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
    };
  const history = useNavigate();
  const  refreeList = () => {
      return history("/refree");
  };


    const refreeId = useParams();
    useEffect(()=>{ 
          if(refreeId)
          {
              findrefreeById(refreeId);
          }
          
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]) 
    

    const handleUpdate = (e) => {
      console.log(formValues);
     e.preventDefault();
      axios.put(
          url+'/editRefree/'+formValues.refreeId,
         formValues
      )
      .then(response => {
          if(response.data != null)
          {
             setIsSubmit(true);
             setFormValues(initialValues);
              
             alert("refree updated Successfully");
             refreeList(); 
          }
      }).catch(function (error) {
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
  }

  const  findrefreeById = (refreeId) =>{
   
      axios.get(url+"/getRefree/"+refreeId.id).then(response => setFormValues(response.data))


    }
    


    let refreeNameCheck =/^[A-Za-z]{3,30}$/;
    let refreeLocationCheck =/^[A-Za-z]{3,30}$/;
    
    const validate = (values) => {
      const errors = {};
      if (!(values.refreeName && refreeNameCheck.test(values.refreeName))) {
        errors.refreeName = "refree Name should be atleast 3 characters!";
      }
      if (!values.imageUrl) {
        errors.imageUrl = "Image Url is required!";
      }
      if (!(values.refreeLocation && refreeLocationCheck.test(values.refreeLocation))) {
        errors.refreeLocation = "refree Location should be atleast 3 characters!";
      }
      if (values.refreeExperience===1) {
        errors.refreeExperience = "refree Capacity is required and greater than 10 ";
      }
    
  
      return errors;
    };
  
    return (
      
      <div className="container" style={{background:'#f5f5fa'}}>
        <Form >
        <h1>refree Form</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>refreeName</Form.Label>
  <Form.Control type="text"
                name="refreeName"
                placeholder="Enter refree Name"
                value={formValues.refreeName}
                onChange={handleChange}/>
  
</Form.Group>
<p style={{color:"red"}}>{formErrors.refreeName}</p>
<Form.Group className="mb-3" controlId="formBasicEmail">
 
  <Form.Label>refreeLocation</Form.Label>
  <Form.Control  type="text"
                name="refreeLocation"
                placeholder="Enter refree Location"
                value={formValues.refreeLocation}
                onChange={handleChange} />
 
</Form.Group>
<p style={{color:"red"}}>{formErrors.refreeLocation}</p>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>refreeExperience</Form.Label>
  <Form.Control type="number"
                name="refreeExperience"
                placeholder="Enter refree Experirence (In Matches )"
                value={formValues.refreeExperience}
                onChange={handleChange} />
 
</Form.Group>
<p style={{color:"red"}}>{formErrors.refreeExperience}</p>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>refreeImage</Form.Label>
  <Form.Control type="text"
                name="refreeImage"
                placeholder="Enter refree URL"
                value={formValues.refreeImage}
                onChange={handleChange} />

</Form.Group>
<p style={{color:"red"}} >{formErrors.imageUrl}</p>
  
           
            <button type="button" className="btn btn-primary" onClick={formValues.refreeId ? handleUpdate : handleSubmit} >Submit</button>
        
        </Form>
      </div>
  )
}

export default AddRefree