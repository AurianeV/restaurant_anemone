// AdminProfile.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminProfile = () => {
  const [adminProfile, setAdminProfile] = useState([]);
  const [newUsername, setNewUsername] = useState('');

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
      } catch (error) {
        console.error('Erreur lors de la mise à jour du nom d\'utilisateur :', error);
        setError('Une erreur s\'est produite lors de la mise à jour du nom d\'utilisateur.');
      }
    };
    

    useEffect(() => {
      fetchAdminProfile();
    }, []);


  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Profil de l'administrateur</h2>
      <ul>
        {adminProfile.map((data) => (
          <li key={data._id}>
            <p>Bonjour {data.username}</p>
            
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => {
  e.preventDefault();
  updateUsername();
}}>
  <label htmlFor="newUsername">Modifier mon identifiant :</label>
  <input type="text" id="newUsername" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
  <button type="submit">Mettre à jour</button>
</form>

    </div>
  );
};

export default AdminProfile;
