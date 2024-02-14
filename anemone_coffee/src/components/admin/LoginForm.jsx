import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  // Verifier que nous sommes bien connecté 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/admin/login', userData);

      if (response.status === 200) {
        // Si la connexion réussit, on stocke le token dans le localStorage
        console.log('Connexion réussi !');

        localStorage.setItem('jwtToken', response.data.token);

        // Effacer les messages d'erreur en cas de succès
        setError('');
        setIsLoggedIn(true);
        onLogin(response.data.token);


      } else {
        // Gérer les autres réponses ici si nécessaire
        console.error('Échec de la connexion.');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('Erreur inattendue.');
      }
      console.error('Erreur lors de la connexion :', error);
    }
  };

  return (
   
        <>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="loginForm">
            <label className="loginForm_label">Identifiant:</label>
            <input type="text" name="username" value={userData.username} onChange={handleInputChange} />

            <label className="loginForm_label">Password:</label>
            <input className="loginForm_input" type="password" name="password" value={userData.password} onChange={handleInputChange} />

            <button className="loginForm_button" type="button" onClick={handleLogin}>
              Connexion
            </button>
          </div>
        </>
      
  );
};

export default LoginForm;
