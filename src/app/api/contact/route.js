import { NextResponse } from 'next/server'
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.CONTACT_EMAIL,
    pass: process.env.CONTACT_PASSWORD,
  },
  secure: true,
})

export async function POST(request) {
  const formData = await request.json()
  const mailData = {
    from: process.env.CONTACT_EMAIL,
    to: 'maxlerasle@gmail.com',
    subject: `Maxent Consulting Contact from <${formData.email}>`,
    text: `
      Service: ${formData.service}
      Technologies: ${formData.mainTechnologies} ${formData.additionalTechnologies}
      Company: ${formData.company}
      Employees: ${formData.employees}
      Contact: ${formData.name} <${formData.email}>
    `,
    html: `
      <p><b>Service:</b> ${formData.service}</p>
      <p><b>Technologies:</b> ${formData.mainTechnologies} ${formData.additionalTechnologies}</p>
      <p><b>Company:</b> ${formData.company}</p>
      <p><b>Employees:</b> ${formData.employees}</p>
      <p><b>Contact:</b> ${formData.name} <${formData.email}></p>
    `,
  }

  try {
    await transporter.sendMail(mailData)
    return NextResponse.json({
      message: 'Succesfully sent email!',
      status: 200,
    })
  } catch (err) {
    return NextResponse.json({ message: err, status: 500 })
  }
}
