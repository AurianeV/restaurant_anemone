import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/header/Navbar';
import { useTranslation } from 'react-i18next';
import LoginForm from '../components/utilisateur/LoginForm';
import SignUpForm from '../components/utilisateur/SignUpForm';


const Reservation = ({ navbarProps }) => {
  const { t } = useTranslation();

  const [reservationData, setReservationData] = useState({
    name: '',
    email: '',
    date: '',
    number: '',
    heure: '',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showReservationForm, setShowReservationForm] = useState(false);


  useEffect(() => {
    // Vérifier si l'utilisateur est connecté en vérifiant la présence du token JWT dans le stockage local
    const checkLoggedInStatus = () => {
      const token = localStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkLoggedInStatus();
  }, []); 

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowReservationForm(true); 

  };

  const handleInputChange = (e) => {
    setReservationData({ ...reservationData, [e.target.name]: e.target.value });
  };

  const handleReservation = async () => {
    // Vérification des champs requis
    if (
      !reservationData.name ||
      !reservationData.email ||
      !reservationData.date ||
      !reservationData.number ||
      !reservationData.heure
    ) {
      alert('Veuillez remplir tous les champs.');
      return; // Arrête la fonction si un champ est vide
    }
    try {
      const response = await axios.post('http://localhost:3001/reservations', reservationData);

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

      <h1>Pour effectuer une réservation merci de créer un compte ! :)</h1>

      {!isLoggedIn && (
        <>
          <LoginForm onLoginSuccess={handleLoginSuccess} />
          <SignUpForm />
        </>
      )}
      {isLoggedIn && showReservationForm && (
        <div className="reservationForm">
          <h2 className="reservationForm_title">{t('reservation.title')}</h2>
          <form>
            <label for="name" className="reservationForm_label">{t('reservation.name')}</label>
            <input id="name" type="text" name="name" placeholder="Doe" value={reservationData.name} onChange={handleInputChange} />

            <label for="email" className="reservationForm_label">Adressse mail :</label>
            <input id="email" type="text" name="email" placeholder="johndoe@gmail.com" value={reservationData.email} onChange={handleInputChange} required />

            <label for="date" className="reservationForm_label">{t('reservation.date')}</label>
            <input id="date" type="date" name="date" value={reservationData.date} onChange={handleInputChange} />

            <label className="reservationForm_label">{t('reservation.heure')}</label>
            <select name="heure" onChange={handleInputChange} value={reservationData.heure}>
              <option value="">{t('reservation.choixHeure')}</option>
              <option value="11:00">11:00 - 12:30</option>
              <option value="12:30">12:30 - 14:00</option>
              <option value="14:00">14:00 - 15:30</option>
            </select>

            <label for="number" className="reservationForm_label">{t('reservation.numberPeople')}</label>
            <input
              id="number"
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
      )}
    </>
  );
};

export default Reservation;
