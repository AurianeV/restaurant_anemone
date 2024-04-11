// AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReservationsList from '../components/admin/ReservationsList'
import AdminProfile from '../components/admin/AdminProfile'
import NavBar from '../components/header/Navbar'

const AdminDashboard = ({ navbarProps }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeOnglet, setActiveOnglet] = useState('reservations'); 

  const decodeToken = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const decodedToken = decodeToken(token);
      if (decodedToken.role === 'admin') {
        setIsLoggedIn(true);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  

  // Déconnexion
  const handleLogout = () => {
    // Suppression du token JWT du localStorage
    localStorage.removeItem('jwtToken');
    setIsLoggedIn(false);
    onLogout();
  };

  return (
    <>
      <NavBar {...navbarProps} />
      {isLoggedIn ? (
         <div>
          <button onClick={handleLogout}>Déconnexion</button>
          <div>
            <button onClick={() => setActiveOnglet('reservations')}>Liste des réservations</button>
            <button onClick={() => setActiveOnglet('profile')}>Profil de l'administrateur</button>
          </div>
    
          {activeOnglet === 'reservations' && <ReservationsList />}
          {activeOnglet === 'profile' && <AdminProfile />}
   
         </div>
      ) : (
        <div>
          <p>Vous devez être administrateur pour accéder à cette page.</p>
        </div>
      )}
  </>
  );
};

export default AdminDashboard;
