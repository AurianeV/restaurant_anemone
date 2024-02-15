const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin.js');
const Reservation = require('../models/Reservation.js');
const transporter = require('../services/email.js');
const authenticateAdmin = require('../middleware/auth.js');

const adminController = {};

// enregistrement
adminController.registerAdmin = async (req, res) => {
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
   };
}

// connexion
adminController.loginAdmin = async (req, res) => {
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
    }};


// Récuperer les reservations
adminController.getAllReservations = async (req, res) => {
    try {
        const allReservations = await Reservation.find();
        res.json(allReservations);
      } catch (error) {
        console.error('Erreur lors de la récupération des réservations :', error);
        res.status(500).json({ success: false, message: 'Erreur lors de la récupération des réservations.' });
      }};

// Récuperer les infos admin
adminController.getAdminProfile = async (req, res) => {
    try {
    
        const adminProfileData = await Admin.find();
       
        res.json(adminProfileData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données de profil de l\'administrateur :', error);
        res.status(500).json({ success: false, message: 'Erreur lors de la récupération des données de profil de l\'administrateur.' });
      }};

// Modifier l'identifiant de l'admin
adminController.updateAdminProfile = async (req, res) => {
    try {
        const { username } = req.body;
        const adminId = await Admin.find(); 
        // Mettre à jour le nom d'utilisateur dans la base de données
        await Admin.findByIdAndUpdate(adminId, { username });
    
        res.json({ success: true, message: 'Nom d\'utilisateur mis à jour avec succès.' });
      } catch (error) {
        console.error('Erreur lors de la mise à jour du nom d\'utilisateur de l\'administrateur :', error);
        res.status(500).json({ success: false, message: 'Erreur lors de la mise à jour du nom d\'utilisateur de l\'administrateur.' });
      }};

adminController.updateAdminPassword = async (req, res) => {
    // Code pour mettre à jour le mot de passe de l'administrateur
};

adminController.acceptReservation = async (req, res) => {
    // Code pour accepter une réservation
};

adminController.rejectReservation = async (req, res) => {
    // Code pour refuser une réservation
};

module.exports = adminController;
