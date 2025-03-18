import React from 'react';
import TransactionTable from '../components/TransactionTable';
import '../styles/styles.css';

const MoneyTransactionPage = () => {
    return (
        <div>
            <h1>Money Transactions</h1>
            <TransactionTable />
        </div>
    );
};

export default MoneyTransactionPage;