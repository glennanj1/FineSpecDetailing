import mongoose from 'mongoose'

const BookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this pet.'],
  },
  email: {
    type: String,
    required: [true, "Please provide the pet owner's name"],
  },
  phone: {
    type: String,
    required: [true, 'Please specify the species of your pet.'],
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
  car: {
    type: Array,
  },
  appointment: {
    type: Date
  },
  paid: {
    type: Boolean,
  }
})

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema)
