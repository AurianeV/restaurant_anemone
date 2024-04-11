// AdminProfile.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminProfile = () => {
  const [adminProfile, setAdminProfile] = useState([]);
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');


  const [error, setError] = useState(null);

    const fetchAdminProfile = async () => {
      try {

        const response = await axios.get('http://localhost:3001/admin/profile', {headers:{
          "x-auth-token": localStorage.getItem('jwtToken')
        }});
        setAdminProfile(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération du profil de l\'administrateur :', error);
        setError('Une erreur s\'est produite lors de la récupération du profil de l\'administrateur.');
      }
    };

    const updateUsername = async () => {
      if (!newUsername) {
        alert('Le champ du nouvel identifiant ne peut pas être vide.');
        return;
      }
      try {
        await axios.put('http://localhost:3001/admin/profile', {
          username: newUsername
        }, {
          headers: {
            "x-auth-token": localStorage.getItem('jwtToken')
          }
        });
        // Mettre à jour le profil après la mise à jour du nom d'utilisateur
        fetchAdminProfile();
        // Réinitialiser le champ du nouveau nom d'utilisateur
        setNewUsername('');
        alert('Votre identifiant a bien été modifié.')
      } catch (error) {
        console.error('Erreur lors de la mise à jour du nom d\'utilisateur :', error);
        setError('Une erreur s\'est produite lors de la mise à jour du nom d\'utilisateur.');
      }
    };

    const updatePassword = async () => {
      try {
        await axios.put('http://localhost:3001/admin/profile', {
          password: newPassword
        }, {
          headers: {
            "x-auth-token": localStorage.getItem('jwtToken')
          }
        });
        setNewPassword('');
        // Mettre à jour le profil après la mise à jour du mot de passe
        fetchAdminProfile();
      } catch (error) {
        console.error('Erreur lors de la mise à jour du mot de passe :', error);
        setError('Une erreur s\'est produite lors de la mise à jour du mot de passe.');
      }
    };

    useEffect(() => {
      fetchAdminProfile();
    }, []);


  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="admin-profile">
        {adminProfile.map((data) => (
          <li key={data._id}>
            <h2 className="admin-profile-title">Bonjour {data.username}</h2>
            
          </li>
        ))}
      <form onSubmit={(e) => {e.preventDefault(); updateUsername()}}>
        <label for="newUsername">Modifier mon identifiant :</label>
        <input type="text" id="newUsername" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
        <button type="submit">Mettre à jour</button>
      </form>
      {/*
      <form onSubmit={(e) => {
        e.preventDefault();
        updatePassword();
      }}>
        <label htmlFor="newPassword">Modifier mon mot de passe :</label>
        <input type="password" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <button type="submit">Mettre à jour</button>
      </form>
    */}

    </div>
  );
};

export default AdminProfile;
