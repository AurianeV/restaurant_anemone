import React, { useState } from 'react';
import RegisterForm from '../components/admin/RegisterForm'
import LoginForm from '../components/admin/LoginForm';
import AdminDashboard from './AdminDashboard';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import NavBar from '../components/header/Navbar'


const MainAdminPage = ({navbarProps}) => {
  const [token, setToken] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false); 

  const handleLogin = (newToken) => {
    setToken(newToken);
    setLoginSuccess(true);
  };

  const handleShowLoginForm = () => {
    setShowLoginForm(true);
  };

  const handleShowRegisterForm = () => {
    setShowLoginForm(false);
  };

  return (
    <div>
      <NavBar {...navbarProps} />
      {token && loginSuccess ? (
        <Routes>
          <Route path="/" element={<Navigate to="/admin/dashboard" />} />
          <Route path="dashboard" element={<AdminDashboard />} />
        </Routes>
      ) : (
        <>
           <LoginForm onLogin={handleLogin} /> 
        </>
      )}
    </div>
  );
};

export default MainAdminPage;
