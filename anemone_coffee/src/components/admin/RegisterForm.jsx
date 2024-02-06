// RegisterForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../../App.css'

const RegisterForm = () => {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:3001/admin/register', userData);

            if (response.status === 201) {
                console.log('Enregistrement réussi !');
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
        <div className="registerForm">
            <h2 className="registerForm_title">Création compte administrateur</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <label className="registerForm_label"> Identifiant:</label>
            <input type="text" name="username" value={userData.username} onChange={handleInputChange} />

            <label className="registerForm_label">Mot de passe:</label>
            <input className="registerForm_input" type="password" name="password" value={userData.password} onChange={handleInputChange} />

            <button className="registerForm_button" type="button" onClick={handleRegister}>
                Enregistrer
            </button>
        </div>
    );
};

export default RegisterForm;
