// routes/reservations.js
const express = require('express');
const Reservation = require('../models/Reservation.js');
const {authUserAdmin} = require('../middleware/authUserAdmin.js')

const router = express.Router();

// Route pour créer une nouvelle réservation (accessible uniquement par les utilisateurs ou admin authentifiés)
router.post('/', authUserAdmin, async (req, res) => {
  console.log('User from middleware:', req.user); 

  const { name, email, date, number, heure } = req.body;
  try {
    const newReservation = new Reservation({
      name,
      email,
      date,
      number,
      reservationTime: heure,
      userId: req.user
      
    });

    await newReservation.save();

    return res.json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Erreur lors de la réservation.' });
  }
});

module.exports = router;
