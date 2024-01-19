// MainAdminPage.jsx
import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


const MainAdminPage = () => {
  const [token, setToken] = useState(null);

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  return (
    <div>
      {token ? (
        <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<AdminDashboard />} />
      </Routes>      
      ) : (
        <>
          <RegisterForm />
          <AdminLogin onLogin={handleLogin} />
        </>
      )}
    </div>
  );
};

export default MainAdminPage;
