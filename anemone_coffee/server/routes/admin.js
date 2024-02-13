// routes/admin.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin.js');
const router = express.Router();
const Reservation = require('../models/Reservation.js');
const authenticateAdmin = require('../middleware/auth.js');

const transporter = require('../services/email.js');

// Enregistrement d'un nouvel admin
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // l'administrateur existe déjà ?
        const existingAdmin = await Admin.findOne({ username });

        if (existingAdmin) {
            return res.status(400).json({ success: false, message: 'Cet administrateur existe déjà.' });
        }

        if (password.length < 8) {
            return res.status(400).json({ success: false, message: 'Le mot de passe doit contenir au moins 8 caractères.' });
        }

        // Le mdp doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
        if (!passwordRegex.test(password)) {
            return res.status(400).json({ success: false, message: 'Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.' });
        }

        // Sécurisation mot de passe
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        // Création du nouvel administrateur avec le mot de passe haché
        const newAdmin = new Admin({
            username,
            password: hashedPassword,
        });

        // Enregistrement de l'administrateur dans la base de données
        await newAdmin.save();

        res.status(201).json({ success: true, message: 'Administrateur enregistré avec succès.' });
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement de l\'administrateur :', error);
        res.status(500).json({ success: false, message: 'Erreur lors de l\'enregistrement de l\'administrateur.' });
    }
});

// Route pour la connexion de l'administrateur
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Recherche de l'administrateur dans la base de données
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({ success: false, message: 'Nom d\'utilisateur ou mot de passe incorrect.' });
    }

    // Vérification du mot de passe
    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Nom d\'utilisateur ou mot de passe incorrect.' });
    }

    // Génération d'un jeton JWT avec votre clé secrète
    const token = jwt.sign({ username: admin.username, role:'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error('Erreur lors de la connexion de l\'administrateur :', error);
    res.status(500).json({ success: false, message: 'Erreur lors de la connexion de l\'administrateur.' });
  }
});


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

// Route pour obtenir les données de profil de l'administrateur (accessible uniquement par l'admin)
router.get('/profile',  authenticateAdmin, async (req, res) => {
  try {
    // Vous pouvez renvoyer les données de profil de l'administrateur à partir de req.user ou les rechercher dans la base de données
    const adminProfileData = await Admin.find();
   
    res.json(adminProfileData);
  } catch (error) {
    console.error('Erreur lors de la récupération des données de profil de l\'administrateur :', error);
    res.status(500).json({ success: false, message: 'Erreur lors de la récupération des données de profil de l\'administrateur.' });
  }
});


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
