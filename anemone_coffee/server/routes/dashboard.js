// routes/dashboard.js

const express = require('express');
const Reservation = require('../models/Reservation.js');
const authenticateAdmin = require('../middleware/auth.js');

const router = express.Router();

// Route pour obtenir toutes les réservations (accessible uniquement par l'admin)
router.get('/dashboard', authenticateAdmin, async (req, res) => {
  try {
    const allReservations = await Reservation.find();
    res.json(allReservations);
  } catch (error) {
    console.error('Erreur lors de la récupération des réservations :', error);
    res.status(500).json({ success: false, message: 'Erreur lors de la récupération des réservations.' });
  }
});

// Route pour obtenir les détails d'une réservation spécifique (accessible uniquement par l'admin)
router.get('/:id', authenticateAdmin, async (req, res) => {
  const reservationId = req.params.id;

  try {
    const reservation = await Reservation.findById(reservationId);
    if (!reservation) {
      return res.status(404).json({ success: false, message: 'Réservation non trouvée.' });
    }

    res.json(reservation);
  } catch (error) {
    console.error('Erreur lors de la récupération des détails de la réservation :', error);
    res.status(500).json({ success: false, message: 'Erreur lors de la récupération des détails de la réservation.' });
  }
});

module.exports = router;
