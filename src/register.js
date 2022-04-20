import React, { useEffect, useState } from "react";
import "./components/registration.css";


const Register = () =>
{
  const[data,setData]=useState({
    fname:'',
    lname:'',
    username:'',
    email:'',
    mobileNumber:'',
    password:'',
    confirmPassword:'',
    userType:'-- select an option --'
  })

  const [errors, setErrors] = useState({})
  const [success,setSuccess]=useState(false);
  const changeHandler = e =>{
    
    setData({...data,[e.target.name]:e.target.value})
   
  
  }
const validateForm =(data) =>
{
    let errors={};
    let name=/^[a-zA-Z][a-zA-Z]+$/;
    let userCheck= /^[A-Za-z]{3,30}[0-9]{1,10}$/;
    let emailCheck= /^([a-zA-Z0-9]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,8})(.[a-zA-Z]{2,8})?$/;
    let phoneCheck=/^[0-9]{10}$/;
    let passCheck=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    if(!name.test(data.fname))
    {
      errors.fname='**Fname is invalid';
    }
    if(!name.test(data.lname))
    {
      errors.lname='**Lname  is invalid';
    }

    if(!emailCheck.test(data.email))
    {
      console.log("error in email");
      errors.email='**Email address is invalid';
    }

    if(!phoneCheck.test(data.mobileNumber))
    {
      errors.mobileNumber='MobileNumber  is invalid';
    }

    if(!userCheck.test(data.username))
    {
      errors.username='UserName is invalid it should be alphanumeric';
    }

    if(!passCheck.test(data.password))
    {
      errors.password=' Password should contains at-least 8 characters and containing uppercase,lowercase and numbers';
    }

    if(!(data.password === data.confirmPassword))
    {
      console.log("error in password");
      errors.confirmPassword="Password doesn't match";
    }
    return errors;
}
const submitHandler = e => {
  e.preventDefault();
  setErrors(validateForm(data))
  setSuccess(true);
}

useEffect(()=>{
if(Object.keys(errors).length===0 && success)
{
  alert("registered success")
}
},[errors]);
    return (
        <>
    <div className="container">
    <div className="title">Registration</div>
    <div className="content">
      <form onSubmit={submitHandler}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">First Name</span>
            <input type="text" name="fname" id="fname" placeholder="Enter your First name" onChange={changeHandler} required/>
			      <span id="fnameerror" className="text-danger font-weight-bold"> {errors.fname && <h6>{errors.fname}</h6>} </span>
          </div>
          <div className="input-box">
            <span className="details">Last Name</span>
            <input type="text" name="lname" id="lname" placeholder="Enter your Last name" onChange={changeHandler} required/>
			      <span id="lnameerror" className="text-danger font-weight-bold">  {errors.fname && <h6>{errors.lname}</h6>} </span>
          </div>
          <div className="input-box">
            <span className="details">Username</span>
            <input type="text" id="username" placeholder="Enter your username" name="username"  onChange={changeHandler}  required/>
            <span id="usererror" className="text-danger font-weight-bold"> {errors.username && <h6>{errors.username}</h6>} </span>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" id="email" placeholder="Enter your email" name="email" onChange={changeHandler}  required/>
            <span id="emailerror" className="text-danger font-weight-bold"> {errors.email && <h6>{errors.email}</h6>} </span>
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="text" id="mobileNumber" name="mobileNumber" placeholder="Enter your number" onChange={changeHandler}  required/>
            <span id="phoneerror" className="text-danger font-weight-bold"> {errors.mobileNumber && <h6>{errors.mobileNumber}</h6>} </span>
          </div>
          <div className="input-box">
            <span className="details">Password</span>
         		 <input type="password" name="password" placeholder="Enter your password" id="password" onChange={changeHandler}  autoComplete="off"  required></input>
		        <span id="passworderror" className="text-danger font-weight-bold"> {errors.password && <h6>{errors.password}</h6>}</span>
          </div>
          <div className="input-box">
            <span className="details">Confirm Password</span>
            <input type="password" name="confirmPassword" placeholder="Confirm your password" id="confirmPassword"  onChange={changeHandler}  autoComplete="off"   required/>
            <span id="cpassworderror" className="text-danger font-weight-bold"> {errors.confirmPassword && <h6>{errors.confirmPassword}</h6>} </span>
          </div>
		      <div className="input-box">
		          <label htmlFor="userType">Enter User Type:</label>
		          <select id="userType" name="userType" onChange={changeHandler} >
		          <option  defaultValue={data.userType} > -- select an option -- </option>
		          <option value="Organizer">User/Organizer</option>
		          <option value="Admin">Admin</option>
		          </select>
		      </div>
           </div>
              <div className="button">
                <input type="submit" value="Register" id="submitButton" />
             </div>
  </form>
  </div>
  </div>  
        </>
    );
  }
  
  export default Register;
  