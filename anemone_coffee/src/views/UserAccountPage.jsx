// UserAccountPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/header/Navbar'


const UserAccountPage = ({ navbarProps }) => {
  const [user, setUser] = useState({});
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordUpdateSuccess, setPasswordUpdateSuccess] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const UserAccountInfo = async () => {
    try {
      const response = await axios.get('http://localhost:3001/utilisateur/account', {headers:{
        "x-auth-token": localStorage.getItem('jwtToken')
      }});
      
      setUser(response.data);
      setIsLoggedIn(true); 

    } catch (error) {
      console.error('Error fetching user account info:', error);
      setIsLoggedIn(false); 

    }
  };

  const handlePasswordChange = async () => {
    if (newPassword !== confirmNewPassword) {
        alert('Les mots de passe ne correspondent pas.');
        return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
    if (!passwordRegex.test(newPassword)) {
        alert('Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.');
        return;
    }

    try {
        await axios.put('http://localhost:3001/utilisateur/update-password', { newPassword });
        setPasswordUpdateSuccess(true);
        setNewPassword('')
        setConfirmNewPassword('')


    } catch (error) {
        console.error('Erreur lors de la mise à jour du mot de passe :', error);
        alert('Erreur lors de la mise à jour du mot de passe. Veuillez réessayer.');
    }
};

  const handleLogout = () => {
    console.log('Déconnexion en cours...');
    
    // Supprimer le jeton JWT du stockage local
    localStorage.removeItem('jwtToken');
      setIsLoggedIn(false);
    // Vider les données de l'utilisateur
    setUser('');
    
    // Rediriger l'utilisateur vers la page de connexion
    window.location.href = '/user'; 
  };
  
  
  

  useEffect(() => {
    UserAccountInfo();
  }, []);



  return (
    <>
      <NavBar {...navbarProps} />
      {isLoggedIn ? (
      <section className="user-account-page">
        <button onClick={handleLogout}>Déconnexion</button>

        <h1>Compte utilisateur</h1>
        {user && (
          <div>
            <h2>Information de l'utilisateur</h2>
            <p>Email: {user.email}</p>

            <label htmlFor="newPassword">Modifier mon mot de passe :</label>
            <input
              id="newPassword"
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              id="newPassword"
              type="password"
              placeholder="Confirm New Password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            <button onClick={handlePasswordChange}>Changement de mot de passe</button>
            {passwordUpdateSuccess && <p style={{ color: 'green' }}><strong>Mot de passe modifié avec succès.</strong></p>}
          </div>
        )}
      </section>
      ) : (
      <p><strong>Merci de vous connecter pour accéder à cette page </strong></p>
      )}
    </>
  );
};


export default UserAccountPage;
