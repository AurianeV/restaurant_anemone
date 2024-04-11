import React, { useState } from 'react';
import axios from 'axios';
import './form.scss'
import { Link } from 'react-router-dom'


const LogInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.email ||
      !formData.password 
    ) {
      alert('Veuillez remplir tous les champs.');
      return; 
    }
    try {
      const response = await axios.post('http://localhost:3001/utilisateur/login', {
        email: formData.email,
        password: formData.password
      });
      console.log(response.data);
      if (response.data.success) {
        // Stocker le token JWT dans le localStorage
      localStorage.setItem('jwtToken', response.data.token);
      window.location.href = '/user-account'; 

        alert('Connexion réussie !');
      } else {
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
    <form className="loginForm" onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <h2 className="registerForm_title">J'ai déjà un compte, je me connecte</h2>

      <label htmlFor="email" className="registerForm_label"> Adresse mail :</label>
      <input id="email" type="email" name="email" placeholder="Adresse e-mail" value={formData.email} onChange={handleChange} />

      <label htmlFor="password" className="registerForm_label"> Mot de passe :</label>
      <input id="password" type="password" name="password" placeholder="Mot de passe" value={formData.password} onChange={handleChange} />
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default LogInForm;
