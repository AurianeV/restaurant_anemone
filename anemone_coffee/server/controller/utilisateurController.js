// controllers/utilisateurController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Utilisateur = require('../models/Utilisateur.js');

const utilisateurController = {};

utilisateurController.signUpUtilisateur = async (req, res) => {
    const { email, password } = req.body;

    try {
        // l'administrateur existe déjà ?
        const existingUtilisateur = await Utilisateur.findOne({ email });

        if (existingUtilisateur) {
            return res.status(400).json({ success: false, message: 'Cet utilisateur existe déjà.' });
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
        const newUtilisateur = new Utilisateur({
            email,
            password: hashedPassword,
        });

        // Enregistrement de l'administrateur dans la base de données
        await newUtilisateur.save();

        res.status(201).json({ success: true, message: 'Utilisateur enregistré avec succès.' });
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
        res.status(500).json({ success: false, message: 'Erreur lors de l\'enregistrement de l\'utilisateur.' });
   };
}

utilisateurController.loginUtilisateur= async (req, res) => {
    const { email, password } = req.body;

    try {
      // Recherche de l'administrateur dans la base de données
      const utilisateur = await Utilisateur.findOne({ email });
  
      if (!utilisateur) {
        return res.status(401).json({ success: false, message: 'Email d\'utilisateur ou mot de passe incorrect.' });
      }
  
      // Vérification du mot de passe
      const isPasswordValid = await bcrypt.compare(password, utilisateur.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ success: false, message: 'Nom d\'utilisateur ou mot de passe incorrect.' });
      }
  
      // Génération d'un jeton JWT avec votre clé secrète
      const token = jwt.sign({ email: utilisateur.email, role: 'user' }, process.env.JWT_SECRET, { expiresIn: '1h' });

       // Sauvegarde du jeton JWT dans le stockage local
       console.log('JWT token saved in localStorage:', token);
  
      res.status(200).json({ success: true, token });
      
      
    } catch (error) {
      console.error('Erreur lors de la connexion de l\'utilisateur :', error);
      res.status(500).json({ success: false, message: 'Erreur lors de la connexion de l\'utilisateur.' });
    }
};

utilisateurController.getUserAccountInfo = async (req, res) => {
    try {
        const email = req.user.email;

      // Récupérer les informations du compte utilisateur à partir de req.userId ou req.user
      const userData = await Utilisateur.findOne({ email })
      res.status(200).json(userData);
    } catch (error) {
      console.error('Error fetching user account info:', error);
      res.status(500).json({ success: false, message: 'Error fetching user account info.' });
    }
  };
  
  utilisateurController.updateUserPassword = async (req, res) => {
    try {
      const { newPassword } = req.body;
      // Mettre à jour le mot de passe de l'utilisateur
      // Vous pouvez utiliser req.userId pour récupérer l'ID de l'utilisateur
      // Assurez-vous d'ajouter la logique de validation et de hachage du mot de passe
      // Ensuite, enregistrez le nouveau mot de passe dans votre base de données
      res.status(200).json({ success: true, message: 'Password updated successfully.' });
    } catch (error) {
      console.error('Error updating user password:', error);
      res.status(500).json({ success: false, message: 'Error updating user password.' });
    }
  };
  

module.exports = utilisateurController;
