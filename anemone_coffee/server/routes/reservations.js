// routes/reservations.js
const express = require('express');
const Reservation = require('../models/Reservation.js');
const {authUserAdmin} = require('../middleware/authUserAdmin.js')

const router = express.Router();

// Route pour créer une nouvelle réservation (accessible uniquement par les utilisateurs ou admin authentifiés)
router.post('/', authUserAdmin, async (req, res) => {

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
    }

    await newReservation.save();

    return res.json({ success: true });

    

  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Erreur lors de la réservation.' });
  }
});

module.exports = router;
