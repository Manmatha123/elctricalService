import React, { useState, useEffect } from 'react';

const AddEditUserDialog = ({ open, onClose, user, onSave }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setRole(user.role);
        } else {
            setName('');
            setEmail('');
            setRole('');
        }
    }, [user]);



    return (
        <>
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur aperiam distinctio iusto, quis blanditiis aliquam eum, quod perspiciatis illum recusandae voluptate, deleniti nisi accusamus reprehenderit qui quidem cum esse porro.</h1>
        </>
        // <Dialog open={open} onClose={onClose}>
        //     <DialogTitle>{user ? 'Edit User' : 'Add User'}</DialogTitle>
        //     <DialogContent>
        //         <TextField
        //             autoFocus
        //             margin="dense"
        //             label="Name"
        //             type="text"
        //             fullWidth
        //             variant="outlined"
        //             value={name}
        //             onChange={(e) => setName(e.target.value)}
        //         />
        //         <TextField
        //             margin="dense"
        //             label="Email"
        //             type="email"
        //             fullWidth
        //             variant="outlined"
        //             value={email}
        //             onChange={(e) => setEmail(e.target.value)}
        //         />
        //         <TextField
        //             margin="dense"
        //             label="Role"
        //             type="text"
        //             fullWidth
        //             variant="outlined"
        //             value={role}
        //             onChange={(e) => setRole(e.target.value)}
        //         />
        //     </DialogContent>
        //     <DialogActions>
        //         <Button onClick={onClose} color="primary">
        //             Cancel
        //         </Button>
        //         <Button onClick={handleSave} color="primary">
        //             Save
        //         </Button>
        //     </DialogActions>
        // </Dialog>
    );
};

export default AddEditUserDialog;

 {/* <div className="profile-container">
      <div className="profile-header">
        <img
          className="profile-pic"
          src="https://via.placeholder.com/100"
          alt="Profile"
        />
        <div className="profile-info">
          <h2>{formData.firstName} {formData.lastName}</h2>
          <p><span>190</span> Followers <span>21</span> Viewing</p>
        </div>
      </div>
      <div className="profile-form">
        <h3>Personal details</h3>
        <div className="form-group">
          <label>First name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Mobile number</label>
          <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email ID</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Service provider URL</label>
          <input type="text" name="serviceProviderUrl" value={formData.serviceProviderUrl} onChange={handleChange} placeholder="Paste URL" />
        </div>
        <button className="save-btn">Save changes</button>
      </div>
    </div> */}
    