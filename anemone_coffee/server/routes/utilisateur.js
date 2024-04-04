// routes/utilisateur.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Utilisateur = require('../models/Utilisateur.js');
const authenticateUser = require('../middleware/authUtilisateur.js');
const router = express.Router();
const utilisateurController = require('../controller/utilisateurController.js')

router.post('/register', utilisateurController.signUpUtilisateur);
router.post('/login', utilisateurController.loginUtilisateur);
// Route pour récupérer les informations du compte utilisateur
router.get('/account',  authenticateUser, utilisateurController.getUserAccountInfo);

// Route pour modifier le mot de passe de l'utilisateur
router.put('/account', utilisateurController.updateUserPassword);

module.exports = router;
