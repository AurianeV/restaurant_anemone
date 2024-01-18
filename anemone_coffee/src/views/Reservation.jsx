import React, { useState } from 'react';
import axios from 'axios'

const Reservation = () => {
  const [reservationData, setReservationData] = useState({
    name: '',
    date: '',
    tableNumber: '',
    heure: '',
  });

  const handleInputChange = (e) => {
    setReservationData({ ...reservationData, [e.target.name]: e.target.value });
  };

  const handleReservation = async () => {
    try {
      const response = await axios.post('http://localhost:3001/reservations', reservationData);

      if (response.status === 200) {
        console.log('Réservation réussie !')
      } else {
        console.error('Échec de la réservation.')
      }
    } catch (error) {
      console.error('Erreur inattendue :', error)
    }
  }

  return (
    <div>
      <h2>Réserver une table</h2>
      <form>
        <label>Nom :</label>
        <input type="text" name="name" value={reservationData.name} onChange={handleInputChange} />

        <label>Date :</label>
        <input type="date" name="date" value={reservationData.date} onChange={handleInputChange} />

        <label>Heure :</label>
        <select name="heure" onChange={handleInputChange} value={reservationData.heure}>
          <option value="">Choisissez une heure</option>
          <option value="11:00">11:00 - 12:30 (30 places)</option>
          <option value="12:30">12:30 - 14:00 (30 places)</option>
          <option value="14:00">14:00 - 15:30 (30 places)</option>
        </select>

        <label>Nombre de personnes :</label>
        <input
          type="number"
          name="tableNumber"
          value={reservationData.tableNumber}
          onChange={handleInputChange}
        />

        <button type="button" onClick={handleReservation}>
          Réserver
        </button>
      </form>
    </div>
  );
};

export default Reservation;
