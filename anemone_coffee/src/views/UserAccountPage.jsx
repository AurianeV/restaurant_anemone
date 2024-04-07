// UserAccountPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/header/Navbar'
import UserPage from './UserPage'


const UserAccountPage = ({ navbarProps }) => {
  const [user, setUser] = useState({});
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordUpdateSuccess, setPasswordUpdateSuccess] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const fetchUserAccountInfo = async () => {
    try {
      const response = await axios.get('http://localhost:3001/utilisateur/account', {headers:{
        "x-auth-token": localStorage.getItem('jwtToken')
      }});
      
      setUser(response.data);
      setIsLoggedIn(true); 

    } catch (error) {
      console.error('Error fetching user account info:', error);
      setIsLoggedIn(false); // Mettre à jour l'état isLoggedIn à false en cas d'erreur

    }
  };

  const handlePasswordChange = async () => {
    if (newPassword !== confirmNewPassword) {
      alert('Passwords do not match.');
      return;
    }
    try {
      await axios.put('http://localhost:3001/utilisateur/account', { newPassword });
      setPasswordUpdateSuccess(true);
    } catch (error) {
      console.error('Error updating password:', error);
      alert('Error updating password. Please try again.');
    }
  };

  const handleLogout = () => {
    // Ajoutez un message de débogage pour vérifier si la fonction est appelée
    console.log('Déconnexion en cours...');
    
    // Supprimer le jeton JWT du stockage local
    localStorage.removeItem('jwtToken');
    
    // Mettre à jour l'état isLoggedIn à false lorsque l'utilisateur se déconnecte
    setIsLoggedIn(false);
    
    // Vider les données de l'utilisateur
    setUser('');
    
    // Rediriger l'utilisateur vers la page de connexion
    //window.location.href = '/user'; // Assurez-vous que l'URL de redirection est correcte
  };
  
  
  

  useEffect(() => {
    // Fetch user account info when component mounts
    fetchUserAccountInfo();
  }, []);


  if (!isLoggedIn) {
    return <p>Merci de vous connecter pour accéder à cette page </p> 
  }

  return (
      <>
    <NavBar {...navbarProps} />
    <div className="user-account-page">
    <button onClick={handleLogout}>Déconnexion</button>

      <h1>Compte utilisateur</h1>
      {user && (
        <div>
          <h2>Information de l'utilisateur</h2>
          <p>Email: {user.email}</p>

          <h2>Changement de mot de passe</h2>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <button onClick={handlePasswordChange}>Changement de mot de passe</button>
          {passwordUpdateSuccess && <p>Mot de passe modifié avec succès.</p>}
        </div>
      )}
    </div>
    </>
  );
};


export default UserAccountPage;
