import React, { useState } from 'react'
import "../styles/WorkAddEdit.css";


function WorkAddEdit({open, onClose, user, onSave  }) {

    const [formData, setFormData] = useState({
        date: "2024-03-10",
        totalAmount: "20000",
        workName: "House warring",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
  return (
    <>
       <div className="profile-container">
      <div className="profile-header">
        <img
          className="profile-pic"
          src="data:image/jpeg;base64,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"
          alt="Profile"
        />
        <div className="profile-info">
          <h2>Sky Electrician</h2>
          {/* <p><span>190</span> Followers <span>21</span> Viewing</p> */}
        </div>
      </div>
      <div className="profile-form">
        {/* <h3>Add/Edit work</h3> */}
        <div className="form-group">
  <label>Date</label>
  <input
    type="date"
    name="date"
    value={formData.date}
    onChange={handleChange}
  />
</div>
        <div className="form-group">
          <label>Work Cost</label>
          <input type="number" name="totalAmount" value={formData.totalAmount} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Work Name</label>
          <input type="text" name="workName" value={formData.workName} onChange={handleChange} />
        </div>
        <button className="save-btn">Save changes</button>
      </div>
    </div>
    </>
  )
}

export default WorkAddEdit
