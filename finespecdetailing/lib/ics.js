const { writeFileSync } = require('fs')
const ics = require('ics')

async function makeEvent (appointment) {

        console.log(appointment.appointment);
        let date = new Date(appointment.appointment);
        let month = date.getMonth() + 1;
        console.log(date.getFullYear(), date.getMonth(), date.getDay(), date.getHours(), date.getMinutes())
        console.log(date.getHours());
        console.log('in ics')
        ics.createEvent({
            title: appointment.service,
            status: 'TENTATIVE',
            description: appointment.make + '' + appointment.model,
            busyStatus: 'TENTATIVE',
            start: [date.getFullYear(), month, date.getDate(), date.getHours(), date.getMinutes()],
            duration: { minutes: 120 }
        }, (error, value) => {
            if (error) {
                console.log('error' + error)
            }
            try {
                writeFileSync(`/tmp/${appointment._id}.ics`, value)
            } catch {
                console.log('error')
            }
        })
    }

module.exports = {
    makeEvent
}