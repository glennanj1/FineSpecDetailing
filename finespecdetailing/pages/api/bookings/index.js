import dbConnect from '../../../lib/db'
import Booking from '../../../Models/Booking.js'
import { getSession } from "next-auth/react"
import Car from '../../../Models/Car.js'
import { mail, mailAdmin } from '../../../lib/mail.js'
import { makeEvent } from '../../../lib/ics.js'

export default async function handler(req, res) {
  const { method } = req
  const session = await getSession({ req })
  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        if (session && session.status === 'admin') {
          const bookings = await Booking.find({});
          res.status(200).json({ success: true, data: bookings })
        }
        if (session) {
          const bookings = await Booking.find({email: session.user.email}) 
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
      if (session) {
        try {
          // req.body.car.map((c) => {
          //   //Model.findByIdAndUpdate(id, { $set: { name: 'SOME_VALUE' }}, { upsert: true  }, callback)
           
          //   Car.findOne({id: c.id}, (err, car) => { 
          //     if (err) {
          //       console.log(err);
          //     }
          //     else {
          //       console.log(car);
          //       car === null || car === undefined ? Car.create(c) : console.log('car found');
          //     }
          //   })
          // })
          const booking = await Booking.create(
            req.body.booking
          )  

          let date = new Date(booking.appointment);

          const time = date.toLocaleString('en-US', 'HH:MM', { hour12: true })


          let subject = 'New Appointment Booked'
          let body = `Thank you ${booking.name} for booking with Finespec Detaling at ${time}. We look forward to servicing your ${booking.make} ${booking.model} ${booking.year} for a ${booking.service}.`

          let adminBody = `${booking.name} has booked a ${booking.service} at ${time}. The car is a ${booking.make} ${booking.model} ${booking.year}. Please login to your account and accept or change this appointment. Thanks - John`
          let adminSubject = 'New Appointment Booked'
          let test = await makeEvent(booking);
          console.log(test);
          await mail(session.user.email, body, subject, booking);
          await mailAdmin(adminBody, adminSubject, booking);
          
          res.status(201).json({ success: true, data:  booking  })
          } catch (error) {
            res.status(400).json({ success: false, error })
          } 
      } else {
          res.send({
          error: "You must be sign in to view the protected content on this page.",
      })
    }

      break
    default:
      res.status(400).json({ success: false })
      break
  }
}

