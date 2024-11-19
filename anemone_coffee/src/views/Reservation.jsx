import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/header/Navbar';
import { useTranslation } from 'react-i18next';
import LoginForm from '../components/utilisateur/LoginForm';


const Reservation = ({ navbarProps }) => {
  const { t } = useTranslation();
  const [error, setError] = useState('');

  // Initialisation des données de réservation
  const [reservationData, setReservationData] = useState({
    name: '',
    phone:'',
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
      !reservationData.phone ||
      !reservationData.email ||
      !reservationData.date ||
      !reservationData.number ||
      !reservationData.heure
    ) {
      alert('Veuillez remplir tous les champs.');
      return; 
    }


    try {
      const response = await axios.post('http://localhost:3001/reservations', reservationData, {
      headers: {
        'x-auth-token': token 
      }});

      if (response.data.success) {
        alert('Votre demande de réservation est en attente de confirmation. Merci de vérifier vos mails.')
        console.log('Demande de réservation réussie !');
        setError('')
      } else {
        console.error('Échec de la réservation :', response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
      } else {
          setError('Erreur inattendue.');
      }
  }
  };


  return (
    <>
      <NavBar {...navbarProps} />
      {/*  
        <section className="reservationForm">
          <h2 className="reservationForm_title">{t('reservation.title')}</h2>
          <form>
            <label htmlFor="name" className="reservationForm_label">
              {t('reservation.name')}
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Sarah"
              value={reservationData.name}
              onChange={handleInputChange}
            />

            <label htmlFor="email" className="reservationForm_label">
              {t('reservation.email')}
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

            <label htmlFor="phone" className="reservationForm_label">
              {t('reservation.phone')}
            </label>
            <input id="phone" type="number" name="phone" placeholder="06 00 00 00 00" value={reservationData.phone} onChange={handleInputChange} />


            <label htmlFor="date" className="reservationForm_label">
              {t('reservation.date')}
            </label>
            <input id="date" type="date" name="date" value={reservationData.date} onChange={handleInputChange} />

            <label className="reservationForm_label">{t('reservation.heure')}</label>
            <select name="heure" onChange={handleInputChange} value={reservationData.heure}>
              <option value="">{t('reservation.choixHeure')}</option>
              <optgroup label="Midi">
                <option value="12:00">12:00</option>
                <option value="12:15">12:15</option>
                <option value="12:30">12:30</option>
                <option value="12:45">12:45</option>
                <option value="13:00">13:00</option>
                <option value="13:15">13:15</option>
                <option value="13:30">13:30</option>
                <option value="13:45">13:45</option>
                <option value="14:00">14:00</option>
                <option value="14:15">14:15</option>
              </optgroup>
              <optgroup label="Soir">
                <option value="19:00">19:00</option>
                <option value="19:15">19:15</option>
                <option value="19:30">19:30</option>
                <option value="19:45">19:45</option>
                <option value="20:00">20:00</option>
                <option value="20:15">20:15</option>
                <option value="20:30">20:30</option>
                <option value="20:45">20:45</option>
                <option value="21:00">21:00</option>
                <option value="21:15">21:15</option>
              </optgroup>
            </select>

            <label htmlFor="number" className="reservationForm_label">
              {t('reservation.numberPeople')}
            </label>
            <input id="number" type="number" name="number" value={reservationData.number} onChange={handleInputChange} />
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button className="reservationForm_button" type="button" onClick={handleReservation}>
              {t('reservation.reservation')}
            </button>
          </form>
          </section>
          */}
          <h2> La réservation sera bientôt disponible !</h2>
        
    </>
  );
};

export default Reservation;
