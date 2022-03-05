import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../../firebase';
import './style.css';

const AddMemberModal = ({closeModal}) => {

  const [memberDetails, setMemberDetails] = useState({
    memberName: "",
    companyName: "",
    status: "",
    notes: "",
  })

  const [isLoading, setIsLoading] = useState(false);

  function handleMemberDetails(e){
    switch(e.target.id){
      case "nameInp":   setMemberDetails({...memberDetails, memberName: e.target.value});
          break;
      case "companyInp": setMemberDetails({...memberDetails, companyName: e.target.value});
          break;
      case "statusInp": setMemberDetails({...memberDetails, status: e.target.value});
         break;
      case "notesInp":  setMemberDetails({...memberDetails, notes: e.target.value});
          break;
      default: setMemberDetails({...memberDetails});
    }
  }

  async function saveMemberDetails(){
    setIsLoading(true);
    try{
        await addDoc(collection(db, "membersData"), {
        memberName: memberDetails.memberName.trim(),
        companyName: memberDetails.companyName.trim(),
        satus: memberDetails.status.trim(),
        notes: memberDetails.notes.trim(),
        timestamp: serverTimestamp(),
      });
      
    }
    catch(err){
      console.log(err.message);
    }
    setIsLoading(false);
    setMemberDetails({
      memberName: "",
      companyName: "",
      status: "",
      notes: "",
    });

    closeModal();
  }

  return (
    <>
      <div className='backdrop_overlay'></div>
      <div className='modal_container'>
        <div className='close_btn'>
          <button onClick={closeModal}>❌</button>
        </div>
        <div className='modal_container_content'>
           <div className='non_scrollable_content'>
            <h2>Add members</h2>
           </div>
           <div className='scrollable_content'>
            <div className='inp_container'>
              <label htmlFor='nameInp'>Name</label>
              <input onChange={handleMemberDetails} value={memberDetails.memberName} id='nameInp' type="text" />
            </div>
            <div className='inp_container'>
              <label htmlFor='companyInp'>Company</label>
              <input onChange={handleMemberDetails} value={memberDetails.companyName} id='companyInp' type="text" />
            </div>
            <div className='inp_container'>
              <label htmlFor='statusInp'>Status</label>
              <input onChange={handleMemberDetails} value={memberDetails.status} id='statusInp' type="text" />
            </div>
            <div className='inp_container'>
              <label htmlFor='notesInp'>Notes</label>
              <input onChange={handleMemberDetails} value={memberDetails.notes} id='notesInp' type="text" />
            </div>
           </div>
        </div>
        <div className='form_buttons_container'>
          <button onClick={closeModal} className='cancel_btn'>Cancel</button>
          <button disabled={isLoading} style={{backgroundColor: isLoading ? "gray": "rgb(78 78 255)"}} onClick={saveMemberDetails} className='save_btn'>{isLoading?"Saving...":"Save"}</button>
        </div>
      </div>
    </>
  )
}

export default AddMemberModal;