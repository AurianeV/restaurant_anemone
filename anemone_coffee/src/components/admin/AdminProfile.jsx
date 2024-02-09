// AdminProfile.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminProfile = () => {
  const [adminProfile, setAdminProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdminProfile = async () => {
      try {
        const token = localStorage.getItem('adminToken'); // Récupérer le token JWT du stockage local

        const response = await axios.get('http://localhost:3001/admin/profile', {
          headers: {
            'x-auth-token': token // Envoyer le token JWT dans les en-têtes de la requête
          }
        });
        setAdminProfile(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération du profil de l\'administrateur :', error);
        setError('Une erreur s\'est produite lors de la récupération du profil de l\'administrateur.');
      }
    };

    fetchAdminProfile();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!adminProfile) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <h2>Profil de l'administrateur</h2>
      <p>Bonjour {adminProfile.username}</p>
    </div>
  );
};

export default AdminProfile;
