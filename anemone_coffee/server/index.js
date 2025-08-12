//server/index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const notionRouter = require('./routes/notion.js');


const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json())
app.use('/notion', notionRouter);

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => console.log('Connecté à MongoDB'));

// Routes
const reservationsRouter = require('./routes/reservations.js');
app.use('/reservations', reservationsRouter);

const adminRouter = require('./routes/admin.js');
app.use('/admin', adminRouter);

const utilisateurRouter = require('./routes/utilisateur.js');
app.use('/utilisateur', utilisateurRouter);


app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});