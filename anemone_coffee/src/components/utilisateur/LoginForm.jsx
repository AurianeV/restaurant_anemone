import React, { useState } from 'react';
import axios from 'axios';

const LogInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/utilisateur/login', {
        email: formData.email,
        password: formData.password
      });
      console.log(response.data);
      if (response.data.success) {
        // Stocker le token JWT dans le localStorage
      localStorage.setItem('jwtToken', response.data.token);
      window.location.href = '/user-account'; // Redirection vers la page du compte utilisateur

        alert('Connexion réussie !');
      } else {
        alert('Identifiants incorrects.');
      }
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire :', error);
      alert('Une erreur est survenue lors de la connexion.');
    }
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
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
