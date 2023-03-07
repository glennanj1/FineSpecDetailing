
import mongoose from 'mongoose'

const MakeSchema = new mongoose.Schema({
  Make_ID: {
    type: Number,
  },
  Make_Name: {
    type: String,
  }
})

export default mongoose.models.Make || mongoose.model('Make', MakeSchema)