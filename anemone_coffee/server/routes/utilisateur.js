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

module.exports = router;
