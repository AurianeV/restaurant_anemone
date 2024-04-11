import React, { useState } from 'react';
import axios from 'axios';
import './form.scss'


const SignUpForm = ({ onSignUpSuccess }) => {
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
      const response = await axios.post('http://localhost:3001/utilisateur/register', formData);
      console.log(response.data);
      if (response.status === 201) {
        alert('Inscription réussie !');
        onSignUpSuccess();
      } else {
        alert('Erreur lors de l\'inscription.');
      }
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire :', error);
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('Une erreur est survenue lors de l\'inscription.');
      }
    }
  };

  return (
    <form className="registerForm" onSubmit={handleSubmit}>
      <h2 className="registerForm_title">Création d'un compte utilisateur</h2>

      <label htmlFor="email" className="registerForm_label"> Adresse mail :</label>
      <input id="email" type="email" name="email" placeholder="Adresse e-mail" value={formData.email} onChange={handleChange} />

      <label htmlFor="password" className="registerForm_label"> Mot de passe :</label>
      <input id="password" type="password" name="password" placeholder="Mot de passe" value={formData.password} onChange={handleChange} />
      
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default SignUpForm;
