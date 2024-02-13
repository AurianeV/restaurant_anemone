// AdminProfile.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminProfile = () => {
  const [adminProfile, setAdminProfile] = useState([]);
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

    useEffect(() => {
      fetchAdminProfile();
    }, []);


  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Profil de l'administrateur</h2>
      <p>Bonjour {adminProfile.username}</p>
      <ul>
        {adminProfile.map((data) => (
          <li key={data._id}>
            <p>Nom : {data.username}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminProfile;
