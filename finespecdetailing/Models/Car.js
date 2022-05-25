import mongoose from 'mongoose'

const CarSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  year: {
    type: Number,
  },
  make: {
    type: String,
  },
  model: {
    type: String,
  },
  type: {
    type: String,
  }
})

export default mongoose.models.Car || mongoose.model('Car', CarSchema)


