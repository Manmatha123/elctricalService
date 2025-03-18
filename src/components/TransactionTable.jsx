import React from 'react';

const TransactionTable = ({ transactions, onEdit, onDelete }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Transaction Date</th>
                    <th>Payment Mode</th>
                    <th>Amount</th>
                    <th>Purpose</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction, index) => (
                    <tr key={index}>
                        <td>{transaction.date}</td>
                        <td>{transaction.paymentMode}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.purpose}</td>
                        <td>
                            <button onClick={() => onEdit(transaction)}>Edit</button>
                            <button onClick={() => onDelete(transaction.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionTable;