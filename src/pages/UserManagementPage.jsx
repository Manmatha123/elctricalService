import React, { useState } from 'react';
import AddEditUserDialog from '../components/AddEditUserDialog';
import '../styles/styles.css';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const UserManagementPage = () => {
    const [users, setUsers] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);


    const handleEditUser = (user) => {
        setCurrentUser(user);
        console.log(isDialogOpen);
        setIsDialogOpen(true);
    };

    // const handleCloseDialog = () => {
    //     setIsDialogOpen(false);
    //     setCurrentUser(null);
    // };

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSaveUser = (user) => {
        if (currentUser) {
            setUsers(users.map(u => (u.id === user.id ? user : u)));
        } else {
            setUsers([...users, { ...user, id: Date.now() }]);
        }
        // handleCloseDialog();
    };

    return (
        <div>
            <h1>User Management</h1>
            <button onClick={handleOpen}>Add User</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <button onClick={() => handleEditUser(user)}>Edit</button>
                                <button onClick={() => setUsers(users.filter(u => u.id !== user.id))}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* {isDialogOpen && (
                <AddEditUserDialog 
                    user={currentUser} 
                    onClose={handleCloseDialog} 
                    onSave={handleSaveUser} 
                />
            )} */}

<Dialog open={open} onClose={handleClose}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
        <AddEditUserDialog
                    user={currentUser} 
                    onClose={handleClose} 
                    onSave={handleSaveUser} 
                />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
        </div>
    );
};

export default UserManagementPage;