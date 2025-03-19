import React from 'react'
import "../styles/MyWork.css";
import UserCard from '../components/UserCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Navigate, useNavigate } from 'react-router-dom';

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

    return (
        <>
                <Navbar/>
            <div className="work-container">
                <UserCard/>
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
            </div>
        </>
    )
}

export default MyWork
