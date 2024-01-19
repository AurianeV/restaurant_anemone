import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:3001/admin/register', credentials);

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
        <div>
            <h2>Admin Registration</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <label>Username:</label>
            <input type="text" name="username" value={credentials.username} onChange={handleInputChange} />

            <label>Password:</label>
            <input type="password" name="password" value={credentials.password} onChange={handleInputChange} />

            <button type="button" onClick={handleRegister}>
                Register
            </button>
        </div>
    );
};

export default RegisterForm;
