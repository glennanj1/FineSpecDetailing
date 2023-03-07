let nodemailer = require('nodemailer')

async function mail (email, body, subject, appointment) {
console.log('mailing');
const transporter = nodemailer.createTransport({
    host: process.env.host,
    port: 587,
    auth: {
    user: process.env.user, // generated ethereal user
    pass: process.env.pass, // generated ethereal password
    },
});
const mailData = {
    from: process.env.user,
    to: email,
    subject: subject,
    text: body,
    attachments: [
        {   // file on disk as an attachment
            filename: 'event',
            path: `/tmp/${appointment._id}.ics` // stream this file
        },
        {   // filename and content type is derived from path
            path: `/tmp/${appointment._id}.ics`
        },
    ],
}
await transporter.sendMail(mailData).catch(e => console.log(e));
console.log('success')
}
async function mailAdmin (body, subject, appointment) {
console.log('mailing');
const transporter = nodemailer.createTransport({
    host: process.env.host,
    port: 587,
    auth: {
    user: process.env.user, // generated ethereal user
    pass: process.env.pass, // generated ethereal password
    },
});
const mailData = {
    from: process.env.user,
    to: process.env.ADMIN_EMAIL,
    subject: subject,
    text: body,
    attachments: [
        {   // file on disk as an attachment
            filename: 'event',
            path: `/tmp/${appointment._id}.ics` // stream this file
        },
        {   // filename and content type is derived from path
            path: `/tmp/${appointment._id}.ics`
        },
    ],
}
await transporter.sendMail(mailData).catch(e => console.log(e));
console.log('success');
}

module.exports = {
    mail,
    mailAdmin
}