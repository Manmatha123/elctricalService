import React, { useState } from 'react'
import "../styles/MyWork.css";
import UserCard from '../components/UserCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import AddEditUserDialog from '../components/AddEditUserDialog';
import WorkAddEdit from '../components/WorkAddEdit';
import TableHeader from '../components/TableHeader';

function MyWork() {
const navigate=useNavigate();

    const works = [
        {
            business: "Sky Electrican",
            workId: "25014287",
            date: "21 March 2021",
            totalAmount: "20000",
            workName: "House warring",
            workStatus: "Pending",
            paymentStatus: "Pending",
            remainAmount: "20000",
            paidAmount: "0",
        },
        {
            business: "Sky Electrican",
            workId: "25014288",
            date: "21 March 2021",
            totalAmount: "20000",
            workName: "Solar panel installation",
            workStatus: "Pending",
            paymentStatus: "Pending",
            remainAmount: "20000",
            paidAmount: "0",
        },
        {
            business: "Sky Electrican",
            workId: "25014287",
            date: "21 March 2021",
            totalAmount: "20000",
            workName: "Maintenance",
            workStatus: "Pending",
            paymentStatus: "Pending",
            remainAmount: "20000",
            paidAmount: "0",
        },
        {
            business: "Sky Electrican",
            workId: "25014287",
            date: "21 March 2021",
            totalAmount: "20000",
            workName: "Earthing",
            workStatus: "Pending",
            paymentStatus: "Pending",
            remainAmount: "20000",
            paidAmount: "0",
        },
        {
            business: "Sky Electrican",
            workId: "25014287",
            date: "21 March 2021",
            totalAmount: "20000",
            workName: "House warring",
            workStatus: "Pending",
            paymentStatus: "Pending",
            remainAmount: "20000",
            paidAmount: "0",
        },
        {
            business: "Sky Electrican",
            workId: "25014287",
            date: "21 March 2021",
            totalAmount: "20000",
            workName: "House warring",
            workStatus: "Pending",
            paymentStatus: "Pending",
            remainAmount: "20000",
            paidAmount: "0",
        },
        {
            business: "Sky Electrican",
            workId: "25014287",
            date: "21 March 2021",
            totalAmount: "20000",
            workName: "House warring",
            workStatus: "Pending",
            paymentStatus: "Pending",
            remainAmount: "20000",
            paidAmount: "0",
        },
        {
            business: "Sky Electrican",
            workId: "25014287",
            date: "21 March 2021",
            totalAmount: "20000",
            workName: "House warring",
            workStatus: "Pending",
            paymentStatus: "Pending",
            remainAmount: "20000",
            paidAmount: "0",
        },
        {
            business: "Sky Electrican",
            workId: "25014287",
            date: "21 March 2021",
            totalAmount: "20000",
            workName: "House warring",
            workStatus: "Pending",
            paymentStatus: "Pending",
            remainAmount: "20000",
            paidAmount: "0",
        },
        {
            business: "Sky Electrican",
            workId: "25014287",
            date: "21 March 2021",
            totalAmount: "20000",
            workName: "Maintenance",
            workStatus: "Pending",
            paymentStatus: "Pending",
            remainAmount: "20000",
            paidAmount: "0",
        },
    ];

        const [open, setOpen] = useState(false);
    
        const handleOpen = () => {
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };

        const handleSaveUser = (user) => {
         
        };
    return (
        <>
                <Navbar/>
            <div className="work-container">
                <UserCard/>
                <TableHeader  handleOpen={handleOpen}/>
                <div className="table-wrapper">
                    <table className="work-table">
                        <thead>
                            <tr>
                                <th >Work Name</th>
                                <th >Work Cost</th>
                                <th >Transation</th>
                                <th >Status</th>
                                <th >view</th>
                            </tr>
                        </thead>
                        <tbody>
                            {works.map((work, index) => (
                                <tr key={index}>

                                    <td >
                                        <div>
                                            <div className="name">{work.workName}</div>
                                            <div className="subtext">ID: {work.workId}</div>
                                        </div>
                                    </td>

                                    <td >
                                        <div className="name">₹{work.totalAmount}</div>
                                        <div className="subtext">Deal on {work.date}</div>
                                    </td>

                                    <td >
                                        <div className="name">paid: ₹{work.paidAmount}</div>
                                        <div className="subtext">Remain: ₹{work.remainAmount}</div>
                                    </td>
                                    <td >
                                        <div className="name">work: {work.workStatus}</div>
                                        <div className="subtext">payment: {work.paymentStatus}</div>
                                    </td>
                                    <td >
                                        <button className="details-btn" onClick={()=>navigate(`/transactions/${work.workId}`)}>view</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Footer/>


                <Dialog 
  open={open} 
  onClose={handleClose} 
  sx={{ '& .MuiDialog-paper': { width: '80%', maxWidth: '800px' } }}
>
  <DialogTitle>Work Add Edit</DialogTitle>
  <DialogContent
     sx={{
        overflow: 'auto', // Enables scrolling
        '&::-webkit-scrollbar': { display: 'none' }, // Hides scrollbar in WebKit browsers
        '-ms-overflow-style': 'none', // Hides scrollbar in IE and Edge
        'scrollbar-width': 'none', // Hides scrollbar in Firefox
      }}
  >
    <WorkAddEdit
      user={"currentUser"} 
      onClose={handleClose} 
      onSave={handleSaveUser} 
    />
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Close</Button>
  </DialogActions>
</Dialog>
            </div>
        </>
    )
}

export default MyWork
