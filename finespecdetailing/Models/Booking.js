import mongoose from 'mongoose'
const {Schema} = require('mongoose');
const BookingSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  service: {
    type: String,
  },
  accepted: {
    type: Boolean,
  },
  year: {
    type: String,
  },
  make: {
    type: String,
  },
  model: {
    type: String,
  },
  type: { 
    type: String,
  },
  appointment: {
    type: Date
  },
  paid: {
    type: Boolean,
  },
  Account: {
    type: Schema.Types.ObjectId,
    ref: 'accounts'
  },
}, {timestamps: true})

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema)
