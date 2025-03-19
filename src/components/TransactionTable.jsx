import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WorkCard from './WorkCard';

const TransactionTable = () => {
    const transations = [
        {
            id: 1,
            date: "23 March 2025",
            paymentAmunt: 15000,
            paymentmode: "Paytm",
        },
        {
            id: 2,
            date: "25 March 2025",
            paymentAmunt: 10000,
            paymentmode: "Google Pay",
        },
        {
            id: 3,
            date: "27 March 2025",
            paymentAmunt: 1000,
            paymentmode: "Case",
        },
        {
            id: 4,
            date: "27 March 2025",
            paymentAmunt: 500,
            paymentmode: "PhonePay",
        }
    ];

    let [totalPayment, setTotalPayment] = useState(0);

    useEffect(() => {
        const total = transations.reduce((sum, transation) => sum + transation.paymentAmunt, 0);
        setTotalPayment(total);
    }, []);

    return (
        <>
                <Navbar />
            <div className="work-container">
                <WorkCard />
                <div className="table-wrapper">
                    <table className="transaction-table">
                        <thead>
                            <tr>
                                <th >Sl.</th>
                                <th >Date</th>
                                <th >Mode</th>
                                <th >Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transations.map((transation, index) => (
                                <tr key={index}>

                                    <td >
                                        <div>
                                            <div className="name">{transation.id}</div>
                                        </div>
                                    </td>

                                    <td >
                                        <div className="name">{transation.date}</div>
                                    </td>
                                    <td >
                                        <div className="name">{transation.paymentmode}</div>
                                    </td>
                                    <td >
                                        <div className="name">₹{transation.paymentAmunt}</div>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="money-calculation">
                    <div className="money-calculation-right">
                        <div className="money-calculation-item">
                            <strong>Total Payment:</strong> ₹{totalPayment}
                        </div>
                        <div className="money-calculation-item">
                            <strong>Total Remaining:</strong> ₹{30000-totalPayment}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
};


export default TransactionTable;