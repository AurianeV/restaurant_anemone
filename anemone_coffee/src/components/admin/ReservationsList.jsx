import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReservationsList.scss';

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);

  const fetchReservations = async () => {
    try {
      const response = await axios.get('http://localhost:3001/admin/dashboard', {
        headers: {
          "x-auth-token": localStorage.getItem('jwtToken')
        }
      });
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
      await axios.post(`http://localhost:3001/admin/dashboard/reservations/${reservation._id}`);
      fetchReservations();
    } catch (error) {
      console.error('Erreur lors de l\'acceptation de la réservation :', error);
    }
  };

  const handleReject = async (reservation) => {
    try {
      await axios.delete(`http://localhost:3001/admin/dashboard/reservations/${reservation._id}`);
      fetchReservations();
    } catch (error) {
      console.error('Erreur lors du refus de la réservation :', error);
    }
  };

  return (
    <section className="reservation-list">
      <h2 className="reservation-list-title">Liste des réservations</h2>
      {error && <p className="error-message">{error}</p>}
      {reservations.length === 0 ? (
        <p className="no-reservations">Aucune réservation trouvée.</p>
      ) : (
        <ul className="reservation-items">
          {reservations.map((reservation) => (
            <li key={reservation._id} className={`reservation-item ${reservation.status}`}>
              <div className="reservation-details">
                <p><strong>Nom:</strong> {reservation.name}</p>
                <p><strong>Email:</strong> {reservation.email}</p>
                <p><strong>Date:</strong> {new Date(reservation.date).toLocaleDateString()}</p>
                <p><strong>Heure:</strong> {reservation.reservationTime}</p>
                <p><strong>Nombre de personnes:</strong> {reservation.number}</p>
              </div>
              <div className="reservation-actions">
                {reservation.status === 'pending' && (
                  <>
                    <button className="acceptButton" onClick={() => handleAccept(reservation)}>Accepter</button>
                    <button className="rejectButton" onClick={() => handleReject(reservation)}>Refuser</button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ReservationList;
