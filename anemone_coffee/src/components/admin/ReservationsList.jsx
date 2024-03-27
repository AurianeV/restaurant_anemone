import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReservationsList.scss'

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);

  const fetchReservations = async () => {
    try {
      const response = await axios.get('http://localhost:3001/admin/dashboard', {headers:{
        "x-auth-token": localStorage.getItem('jwtToken')
      }});
      setReservations(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des réservations :', error);
      setError('Une erreur s\'est produite lors de la récupération des réservations.');
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const handleAccept = async (reservation) => {
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
  };
  

  return (
    <div className="reservation-list">
      <h2 className="reservation-list-title">Liste des réservations</h2>
      {error && <p className="error-message">{error}</p>}
      {reservations.length === 0 ? (
        <p className="no-reservations">Aucune réservation trouvée.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Date</th>
              <th>Heure</th>
              <th>Nombre de personnes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation._id}>
                <td>{reservation.name}</td>
                <td>{reservation.email}</td>
                <td>{new Date(reservation.date).toLocaleDateString()}</td>
                <td>{reservation.reservationTime}</td>
                <td>{reservation.number}</td>
                <td>
                  <button onClick={() => handleAccept(reservation)}>Accepter</button>
                  <button onClick={() => handleReject(reservation)}>Refuser</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReservationList;
