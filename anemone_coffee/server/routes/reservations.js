// routes/reservations.js
const express = require('express');
const Reservation = require('../models/Reservation.js');
const {authUserAdmin} = require('../middleware/authUserAdmin.js')
const sendMail = require('../services/mailer.js');
require('dotenv').config();
const router = express.Router();

// Route pour créer une nouvelle réservation (accessible uniquement par les utilisateurs ou admin authentifiés)
router.post('/', async (req, res) => {

  const { name, phone, email, date, number, heure } = req.body;
  try {
    const newReservation = new Reservation({
      name,
      email,
      phone,
      date,
      number,
      reservationTime: heure,
      userId: req.user
      
    });

    if (number > 6) {
      return res.status(400).json({ success: false, message: 'Pour les groupes supérieurs à 6 personnes, veuillez nous contacter par mail : anemonecafe95@gmail.com' });
    } else if (number < 1 ) {
      return res.status(400).json({ success: false, message: 'Le nombre de personne doit être supérieur ou égal à 1 pour effectuer une réservation.' });
    } else if ( phone.length !== 10 ) {
      return res.status(400).json({ success: false, message: "Le numéro de téléphone n'est pas valide." });
    }

   
    await newReservation.save();
    await sendMail(
      email,
      'Anémone Café - Réservation en attente',
      `Bonjour ${name},\n\nVotre demande de réservation du ${new Date(date).toLocaleDateString()} à ${heure} a bien été prise en compte, nous la traitons dans les plus bref délais.\n\nÀ très vite.`
    );
    return res.json({ success: true });

    

  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Erreur lors de la réservation.' });
  }
});

module.exports = router;
