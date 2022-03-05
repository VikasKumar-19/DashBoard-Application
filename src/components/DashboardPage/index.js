import React from 'react';
import AddMemberModal from '../AddMemberModal';
import Table from '../TableComponent';
import "./style.css"

const DashBoard = () => {
  return (
    <div>
      <div className='dashBoard_header'>
        <h1 className='table_heading'>Team Members</h1>
        <button style={{display: "flex", alignItems: "center", gap: "5px", cursor: "pointer"}} className='add_member_btn'>Add Members<span style={{fontSize: "24px"}}>+</span></button>
      </div>
      <hr className='div_line' />

      <Table />
    </div>
  )
}

export default DashBoard;