import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const AddEditTransactionDialog = ({ open, onClose, transaction, onSave }) => {
    const [date, setDate] = useState(transaction ? transaction.date : '');
    const [paymentMode, setPaymentMode] = useState(transaction ? transaction.paymentMode : '');
    const [amount, setAmount] = useState(transaction ? transaction.amount : '');
    const [purpose, setPurpose] = useState(transaction ? transaction.purpose : '');

    const handleSave = () => {
        const newTransaction = {
            date,
            paymentMode,
            amount,
            purpose,
        };
        onSave(newTransaction);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{transaction ? 'Edit Transaction' : 'Add Transaction'}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Transaction Date"
                    type="date"
                    fullWidth
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    margin="dense"
                    label="Payment Mode"
                    type="text"
                    fullWidth
                    value={paymentMode}
                    onChange={(e) => setPaymentMode(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Amount"
                    type="number"
                    fullWidth
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Purpose"
                    type="text"
                    fullWidth
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSave} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddEditTransactionDialog;