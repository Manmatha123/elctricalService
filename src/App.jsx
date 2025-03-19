import React from 'react';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MoneyTransactionPage from './pages/MoneyTransactionPage';
import UserManagementPage from './pages/UserManagementPage';
import UserProfilePage from './pages/UserProfilePage';
import {Routes,Route} from 'react-router-dom';
import MyWork from './pages/MyWork';

const App = () => {
  return (
    <Routes>
        <Route path="/"  element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/works" element={<MyWork/>} />
        <Route path="/transactions/:id" element={<MoneyTransactionPage/>} />
        <Route path="/users" element={<UserManagementPage/>} />
        <Route path="/profile" element={<UserProfilePage/>} />
    </Routes>
  );
};

export default App;