import mongoose from 'mongoose'

const BookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  email: {
    type: String,
    required: [true, "Please provide the pet owner's name"],
    maxlength: [60, "Owner's Name cannot be more than 60 characters"],
  },
  phone: {
    type: String,
    required: [true, 'Please specify the species of your pet.'],
    maxlength: [40, 'Species specified cannot be more than 40 characters'],
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
    required: [true, 'Please provide an image url for this pet.'],
    type: String,
  },
  model: {
    type: String,
  },
  car: {
    type: Array,
  },
})

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema)
