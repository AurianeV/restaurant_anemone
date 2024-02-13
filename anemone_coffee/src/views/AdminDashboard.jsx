// AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReservationsList from '../components/admin/ReservationsList'
import AdminProfile from '../components/admin/AdminProfile'


const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      // Redirigez l'utilisateur vers la page de connexion s'il n'est pas connecté
      // history.push('/login'); // Vous devez importer history de react-router-dom
    }
  }, []);
  if (!isLoggedIn) {
    return <p>Vous devez être administrateur pour accéder à cette page.</p>;
  }

  // Déconnexion
  const handleLogout = () => {
    // Suppression du token JWT du localStorage
    localStorage.removeItem('jwtToken');
    setIsLoggedIn(false);
    onLogout();
  };

  return (
    <div>
      <button onClick={handleLogout}>Déconnexion</button>
      <h2>Réservations</h2>
      <ReservationsList/>
      <AdminProfile/>

    </div>
  );
};

export default AdminDashboard;
