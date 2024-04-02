// routes/admin.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin.js');
const router = express.Router();
const Reservation = require('../models/Reservation.js');
const authenticateAdmin = require('../middleware/auth.js');
const adminController = require('../controller/adminController.js')


// Route pour l'enregistrement d'un nouvel administrateur
router.post('/register', adminController.registerAdmin);

// Route pour la connexion de l'administrateur
router.post('/login', adminController.loginAdmin);

// Route pour obtenir toutes les réservations (accessible uniquement par l'admin)
router.get('/dashboard', authenticateAdmin, adminController.getAllReservations);

// Route pour obtenir les données de profil de l'administrateur (accessible uniquement par l'admin)
router.get('/profile',  authenticateAdmin, adminController.getAdminProfile);

// Route pour modifier les info de l'utilisateur
router.put('/profile',  authenticateAdmin, adminController.updateAdminProfile);

// Route pour supprimer une réservation
router.delete('/dashboard/reservations/:id', adminController.deleteReservation);


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

module.exports = router;
