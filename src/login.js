import React from "react";
import "./components/login.css"
import {useState} from "react";

function LoginPage() {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const submithandler=(e) =>
  {
    e.preventDefault();
    if (email==="yaswanthmogili543@gmail.com" && password==="12345678")
    {
      alert("Success");
    }
    else{
      alert("failure");
    }


  }
    return (
        <>
        <center>
         <div className="wrapper">
      <div className="title">
Login </div>
<form action="#" onSubmit={submithandler}>
        <div className="field">
          <input type="text" id= "email" onChange={(e) => setEmail(e.target.value)}required></input>
          <label>Email Address</label>
        </div>
<div className="field">
          <input type="password" id="password" onChange={e => { setPassword(e.target.value)}} required></input>
          <label>Password</label>
        </div>
<div className="content">
          <div className="checkbox">
            <input type="checkbox" id="remember-me"></input>
            <label htmlFor="remember-me">Remember me</label>
          </div>
<div className="pass-link">
<a href="#">Forgot password?</a></div>
</div>
<div className="field">
          <input type="submit" id= "loginButton" value="Login"></input>
        </div>
<div className="signup-link">
Not a member? <a href="register.html" id="signupLink">Signup now</a></div>
</form>
</div>
       
</center>
        </>
    );
  }
  
  export default LoginPage;
  