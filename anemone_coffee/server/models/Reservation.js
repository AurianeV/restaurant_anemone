//models/Reservation.js

const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  name: String,
  date: Date,
  tableNumber: Number,
  reservationTime: String,
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
