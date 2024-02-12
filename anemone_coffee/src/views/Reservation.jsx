import React, { useState } from 'react';
import axios from 'axios'
import NavBar from '../components/header/Navbar'
import { useTranslation } from 'react-i18next';

const Reservation = ({navbarProps}) => {
  const { t } = useTranslation();

  const [reservationData, setReservationData] = useState({
    name: '',
    email:'',
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
      <h2 className="reservationForm_title">{t('reservation.title')}</h2>
      <form> 
        <label className="reservationForm_label">{t('reservation.name')}</label>
        <input type="text" name="name" placeholder="Doe" value={reservationData.name} onChange={handleInputChange} />

        {/*<label className="reservationForm_label">Adressse mail :</label>
        <input type="text" name="email" placeholder="johndoe@gmail.com" value={reservationData.email} onChange={handleInputChange} required />*/}


        <label className="reservationForm_label">{t('reservation.date')}</label>
        <input type="date" name="date" value={reservationData.date} onChange={handleInputChange} />

        <label className="reservationForm_label">{t('reservation.heure')}</label>
        <select name="heure" onChange={handleInputChange} value={reservationData.heure}>
          <option value="">{t('reservation.choixHeure')}</option>
          <option value="11:00">11:00 - 12:30</option>
          <option value="12:30">12:30 - 14:00</option>
          <option value="14:00">14:00 - 15:30</option>
        </select>

        <label className="reservationForm_label">{t('reservation.numberPeople')}</label>
        <input
          type="number"
          name="number"
          value={reservationData.number}
          onChange={handleInputChange}
        />

        <button className="reservationForm_button" type="button" onClick={handleReservation}>
        {t('reservation.reservation')}
        </button>
      </form>
    </div>
    </>
  );
};

export default Reservation;
