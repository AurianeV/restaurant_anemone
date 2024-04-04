// server/middleware/auth.js
require('dotenv').config();
const jwt = require('jsonwebtoken');

const authUserAdmin = (req, res, next) => {
    const token = req.header('x-auth-token');
    console.log('Token extrait de la requête:', token);

    if (!token) {
        return res.status(401).json({ success: false, message: 'Accès non autorisé. Veuillez vous connecter.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Decoded token:', decoded); // Log du payload décodé pour vérifier son contenu
        req.user = decoded;

        // Vérification du rôle de l'utilisateur et de l'administrateur
        if (decoded.role !== 'user' && decoded.role !== 'admin') {
            return res.status(403).json({ success: false, message: 'Accès non autorisé. Seuls les utilisateurs et les administrateurs sont autorisés.' });
        }

        next();
    } catch (error) {
        console.error('Erreur de vérification du jeton JWT :', error);
        return res.status(403).json({ success: false, message: 'Token JWT invalide.' });
    }
};

module.exports = { authUserAdmin };
