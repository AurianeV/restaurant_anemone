// client/src/views/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Effectuez une requête HTTP GET pour récupérer les réservations
    const fetchReservations = async () => {
      try {
        const response = await fetch('http://localhost:3000/reservations');
        if (response.ok) {
          const data = await response.json();
          setReservations(data);
        } else {
          console.error('Échec de la récupération des réservations.');
        }
      } catch (error) {
        console.error('Erreur inattendue :', error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div>
      <h2>Tableau de bord de l'administrateur</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Date</th>
            <th>Numéro de table</th>
            <th>Heure de réservation</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation._id}>
              <td>{reservation.name}</td>
              <td>{reservation.date}</td>
              <td>{reservation.tableNumber}</td>
              <td>{reservation.reservationTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
