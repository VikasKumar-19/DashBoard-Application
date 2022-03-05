import React, { useEffect, useState } from 'react'
import "./style.css"
import collapseIcon from "../../assets/collapse_icon.png";
import expandIcon from "../../assets/expand_icon.png";
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';

const Table = () => {

  const [isCompanyOptionsActive, setIsCompanyOptionsActive] = useState(false);
  const [isStatusOptionsActive, setIsStatusOptionsActive] = useState(false);
  const [statusOptions, setStatusOptions] = useState({active: true, closed: true});
  const [companyOptions, setCompanyOptions] = useState({selectAll: true});
  const [membersData, setMembersData] = useState([]);
  const [companiesData, setCompaniesData] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState(0);

  useEffect(()=>{
    const unsub = onSnapshot(collection(db, "membersData"), (snapshot)=>{
      let membersData=[];
      let companiesData=[];
      snapshot.docs.forEach((memberInfo)=>{
        membersData.push(memberInfo.data());
        companiesData.push(memberInfo.data().company)
      });
      setMembersData(membersData);
      companiesData = [...new Set(companiesData)];
      let companiesObj = {};
      companiesData.forEach((company)=>{
        companiesObj = {...companiesObj, [company]: true}
      })
      setSelectedCompanies(companiesData.length);
      setCompaniesData(companiesData);
      setCompanyOptions({...companyOptions, ...companiesObj});
    })

    return ()=>{
      unsub();
    }
  },[])

  useEffect(() => {
    function closeOptions(){
      setIsCompanyOptionsActive(false);
      setIsStatusOptionsActive(false);
    }
  
    document.addEventListener("click", closeOptions);

    return () => {
      document.removeEventListener("click", closeOptions);
    }
  }, [])
  

  function handleToggleOptions(filterName){
    if(filterName === "company"){
      setIsCompanyOptionsActive((state)=>{
        return !state;
      })
    }
    if(filterName === 'status'){
      setIsStatusOptionsActive((state)=>{
        return !state;
      })
    }
  }

  function handleStatusOptionChange(e){
    if(e.target.id === "active"){
      if(statusOptions.active)
        setStatusOptions({...statusOptions, active: false});
      else
        setStatusOptions({...statusOptions, active: true});
    }
    else if(e.target.id === "closed"){
      if(statusOptions.closed)
      setStatusOptions({...statusOptions, closed: false});
      else
      setStatusOptions({...statusOptions, closed: true});
    }
  }


  return (
    <>

    <div className='filters_container'>
      <div onClick={(e)=>{
        e.stopPropagation();
        handleToggleOptions("company");
      }} 
      className='company_filter_container'>
        <div className='company_filter'>
          Company({selectedCompanies})
          <img style={{width: "20px", height: "20px"}} src={isCompanyOptionsActive?collapseIcon:expandIcon} alt="icon" />
        </div>
        {
          isCompanyOptionsActive && 
          <div onClick={(e)=>{e.stopPropagation()}} className='company_options_box'>
            <div className="option_item">
              <input checked={companyOptions.selectAll} type="checkbox" id="selectAll" value="Select all" />
              <label htmlFor="selectAll">Select all</label>
            </div>
            {companiesData.map((companyName)=>{
              return <div className="option_item">
              <input checked={companyOptions[companyName]} type="checkbox" id="selectAll" value="Select all" />
              <label htmlFor="selectAll">{companyName}</label>
            </div>
            })}

          </div>
        }
      </div>

      <div onClick={(e)=>{ 
        e.stopPropagation();
        handleToggleOptions("status");
      }} 
      className='status_filter_container'>
        <div className='status_filter'>
          Status
          <img style={{width: "20px", height: "20px"}} src={isStatusOptionsActive?collapseIcon:expandIcon} alt="icon" />
        </div>
        {
          isStatusOptionsActive && 
          <div onClick={(e)=>{e.stopPropagation()}} className='status_options_box'>
            <div className="option_item">
              <input onChange={handleStatusOptionChange} checked={statusOptions.active} type="checkbox" id="active" value="active" />
              <label htmlFor="active">Active</label>
            </div>
            <div className="option_item">
              <input onChange={handleStatusOptionChange} checked={statusOptions.closed} type="checkbox" id="closed"  value="closed" />
              <label htmlFor="closed">Closed</label>
            </div>
          </div>
        }
      </div>
    </div>
    
    <div className='table_container'>
      <table cellSpacing={0} className='main_table'>
        <thead>
          <tr>
            <th className='non_data_elements' style={{textAlign: 'center'}}>
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            </th>
            <th className='short_data'>Name</th>
            <th className='short_data'>Company</th>
            <th className='short_data'>Status</th>
            <th className='short_data'>Last Updated</th>
            <th className='long_data'>Notes</th>
            <th className='non_data_elements'></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{textAlign: 'center'}}><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></td>
            <td>FUll name</td>
            <td>company name</td>
            <td>status name</td>
            <td>date now</td>
            <td>note list</td>
            <td style={{textAlign: 'left'}}><img className='trash_icon' src='/trash.svg' alt='trash icon'/></td>
          </tr>
          <tr>
            <td style={{textAlign: 'center'}}><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></td>
            <td>FUll name</td>
            <td>company name</td>
            <td>status name</td>
            <td>date now</td>
            <td>note list</td>
            <td style={{textAlign: 'left'}}><img className='trash_icon' src='/trash.svg' alt='trash icon'/></td>
          </tr>
          <tr>
            <td style={{textAlign: 'center'}}><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></td>
            <td>FUll name</td>
            <td>company name</td>
            <td>status name</td>
            <td>date now</td>
            <td>note list</td>
            <td style={{textAlign: 'left'}}><img className='trash_icon' src='/trash.svg' alt='trash icon'/></td>
          </tr>
          <tr>
            <td style={{textAlign: 'center'}}><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></td>
            <td>FUll name</td>
            <td>company name</td>
            <td>status name</td>
            <td>date now</td>
            <td>note list</td>
            <td style={{textAlign: 'left'}}><img className='trash_icon'  src='/trash.svg' alt='trash icon'/></td>
          </tr>

        </tbody>
      </table>
    </div>
    </>
  )
}

export default Table;