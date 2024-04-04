// AuthPage.js
import React from 'react';
import {useState} from 'react'
import LogInForm from '../components/utilisateur/LoginForm';
import SignUpForm from '../components/utilisateur/SignUpForm';
import NavBar from '../components/header/Navbar'

const UserPage = ({ navbarProps }) => {
    const [showLoginForm, setShowLoginForm] = useState(false); // État pour afficher le formulaire de connexion après l'inscription

    const handleSignUpSuccess = () => {
      setShowLoginForm(true); 
    };
  
    return (
        <>
        <NavBar {...navbarProps} />
        <div className="auth-container">
            <h1>Bienvenue !</h1>
            {!showLoginForm ? (
                <div className="form-group">
                    <SignUpForm onSignUpSuccess={handleSignUpSuccess} />
                    <p>Vous avez déjà un compte? <button onClick={() => setShowLoginForm(true)}>Connectez-vous</button></p>
                </div>
            ) : (
                <div className="form-group">
                    <h2>Se connecter :</h2>
                    <LogInForm />
                </div>
            )}
        </div>
        </>
    );
};

export default UserPage;
