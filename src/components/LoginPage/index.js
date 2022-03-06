import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthWrapper';
import "./style.css";

const LoginModule = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorObj, setErrorObj] = useState({error: false, errorMessage: ""});

  const [isVerifyingInProgress, setIsVerifyingInProgress] = useState(true);

  const context = useContext(AuthContext);
  const {user, loginAuthenticate} = context;
  const navigate = useNavigate();

  useEffect(() => {
    if(user){
      navigate("/");
      setIsVerifyingInProgress(false);
    }
    else{
      setIsVerifyingInProgress(false);
    }
  }, [user])
  
  async function handleLoginUser(){
    setIsLoading(true);
    try{
      await loginAuthenticate(email.trim(), password.trim());
    }
    catch(err){
      setErrorObj({error: true, errorMessage: err.message})
      setTimeout(()=>{
        setErrorObj({error: false, errorMessage: ""});
      })
      setIsLoading(false);
    }
  }
  
  function handleSkipLogin(){
    context.skipUser=true;
    console.log(context);
    navigate("/");
  }

  if(isVerifyingInProgress){
    return <>Loading...</>
  }
  return (
    <div className="login_container" >
    <div className="login_card_container" >
        <div className="login_card" >
            <h1 className='login_heading'>Login</h1>
            <input onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder="Email" type={'email'} />
            <input onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder="Password" type={'password'} />
            <div style={{color: "red"}}>{errorObj.error && errorObj.errorMessage}</div>
            <button className='login_btn' onClick={handleLoginUser} disabled={isLoading}>
                {isLoading?"Loading...": "Login"}
            </button>
        </div>
        <div style={{fontSize: "18px"}} className='login_option'>
          Don&apos;t have an account? <Link to='/signup'><span style={{color: "blue"}}>Sign Up</span></Link>
          &nbsp; or <Link to={'/'}><span onClick={handleSkipLogin} style={{color: "blue"}}>skip</span></Link> login
        </div>
    </div>
</div>
  )
}

export default LoginModule;