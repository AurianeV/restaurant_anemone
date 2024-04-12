import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/header/Navbar';
import { useTranslation } from 'react-i18next';
import LoginForm from '../components/utilisateur/LoginForm';


const Reservation = ({ navbarProps }) => {
  const { t } = useTranslation();

  // Initialisation des données de réservation
  const [reservationData, setReservationData] = useState({
    name: '',
    email: '',
    date: '',
    number: '',
    heure: '',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  //Vérification de la connexion
  useEffect(() => {
    const token = localStorage.getItem('jwtToken');

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  //Gestion des changements de saisie
  const handleInputChange = (e) => {
    setReservationData({ ...reservationData, [e.target.name]: e.target.value });
  };

  //Gestion de la réservation
  const handleReservation = async () => {
    const token = localStorage.getItem('jwtToken');

    // Vérification des champs requis
    if (
      !reservationData.name ||
      !reservationData.email ||
      !reservationData.date ||
      !reservationData.number ||
      !reservationData.heure
    ) {
      alert('Veuillez remplir tous les champs.');
      return; 
    }

    if(number.value < 1) {
      alert('Vous devez être au moins une personne pour réserver une table.');
      return; 
    }
    try {
      const response = await axios.post('http://localhost:3001/reservations', reservationData, {
      headers: {
        'x-auth-token': token 
      }});

      if (response.data.success) {
        alert('Réservation réussie !')
        console.log('Réservation réussie !');
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
      {isLoggedIn ? (
        <div className="reservationForm">
          <h2 className="reservationForm_title">{t('reservation.title')}</h2>
          <form>
            <label htmlFor="name" className="reservationForm_label">
              {t('reservation.name')}
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Doe"
              value={reservationData.name}
              onChange={handleInputChange}
            />

            <label htmlFor="email" className="reservationForm_label">
              Adresse mail :
            </label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="johndoe@gmail.com"
              value={reservationData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="date" className="reservationForm_label">
              {t('reservation.date')}
            </label>
            <input id="date" type="date" name="date" value={reservationData.date} onChange={handleInputChange} />

            <label className="reservationForm_label">{t('reservation.heure')}</label>
            <select name="heure" onChange={handleInputChange} value={reservationData.heure}>
              <option value="">{t('reservation.choixHeure')}</option>
              <option value="11:00">11:00 - 12:30</option>
              <option value="12:30">12:30 - 14:00</option>
              <option value="14:00">14:00 - 15:30</option>
            </select>

            <label htmlFor="number" className="reservationForm_label">
              {t('reservation.numberPeople')}
            </label>
            <input id="number" type="number" name="number" value={reservationData.number} onChange={handleInputChange} />

            <button className="reservationForm_button" type="button" onClick={handleReservation}>
              {t('reservation.reservation')}
            </button>
          </form>
        </div>
      ) : (
        <div>
          <p>Merci de vous connecter pour effectuer une réservation.</p>
          <LoginForm /> 
        </div>
      )}
    </>
  );
};

export default Reservation;
