import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

const LoginModule = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorObj, setErrorObj] = useState({error: false, errorMessage: ""});


  function handleSignUpUser(){

  }

  return (
    <div className="login_container" >
    <div className="login_card_container" >
        <div className="login_card" >
            <h1 className='login_heading'>Login</h1>
            <input onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder="Email" type={'email'} />
            <input onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder="Password" type={'password'} />
            <div style={{color: "red"}}>{errorObj.error && errorObj.errorMessage}</div>
            <button className='login_btn' onClick={handleSignUpUser} disabled={isLoading}>
                {isLoading?"Loading...": "Login"}
            </button>
        </div>
        <div style={{fontSize: "18px"}} className='login_option'>
          Don&apos;t have an account? <Link to='/signup'><span style={{color: "blue"}}>Sign Up</span></Link>
        </div>
    </div>
</div>
  )
}

export default LoginModule;