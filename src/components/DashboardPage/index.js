import React, { useState } from 'react';
import AddMemberModal from '../AddMemberModal';
import Table from '../TableComponent';
import "./style.css"

const DashBoard = () => {

  const [isModalActive, setIsModalActive] = useState(false)

  return (
    <div>
      <div className='dashBoard_header'>
        <div style={{display: "flex", gap: "20px"}}>
          <h1 className='table_heading'>Team Members</h1>
          <button onClick={()=>{setIsModalActive(true)}} style={{display: "flex", alignItems: "center", gap: "5px", cursor: "pointer"}} className='add_member_btn'>Add Members<span style={{fontSize: "24px"}}>+</span></button>
        </div>
        <button className='logOut_btn'>Log Out</button>
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