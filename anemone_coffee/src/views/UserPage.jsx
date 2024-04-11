// AuthPage.js
import React from 'react';
import {useState, useEffect} from 'react'
import LogInForm from '../components/utilisateur/LoginForm';
import SignUpForm from '../components/utilisateur/SignUpForm';
import NavBar from '../components/header/Navbar'
import axios from 'axios';


const UserPage = ({ navbarProps }) => {
    const [showLoginForm, setShowLoginForm] = useState(false); 
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSignUpSuccess = () => {
      setShowLoginForm(true); 
    };

    const UserAccountInfo = async () => {
        try {
          const response = await axios.get('http://localhost:3001/utilisateur/account', {headers:{
            "x-auth-token": localStorage.getItem('jwtToken')
          }});

          setIsLoggedIn(true); 
          
    
        } catch (error) {
          console.error('Error fetching user account info:', error);
          setIsLoggedIn(false); 
    
        }
      };

      useEffect(() => {
        UserAccountInfo();
      }, []);

      if (isLoggedIn) {
        window.location.href = '/user-account'

      }
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
