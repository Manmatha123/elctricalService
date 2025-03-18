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