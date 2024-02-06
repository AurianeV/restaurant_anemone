import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);

  const fetchReservations = async () => {
    try {
      const response = await axios.get('http://localhost:3001/admin/dashboard');
      setReservations(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des réservations :', error);
      setError('Une erreur s\'est produite lors de la récupération des réservations.');
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  /*const handleAccept = async (reservation) => {
    try {
      const response = await axios.post(`http://localhost:3001/admin/dashboard/accept/${reservation._id}`);
      fetchReservations();
    } catch (error) {
      console.error('Erreur lors de l\'acceptation de la réservation :', error);
    }
  };
  
  const handleReject = async (reservation) => {
    try {
      const response = await axios.post(`http://localhost:3001/admin/dashboard/reject/${reservation._id}`);
      fetchReservations();
    } catch (error) {
      console.error('Erreur lors du refus de la réservation :', error);
    }
  };*/
  

  return (
    <div>
      <h2>Liste des réservations</h2>
      {error && <p>{error}</p>}
      {reservations.length === 0 && <p>Aucune réservation trouvée.</p>}
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation._id}>
            <p>Nom : {reservation.name}</p>
            <p>Email : {reservation.email}</p>
            <p>Date : {new Date(reservation.date).toLocaleDateString()}</p>
            <p>Heure : {reservation.reservationTime}</p>
            <p>Nombre de personnes : {reservation.number}</p>
            {/*<button onClick={() => handleAccept(reservation)}>Accepter</button>
            <button onClick={() => handleReject(reservation)}>Refuser</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationList;
