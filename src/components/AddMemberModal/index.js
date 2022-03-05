import React from 'react';
import './style.css';

const AddMemberModal = () => {
  return (
    <>
      <div className='backdrop_overlay'></div>
      <div className='modal_container'>
        <div className='close_btn'>
          <button>❌</button>
        </div>
        <div className='modal_container_content'>
           <div className='non_scrollable_content'>
            <h2>Add members</h2>
           </div>
           <div className='scrollable_content'>
            <div className='inp_container'>
              <label htmlFor='nameInp'>Name</label>
              <input id='nameInp' type="text" />
            </div>
            <div className='inp_container'>
              <label htmlFor='companyInp'>Company</label>
              <input id='companyInp' type="text" />
            </div>
            <div className='inp_container'>
              <label htmlFor='statusInp'>Status</label>
              <input id='statusInp' type="text" />
            </div>
            <div className='inp_container'>
              <label htmlFor='notesInp'>Notes</label>
              <input id='notesInp' type="text" />
            </div>
           </div>
        </div>
        <div className='form_buttons_container'>
          <button className='cancel_btn'>Cancel</button>
          <button className='save_btn'>Save</button>
        </div>
      </div>
    </>
  )
}

export default AddMemberModal;