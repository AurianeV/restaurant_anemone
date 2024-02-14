import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      {reservations.length === 0 && <p className="no-reservations">Aucune réservation trouvée.</p>}
      <ul className="reservation-items">
        {reservations.map((reservation) => (
          <li key={reservation._id} className="reservation-item">
            <p className="reservation-detail"><span className="detail-label">Nom:</span> {reservation.name}</p>
            <p className="reservation-detail"><span className="detail-label">Email:</span> {reservation.email}</p>
            <p className="reservation-detail"><span className="detail-label">Date:</span> {new Date(reservation.date).toLocaleDateString()}</p>
            <p className="reservation-detail"><span className="detail-label">Heure:</span> {reservation.reservationTime}</p>
            <p className="reservation-detail"><span className="detail-label">Nombre de personnes:</span> {reservation.number}</p>
            <div className="reservation-actions">
              <button className="accept-button" onClick={() => handleAccept(reservation)}>Accepter</button>
              <button className="reject-button" onClick={() => handleReject(reservation)}>Refuser</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationList;
