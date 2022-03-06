import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthWrapper';
import AddMemberModal from '../AddMemberModal';
import Table from '../TableComponent';
import "./style.css";

const DashBoard = () => {

  const [isModalActive, setIsModalActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const context = useContext(AuthContext);
  const {user,  signOutUser, skipUser} = context;
  const navigate = useNavigate();

  useEffect(() => {
    if(!user && !skipUser){
      navigate("/login");
      setIsLoading(false);
    }
    else{
      setIsLoading(false);
    }
  }, [user])

  async function handleLogout(){
    try{
      await signOutUser();
    }
    catch(err){
      console.log(err.message);
    }
  }
  
  if(isLoading){
    return <>Loading...</>
  }

  return (
    <div>
      <div className='dashBoard_header'>
        <div style={{display: "flex", gap: "20px"}}>
          <h1 className='table_heading'>Team Members</h1>
          <button onClick={()=>{setIsModalActive(true)}} style={{display: "flex", alignItems: "center", gap: "5px", cursor: "pointer"}} className='add_member_btn'>Add Members<span style={{fontSize: "24px"}}>+</span></button>
        </div>
        {
          !skipUser &&
          <button onClick={handleLogout} className='logOut_btn'>Log Out</button>
        }
      </div>
      <hr className='div_line' />

      <Table />
      {
        isModalActive &&
        <AddMemberModal closeModal={()=>{setIsModalActive(false)}}/>
      }
    </div>
  )
}

export default DashBoard;