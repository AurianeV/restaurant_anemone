// AdminDashboard.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('http://localhost:3001/dashboard/all', {
          headers: { 'x-auth-token': localStorage.getItem('jwtToken') },
        });

        setReservations(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des réservations :', error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div>
      <h2>Tableau de bord des réservations</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation._id}>
            <Link to={`/dashboard/${reservation._id}`}>{reservation.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
