import React from 'react'
import "./style.css"
import collapseIcon from "../../assets/collapse_icon.png";
import expandIcon from "../../assets/expand_icon.png";

const Table = () => {


  return (
    <>

    <div className='filters_container'>
      <div className='company_filter_container'>
        <div className='company_filter'>
          Company({"3"})
          <img style={{width: "20px", height: "20px"}} src={expandIcon} />
        </div>

        <div className='company_options_box'>
          <div className="option_item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">Select all</label>
          </div>
          <div className="option_item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">Select all</label>
          </div>
          <div className="option_item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">Select all</label>
          </div>
          <div className="option_item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">Select all</label>
          </div>
        </div>
      </div>

      <div className='status_filter_container'>
        <div className='status_filter'>
          Status
          <img style={{width: "20px", height: "20px"}} src={expandIcon} />
        </div>

        <div className='status_options_box'>
          <div className="option_item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">Select all</label>
          </div>
          <div className="option_item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">Select all</label>
          </div>
          <div className="option_item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">Select all</label>
          </div>
          <div className="option_item">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1">Select all</label>
          </div>
        </div>
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