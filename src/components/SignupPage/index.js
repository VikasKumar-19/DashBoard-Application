import React, { useState } from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

const SignupModule = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorObj, setErrorObj] = useState({error: false, errorMessage: ""});

  function handleSignUpUser(){

  }


  return (
    <div className="signup_container" >
        <div className="signup_card_container" >
            <div className="signup_card" >
                <h1 className='signup_heading'>SignUp</h1>
                <input onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder="Email" type={'email'} />
                <input onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder="Create Password" type={'password'} />
                <input type='text' onChange={(e)=>{setName(e.target.value)}} value={name} placeholder='Full Name'  />
                <div style={{color: "red"}}>{errorObj.error && errorObj.errorMessage}</div>
                <button className='signup_btn' onClick={handleSignUpUser} disabled={isLoading}>
                    {isLoading?"Loading...": "SignUp"}
                </button>
            </div>
            <div style={{fontSize: "18px"}} className='login_option'>
                Already have an account? <Link to={'/login'}><span style={{color: "blue"}}>Login</span></Link>
                &nbsp; or <Link to={'/'}><span style={{color: "blue"}}>skip</span></Link> login
            </div>
        </div>
    </div>
  )
}

export default SignupModule;