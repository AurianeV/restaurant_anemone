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
    if (
      !userData.username ||
      !userData.password 
    ) {
      alert('Veuillez remplir tous les champs.');
      return; 
    }
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
        alert('Identifiants ou mot de passe incorrects.');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
      } else {
          setError('Erreur inattendue.');
      }
  }
  };

  return (
   
        <section>
          <form className="loginForm" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <label htmlFor="username" className="loginForm_label">Identifiant:</label>
            <input id="username" type="text" name="username" value={userData.username} onChange={handleInputChange} />

            <label htmlFor="password" className="loginForm_label">Password:</label>
            <input id="password" className="loginForm_input" type="password" name="password" value={userData.password} onChange={handleInputChange} />

            <button className="loginForm_button" type="submit">
              Connexion
            </button>
          </form>
        </section>
      
  );
};

export default LoginForm;
