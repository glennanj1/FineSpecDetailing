import dbConnect from '../../../lib/db'
import Booking from '../../../Models/Booking.js'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const bookings = await Booking.find({}) 
        res.status(200).json({ success: true, data: bookings })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const booking = await Booking.create(
           req.body.booking
        ) 
        res.status(201).json({ success: true, data:  booking  })
      } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, error })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}