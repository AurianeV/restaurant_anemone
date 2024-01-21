import React, { useState } from 'react';
import axios from 'axios'
import NavBar from '../components/header/Navbar'

const Reservation = ({navbarProps}) => {
  const [reservationData, setReservationData] = useState({
    name: '',
    date: '',
    number: '',
    heure: '',
  });

  const handleInputChange = (e) => {
    setReservationData({ ...reservationData, [e.target.name]: e.target.value });
  };

  const handleReservation = async () => {
    try {
      const response = await axios.post('http://localhost:3001/reservations', reservationData);
  
      if (response.data.success) {
        console.log('Réservation réussie ! Places disponibles :', response.data.placesDisponibles);
      } else {
        console.error('Échec de la réservation :', response.data.message);
      }
    } catch (error) {
      console.error('Erreur inattendue :', error);
    }
  };

  return (
    <>
    <NavBar {...navbarProps} />
    <div className="reservationForm">
      <h2 className="reservationForm_title">Réserver une table</h2>
      <form> 
        <label className="reservationForm_label">Nom :</label>
        <input type="text" name="name" value={reservationData.name} onChange={handleInputChange} />

        <label className="reservationForm_label">Date :</label>
        <input type="date" name="date" value={reservationData.date} onChange={handleInputChange} />

        <label className="reservationForm_label">Heure :</label>
        <select name="heure" onChange={handleInputChange} value={reservationData.heure}>
          <option value="">Choisissez une heure</option>
          <option value="11:00">11:00 - 12:30 (30 places)</option>
          <option value="12:30">12:30 - 14:00 (30 places)</option>
          <option value="14:00">14:00 - 15:30 (30 places)</option>
        </select>

        <label className="reservationForm_label">Nombre de personnes :</label>
        <input
          type="number"
          name="number"
          value={reservationData.number}
          onChange={handleInputChange}
        />

        <button className="reservationForm_button" type="button" onClick={handleReservation}>
          Réserver
        </button>
      </form>
    </div>
    </>
  );
};

export default Reservation;
