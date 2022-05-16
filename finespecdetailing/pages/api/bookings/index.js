import dbConnect from '../../../lib/db'
import Booking from '../../../Models/Booking.js'
import { getSession } from "next-auth/react"

export default async function handler(req, res) {
  const { method } = req
  const session = await getSession({ req })
  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        if (session) {
          const bookings = await Booking.find({}) 
          res.status(200).json({ success: true, data: bookings })
        }
        else {
          res.send({
            error: "You must be sign in to view the protected content on this page.",
          })
        }
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        if (session) {
        const booking = await Booking.create(
           req.body.booking
        )
        res.status(201).json({ success: true, data:  booking  })
        } else {
          res.send({
            error: "You must be sign in to view the protected content on this page.",
          })
        }
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