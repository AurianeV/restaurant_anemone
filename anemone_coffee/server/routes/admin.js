// routes/admin.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin.js');
const router = express.Router();
const Reservation = require('../models/Reservation.js');
const authenticateAdmin = require('../middleware/auth.js');
const adminController = require('../controller/adminController.js')


const transporter = require('../services/email.js');

// Route pour l'enregistrement d'un nouvel administrateur
router.post('/register', adminController.registerAdmin);

// Route pour la connexion de l'administrateur
router.post('/login', adminController.loginAdmin);

// Route pour obtenir toutes les réservations (accessible uniquement par l'admin)
router.get('/dashboard', adminController.getAllReservations);

// Route pour obtenir les données de profil de l'administrateur (accessible uniquement par l'admin)
router.get('/profile',  authenticateAdmin, adminController.getAdminProfile);

// Route pour modifier les info de l'utilisateur
router.put('/profile',  authenticateAdmin, adminController.updateAdminProfile);

// Route pour modifier son mot de passe
/*router.put('/profile', authenticateAdmin, async (req, res) => {
  try {
    const { password } = req.body;
    const adminId = await Admin.find();
    // Sécurisation mot de passe
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Mettre à jour le mot de passe dans la base de données
    await Admin.findByIdAndUpdate(adminId, { password: hashedPassword });

    res.json({ success: true, message: 'Mot de passe mis à jour avec succès.' });
  } catch (error) {
    console.error('Erreur lors de la mise à jour du mot de passe de l\'administrateur :', error);
    res.status(500).json({ success: false, message: 'Erreur lors de la mise à jour du mot de passe de l\'administrateur.' });
  }
});*/

/*
// Route pour accepter une reservation en tant qu'administrateur
router.post('/dashboard/accept/:reservationId', async (req, res) => {
  try {
    const reservationId = req.params.reservationId;
    const reservation = await Reservation.findById(reservationId);

    if (!reservation) {
      return res.status(404).json({ success: false, message: 'Réservation non trouvée.' });
    }

    const clientEmail = reservation.email;
    
    // Envoi de l'e-mail au client pour informer de l'acceptation de la réservation
    await transporter.sendMail({
      from: 'anemonerestau@gmail.com',
      to: clientEmail,
      subject: 'Confirmation de réservation',
      text: 'Votre réservation a été acceptée. Merci de votre confiance !',
    });
    console.log(clientEmail)

    res.status(200).json({ success: true, message: 'Réservation acceptée avec succès.' });
  } catch (error) {
    console.error('Erreur lors de l\'acceptation de la réservation :', error);
    res.status(500).json({ success: false, message: 'Erreur lors de l\'acceptation de la réservation.' });
  }
});

router.post('/reject/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // Mettre à jour l'état de la réservation pour la refuser
    const reservation = await Reservation.findByIdAndUpdate(id, { accepted: false }, { new: true });
    res.json({ success: true, reservation });
  } catch (error) {
    console.error('Erreur lors du refus de la réservation :', error);
    res.status(500).json({ success: false, message: 'Erreur lors du refus de la réservation.' });
  }
});
*/
module.exports = router;
