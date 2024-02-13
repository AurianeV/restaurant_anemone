//middleware/auth.js

const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateAdmin = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ success: false, message: 'Accès refusé. Token manquant.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded)

    if (decoded?.role !== 'admin') {
      return res.status(403).json({ success: false, message: "Vous n'avez pas les autorisations nécessaires." });
    }

    req.user = decoded;
    next();
  } catch (error) {
    console.error('Erreur lors de l\'authentification :', error);
    res.status(401).json({ success: false, message: 'Token invalide.' });
  }
};

module.exports = authenticateAdmin;
