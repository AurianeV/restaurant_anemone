// AdminLoginForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/admin/login', credentials);

      if (response.status === 200) {
        // Si la connexion réussit, on stock le token dans le localStorage
        localStorage.setItem('jwtToken', response.data.token);

        onLogin(response.data.token);
      } else {
        console.error('Échec de la connexion.');
      }
    } catch (error) {
      console.error('Erreur inattendue :', error);
    }
  };

  return (
    <div>
      <h2>Admin connexion</h2>
      <label>Username:</label>
      <input type="text" name="username" value={credentials.username} onChange={handleInputChange} />

      <label>Password:</label>
      <input type="password" name="password" value={credentials.password} onChange={handleInputChange} />

      <button type="button" onClick={handleLogin}>
        Connexion
      </button>
    </div>
  );
};

export default AdminLogin;
