const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Booking = require('./Models/Booking'); 

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/table-booking');

// Create a booking
app.post('/api/bookings', async (req, res) => {
  try {
    const { name, contact, guests, date, time } = req.body;
    
    // Check for double bookings
    const existingBooking = await Booking.findOne({ date, time });
    if (existingBooking) {
      return res.status(400).json({ message: 'Time slot already booked' });
    }

    const booking = new Booking({ name, contact, guests, date, time });
    await booking.save();

   return res.status(201).json({ name, contact, guests, date, time,
    message:'Booking created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get bookings by date
app.get('/api/bookings', async (req, res) => {
  try {
    const { date } = req.query;
    const bookings = await Booking.find({ date });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete a booking
app.delete('/api/bookings', async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: 'Booking deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
