//models/Reservation.js

const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  date: Date,
  number: Number,
  reservationTime: String,
  placesDisponibles: Number
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
