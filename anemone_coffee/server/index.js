//server/index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json())
const authenticateAdmin = require('./middleware/auth.js');

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 10000 });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => console.log('Connecté à MongoDB'));

// Routes
const reservationsRouter = require('./routes/reservations.js');
app.use('/reservations', reservationsRouter);

const adminRouter = require('./routes/admin.js');
app.use('/admin', adminRouter);

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});