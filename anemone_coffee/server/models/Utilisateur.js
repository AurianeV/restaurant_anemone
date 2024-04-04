// models/utilisateur.js

const mongoose = require('mongoose');

// Définition du schéma de l'utilisateur
const utilisateurSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true 
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user' // Définir le rôle par défaut à 'user'
  }
});

const Utilisateur = mongoose.model('Utilisateur', utilisateurSchema);

module.exports = Utilisateur;
