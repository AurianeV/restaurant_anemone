// AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReservationsList from '../components/admin/ReservationsList'
import AdminProfile from '../components/admin/AdminProfile'
import NavBar from '../components/header/Navbar'

const AdminDashboard = ({ navbarProps }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeOnglet, setActiveOnglet] = useState('reservations'); 

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
      <NavBar {...navbarProps} />
      <button onClick={handleLogout}>Déconnexion</button>
      <div>
        <button onClick={() => setActiveOnglet('reservations')}>Liste des réservations</button>
        <button onClick={() => setActiveOnglet('profile')}>Profil de l'administrateur</button>
      </div>

      {activeOnglet === 'reservations' && <ReservationsList />}
      {activeOnglet === 'profile' && <AdminProfile />}

    </div>
  );
};

export default AdminDashboard;
