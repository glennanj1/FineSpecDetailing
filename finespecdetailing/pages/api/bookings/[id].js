import dbConnect from '../../../lib/db'
import Booking from '../../../Models/Booking.js'
import { getSession } from "next-auth/react"

export default async function handler(req, res) {
  const { method } = req
  const session = await getSession({ req })
  await dbConnect()
      try {
        if (session) {
          const booking = await Booking.findById(req.query.id)
          res.status(200).json({ success: true, data: booking })
        }
        else {
          res.send({
            error: "You must be sign in to view the protected content on this page.",
          })
        }
      } catch (error) {
        res.status(400).json({ success: false })
      }
}