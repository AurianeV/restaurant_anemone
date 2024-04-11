// RegisterForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../../App.css'

const RegisterForm = ({ onSignUpSuccess }) => {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleRegister = async () => {
        if (
            !userData.username ||
            !userData.password 
          ) {
            alert('Veuillez remplir tous les champs.');
            return; 
          }
        try {
            const response = await axios.post('http://localhost:3001/admin/register', userData);

            if (response.status === 201) {
                alert('Votre compte a bien été créé ! Vous pouvez maintenant vous connecter.')
                console.log('Enregistrement réussi !');
                onSignUpSuccess();
            } else {
                console.error('Échec de l\'enregistrement.');
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
        <section className="registerForm">
            <h2 className="registerForm_title">Création compte administrateur</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <label htmlFor="username" className="registerForm_label"> Identifiant:</label>
            <input id="username" type="text" name="username" value={userData.username} onChange={handleInputChange} />

            <label htmlFor="password" className="registerForm_label">Mot de passe:</label>
            <input id="password" className="registerForm_input" type="password" name="password" value={userData.password} onChange={handleInputChange} />

            <button className="registerForm_button" type="button" onClick={handleRegister}>
                Enregistrer
            </button>
        </section>
    );
};

export default RegisterForm;
