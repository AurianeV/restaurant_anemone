// routes/reservations.js

const express = require('express');
const Reservation = require('../models/Reservation.js');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, date, number, heure } = req.body;
  try {
    /* const validHeures = ['11:00', '12:30', '14:00'];
    if (!validHeures.includes(heure)) {
      return res.status(401).json({ success: false, message: 'Heure invalide.' });
    } */

    const newReservation = new Reservation({
      name,
      date,
      number,
      reservationTime: heure,
    });

    await newReservation.save();

    return res.json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Erreur lors de la réservation.' });
  }
});

module.exports = router;
