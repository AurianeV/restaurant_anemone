// routes/reservations.js
const express = require('express');
const Reservation = require('../models/Reservation.js');


const router = express.Router();

// Route pour créer une nouvelle réservation (accessible uniquement par les utilisateurs authentifiés)
router.post('/', async (req, res) => {
  const { name, email, date, number, heure } = req.body;
  try {
    const newReservation = new Reservation({
      name,
      email,
      date,
      number,
      reservationTime: heure,
      userId: req.userId
      
    });

    await newReservation.save();

    return res.json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Erreur lors de la réservation.' });
  }
});

module.exports = router;
